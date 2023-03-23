const express = require('express')

const db = require('./utils/database')

const userRouter = require('./users/users.router')

const port = 9000;
const app = express();

app.use(express.json())

db.authenticate()
.then(() => {
    console.log('Database Authenticate');
    })
    .catch((err) => {
        console.log(err);
    })
    
    db.sync()
    .then(()=> {
        console.log('Database Synced');
    })
    .catch((err) => {
        console.log(err);
    })
    
    app.use('/api/v1', userRouter)
    

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
