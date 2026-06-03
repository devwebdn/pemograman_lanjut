import express from "express";
import multer from "multer";
import {
  getAllProducts,
  tambahdatabaru,
  cariprodibykode,
  updateprodi,
  deleteprodi,
} from "../controllers/prodi.controller.js";

import {
  authenticateToken,
} from "../middleware/VerifyTokens.js";

const router = express.Router();
const upload = multer();

router.get("/", getAllProducts);
router.post("/", upload.none(), tambahdatabaru);
router.get("/:id", cariprodibykode);
router.patch("/:kode_prodi", updateprodi);
router.delete("/:id", deleteprodi);

export default router;