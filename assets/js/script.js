$(document).ready(function(){

    if(Math.max(document.documentElement.clientWidth) >= 800){
        $("#codeQuiz").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/quizScreen.png");
            $("#fillHex").attr("fill","url(#screenImg)");
        },function(){
            // $("#screenHex").css("display","none");
            $("#fillHex").attr("fill","#6eb5c2");
        });

        $("#passGen").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/passScreen.png");
            $("#fillHex").attr("fill","url(#screenImg)");
        },function(){
            // $("#screenHex").css("display","none");
            $("#fillHex").attr("fill","#6eb5c2");
        });

        $("#weathDash").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/weathScreen.png");
            $("#fillHex").attr("fill","url(#screenImg)");
        },function(){
            // $("#screenHex").css("display","none");
            $("#fillHex").attr("fill","#6eb5c2");
        });
    }
});
