const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema= new mongoose.Schema({
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        //shortId.generate is a function that generates a random short string
        default:shortId.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
})
module.exports= mongoose.model('ShortUrl',shortUrlSchema)