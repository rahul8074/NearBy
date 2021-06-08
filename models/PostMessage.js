const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostMessage = new Schema({
    title : 
        {type:'string',
        required: true
        },
    message: {
        type: "string",
        required: true
    },
    username:{
        type:"string",
        required:true
    }
    ,
    Date:{
        type:Date,
        default : Date.now
    }
})
 

const messageModel = mongoose.model("PostMessage",PostMessage)
module.exports = messageModel;