jugador1=localStorage.getItem("entrada_texto")
jugador2=localStorage.getItem("entrada_texto2")
var puntos1 = 0
var puntos2 = 0
var turno_pregunta = "jugador1"
var turno_respuesta = "jugador2"
document.getElementById("nombre jugador 1").innerHTML = jugador1 + "="
document.getElementById("nombre jugador 2").innerHTML = jugador2 + "="
document.getElementById("puntos jugador 1").innerHTML = puntos1
document.getElementById("puntos jugador 2").innerHTML = puntos2
document.getElementById("Turno_pregunta").innerHTML = jugador1
document.getElementById("Turno_respuesta").innerHTML = jugador2
function Enviar(){
   var numero1 = document.getElementById("entrada_texto3").value
   var numero2 = document.getElementById("entrada_texto4").value
   respuesta_correcta = parseInt(numero1)*parseInt(numero2)
   var lectura_numero = numero1 + " x " + numero2
   var respuesta = "<input id='entrada_texto5' type='text'>"
   var boton = "<button id='botonenviar' onclick='enviar()'>Enviar</button>"
   var  operacion = lectura_numero + "<br>" + respuesta + "<br>" + boton
   document.getElementById("div1").innerHTML = operacion
   document.getElementById("entrada_texto3").value = ""
   document.getElementById("entrada_texto4").value = ""
}

function enviar()
{
     respuesta_jugador = document.getElementById("entrada_texto5").value
    if (respuesta_jugador==respuesta_correcta)
    {
        if(turno_respuesta=="jugador1"){
        puntos1=puntos1 + 1 
        document.getElementById("puntos jugador 1").innerHTML = puntos1
        }
        else{
            puntos2=puntos2 + 1
            document.getElementById("puntos jugador 2").innerHTML = puntos2
        }
    }
    if (turno_pregunta == "jugador1"){
        turno_pregunta == "jugador2"
        document.getElementById("Turno_pregunta").innerHTML = jugador2
    }
    else{
        turno_pregunta == "jugador1"
        document.getElementById("Turno_pregunta").innerHTML = jugador1
    }
    if (turno_respuesta == "jugador1"){
        turno_respuesta == "jugador2"
        document.getElementById("Turno_respuesta").innerHTML = jugador2
    }
    else{
        turno_respuesta == "jugador1"
        document.getElementById("Turno_respuesta").innerHTML = jugador1
    }
    document.getElementById("div1").innerHTML = ""
}