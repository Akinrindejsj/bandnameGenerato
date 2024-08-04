import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import bandname from 'bandname'
import bodyParser from 'body-parser'

const _dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render(_dirname+'/public/index.ejs')
})
app.post('/genrate',(req,res)=>{
    var num = Math.floor(Math.random)
    const generate = bandname(num)
    res.render(_dirname+'/public/index.ejs', {bandName:generate})
})
app.listen(port, ()=>{
    console.log('Server currently running on Local Host ' + port)
})