import { signOut as firebaseSignOut } from "firebase/auth";
import auth from "@/firebase/auth/auth.ts";

export default function signOut() {
  firebaseSignOut(auth);
}
