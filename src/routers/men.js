const express=require("express")
const router=new express.Router();


const MensRanking =require("../models/mens")



router.post("/mens",async(req,res)=>{
    try {
        const addingMensRecord= new MensRanking(req.body)
        console.log(req.body)
        const insertMens=  await addingMensRecord.save()
        res.status(201).send(insertMens)
    } catch (error) {
        res.status(400).send(error)
        
    }

})


router.get("/mens",async(req,res)=>{
    try {
        const getMens = await MensRanking.find().sort({"ranking":1})
        res.send(getMens)
    } catch (error) {
        res.status(400).send(error) 
    }
})

router.get("/mens/:id",async(req,res)=>{
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getMen)
    } catch (error) {
        res.status(400).send(error) 
    }
})

router.patch("/mens/:id",async(req,res)=>{
    try {
        const updateMen = await MensRanking.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(updateMen)
    } catch (error) {
        res.status(500).send(error) 
    }
})


router.delete("/mens/:id",async(req,res)=>{
    try {
        const deleteMen = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(deleteMen)
    } catch (error) {
        res.status(500).send(error) 
    }
})
module.exports=router