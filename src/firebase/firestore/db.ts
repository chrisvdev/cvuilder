import { getFirestore } from "firebase/firestore";
import app from "@/firebase/app";

const db = getFirestore(app);

export const USERS_DATA_COLLECTION = "UsersData";

export default db;
