/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
    let x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  window.addEventListener("scroll", () => {
    let isNavtop = window.scrollY>100 
    let navbar = document.getElementById("navbar")
    let divNavlinks = document.getElementById("divNavlinks");
    if (isNavtop) {
      navbar.className += " horizontal";
    } else {
      navbar.className = " topnav";
    }
  });


const navLink = document.getElementsByClassName("navLink");

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

