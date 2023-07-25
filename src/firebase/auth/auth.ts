import { getAuth } from "firebase/auth";
import app from "@/firebase/app.ts";
const auth = getAuth(app);

export default auth;
