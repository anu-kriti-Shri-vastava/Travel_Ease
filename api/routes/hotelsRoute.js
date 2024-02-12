import express from "express";
const router = express.Router();
import { getHotel, createHotel, getAllHotel, updateHotel, deleteHotel, countByCity, countByType} from '../controllers/hotelController.js';
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/",verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotel);

router.get("/countByCity",countByCity);
router.get("/countByType",countByType);

export default router;