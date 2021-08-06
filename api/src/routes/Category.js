const {Category} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Category.findAll().then(Category => res.status(200).json(Category)).catch(error => res.status(400).send(error))
})
<<<<<<< HEAD
router.post("/",function(req,res,_next){
   
    Category.create({
                    name:req.body.name,
=======

router.post("/",function(req,res,_next){
    console.log(req.query.name)
    Category.create({
                    name:req.query.name,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})



module.exports = router;