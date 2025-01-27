import { Router } from "express";
import * as CR from "./user.requesthandler.js"

const router = Router();

router.route("/add").post(CR.addUser);
router.route("/get").get(CR.getUser);
router.route("/delete/:id").delete(CR.deleteUser);
router.route("/update/:id").put(CR.updateUser);

export default router;