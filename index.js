const express = require('express');  // import express

const UserRouter = require('./routers/userRouter')
const BlogRouter = require('./routers/blogRouter')

// initialize express 
const app = express();

const port = 5000;

app.use(express.json() )

// middleware 
app.use('/user', UserRouter )
app.use('/blog', BlogRouter )

// route or endpoint 
app.get('/', (req, res) => {
    res.send('Response from express') //used to send reponse 
})

// add
app.get('/add', (req, res) => {
    res.send('Response from add') //used to send reponse 
})

// getall
app.get('/getall', (req, res) => {
    res.send('Response from getall')  
})
// update
app.get('/update', (req, res) => {
    res.send('Response from update')  
})
// delete
app.get('/delete', (req, res) => {
    res.send('Response from delete')  
})



app.listen(port, () => {
    console.log('server started');
});


