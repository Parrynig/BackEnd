const express = require('express');

const router = express.Router();

router.post ('/add', (req, res) => {
    
    console.log(req.body);

    res.send('Response from user ADD');
});

router.get ('/getall', (req, res) => {
    res.send('Response from user GETALL');
});
module.exports = router ;