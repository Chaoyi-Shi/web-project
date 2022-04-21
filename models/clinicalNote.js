const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({ 
    patientId: {type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true},
    noteDate: {type: String},
    note:{type: String},
}); 
const ClinicalNote = mongoose.model('ClinicalNote', noteSchema); 
module.exports = ClinicalNote;


