import { db } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

// Model imports
import { RiserGameModel } from "../features/RiserGame/RiserGame.model";

export async function setRiserGameData(data: RiserGameModel) {
    try {
        await addDoc(collection(db, "RiserGame"), data)
        console.log("sent")
        return (true);
    } catch (e) {
        console.log(e)
        return (false)
    }
}