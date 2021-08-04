const router = require('express').Router();
const { Bundle, Bundle_Product } = require('../db')

router.get("/", (_req, res) => {
    Bundle.findAll()
    .then(bundles => res.status(200).send(bundles))
    .catch(error => res.status(400).send(error))
})

router.get("/:id", (req, res) => {
    Bundle.findOne({
        where: {
            id: req.body.bundle.id
        }
    })
    .then(bundle => res.status(200).send(bundle))
    .catch(error => res.status(400).send(error))
})

router.post("/", (req, res) => {
    Bundle.create(req.body.bundle)
    .then(bundle => Bundle_Product.create({bundle_id: bundle.id, product_id: req.body.product.id, quantity}))
    .then(() => res.status(200).json("Creado exitosamente"))
    .catch(error => res.status(400).send(error))
})

router.put("/", (req, res) => {
    Bundle.findOne({
        where: {
            id: req.body.bundle.id
        }
    })
    .then(bundle => bundle.update(req.body.bundle))
    .catch(error => res.status(400).send(error))
})

router.delete("/", (req, res) => {
    Bundle.findOne({
        where: {
            id: req.body.bundle.id
        }
    })
    .then(bundle => bundle.update({
        active: false
    }))
    .then(() => res.status(200).json("Eliminado exitosamente"))
    .catch(error => res.status(400).send(error))
})