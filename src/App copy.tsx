import { useState, useEffect, useCallback } from "react";
import useCVData, { getGlobalData } from "@/store/CVData";
import { getPersonalData, getGlobalMethods } from "@/store/CVData";
import { PersonalData } from "./store/cv.types";
import logInWith from "./firebase/auth/log_in_with";
import githubProvider from "./firebase/auth/github_provider";
import googleProvider from "./firebase/auth/google_provider";
import signOut from "./firebase/auth/sign_out";
import useLoggedState from "./firebase/auth/use_logged_state";
import setUserData from "./firebase/firestore/set_user_data";
import getUserData from "./firebase/firestore/get_user_data";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  residency: string;
}

export default function App() {
  const logged = useLoggedState();
  const personalData = useCVData(getPersonalData);

  const globalData = useCVData(getGlobalData);

  useEffect(() => {
    setUserData(globalData);
  }, [globalData]);

  const [editableData, setEditableData] = useState<PersonalData>(personalData);
  const [fields, setFields] = useState<Fields>({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    residency: "Residency",
    nationality: "Nationality",
    phone: "",
  });
  const { setPersonalData } = useCVData(getGlobalMethods);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableData((lastState) => ({
      ...lastState,
      [e.target.name]: e.target.value,
    }));
  }, []);
  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPersonalData(editableData);
    },
    [editableData, setPersonalData]
  );

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <nav className="fixed top-0 left-0 w-full h-[5rem] flex items-center justify-between px-5">
        {logged ? (
          <>
            <button
              onClick={() => {
                getUserData();
              }}
            >
              Get Data
            </button>
            <button
              onClick={() => {
                setUserData(globalData);
              }}
            >
              Set Data
            </button>
            <button onClick={() => signOut()}>LogOut</button>
          </>
        ) : (
          <>
            <button onClick={() => logInWith(googleProvider)}>
              Login with Google
            </button>
            <button onClick={() => logInWith(githubProvider)}>
              Login with GitHub
            </button>
          </>
        )}
      </nav>
      <form
        className="flex w-[80%] flex-col items-end gap-5"
        onSubmit={submitHandler}
      >
        {Object.keys(fields)
          .filter((key: string) => Boolean(fields[key as keyof Fields]))
          .map((key, i) => (
            <label
              key={`form_item-${i}`}
              className="flex grow flex-col rounded-md bg-[#FFFFFF11] px-5 py-3 text-lg font-medium capitalize text-gray-400"
            >
              {fields[key as keyof Fields]}
              <input
                className="h-full w-full bg-transparent text-[#E3E6E8] focus:outline-none text-right"
                onChange={inputHandler}
                name={key}
                value={editableData[key as keyof Fields]}
              />
            </label>
          ))}
        <button
          type="submit"
          className="w-fit rounded-md bg-lime-400 px-[6.3rem] py-5 text-xl font-medium"
        >
          Save
        </button>
      </form>
    </main>
  );
}
