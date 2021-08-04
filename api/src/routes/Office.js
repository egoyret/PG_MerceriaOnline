const { Router} = require('express');
const {Office}=require('../../db')
const { Op } = require('sequelize');
const router = Router();

router.get("/",(_req,res,next)=>{
    //incluido el calendario
    return Office.findAll({include:{model:Schedule}}).then(response=>res.send(response)).catch(err=>next(err))
});
router.post("/",(req,res,next)=>{
    console.log("estoy aca")
    const office=req.body
    console.log(office)
    Office.create({
        name: office.name,
        address: office.address,
        phone: office.phone
    })
    .then(response=>res.send(response))
    .catch(err=>next(err))
})

module.exports = router;