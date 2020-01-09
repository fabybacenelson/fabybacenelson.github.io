$(document).ready(function(){

    if(Math.max(document.documentElement.clientWidth) >= 800){
        $("#codeQuiz").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/quizScreen.png");
        },function(){
            $("#screenHex").css("display","none");
        });

        $("#passGen").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/passScreen.png");
        },function(){
            $("#screenHex").css("display","none");
        });

        $("#weathDash").hover(function(){
            $("#screenHex").css("display","block");
            $("#screenLink").attr("xlink:href","./assets/images/weathScreen.png");
        },function(){
            $("#screenHex").css("display","none");
        });
    }
});
