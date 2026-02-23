        function openFullscreen() {

  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  
    let screenCover = document.querySelector(".screen-cover");
    screenCover.style.width="0px";
    screenCover.innerHTML="  ";
    screenCover.style.color="azure";
    screenCover.style.height="120dvh";
    screenCover.style.position="absolute";
    screenCover.innerHTML="  <div style=' width:200px; height:100px;font-family;system-ui;  display:flex; flex-direction:column; align-items:center; justify-content:space-around;'> <div style='font-size:1.5rem;'>  ^_^  </div>  <div style='font-size:1.5rem; letter-spacing:2px;'> شكرا </div>  </div> ";
    setTimeout(()=>{   screenCover.innerHTML="";},1500)

    screenCover.style.transitionDelay="1500ms";
}

setTimeout(()=>{
    let screenCover = document.querySelector(".screen-cover");
    screenCover.style.position="absolute";
    document.body.style.overflowY = "scroll";
    screenCover.style.width="0px";
    

},4000)


let dropDown = document.querySelector(".drop-down");
let menuExit = document.querySelector(".menu-exit");
let menuCont = document.querySelector(".menu-cont");
let menuContFill = document.querySelector(".menu-cont-fill");

menuContFill.onclick = function(){
  menuCont.style.display = "none";
  document.body.style.overflowY= "scroll";
}

dropDown.onclick = function() {
  menuCont.style.display = "block";
  document.body.style.overflowY= "hidden";
};

menuExit.onclick = function() {
  menuCont.style.display = "none";
  document.body.style.overflowY= "scroll";
};

