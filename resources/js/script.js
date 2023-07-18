/*$(document).ready(function(){
    
    
   $('.js--features').waypoints(function(direction) {
      if(direction == "down"){
          $("nav").addClass("sticky");
      }
       else{
           $("nav").removeClass("sticky");
       } 
    
    
    });
    
    
});*/


let prevScrollpos=window.pageYOffset;
window.onscroll=function(){
    let currentScrollPos=window.pageYOffset;
    if(prevScrollpos>currentScrollPos){
        document.querySelector("sticky").style.top="0";
    }
    else{
        document.querySelector("sticky").style.top="-50px";
    }
    prevScrollpos=currentScrollPos
}