import { signOut as firebaseSignOut } from "firebase/auth";
import auth from "./auth.ts";

export default function signOut() {
  firebaseSignOut(auth);
}
