import express from "express";
import { getPlcData } from "../Controllers/plcController.js";

const router = express.Router();

router.get("/", getPlcData);

export default router;