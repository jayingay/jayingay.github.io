
/* add class on nav */
$(window).scroll(function(){
        
    $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
     

 });

/* scroll down hide scroll up show header */
var scrollEffect = window.pageYOffset;
window.onscroll = function(){

    var currentPos = window.pageYOffset;

    if(scrollEffect > currentPos){
        document.getElementById('header').style.top = "0px";
    
    }else{
        document.getElementById('header').style.top = "-100px";
        document.getElementById('header').style.transition = ".5s ease-in-out";
    }

    scrollEffect = currentPos;
}

