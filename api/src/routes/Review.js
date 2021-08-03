const router = require('express').Router();
const { Review } = require('../db')

router.get("/review", (_req, res) => {
    Review.findAll()
    .then((reviews) => {
        res.status(200).send(reviews)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
})