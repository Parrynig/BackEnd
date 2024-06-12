const mongoose = require('mongoose');

const url = "mongodb+srv://paritosh:paritosh@cluster0.7ckfo5y.mongodb.net/merndatabase?retryWrites=true&w=majority&appName=Cluster0"

// asynchrounous function ...  returns promise object 
mongoose.connect(url)
    .then((result) => {
        console.log('database connected ');
    })
    .catch((err) => {
        console.log(err);
    });
