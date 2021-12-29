const express = require('express');
const jwt = require('jsonwebtoken')

const app = express()
app.get('/api', (req, res)=>{
    res.json({
        message: 'Hey ! welcome to this API service'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                message: 'Posts created...',
                authData
            })
        }
    })

})
app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        name: "user1",
        email: "user1@gmail.com"
    }
    jwt.sign({user: user},'secretkey',  (err, token) =>{
        res.json({
            token
        })
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}
app.listen(8080, () => {
    console.log('server is running on port 8080')
})