// JavaScript Document
// Java script animatie, search bar!
/* Als de gebruiker op de knop klikt, word deze uitgeklapt en ingeklapt: 
soort toggle functie. */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Sluit het menu als de gebruiker buiten het menu klikt
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
