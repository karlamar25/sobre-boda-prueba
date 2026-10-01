document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const sobre = document.getElementById("sobre");
    const sobreContenedor =
        document.getElementById("sobre-contenedor");

    /*
     * SOBRE CERRADO
     *
     * Se muestra primero durante un momento
     * antes de comenzar la animación.
     */

    setTimeout(function () {

        sobre.classList.add("abrir");

    }, 900);


    /*
     * DESPUÉS DE ABRIR EL SOBRE
     *
     * Pasamos a la portada final.
     */

    setTimeout(function () {

        intro.classList.add("finalizar");

    }, 2700);


    /*
     * TERMINAMOS EL INTRO
     *
     * El sobre desaparece completamente.
     */

    setTimeout(function () {

        sobreContenedor.style.display = "none";

    }, 3500);

});
