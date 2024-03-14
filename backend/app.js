const express = require('express')
const cors = require('cors')
const Signup=require('./routers/signup')
const Signin=require('./routers/signin')
const Img=require('./routers/img_display')
const ImgUpload=require('./routers/img_upload')
const ItemsDis=require('./routers/items_display')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/signup',Signup)
app.use('/login',Signin)
app.use('/img',Img)
app.use('/upload',ImgUpload)
app.use('/items',ItemsDis)
app.listen(8081)
