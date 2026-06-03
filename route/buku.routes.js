import express from "express";
import multer from "multer";
import {
  getAllProducts,
  tambahbukubaru,
  cariBukuByID,
  updateBuku,
  deleteBuku,
} from "../controllers/buku.controllers.js";
import {
  authenticateToken,
} from "../middleware/VerifyTokens.js";

const router = express.Router();
const upload = multer();


router.get("/",getAllProducts);
router.post("/", upload.none(), tambahbukubaru);
router.get("/:id",  cariBukuByID);

router.patch("/:id", updateBuku);
router.delete("/:id", deleteBuku);

export default router;
