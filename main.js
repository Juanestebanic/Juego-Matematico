function Iniciar_sesion() {
    var jugador1=document.getElementById("entrada_texto").value
    var jugador2=document.getElementById("entrada_texto2").value
    localStorage.setItem("entrada_texto", jugador1)
    localStorage.setItem("entrada_texto2", jugador2)
    window.location="index2.html"
}