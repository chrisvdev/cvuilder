import { useState, useEffect, useCallback } from "react";
import useCVData from "@/store/CVData";
import { getPersonalData, getGlobalMethods } from "@/store/CVData";
import { PersonalData } from "./store/cv.types";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  residency: string;
}

export default function App() {
  const personalData = useCVData(getPersonalData);
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

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <form
        className="flex w-[80%] flex-col items-end gap-5"
        onSubmit={submitHandler}
      >
        {Object.keys(fields)
          .filter((key: string) => Boolean(fields[key as keyof Fields]))
          .map((key) => (
            <>
              <label className="flex grow flex-col rounded-md bg-[#FFFFFF11] px-5 py-3 text-lg font-medium capitalize text-gray-400">
                {fields[key as keyof Fields]}
                <input
                  className="h-full w-full bg-transparent text-[#E3E6E8] focus:outline-none text-right"
                  onChange={inputHandler}
                  name={key}
                  value={editableData[key as keyof Fields]}
                />
              </label>
            </>
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
