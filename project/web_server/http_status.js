const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    // res.sendStatus(200) // OK
    res.sendStatus(400)    // Bad request, '문법에 안맞는 요청'
    // 403 : forbidden
    // 404 : not found
    // 500 : iinternal server error
    // 503 : service unvailable
})


app.listen(3000, ()=> {
    console.log('start listening on 3000')
})

/* 
    HTTP response status code

    sendStatus()

    postman

*/

