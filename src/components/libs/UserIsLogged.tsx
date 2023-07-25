import useLoggedState from "@/firebase/auth/use_logged_state";
import { useEffect, type ReactNode } from "react";

type LoggedUserProps = {
  loginMethod: ReactNode;
  children: ReactNode;
};

export default function UserIsLogged({
  loginMethod,
  children,
}: LoggedUserProps) {
  const logged = useLoggedState();
  return <>{logged ? children : loginMethod}</>;
}
