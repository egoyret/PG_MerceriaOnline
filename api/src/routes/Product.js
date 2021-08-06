<<<<<<< HEAD
const {Product,category_product,image,stock} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Product.findAll().then(product => res.status(200).json(product)).catch(error => res.status(400).send(error))
})
router.post("/",function(req,res,_next){
   
    Product.create({
                    title:req.body.title,
                    resume:req.body.resume,
                    detail:req.body.detail,
                    price:req.body.price,})

.then( (response) =>{
    
if(req.body.image.length > 0){
    req.body.image.map( c =>
        image.create({
            productId: response.UUID, 
            url:c.url 
        }) 
    )   
} 

               
}) 
.then( (response) =>{

    category_product.create({
        productId:response.UUID,
        categoryId:req.body.category,
    })            
})  
.then( (response) =>{

    stock.create({
        productId:response.UUID,
        office_id:req.body.office_id,
        quantity:0,
    })            
})                          
.then( () =>{
    res.status(200).json("creado exitosamente")
})

=======

const {Product, Category, Productimage,Stock} = require ('../db');

const router = require('express').Router();
const { Op } = require("sequelize");


//////////  GET PRODUCT  /////////////
router.get("/", async function(req,res, next){
  const { name } = req.query ;
  if(!name) {
   try{
     const product = await Product.findAll({include: [{ model: Category, attributes: ['id', 'name']}, {model: Productimage, attributes: ['id', 'image_url']}, {model: Stock, attributes: ['id', 'quantity', 'officeId']}]})
      res.status(200).json(product)
   }
   catch (error) {next(error)};
  } 
  else {
    try{
      const product = await Product.findAll({where: {title: {[Op.substring]: name}}, include: [{ model: Category, attributes: ['id', 'name']}, {model: Productimage, attributes: ['id', 'image_url']}, {model: Stock, attributes: ['id', 'quantity', 'officeId']}]})
       res.status(200).json(product)
    }
    catch (error) {next(error)}; 
  }
})

router.get("/", async function(req,res, next){
  try{

    const product = await Product.findAll({include: [{ model: Category, attributes: ['id', 'name']}, {model: Productimage, attributes: ['id', 'image_url']}, {model: Stock, attributes: ['id', 'quantity', 'officeId']}]})
     res.status(200).json(product)
  }
  catch (error) {next(error)};
})




router.get("/:idProducto", async function(req,res, next){
  try{ 
     
    const product_id = req.params.idProducto;
     console.log(product_id);
    const product = Product.findByPk(product_id, {include: [{ model: Category, attributes: ['id', 'name']}, {model: Productimage, attributes: ['id', 'image_url']}, {model: Stock, attributes: ['id', 'quantity', 'officeId']}]})
    if (product) {return  res.status(200).json(product)}
    else {res.status(400) }
  } 
   catch (error) {next(error)};
})




///////////    POST PRODUCT    ///////////

router.post("/", async function(req,res, next){
 try{ 

    const [product, created] =  await  Product.findOrCreate({
                 where: {catalog_id: req.body.catalog_id},
                 defaults: {
                    title:req.body.title,
                    catalog_id:req.body.catalog_id,
                    resume:req.body.resume,
                    detail:req.body.detail,
                    price:req.body.price}
                 });

    if (!created) {  res.status(400).json("Ya existe producto con mismo nro catalogo") 
    }
    else {
      await product.setCategories(req.body.category);
      await Stock.create({
          productId:product.id,
          office_id:req.body.office_id,
          quantity:0,
          })   
          
          if(req.body.image.length > 0){
                req.body.image.map( c =>
                Productimage.create({
                    productId: product.id, 
                    image_url:c
                }) 
            ) 
        } 

      res.status(200).json(product) 
    }

  
 }
catch (error) {next(error)};
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
})



module.exports = router;