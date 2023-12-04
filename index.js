require('dotenv').config()
const express = require('express')
const app = express()


app.get('/saugat', (req, res)=>{
    res.json({
        'first_name': 'saugat',
        'last_name': 'poudel',
        'email': 'sauugat@gmail.com',
        'phone': '9860401034',
        'address': 'Kathmandu'

    })

})

app.listen(process.env.PORT, ()=>{
    console.log('Node app listening on port ' +process.env.PORT)
})