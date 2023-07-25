import Section from "./components/ui/Section";
import Button from "./components/ui/Button";
import signOut from "./firebase/auth/sign_out";
import useCVData, { getGlobalMethods } from "./store/useCVData";
import useSyncWithDB from "./components/libs/useSyncWithDB";
import { useState } from "react";

export default function App() {
  //useSyncWithDB();
  const resetGlobalData = useCVData((e) => e.resetGlobalData);
  const addSoftSkill = useCVData((e) => e.addSoftSkill);

  return (
    <Section>
      <Button
        onClick={() => {
          signOut();
          resetGlobalData();
        }}
      >
        Log Out
      </Button>
      <Button
        onClick={() => {
          addSoftSkill("ser bueno");
        }}
      >
        agregar algo
      </Button>
    </Section>
  );
}
