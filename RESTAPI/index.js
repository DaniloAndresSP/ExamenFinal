const { response } = require('express')
const bodyParcer = require('body-parser')
const {MongoClient}= require('mongodb')
const express = require('express')
const app = express()
const port = 3000

//----Rutas------------
/*
app.use(require('./rutas/empresaTransporte'))
app.use(require('./rutas/reservas'))
app.use(require('./rutas/rutas'))
app.use(require('./rutas/vehiculo'))
*/

//---------------Configuracion mongoDB--------------
const dbName = 'terminalTransporte'
const url = 'mongodb://localhost:27017/'+dbName
const client = new MongoClient(url,{ useUnifiedTopology: true })

app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/paginas'))
app.use(bodyParcer.json())

async function conectar(){
  client.connect(function (err) {
    if (err) {
      console.log('Error en la conexion a MongoDB')
      return
    }
    console.log('Conexion a MongoDB')
  })
}

conectar()

async function traerEmpresa(){
  let db = client.db(dbName)
  let collection = db.collection('empresas')

  collection.find().toArray(function(err,docs){
  //res.json(docs)
  console.log(docs)

  })
}

//traerEmpresa()

async function guardarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('empresas')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}

async function eliminarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('clientes')

  collection.deleteOne(user , function(resultado){
  console.log(resultado)

  })
}
async function actualizarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('clientes')

  collection.updateOne(user , function(resultado){
  console.log(resultado)

  })
}


app.get('', async(req, res) => {

let db = client.db(dbName)
let collection = db.collection('empresas')

  collection.find({}).toArray(function(err,docs){
  res.send(docs)
  console.log(docs)
  })
  
  //res.send('Mostrar Usuarios')
})

app.post('/empresas/agregar', (req, res) => {
  guardarEmpresa(req.body)
  console.log(req.docs)
  res.send('Agregado en la base de datos'+ req.body.nombre)
})

app.delete('/usuarios/eliminar', (req, res) => {
  eliminarClientes(req.body)
  res.send('Eliminado ' + req.body.nombre)
})

app.put('/usuarios/actualizar', (req, res) => {
  actualizarClientes(req.body)
  res.send('Actualizado' + req.body.nombre)
})

//--------Reserva------------------------

async function traerReserva(){
  let db = client.db(dbName)
  let collection = db.collection('reservas')

  collection.find().toArray(function(err,docs){
  console.log(docs)

  })
}

async function guardarReserva(user){
  let db = client.db(dbName)
  let collection = db.collection('reservas')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}


app.get('/reserva/imprimir',(req, res) => {
  traerReserva()
  res.send('Mostrar Usuarios')
})

app.post('/reserva/agregar', (req, res) => {
  guardarReserva(req.body)
  console.log(req.body)
  res.send('Usando post'+ req.body.nombre)
})

app.delete('/reserva/elminar', (req, res) => {
  eliminarMenu(req.body)
    res.send('Eliminado ' + req.body.nombre)
})

app.put('/reserva/actualizar', (req, res) => {
  actualizarMenu(req.body)
  res.send('Actualizado ' + req.body.nombre)
})

//---------------Rutas--------------

async function guardarRutas(user){
  let db = client.db(dbName)
  let collection = db.collection('rutas')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}

app.get('/rutas/imprimir',(req, res) => {
  traerMenu(req.body)
  res.send('Mostrar Usuarios')
})

app.post('/rutas/agregar', (req, res) => {
  guardarRutas(req.body)
  console.log(req.body)
  res.send('Usando post'+ req.body.nombre)
})

app.delete('/rutas/elminar', (req, res) => {
  eliminarMenu(req.body)
    res.send('Eliminado ' + req.body.nombre)
})

app.put('/rutas/actualizar', (req, res) => {
  actualizarMenu(req.body)
  res.send('Actualizado ' + req.body.nombre)
})

//--------------vehiculos---------------

async function guardarVehiculos(user){
  let db = client.db(dbName)
  let collection = db.collection('vehiculos')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}

app.get('/vehiculos/imprimir',(req, res) => {
  traerMenu(req.body)
  res.send('Mostrar Usuarios')
})

app.post('/vehiculos/agregar', (req, res) => {
  guardarVehiculos(req.body)
  console.log(req.body)
  res.send('Usando post'+ req.body.nombre)
})

app.delete('/vehiculos/elminar', (req, res) => {
  eliminarMenu(req.body)
    res.send('Eliminado ' + req.body.nombre)
})

app.put('/vehiculos/actualizar', (req, res) => {
  actualizarMenu(req.body)
  res.send('Actualizado ' + req.body.nombre)
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

