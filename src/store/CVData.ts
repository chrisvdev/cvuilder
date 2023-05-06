import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CVData, GlobalState } from "@/store/cv.types";

const useCVData = create(
  persist<GlobalState>(
    (set) => ({
      data: {
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
      },
      setData: (data: CVData) => {
        set({ data });
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCVData;
