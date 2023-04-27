import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Session {
  session: object;
  setSession: (session: object) => void;
  logOff: () => void;
}

const useSession = create(
  persist<Session>(
    (set) => ({
      session: {},
      setSession: (session) => {
        set({ session });
      },
      logOff: () => {
        set({ session: {} });
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSession;
