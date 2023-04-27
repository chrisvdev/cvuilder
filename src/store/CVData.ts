import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Session {
  data: object;
  setSession: (session: object) => void;
  logOff: () => void;
}

const useCVData = create(
  persist<Session>(
    (set) => ({
      data: {},
      setData: (data) => {
        set({ data });
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
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
