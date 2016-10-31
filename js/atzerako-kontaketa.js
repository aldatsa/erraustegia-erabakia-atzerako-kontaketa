(function() {
    "use strict";

    function kalkulatuFaltaDirenEgunak() {

        // 2016ko urriaren 21. Kontsultaren lehen eguna.
        // Kontuz! Hilabetea 0-11 artean.
        var helburua = new Date(2016, 9, 23);
        var gaur = new Date();
        var diferentzia = helburua.getTime() - gaur.getTime();
        var egun_kopurua = Math.ceil(diferentzia / (1000 * 3600 * 24));

        // Kontsultaren eguna pasa bada, zero jarri. Bestela zenbaki negatiboak agertzen ziren.
        if (egun_kopurua < 0) {

            egun_kopurua = 0;

        }

        return egun_kopurua;
    }

    function bistaratuEgunKopurua() {
        var elementua = document.getElementsByClassName("egun-kopurua")[0];
        var textua = document.createTextNode(kalkulatuFaltaDirenEgunak());
        elementua.innerText = textua.textContent;
    }

    function eskalatu(id, jatorrizko_zabalera) {

        var zabalera = window.innerWidth;
        var altuera = window.innerHeight;

        var eskala = 1;

        // Pantailaren zabalera maparena baino txikiagoa bada.
        if (zabalera < jatorrizko_zabalera) {

            // Eskala kalkulatu.
            eskala = zabalera / jatorrizko_zabalera;

        }

        document.getElementById(id).style["transform-origin"] = "top left";
        document.getElementById(id).style.transform = "scale(" + eskala + ")";

        return eskala;

    }

    document.addEventListener('DOMContentLoaded', function(){

        bistaratuEgunKopurua();
        eskalatu("edukinontzia", 500);

    }, false);
}());
