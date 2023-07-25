import db, { USERS_DATA_COLLECTION } from "@/firebase/firestore/db";
import { getDoc, doc } from "firebase/firestore";
import auth from "@/firebase/auth/auth.ts";

export default function getUserData() {
  return auth.currentUser
    ? getDoc(doc(db, USERS_DATA_COLLECTION, auth.currentUser.uid))
    : null;
}
