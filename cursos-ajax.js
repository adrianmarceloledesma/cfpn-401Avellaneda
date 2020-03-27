
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




 