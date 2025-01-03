const express=require("express")
const mongoose=require("mongoose")
const Product = require("./models/product_model")
const app=express()
const productRoute=require("./routes/product_route")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products",productRoute)



mongoose.connect("mongodb+srv://savitadivyansh323:60yEoVaVgpSNl7Sp@cluster0.hrerk.mongodb.net/crud-app")
.then(()=>{
    console.log("connected to db");
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
        
    })
    
}).catch(()=>{
    console.log("connection failed");
    
})


