const express = require ("express");
require("./db/connection")
const MensRanking=require("./models/mens")

const mensRouter = require("./routers/men")

const app=express()
const port =process.env.PORT || 7000;
app.use(express.json())
app.use(mensRouter )



app.listen(port, () => {
    console.log(`connection is Live at port no ${port}`)
}); 