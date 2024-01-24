const express = require('express')
const app = express()
const {connect} = require("mongoose")
const cors = require("cors")
const constring ='mongodb://127.0.0.1:27017/react_data'

const connectDb =()=>{
    connect(constring).then(()=>{
        console.log('DB connected');
    }).catch((Err)=>{
        console.log(Err);
    })
}
connectDb()

app.use(cors())
app.use(express.json())

app.get('/getData', async (req,res) =>{
    const data = "Nexawave"
    if(data){
        res.status(200).json({name:data,message:"data found"})
    }else{
        res.status(404).json({message:"not found"})
    }
})

const port = 3000

app.listen(port,()=>{
    console.log(`server connected at ${port}`);
})