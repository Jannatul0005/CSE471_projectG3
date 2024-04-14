

const express = require('express');

const cors =require("cors")
const app = express();
app.use(express.json())
app.use(cors())
const port = 3000;


app.get("/",(req,res)=>{
    return res.json("Life over");
});


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



