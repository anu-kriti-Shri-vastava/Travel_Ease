import express from "express";
const router = express.Router();
import { getHotel, createHotel, getAllHotel, updateHotel, deleteHotel} from '../controllers/hotelController.js';
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/",verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel);

router.get("/:id", getHotel);

router.get("/", getAllHotel);

export default router;