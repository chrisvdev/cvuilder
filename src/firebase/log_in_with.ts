import { signInWithPopup } from "firebase/auth";
import { AuthProvider } from "firebase/auth";
import { User } from "firebase/auth";
import auth from "./auth.ts";

export default function logInWith(provider: AuthProvider) {
  signInWithPopup(auth, provider);
  //.then((userCredentials: User) => console.log(userCredentials))
  //.catch((error) => console.error(error));
}
