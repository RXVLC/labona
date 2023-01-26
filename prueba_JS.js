
    var fondo = document.getElementById("fondo_azul_por_footer");
    var x = document.getElementById("grid1");
    var y = document.getElementById("tsmr2");
    var j = 7;
    
    var 1 = 0;
    var 2 = 0;

    if(y.style.display === "none"){
        let 1 = 0;
    }
    else{
        let 1 = 1;
    }

    if(y.style.display === "none"){
        let 2 = 0
    }
    else{
        let 2 = 1
    }


    function TSMR1() {
        if (y.style.display === "block" && fondo.style.display === "block") {
            y.style.display === "none"
            fondo.style.display === "none"
            x.style.display === "block"
        }
        else{
            y.style.display === "block"
            fondo.style.display ==="block"
        }
        while (j = 7) {
            alert("paco")
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
        

        var y = document.getElementById("fondo_azul_por_footer");
        if (y.style.display === "block") {
            y.style.display = "none";
        } else {
            y.style.display = "block";
        }
    }

    function TSMR2() {
        var x = document.getElementById("tsmr2");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        } 
            

        var y = document.getElementById("fondo_azul_por_footer");
        if (y.style.display === "block") {
            y.style.display = "none";
        } else {
            y.style.display = "block";
        }

}