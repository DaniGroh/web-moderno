const express = require('express')
const app = express()
const badyParser = require('body-parser')

app.use(bodyParser.urlenconded({extended:true}))

app.post('/usuarios', (req, resp) =>{
  console.log(req.body)
  resp.send('<h1>Parabens. Usuário incluído!</h1>')
})

app.put('/usuarios/:id', (req, resp) =>{
  console.log(req.params.id)
  console.log(req.body)
  resp.send('<h1>Parabens. Usuário alterado!</h1>')
})

app.get('/usuarios/:id', (req, resp) =>{
  console.log(req.body)
  console.log(req.query)
  resp.send('<h1>Parabens. Usuário alterado!</h1>')
})

app.listen(3003)