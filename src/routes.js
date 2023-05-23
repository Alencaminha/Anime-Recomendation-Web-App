import { Router } from "express";
import * as database from "./database/user.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api funcionando!"
    });
});

router.post("/createuser", database.createUser);
router.get("/readuser", database.readUser);
router.put("/updateuser", database.updateUser);
router.delete("/deleteuser", database.deleteUser);

export default router;
