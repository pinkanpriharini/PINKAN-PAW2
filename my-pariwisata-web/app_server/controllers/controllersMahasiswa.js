const Mahasiswa = require("../models/mahasiswa");

exports.Index = async (req,res) => {
    try{
        const mahasiswas = await Mahasiswa.find({})
        res.status(200).json(mahasiswa);
        if(!mahasiswa){
            res.status(400).json({message:"Collection is Empaty"})
        }
    } catch (error){
        res.status(500).json({message:"Error retrieving users",
        error})
    }
}