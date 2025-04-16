const express = require("express")
const {check, body, query,param,validationResult} = require('express-validator')

const app = express()

app.use(express.json())

app.post('/register',[body('email').isEmail().withMessage("Email must be valid"),
    body('password').isLength({min:6}).withMessage("password must be at least 6 characters"),
    body('username').notEmpty().withMessage("username is required").trim().escape(),],
    (req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        res.status(200).json({
            data:"Registration successful"
        })
    }
)

app.listen(3000)