const express = require("express")
const cors = require("cors")
const path = require('path')
const app = express()
const { getHTML, getBucket, getPark, postBucket, removePark} = require('./controller')


app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get('/', getHTML)

app.get('/bucket', getBucket)

app.get('/parkList', getPark)

app.post('/bucket/add', postBucket)

app.delete(`/bucket/delete/:byePark`, removePark)

app.listen(4000,console.log("Server up on 4000"))