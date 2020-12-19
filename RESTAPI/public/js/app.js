document.addEventListener('DOMContentLoaded', function (event) {
    /*let titulo = document.getElementById("titulo")
    titulo.innerHTML = "cambiado con js"*/
  
    //let formulario = document.getElementById("formulario")

    //formulario.addEventListener('submit', function (event) {
      //event.preventDefault()
      //guardarUsuario()
    //})

    fetch('http://localhost:3000/empresasImprimir')
    .then(res => res.docs())
    .then(data =>{
        if(data.response === 'success'){
            const listaEmpresas = data.data
            
            listaEmpresas.forEach(sn => {
                console.log(docs.text)
            });
        }
    })
  
  });
/*
let contenedorListaEmpresas = document.querySelector('#listaEmpresas ul');
var lastVisible = null
const est = []

  
  collection.find().onSnapshot(res => {
    contenedorContactos.innerHTML = '';
    lastVisible = res.docs[res.docs.length-1];
    res.array.forEach(sn => {
      est.push({
        id: sn.id,
        ...sn.data(),
      })
      contenedorListaEmpresas.innerHTML += `<li>${sn.data().nombreEmpresas} ${sn.data().telefono}
                <span class="botones">
                  <span class="btn btn_editar" onclick = "editarContacto('${sn.id}','${sn.data().nombre}','${sn.data().telefono}')">Editar</span>
                  <span class="btn btn_borrar" onclick = "eliminarContacto('${sn.id}')">Borrar</span>
                </span>
            </li>`;
    });
  })

  */