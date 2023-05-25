import { Router } from "express";
import * as database from "./database/database.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/createuser", database.createUser);
router.get("/readuser", database.readUser);
router.put("/updateuser", database.updateUser);
router.delete("/deleteuser", database.deleteUser);

export default router;
