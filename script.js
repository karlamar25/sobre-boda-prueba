document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const sobre = document.getElementById("sobre");
    const escena = document.getElementById("escena");
    const portada = document.getElementById("portada");


    /*
     * =========================================
     * 1. SOBRE CERRADO
     *
     * El visitante ve el sobre antes
     * de que comience la animación.
     * =========================================
     */

    setTimeout(function () {

        sobre.classList.add("abrir");

    }, 800);


    /*
     * =========================================
     * 2. TARJETA YA SALIÓ
     *
     * Esperamos para que la tarjeta
     * pueda verse completamente.
     * =========================================
     */

    setTimeout(function () {

        escena.classList.add("salir");

    }, 3000);


    /*
     * =========================================
     * 3. PORTADA
     *
     * IMPORTANTE:
     * La portada NO aparece hasta que
     * el sobre ya desapareció.
     * =========================================
     */

    setTimeout(function () {

        portada.classList.add("mostrar");

    }, 3450);


    /*
     * =========================================
     * 4. LIMPIEZA
     * =========================================
     */

    setTimeout(function () {

        escena.style.display = "none";

    }, 3800);

});
