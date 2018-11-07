


function onRangeChange(){
    
    var slider = document.getElementById("myRange");
    var value_temp = (slider.value - slider.getAttribute("min")) / (slider.getAttribute("max"))-slider.getAttribute("min"));
    slider.style.backgroundImage ='-webkit-gradient(liner , left top ,right top,'+'color-stop('+value_temp+',#047a9c),'+'color-stop('+value_temp+',#c7c7c7)'+')';
    
}



           
        
    
