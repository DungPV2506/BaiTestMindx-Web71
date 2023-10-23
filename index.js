import express from "express";
import mongoose from 'mongoose';
import warehouseModle from "./warehouse.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/TestMindx');


//2
app.get('/api/getData', async (req, res) => {
    const data = await warehouseModle.find();
    res.send({
        message: 'success full',
        data: data
    })
  });


//3
app.get('/api/getData', async (req, res) => {
    const data = await warehouseModle.find({
        "instock": {
            $gt: {
                $size: "$instock"
            }
        }
    });
    res.send({
        message: 'success full',
        data: data
    })
  });



app.listen(3000, () => {
  console.log("App is running at 3000");
  
});
