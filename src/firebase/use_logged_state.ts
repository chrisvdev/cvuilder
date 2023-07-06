import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import auth from "./auth";
import { useState, useEffect } from "react";

export default function useLoggedState() {
  const [logged, setLogged] = useState<null | User>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogged(user);
    });
  }, []);
  useEffect(() => console.log(logged), [logged]);
  return logged;
}
