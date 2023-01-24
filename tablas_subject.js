  // Mostrar y ocultar listado de planes de financiación
  var element = document.getElementById("oldNews");
  if(element != null){
      element.style.display = "none";
  }
  var element = document.getElementById("old2");
  if(element != null){
      element.style.display = "none";
  }
  
  function showHide(elementId) {
      var element = document.getElementById(elementId);
      if (element != null) {
          if(element.style.display != "none"){
              element.style.display = "none";
          }else{
              element.style.display = "block";
          }
      }
  }



//   para el botón de las asignaturas
function myFunction(paco) {
  document.getElementById("myDropdown_subjects").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_subjects')) {
    var dropdowns = document.getElementsByClassName("dropdown-content_subjects");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const btns = document.querySelectorAll('.btn');

if(btns){
	btns.forEach(item => {
  	item.addEventListener('click', function(event){
    	let id = event.target.getAttribute('data-id');
      if(id){
      	document.querySelector('.active').classList.remove('active');
      	document.getElementById(id).classList.add('active');
      }
    })
  })
}