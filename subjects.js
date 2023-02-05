// Este código lo hemos hecho manualmente basándonos en los Ifs y condicionales de Javascripts en internet
// Funciona de la siguiente forma: Si al apretar el botón 1 el grid 1 no se ve queremos que se vea y se desactive tanto el espacio vacío 
// Cómo el grid 2. En caso contrario que no se mueste el grid 1 y que haya espacio
// Lo mismo pasa con el grid 2



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