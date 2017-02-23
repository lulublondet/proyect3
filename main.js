
function mostrarDatos () {

var dato1 = document.getElementById("nombre").value;
var dato2 = document.getElementById("apellido").value;
var dato3 = document.getElementById("dni").value;
var dato4 = document.getElementById("direccion").value;

document.getElementById("imprime").innerHTML = "<ul> <li> Nombre : " + dato1 + "</li> <li> Apellido : " + dato2 + " </li><li> DNI : " + dato3 + " </li> <li> Dirección : " + dato4 +"</li> </ul>";
}