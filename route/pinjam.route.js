import express from "express";
import multer from "multer";

import {
  getAllPinjam,
  getDetailPinjam,
  insertPinjam,
  updatePinjam,
  deletePinjam,
  getBukuDipinjamByNim,
  kembalikanBuku,
  getLaporanPengembalian
} from "../controllers/pinjam.controllers.js";

import {
  authenticateToken,
} from "../middleware/VerifyTokens.js";

const router = express.Router();
const upload = multer();
router.get("/",  getAllPinjam);

router.get("/dipinjam/:nim", getBukuDipinjamByNim);

router.get("/detail/:id",  getDetailPinjam);

// Route untuk laporan pengembalian buku (semua / by NIM)
router.get("/laporan-pengembalian",  getLaporanPengembalian);
router.get("/laporan-pengembalian/:nim", getLaporanPengembalian);

router.post("/", upload.none(), insertPinjam);

router.patch("/:id", upload.none(),  updatePinjam);

router.delete("/:id", deletePinjam);

// Route untuk pengembalian buku (Gabungan array dan kembalikan semua)
router.post("/kembali", upload.none(), kembalikanBuku);

export default router;