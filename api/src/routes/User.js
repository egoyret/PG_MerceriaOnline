const {User} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");
<<<<<<< HEAD

router.get("/",function(_req,res){
    User.findAll().then(User => res.status(200).json(User)).catch(error => res.status(400).send(error))
})
router.post("/",function(req,res,_next){
   
    User.create({
                    user_name:req.body.name,
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

=======
// crea y envia 
router.get("/",(_req,res)=>{
    User.findAll()
    .then(User => res.status(200).json(User))
    .catch(error => res.status(400).send(error))
})
router.post("/",async (req,res,next)=>{
    //console.log(req.body)
    try {
        const [user,created]=await User.findOrCreate({
            where:{user_name: req.body.user_name},
            defaults:{
                user_name: req.body.user_name,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address
            }
        })
        res.send(user);
        console.log(created);
    } catch (error) {
        next(error)
    }
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
})



module.exports = router;