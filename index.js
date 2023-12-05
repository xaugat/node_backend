require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.get('/saugat', (req, res)=>{
    res.json({
        'first_name': 'saugat',
        'last_name': 'poudel',
        'email': 'sauugat@gmail.com',
        'phone': '9860401034',
        'address': 'Kathmandu',
        'profile_img': 'https://media.licdn.com/dms/image/D5603AQFnplXehPu-1A/profile-displayphoto-shrink_800_800/0/1673115786156?e=2147483647&v=beta&t=9m67SFBpHi1UFfXlRPiY2GgD4yReEh-taSI8PtDjB0s'

    })

})

app.listen(process.env.PORT, ()=>{
    console.log('Node app listening on port ' +process.env.PORT)
})