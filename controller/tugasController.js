const tugasData = require('../data/tugas');

module.exports = {
    getAllTugas: (req, res) => {
        try {
            const deadline = req.query.deadline;
            
            let hasil = tugasData;

            if (deadline) {
                hasil = tugasData.filter(t => t.deadline === deadline);
            }

            res.status(200).json({
                message: "Data berhasil diambil",
                data: hasil
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    },

    getTugasById: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const tugas = tugasData.find(t => t.id === id);

            if (!tugas) {
                return res.status(404).json({ message: "Tugas tidak ditemukan" });
            }

            res.status(200).json({
                message: "Detail tugas ditemukan",
                data: tugas
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    },

    createTugas: (req, res) => {
        try {
            const newTugas = {
                id: tugasData.length + 1,
                mataKuliah: req.body.mataKuliah,
                deskripsi: req.body.deskripsi,
                deadline: req.body.deadline
            };

            tugasData.push(newTugas);

            res.status(201).json({
                message: "Tugas berhasil ditambahkan",
                data: newTugas
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    },

    updateTugas: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const index = tugasData.findIndex(t => t.id === id);

            if (index === -1) {
                return res.status(404).json({ message: "Tugas tidak ditemukan" });
            }

            tugasData[index] = {
                id: id,
                mataKuliah: req.body.mataKuliah || tugasData[index].mataKuliah,
                deskripsi: req.body.deskripsi || tugasData[index].deskripsi,
                deadline: req.body.deadline || tugasData[index].deadline
            };

            res.status(200).json({
                message: "Tugas berhasil diupdate",
                data: tugasData[index]
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    },

    deleteTugas: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const index = tugasData.findIndex(t => t.id === id);

            if (index === -1) {
                return res.status(404).json({ message: "Tugas tidak ditemukan" });
            }

            tugasData.splice(index, 1);

            res.status(200).json({
                message: "Tugas berhasil dihapus"
            });
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    }
};