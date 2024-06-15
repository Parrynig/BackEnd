const express = require('express');
const Model = require('../models/blogModel')

const router = express.Router();

router.post ('/add', (req, res) => {
    
    console.log(req.body);

    new Model (req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });


});

router.get ('/getall', (req, res) => {
    res.send('Response from user GETALL');
});
module.exports = router ;