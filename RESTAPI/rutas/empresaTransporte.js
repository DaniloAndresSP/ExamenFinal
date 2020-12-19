const express = require('express')
const router = express.Router()


module.exports = router



async function traerEmpresa(){
    let db = client.db(dbName)
    let collection = db.collection('empresas')
  
    collection.find().toArray(function(err,docs){
    console.log(docs)
  
    })
  }

router.get('/empresas',(req, res) => {
    traerEmpresa()
    res.send('Mostrar Usuarios')
  })
