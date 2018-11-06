function openNav() {
    document.getElementById("mySidenav").style.width = "175px";
    document.getElementById("main").style.marginLeft = "175px";
    document.getElementById("main").style.marginTop = "-6px";
     document.getElementById("overlay").style.display = "block";
     document.getElementById('overlay').style.marginLeft = "175px";
}

function closeNav() {
    
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.marginTop = "-6px";
    document.getElementById("overlay").style.display = "none";
   
}
 
function showText(menuName)
    {
        document.getElementById("text1").style.display = "block";
        document.getElementById("text1").innerHTML = menuName;
    }

