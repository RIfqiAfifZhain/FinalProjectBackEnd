const express = require('express');
const router = express.Router();
const tugasController = require('../controller/tugasController');

router.post('/tugas', tugasController.createTugas);
router.get('/tugas', tugasController.getAllTugas);
router.get('/tugas/:id', tugasController.getTugasById);
router.put('/tugas/:id', tugasController.updateTugas);
router.delete('/tugas/:id', tugasController.deleteTugas);

module.exports = router;