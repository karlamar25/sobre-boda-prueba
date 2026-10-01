document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const sobre = document.getElementById("sobre");
    const escena = document.getElementById("escena");

    /*
     * EL SOBRE APARECE CERRADO
     */

    setTimeout(function () {

        sobre.classList.add("abrir");

    }, 900);


    /*
     * TRANSICIÓN A LA PORTADA
     */

    setTimeout(function () {

        intro.classList.add("finalizar");

    }, 2850);


    /*
     * TERMINAMOS EL INTRO
     */

    setTimeout(function () {

        escena.style.display = "none";

    }, 3700);

});
