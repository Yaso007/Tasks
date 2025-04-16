const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://yashopmukhiazz007:gZ6GU4W6iG7voWS3@cluster0.a2o3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected successfully');

        app.listen(3000,()=>console.log("app is running at port 3000"))
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};

connectDB();

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User = mongoose.model("User", UserSchema)

app.post('/user',async (req, res)=>{
    try{
        console.log(req.body)
        const user = new User(req.body)
        await user.save();
        res.status(201).json(user);

    }
    catch(error){
        res.status(500).json({error:"failed to create user"})
    }
 
})
app.get('/user',async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({error:"failed to retrieve users"})
    }
})
