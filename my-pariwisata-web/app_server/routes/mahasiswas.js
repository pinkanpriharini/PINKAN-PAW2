const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");
//fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongoDB

router.get("/mahasiswa",mahasiswaControllers.index);
module.exports = router