document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const sobre = document.querySelector(".sobre");

    /*
     * 1. EL SOBRE APARECE CERRADO
     *
     * Esperamos 900 ms antes de comenzar
     * para que el visitante pueda verlo.
     */

    setTimeout(function () {

        sobre.classList.add("abrir");

    }, 900);


    /*
     * 2. EL SOBRE SE ABRE
     *
     * La carta sale del sobre mientras
     * la tapa se abre.
     */


    /*
     * 3. PASAMOS A LA PORTADA
     *
     * Después de aproximadamente 3 segundos
     * aparece la portada de prueba.
     */

    setTimeout(function () {

        intro.classList.add("finalizar");

    }, 2700);


    /*
     * 4. EL INTRO TERMINA COMPLETAMENTE
     *
     * Dejamos solamente la portada visible.
     */

    setTimeout(function () {

        intro.style.background = "transparent";

        const sobreContenedor =
            document.querySelector(".sobre-contenedor");

        if (sobreContenedor) {

            sobreContenedor.style.display = "none";

        }

    }, 3500);

});
