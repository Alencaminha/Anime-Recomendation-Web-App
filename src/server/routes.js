import { Router } from "express";
import * as database from "./database/database.js";
import cors from "cors";

const router = Router();
router.use(cors());

router.post("/createuser", database.createUser);
router.post("/readuser", database.readUser);
router.post("/validatelogin", database.validateLogin);
router.put("/updateusername", database.updateUsername);
router.put("/updatepassword", database.updatePassword);
router.put("/updateemail", database.updateEmail);
router.delete("/deleteuser", database.deleteUser);

export default router;
