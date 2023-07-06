import { getAuth } from "firebase/auth";
import app from "./app.ts";

const auth = getAuth(app);

export default auth;
