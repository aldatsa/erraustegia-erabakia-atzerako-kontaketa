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

    function bistaratuEgunKopurua(zenbakia) {
        var elementua = document.getElementsByClassName("egun-kopurua")[0];
        //var textua = document.createTextNode(kalkulatuFaltaDirenEgunak());
        var textua = document.createTextNode(zenbakia);
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

    function deskargatuHurrengoIrudia(i) {

        bistaratuEgunKopurua(i);
        eskalatu("edukinontzia", 500);

        var nodoa = document.getElementById("edukinontzia");

        domtoimage.toPng(nodoa)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = "erraustegia-erabakia-atzerako-kontaketa-" + i + ".png";
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });

    }

    document.addEventListener('DOMContentLoaded', function(){

        var i = 80;

        var interval = setInterval(function() {

            if (i > 0) {
                deskargatuHurrengoIrudia(i);
                i--;
            } else {
                clearInterval(interval);
            }
        }, 1000);

    }, false);
}());
