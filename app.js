
var typed=new Typed(".text",{
    strings:["Web Devloper" , "Fronted Devloper"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:100,
    loop:true
});


window.addEventListener('scroll',reveal)
function reveal()
{
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(revealtop < windowheight-revealpoint)
        {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
Burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
loGo=document.querySelector('.logo')

Burger.addEventListener('click', () => {
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}