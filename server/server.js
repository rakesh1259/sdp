const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://vinay:vinay@cluster0.xnvxz69.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db("SDP");
const col = db.collection("coll");

app.post('/',(req,res) => {
    console.log(req.body);
    col.insertOne(req.body);
})

// app.get('/products',async (req,res) => {
//     const result = await col.find().toArray();
//     console.log(result);
//     res.send(result);
// })

// app.delete('/delete/:id',async (req,res) => {
//     const id = req.params.id;
//     const result = await col.deleteOne({id : id});
//     console.log(result);
//     res.send(result);
// })

// app.get('/',(req,res)=>{
//     console.log('This is Get Request')
// })

app.listen(1259);
console.log("Server started");