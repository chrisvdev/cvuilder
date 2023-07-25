import getUserData from "@/firebase/firestore/get_user_data";
import setUserData from "@/firebase/firestore/set_user_data";
import { GlobalData } from "@/store/cv.types";
import useCVData, { getGlobalData, getGlobalMethods } from "@/store/useCVData";
import { useEffect, useState } from "react";

export default function SyncWithDB() {
  const globalData = useCVData(getGlobalData);
  const { setGlobalData } = useCVData(getGlobalMethods);
  const [loadedFromDB, setLoadedFromDB] = useState(false);

  // este se ejecuta cuando recién se loguea
  useEffect(() => {
    /* Se trae de la DB los datos del usuario,
        si no existen tiene que grabar el 1er registro
        del usuario en la DB con el estado inicial del
        estado global */
    const startSync = async () => {
      try {
        const response = await getUserData();
        response && setGlobalData(response.data() as GlobalData);
        setLoadedFromDB(true);
      } catch (error) {
        setUserData(globalData)?.then(() => {
          setLoadedFromDB(true);
        });
      }
    };
    startSync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // este se ejecuta en cada cambio
  useEffect(() => {
    /* actualizar el documento del usuario con los datos
        en el estado global cada vez que cambie */
    loadedFromDB && setUserData(globalData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalData]);

  useEffect(() => {
    console.log(globalData);
  }, [globalData]);

  return (
    <div style={{ display: "none" }}>Active Sync whit DB -No rendered- </div>
  );
}
