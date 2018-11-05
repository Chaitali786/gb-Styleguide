
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

$(document).ready(function(){

    $("#newsLink").click(function(){
        showText('NEWS');
        closeNav();
    });
    
    $("#channelLink").click(function(){
        showText('CHANNEL');
        closeNav();
    });
    $("#bookmarkLink").click(function(){
        showText('BOOKMARK');
        closeNav();
    });
    $("#overviewLink").click(function(){
        showText('OVERVIEW');
        closeNav();
    });
    $("#calendarLink").click(function(){
        showText('CALENDARLINK');
        closeNav();
    });
    $("#profileLink").click(function(){
        showText('PROFILE');
        closeNav();
    });
    $("#widgetsLink").click(function(){
        showText('WIDGETS');
        closeNav();
    });
    $("#settingsLink").click(function(){
        showText('SETTINGS');
        closeNav();
    });
    $("#contactusLink").click(function(){
        showText('CONTACT US');
        closeNav();
    });
    $("#termsLink").click(function(){
        showText('TERMS');
        closeNav();
    });
    
    $("#overlay").click(function(){
        closeNav();
    });
     $("#topnavButton").click(function(){
       openNav();
    });
    
})