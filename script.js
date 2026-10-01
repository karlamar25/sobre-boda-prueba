document.addEventListener("DOMContentLoaded", function () {

    const sobreIntro = document.querySelector(".sobre-intro");
    const sobre = document.querySelector(".sobre");
    const tapa = document.querySelector(".tapa");
    const sello = document.querySelector(".sello");
    const portada = document.querySelector(".portada");

    /* EL SOBRE SE ABRE AUTOMÁTICAMENTE */

    setTimeout(function () {

        tapa.style.transition =
            "transform 1s ease-in-out";

        tapa.style.transform =
            "rotateX(180deg)";

        sello.style.transition =
            "opacity 0.5s ease";

        sello.style.opacity = "0";

    }, 1000);


    /* DESAPARECE EL SOBRE Y APARECE LA PORTADA */

    setTimeout(function () {

        sobre.style.transition =
            "opacity 0.7s ease";

        sobre.style.opacity = "0";

        portada.style.transition =
            "opacity 0.8s ease";

        portada.style.opacity = "1";

    }, 2300);


    /* QUITAR COMPLETAMENTE LA PANTALLA DEL SOBRE */

    setTimeout(function () {

        sobreIntro.style.display = "none";

        portada.style.pointerEvents = "auto";

    }, 3100);

});
