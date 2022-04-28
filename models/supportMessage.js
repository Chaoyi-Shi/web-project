const mongoose = require('mongoose');

// Store datatype to schema
const messageSchema = new mongoose.Schema({ 
    patientId: {type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true},
    messageDate: {type: String},
    message:{type: String},
}); 

const SupportMessage = mongoose.model('SupportMessage', messageSchema); 
module.exports = SupportMessage;