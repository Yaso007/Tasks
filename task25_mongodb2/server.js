const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://yashopmukhiazz007:RCXfFiNYerTVpRno@cluster0.a2o3p.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Db connected successfully")
    app.listen(3000,()=>{
        console.log("Server is up and running")
    })
})
.catch((error)=>{
    console.log("Db didn't connect")
})

const schema = new mongoose.Schema({
    productName:String,
    productPrice:Number,
    productDescription:String
})

const User = mongoose.model('User',schema)

app.post("/add",async (req,res)=>{
    try{
        const {productName,productPrice,productDescription} = req.body;
        const response = await User.create({
            productName,productPrice,productDescription
        })
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
})

app.get("/getProducts",async (req,res)=>{
    try{
        const response = await User.find({})
        res.status(200).json(response)

    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
})

app.put("/edit/:id",async (req,res)=>{
    try{
        const id = req.params.id
        console
        const {productName,productPrice,productDescription} = req.body;
        const response = await User.findByIdAndUpdate(
            {_id:id},
            {productName,productPrice,productDescription
        })
        res.status(200).json({
            success:true,
            data:response,
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
});

app.delete("/deleteId/:id",async (req,res)=>{
    try{
        const id = req.params.id
        await User.findByIdAndDelete(id)
        res.json({
            success:true,
            data:"The record has been deleted"
        })



    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
})