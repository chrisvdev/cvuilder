import db, { USERS_DATA_COLLECTION } from "@/firebase/firestore/db";
import { setDoc, doc } from "firebase/firestore";
import { GlobalData } from "@/store/cv.types";
import auth from "@/firebase/auth/auth.ts";

export default function setUserData(userData: GlobalData) {
  return auth.currentUser
    ? setDoc(doc(db, USERS_DATA_COLLECTION, auth.currentUser.uid), userData)
    : null;
}
