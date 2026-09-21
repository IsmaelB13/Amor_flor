/* =========================================
   ELEMENTOS
========================================= */

const garden =
    document.getElementById("garden");

const envelope =
    document.getElementById("envelope");

const closeButton =
    document.getElementById("closeButton");


/* =========================================
   ESTADO
========================================= */

let flowerStarted = false;


/* =========================================
   TOCAR LA PANTALLA
========================================= */

garden.addEventListener(
    "click",
    startFlower
);


/*
   También funciona específicamente
   con el toque del celular.
*/

garden.addEventListener(
    "touchstart",
    startFlower,
    {
        passive: true
    }
);


/* =========================================
   HACER FLORECER EL GIRASOL
========================================= */

function startFlower() {

    /*
       Si ya comenzó, no hacemos nada.
    */

    if (flowerStarted) {
        return;
    }


    flowerStarted = true;


    /*
       Vibración muy suave.
    */

    if ("vibrate" in navigator) {

        navigator.vibrate(25);

    }


    /*
       Comienza a crecer:
       
       semilla
       ↓
       tallo
       ↓
       hojas
    */

    garden.classList.add("growing");


    /*
       Esperamos a que el tallo
       haya crecido.
       
       Entonces florece.
    */

    setTimeout(() => {

        garden.classList.add("bloomed");


        if ("vibrate" in navigator) {

            navigator.vibrate([
                20,
                40,
                20
            ]);

        }

    }, 2700);


    /*
       Después de que el girasol
       florece, aparece el sobre.
    */

    setTimeout(() => {

        garden.classList.add("final-mode");

    }, 4300);

}


/* =========================================
   ABRIR EL SOBRE
========================================= */

envelope.addEventListener(
    "click",
    function (event) {

        /*
           Evitamos que el clic
           vuelva a afectar la flor.
        */

        event.stopPropagation();


        /*
           Abrir / cerrar
        */

        envelope.classList.toggle("open");


        /*
           Vibración suave.
        */

        if ("vibrate" in navigator) {

            navigator.vibrate(40);

        }

    }
);


/* =========================================
   CERRAR CARTA
========================================= */

closeButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        envelope.classList.remove("open");


        if ("vibrate" in navigator) {

            navigator.vibrate(20);

        }

    }
);


/* =========================================
   EVITAR DOBLE TOQUE / ZOOM
========================================= */

let lastTouch = 0;


document.addEventListener(
    "touchend",
    function (event) {

        const now =
            Date.now();


        if (
            now - lastTouch < 300
        ) {

            event.preventDefault();

        }


        lastTouch = now;

    },
    {
        passive: false
    }
);
