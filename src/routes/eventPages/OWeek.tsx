import React, { useState } from "react";
import { Button, TextField, FormControl, Checkbox, FormControlLabel, Alert } from "@mui/material";
import TitleHero from "../../features/TitleHero/TitleHero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { RiserUserInput } from "./RiserGame.model";
import Filter from "bad-words";

import RiserLeaderboard from "../../features/Leaderboard/RiserLeaderboard";
import { Info, Leaderboard, MoreHoriz, Refresh, SportsScore } from "@mui/icons-material";
import { isUniqueStudentID } from "../../services/firestoreServices";
import { FaTrophy } from "react-icons/fa";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3B52A",
    },
    secondary: {
      main: "#5899F5",
    },
  },
});

// I dont think this is optimal but we are in a slight rush
const SubmitButton = styled(Button)({
  boxShadow: "none",
  color: "white",
  fontWeight: "bold",
  textTransform: "none",
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  borderColor: "#5899F5",
  backgroundColor: "rgba(9,  31,  62,  0.5)",
  "&:hover": {
    padding: "6px 12px",
    border: "2px solid",
    lineHeight: 1.5,
    borderColor: "#5899F5",
    backgroundColor: "rgba(9,  31,  62,  0.5)",
  },
  "&:active": {
    padding: "6px 12px",
    border: "2px solid",
    lineHeight: 1.5,
    borderColor: "#5899F5",
    backgroundColor: "rgba(9,  31,  62,  0.5)",
  },
  "&:focus": {
    padding: "6px 12px",
    border: "2px solid",
    lineHeight: 1.5,
    borderColor: "#5899F5",
    backgroundColor: "rgba(9,  31,  62,  0.5)",
  },
});

export default function RiserGame() {
  const navigate = useNavigate();

  const pageInfo = {
    title: "O-Week Riser",
    description: `Test your skill and luck at our riser game where you just need to hit the button at the right time.`,
  };

  const leaderboard = [
    {
      rank: 1,
      name: "First Last",
      score: 7999,
    },
    {
      rank: 2,
      name: "First Last",
      score: 7999,
    },
  ];

  // Animations
  const scrollRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  let opacityValue = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);
  let scaleValue = useTransform(scrollYProgress, [0, 0.9], ["1", "0.9"]);

  // Form Field Values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isMember, setIsMember] = useState(false);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputs = {
      firstName,
      lastName,
      email,
    };
    const fullName = firstName + " " + lastName;
    const filter = new Filter();
    // Inputs length check
    if (Object.values(inputs).filter((input) => input.length > 0).length < 3) {
      alert("Please fill in all required details");
    }
    // Profanity check
    else if (filter.isProfane(fullName) || filter.isProfane(email)) {
      alert("Profanity detected, please delete any inappropriate text.");
    }
    // Email Check
    else if (!email.match(/\S+@\S+\.\S+/)) {
      alert("Invalid email, please enter a valid email.");
    }
    // Student ID Check
    else if (!studentId.match(/^\d{7}$/) && studentId.length > 0) {
      alert(
        "Invalid student ID, please recheck you have entered it correctly. If you don't have a studentID leave it blank",
      );
    } else {
      // Pass
      const validInput: RiserUserInput = {
        name: fullName,
        email: email,
        studentID: studentId === "" ? "0000000" : studentId,
        HMMember: isMember,
      };

      if (studentId != "0000000") {
        isUniqueStudentID(validInput.studentID)
          .then(() => {
            navigate("/O-Week/playGame", { state: { ...validInput } });
          })
          .catch((e) => {
            console.log(e);
            navigate("/O-Week");
            alert("Error: Student ID is already been used. If this is a mistake please contact our staff");
          });
      } else {
        navigate("/O-Week/playGame", { state: { ...validInput } });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 w-screen max-w-full">
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }} className="">
        <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      </motion.section>

      <section className="flex flex-col items-center px-16 gap-6">
        <h2 className="font-bold text-2xl text-yellow-500">How to play</h2>
        <SportsScore fontSize="large" />
        <p>The goal of the game is to get as close to 2024 without going over</p>
        <MoreHoriz fontSize="large" />
        <p>You will get 3 tries and your best score out of those three is submitted</p>
        <Refresh fontSize="large" />
        <p>Press the button to start and press it again to stop</p>
        <Info fontSize="large" />
        <p>
          Note: anyone can play but only UniMelb students can win prizes. To be eligible for a prize you must enter your
          own studentID. We will then email you the prize if you win
        </p>
      </section>

      <section className="flex flex-col items-center px-16 gap-6">
        <FaTrophy size="3em" />
        <h2 className="font-bold text-2xl text-yellow-500">Prizes</h2>

        <p>First Place : $40</p>
        <p>Second Place : $20</p>
        <p>Third Place : $10</p>
        <p>Additional Prizes : Mystery Merch</p>
      </section>

      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl flex justify-center mb-8">Enter your details</h1>
        <FormControl>
          <div className="border border-[#5899F5] bg-[#5899F5] bg-opacity-5 p-12 flex flex-col justify-center gap-10 rounded-md">
            <ThemeProvider theme={theme}>
              <TextField
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="standard"
                color="primary"
                label="First Name*"
                InputLabelProps={{
                  sx: { color: "white", "&.Mui-focused": { color: "white" } },
                }}
                sx={{ input: { color: "white" } }}
                focused
              />
              <TextField
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="standard"
                color="primary"
                label="Last Name*"
                InputLabelProps={{
                  sx: { color: "white", "&.Mui-focused": { color: "white" } },
                }}
                sx={{ input: { color: "white" } }}
                focused
              />
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                color="primary"
                label="Email*"
                InputLabelProps={{
                  sx: { color: "white", "&.Mui-focused": { color: "white" } },
                }}
                sx={{ input: { color: "white" } }}
                focused
              />
              <TextField
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                variant="standard"
                color="primary"
                label="Student ID"
                InputLabelProps={{
                  sx: { color: "white", "&.Mui-focused": { color: "white" } },
                }}
                sx={{ input: { color: "white" } }}
                focused
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isMember}
                    onChange={(e) => setIsMember(e.target.checked)}
                    sx={{ color: "white" }}
                  />
                }
                label="HackMelbourne Member"
              />
              <SubmitButton type="submit" variant="outlined" color="secondary" sx={{ marginTop: "2em" }}>
                Submit
              </SubmitButton>
            </ThemeProvider>
          </div>
        </FormControl>
      </form>

      <RiserLeaderboard></RiserLeaderboard>
    </div>
  );
}
