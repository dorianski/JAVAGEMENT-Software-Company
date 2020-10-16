window.addEventListener('scroll', scrollFunction2);

function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".menu").style.height = "10vh";
    document.querySelector(".menu").style.backgroundColor = "white";
    document.getElementById("li2").style.color = "black";
    document.getElementById("li3").style.color = "black";
    document.getElementById("li4").style.color = "black";
    document.getElementById("li5").style.color = "black";
    document.querySelector(".menu").style.borderBottom = "3px solid #4aa998";
  }else{
    document.querySelector(".menu").style.height = "15vh";
    document.querySelector(".menu").style.backgroundColor = "rgba(0,0,0, 0.5)";
    document.getElementById("li2").style.color = "white";
    document.getElementById("li3").style.color = "white";
    document.getElementById("li4").style.color = "white";
    document.getElementById("li5").style.color = "white";
    document.querySelector(".menu").style.borderBottom = "none";
  }
}

if(window.innerWidth < 900) {
  window.removeEventListener('scroll',scrollFunction2);
}