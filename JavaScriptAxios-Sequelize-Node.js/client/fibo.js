const fibo1 = document.getElementById("fibo1")
const fibo2 = document.getElementById("fibo2")
const maximo = document.getElementById("maximo")

var miJsonRespuesta;

function llamarApi(){
    axios.post('http://localhost:3000/fibonacci-calculo', {
        fibo1: fibo1.value,
        fibo2: fibo2.value,
        maximo: maximo.value
      })
      .then(function (response) {
        alert(response.data.listaPares)
        alert(response.data.listaTodos)
        alert(response.data.sumaPares)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
async function traerInformacion(){

  axios.post('http://localhost:3000/traer-datos', {
    fibo1: fibo1.value,
    fibo2: fibo2.value,
    maximo: maximo.value
  })
  .then(async function (response) {
    miJsonRespuesta= await response.data.respuesta
    console.log(response.data.respuesta);
    mostrarTabla();
  })
  .catch(function (error) {
    console.log(error);
  });
}
async function mostrarTabla(){
  var col = [];
  for (var i = 0; i < miJsonRespuesta.length; i++) {
      for (var key in miJsonRespuesta[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
  }
  
  
  var table = document.createElement("table");
  
  
  var tr = table.insertRow(-1);                   
  
  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");    
      th.innerHTML = col[i];
      tr.appendChild(th);
  }
  
  for (var i = 0; i < miJsonRespuesta.length; i++) {
  
      tr = table.insertRow(-1);
  
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = miJsonRespuesta[i][col[j]];
      }
  }
  
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
  }