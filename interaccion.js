

$("#boton-entrada").click(function(){
    $(".menu-responsive").slideDown(500);
    $("#boton-salida").slideDown(500);
    $("#boton-entrada").fadeOut(500);
})
$("#boton-salida").click(function(){
    $("#boton-salida").fadeOut();
    $(".menu-responsive").slideUp();
    $("#boton-entrada").slideDown(500);
   
})




// ajax
$(".div1 h2").click(function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax1.html", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector("section").innerHTML=this.responseText;
        }
    }
})

$(".div2 h2").click(function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax2.html", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector("section").innerHTML=this.responseText;
        }
    }
})

$(".div3 h2").click(function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax3.html", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector("section").innerHTML=this.responseText;
        }
    }
})

$(".div4 h2").click(function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax4.html", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector("section").innerHTML=this.responseText;
        }
    }
})




