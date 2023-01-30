

    // function TSMR1() {
    //     var grid1 = document.getElementById("grid1");
    //     var foot = document.getElementById("foot");
    //     var grid2 = document.getElementById("tsmr2");
    // // cuando se pulse el botón:
    
    // // el primer if funciona, hace que si estas en el 2 y pulsas para ver el uno se 
    // // quite automáticamente el 2
    
    
    //     if (grid2.style.display = "block") {
    //         grid2.style.display = "none";
    //         foot.style.marginTop = "0px";
    //         grid1.style.display = "block";
            
    //     }
    //     else if (grid1.style.display = "block"){
    //             grid1.style.display = "none";
    //             foot.style.marginTop = "800px";
    //         }
        
    //     else {
    //         foot.style.marginTop = "0px";
    //         grid1.style.display = "block";
    //     }
    //     }


    function TSMR1() {
        var grid1 = document.getElementById("grid1");
        var foot = document.getElementById("foot");
        var grid2 = document.getElementById("tsmr2");
        if (grid1.style.display === "none") {
            grid1.style.display = "block";
            grid2.style.display = "none";
            foot.style.marginTop = "0px"


        } else {
            grid1.style.display = "none";
            foot.style.marginTop = "500px"
        }
        }


    





        function TSMR2() {
            var grid1 = document.getElementById("grid1");
            var foot = document.getElementById("foot");
            var grid2 = document.getElementById("tsmr2");
            if (grid2.style.display === "none") {
                grid2.style.display = "block";
                grid1.style.display = "none";
                foot.style.marginTop = "0px"
    
    
            } else {
                grid2.style.display = "none";
                foot.style.marginTop = "500px"
            }
        }