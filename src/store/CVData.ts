import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GlobalMethods, GlobalState, PersonalData } from "@/store/cv.types";

const useCVData = create(
  persist<GlobalState>(
    (set) => ({
      aboutMe: "About me...",
      languages: ["english"],
      personalData: {
        firstName: "name",
        email: "example@mail.dev",
        lastName: "last name",
        residency: "Some city",
      },
      studies: [
        {
          begin: new Date(),
          end: new Date(),
          degree: "Degree",
          description: "Description",
          title: "title",
        },
      ],
      setPersonalData: (personalData: PersonalData) => {
        set({ personalData });
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCVData;

export const getAboutMe = (state) => state.aboutMe;
