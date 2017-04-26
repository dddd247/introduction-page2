/*去讓對話框彈出來*/

$(document).ready(function(){
    $("button.circle1").click(function(){
        $("div.ch1").animate({
            top:'20vh',
            left: '58vw',
            opacity: '0.5',
            height: '430px',
            width: '550px'

        });

    });
});
$(document).ready(function(){
    $("button.circle2").click(function(){
        $("div.ch2").animate({
            top:'26vh',
            left: '58vw',
            opacity: '0.5',
            height: '430px',
            width: '550px',
        });

    });
});
$(document).ready(function(){
    $("button.circle3").click(function(){
        $("div.ch3").animate({
            top:'30vh',
            left: '58vw',
            opacity: '0.5',
            height: '430px',
            width: '550px',
        });

    });
});
$(document).ready(function(){
    $("button.circle4").click(function(){
        $("div.ch4").animate({
            top:'34vh',
            left: '58vw',
            opacity: '0.5',
            height: '430px',
            width: '550px',
        });

    });
});
$(document).ready(function(){
    $("button.circle5").click(function(){
        $("div.ch5").animate({
            top:'38vh',
            left: '58vw',
            opacity: '0.5',
            height: '430px',
            width: '550px',
        });

    });
});

/*讓效果展現更好,淡入淡出*/
$(document).ready(function(){ 
    $("div.ch1").hide();
    $("button.circle1").click(function(){
        $("div.ch1").fadeIn(800);
        $("div.ch2").fadeOut();      /*開一個,其他關掉*/
        $("div.ch3").fadeOut();
        $("div.ch4").fadeOut();
        $("div.ch5").fadeOut();
    });
});
$(document).ready(function(){ 
    $("div.ch2").hide();
    $("button.circle2").click(function(){
        $("div.ch2").fadeIn(800);
        $("div.ch1").fadeOut();      /*開一個,其他關掉*/
        $("div.ch3").fadeOut();
        $("div.ch4").fadeOut();
        $("div.ch5").fadeOut();
    });
});
$(document).ready(function(){ 
    $("div.ch3").hide();
    $("button.circle3").click(function(){
        $("div.ch3").fadeIn(800);
        $("div.ch1").fadeOut();      /*開一個,其他關掉*/
        $("div.ch2").fadeOut();
        $("div.ch4").fadeOut();
        $("div.ch5").fadeOut();
    });
});
$(document).ready(function(){ 
    $("div.ch4").hide();
    $("button.circle4").click(function(){
        $("div.ch4").fadeIn(800);
        $("div.ch1").fadeOut();      /*開一個,其他關掉*/
        $("div.ch2").fadeOut();
        $("div.ch3").fadeOut();
        $("div.ch5").fadeOut();
    });
});
$(document).ready(function(){ 
    $("div.ch5").hide();
    $("button.circle5").click(function(){
        $("div.ch5").fadeIn(800);
        $("div.ch1").fadeOut();      /*開一個,其他關掉*/
        $("div.ch2").fadeOut();
        $("div.ch3").fadeOut();
        $("div.ch4").fadeOut();
    });
});
