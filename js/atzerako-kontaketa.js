(function() {
    "use strict";

    function kalkulatuFaltaDirenEgunak() {

        // 2016ko irailak 30. Kontsultaren lehen eguna.
        // Kontuz! Hilabetea 0-11 artean.
        var helburua = new Date(2016, 8, 30);
        var gaur = new Date();
        var diferentzia = helburua.getTime() - gaur.getTime();
        var egun_kopurua = Math.ceil(diferentzia / (1000 * 3600 * 24));

        return egun_kopurua;
    }

    function bistaratuEgunKopurua() {
        var elementua = document.getElementsByClassName("egun-kopurua")[0];
        var textua = document.createTextNode(kalkulatuFaltaDirenEgunak());
        elementua.innerText = textua.textContent;
    }

    document.addEventListener('DOMContentLoaded', function(){

        bistaratuEgunKopurua();

    }, false);
}());
