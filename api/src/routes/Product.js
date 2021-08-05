
const {Product, Category, Productimage,Stock} = require ('../db');


const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Product.findAll({include: [{ model: Category, attributes: ['id', 'name']}, {model: Productimage, attributes: ['id', 'image_url']}, {model: Stock, attributes: ['id', 'quantity', 'officeId']}]})
    .then(product => res.status(200).json(product)).catch(error => res.status(400).send(error))
})



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
})



module.exports = router;