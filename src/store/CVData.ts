import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Social {
  url: string;
  title: string;
  description?: string;
}

export interface Licenses {
  type: string;
  level?: string;
  description?: string;
}
export interface PersonalData {
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  social?: Social[];
  licenses?: Licenses[];
  workAvailability?: "immediately" | "toNegotiate" | "partTime" | "temporary";
  presentiality?: "remote" | "onSite" | "hybrid";
  travelAvailability?: true;
  maritalStatus?: "single" | "married" | "divorced" | "widower";
  birthday?: Date;
  nationality?: string;
  residency: string;
}

export interface Experiences {
  begin: Date;
  end: Date | "CurrentlyWorkingHere";
  title: string;
  rol?: string;
  description: string;
}
export interface Studies {
  begin: Date;
  end: Date | "CurrentlyStudyingHere";
  title: string;
  degree: string;
  description: string;
}

export interface CVData {
  data: object;
  setData: (session: object) => void;
}

const useCVData = create(
  persist<CVData>(
    (set) => ({
      data: {},
      setData: (data) => {
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

/*
datos (los justos)
about_me
conocimientos
skills(habilidades) -> Blandas y Duras 
Conocimientos futuros
aspiraciones laborales
idiomas
Experiencia laboral
proyectos
*/
