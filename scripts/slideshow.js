
function dot(img, quotes, dotNum){
    count=dotNum;

    update(dotNum, img, quotes);

}
function arrow(img,quotes,side){
    if (side=="right"){
        count++;
        if (count== img.length){
            count=0;
        }
    }
    if (side=="left"){
        count--;
        if (count== -1){
            count=img.length-1;
        }
    }
    update(count, img, quotes);


}
function update(count, img, quotes){

    $(".gb-title-medium.gb-text-black.des-text").text(quotes[count][0]);
    $(".gb-title-tiny.gb-text-grey").text(quotes[count][1]);
    if (count===0){
        $("#left-img").attr("src",img[img.length-1]).hide().fadeIn(400);
        $("#center-img").attr("src",img[0]).hide().fadeIn(200);
        $("#right-img").attr("src",img[1]).hide().fadeIn(400);

    }
    if (count===(img.length-1))
    {  
        $("#left-img").attr("src",img[img.length-2]).hide().fadeIn(400);
        $("#center-img").attr("src",img[img.length-1]).hide().fadeIn(200);
        $("#right-img").attr("src",img[0]).hide().fadeIn(400); 
    }
    else
    {
        $("#left-img").attr("src",img[count-1]).hide().fadeIn(400);
        $("#center-img").attr("src",img[count]).hide().fadeIn(200);
        $("#right-img").attr("src",img[count + 1]).hide().fadeIn(400);
    }
    for (let i = 0; i< img.length;i++){
        let id = "#dot"+i;
        if (i==count){
            $(id).css("background-color","rgb(249,99,50)");
        }
        else {
            $(id).css("background-color","rgb(187,187,187)");
        }

    }

}
$(document).ready(function(){
    count=1;


    img = ['img/slideshow/img1.png', 'img/slideshow/img2.png' , 'img/slideshow/img3.png','img/slideshow/img4.png','img/slideshow/img5.png'];
    quotes = [

        [
            "upper1","lower1"
        ],
        [
            "Melting ice in Arctic Ocean","James Flinton"
        ],
        [
            "upper3","lower3"
        ],
        [
            "upper4",  "lower4"
        ],
        [
            "upper5","lower5"
        ]
    ];



    for (let i = 0; i< img.length;i++){
        let onClickString = 'dot(img,quotes,' +i +')';
        $('<span/>', {
            id: 'dot' + i,
            class: 'dot',
            onclick: onClickString   

        }).appendTo('.dots');
    }    
    $("#left-img").click(function(){
        arrow(img,quotes,'left');
    });
    $("#right-img").click(function(){
        arrow(img,quotes,'right');
    });
     $("#arrow-left").click(function(){
        arrow(img,quotes,'left');
    });
    $("#arrow-right").click(function(){
        arrow(img,quotes,'right');
    });
    $("#dot1").css("background-color","rgb(249,99,50)");
})