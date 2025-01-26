import { Router } from "express";
import * as E from "./RequestHandler/user.requesthandler.js"

const router = Router();

router.route("/addemployee").post(E.addEmployee);
router.route("/getemployee").get(E.Home);
router.route("/oneemployee/:_id").get(E.oneEmployee)
router.route("/deleteemployee/:_id").delete(E.deleteEmployee)
router.route("/updateemployee/:_id").put(E.updateEmployee)

export default router;