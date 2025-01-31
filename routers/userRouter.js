const express = require('express');
const Model = require('../models/userModel')

const router = express.Router();

router.post('/add', (req, res) => {

    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });


});

// get all data from database

router.get('/getall', (req, res) => {
    // res.send('Response from user GETALL'); 

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

// ":" denotes url parameter
// get all data using city
router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city);

    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

// get by mail 

router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// data get by id 
router.get('/getbyid/:id', (req, res) => {

    Model.findById( req.params.id )
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update using put 
router.put('/update/:id', (req, res) =>{
    Model.findByIdAndUpdate(req.params.id, req.body,{new : true} )
    .then((result) => {
    res.status(200).json(result);        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// delete 

router.delete('/delete/:id', (req, res ) =>{
    Model.findByIdAndDelete(req.params.id, req.body )
    .then((result) => {
    res.status(200).json(result);        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;