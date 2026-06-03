import express from "express";
import multer from "multer";
import {
  getAllProducts,
  tambahdatabaru,
  carimahasiswaBynim,
  updatemahasiswa,
  deletemahasiswa,
} from "../controllers/mahasiswa.controller.js";

import {
  authenticateToken,
} from "../middleware/VerifyTokens.js";

const router = express.Router();
const upload = multer();

router.get("/", getAllProducts);
router.post("/", upload.none(), tambahdatabaru);
router.get("/:id", carimahasiswaBynim);
router.patch("/:id", updatemahasiswa);
router.delete("/:id", deletemahasiswa);

export default router;