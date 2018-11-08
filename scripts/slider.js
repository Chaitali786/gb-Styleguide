
 
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}


$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');




