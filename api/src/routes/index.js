const { Router } = require('express');
<<<<<<< HEAD
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Product = require('./Product');
const Category = require('./Category')

=======


const Product = require('./Product');
const Category = require('./Category');
const Office =require('./Office');
const Bundle=require("./Boundle")
const User=require("./User")
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
const router = Router();

router.use("/product", Product ) 
router.use("/category", Category )
<<<<<<< HEAD
=======
router.use("/office", Office )
router.use("/bundle",Bundle)
router.use("/user",User)
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835

module.exports = router;