// La variable VJ hace mención a VIDEOJUEGOS
// Este código funciona de manera similar por no decir igual que el de subjects


    function DAW() {
        var DAW = document.getElementById("DAW");
        var DAM = document.getElementById("DAM");
        var ASIR = document.getElementById("ASIR");
        var VJ = document.getElementById("VJ");
        var foot = document.getElementById("foot");
        if (DAW.style.display === "none") {
            DAW.style.display = "block";
            DAM.style.display = "none";
            ASIR.style.display = "none";
            VJ.style.display = "none";
            foot.style.marginTop = "0px"


        } else {
            DAW.style.display = "none";
            foot.style.marginTop = "500px"
        }
    }

    function DAM() {
        var DAW = document.getElementById("DAW");
        var DAM = document.getElementById("DAM");
        var ASIR = document.getElementById("ASIR");
        var VJ = document.getElementById("VJ");
        var foot = document.getElementById("foot");
        if (DAM.style.display === "none") {
            DAM.style.display = "block";
            DAW.style.display = "none";
            ASIR.style.display = "none";
            VJ.style.display = "none";
            foot.style.marginTop = "0px"


        } else {
            DAM.style.display = "none";
            foot.style.marginTop = "500px"
        }
    }


    function ASIR() {
        var DAW = document.getElementById("DAW");
        var DAM = document.getElementById("DAM");
        var ASIR = document.getElementById("ASIR");
        var VJ = document.getElementById("VJ");
        var foot = document.getElementById("foot");
        if (ASIR.style.display === "none") {
            ASIR.style.display = "block";
            DAM.style.display = "none";
            DAW.style.display = "none";
            VJ.style.display = "none";
            foot.style.marginTop = "0px"


        } else {
            ASIR.style.display = "none";
            foot.style.marginTop = "500px"
        }
    }

    function VIDEOJUEGOS() {
        var DAW = document.getElementById("DAW");
        var DAM = document.getElementById("DAM");
        var ASIR = document.getElementById("ASIR");
        var VJ = document.getElementById("VJ");
        var foot = document.getElementById("foot");
        if (VJ.style.display === "none") {
            VJ.style.display = "block";
            DAM.style.display = "none";
            ASIR.style.display = "none";
            DAW.style.display = "none";
            foot.style.marginTop = "0px"


        } else {
            VJ.style.display = "none";
            foot.style.marginTop = "500px"
        }
    }
