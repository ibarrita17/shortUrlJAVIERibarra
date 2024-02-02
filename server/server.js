const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://javiervegan83:Qrp7BPmiv7vEiiXZ@urlshortener.j9krojo.mongodb.net/?retryWrites=true&w=majority";
const urlconnect= 'mongodb+srv://javiervegan83:<password>@urlshortener.j9krojo.mongodb.net/'
const postRoutes = require('./routes/post');
const ShortUrl = require('./models/shortUrl');
const cors = require('cors');

const connectDBurl= 'mongodb+srv://javiervegan83:Qrp7BPmiv7vEiiXZ@urlshortener.j9krojo.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
// Enable All CORS Requests
app.use(cors());

mongoose.connect(connectDBurl)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
  

app.use(express.urlencoded({extended:false}))
app.use(express.json()) // This line is added to parse JSON body
app.use('/', postRoutes);//call routes




