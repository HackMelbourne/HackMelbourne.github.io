// Firebase imports
import { db, auth } from "../firebase";
import { getAuth, signInAnonymously } from "firebase/auth";
import { collection, addDoc, getDocs, limit, orderBy, query } from "firebase/firestore";

import { useState, useEffect } from "react";

// Model imports
import { RiserGameModel, RiserOutputData, RankEntry } from "../routes/eventPages/RiserGame.model";
import { Leaderboard } from "@mui/icons-material";

async function calculateRanking(newScore: Number) {
  const scoresRef = collection(db, "riserData");
  const snapshot = await getDocs(scoresRef);
  const scores = snapshot.docs.map((doc) => doc.data().highestScore);

  // Include the new score in the calculation
  scores.push(newScore);
  scores.sort((a, b) => b - a); // Sort scores in descending order

  // Find the ranking of the new score
  const ranking = scores.indexOf(newScore) + 1; // Convert index to ranking
  return ranking;
}

export async function setRiserGameData(data: RiserGameModel): Promise<RiserOutputData> {
  try {
    const highestScore = Math.max(...data.gameData);
    const validHighestScore = highestScore <= 2024 ? highestScore : 0;

    const preparedData = { ...data, highestScore: validHighestScore, submissionTime: new Date() };

    const docRef = await addDoc(collection(db, "riserData"), preparedData);
    console.log("Document added with ID:", docRef.id);

    // Calculate and return the ranking
    const ranking = await calculateRanking(validHighestScore);
    return { score: validHighestScore, ranking: ranking };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to set Riser game data");
  }
}

export async function getRiserLeaderboard(): Promise<RankEntry[]> {
  const leaderboardRef = collection(db, "testRiserData");

  let leaderboardData: RankEntry[] = [];

  try {
    // Add orderby time when firebase functions implements feature
    const q = query(leaderboardRef, orderBy("score", "desc"), limit(20));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty != true) {
      console.log(querySnapshot);

      querySnapshot.forEach((doc) => {
        leaderboardData.push({
          name: doc.data().name,
          score: doc.data().score,
          id: doc.id,
        });
      });
    }

    console.log(leaderboardData!);

    return leaderboardData!;
  } catch (e) {
    console.log(e);
    return [];
  }
}
