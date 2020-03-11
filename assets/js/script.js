$(document).ready(function(){

    $("#catsLink").click(function(){
        if($("#imgHex").attr("fill") == "url(#img1)"){
            $("#imgHex").attr("fill", "url(#img2)");
            $(".myCats").css("fill", "#6eb5c2");
        }else if($("#imgHex").attr("fill") == "url(#img2)"){
            $("#imgHex").attr("fill", "url(#img1)");
            $(".myCats").css("fill", "#fbf8e5");
        }
    })

    // if(Math.max(document.documentElement.clientWidth) >= 800){
    //     $("#codeQuiz").hover(function(){
    //         $("#screenHex").css("display","block");
    //         $("#screenLink").attr("xlink:href","./assets/images/quizScreen.png");
    //         $("#fillHex").attr("fill","url(#screenImg)");
    //     },function(){
    //         // $("#screenHex").css("display","none");
    //         $("#fillHex").attr("fill","#a4d0d9");
    //     });

    //     $("#passGen").hover(function(){
    //         $("#screenHex").css("display","block");
    //         $("#screenLink").attr("xlink:href","./assets/images/passScreen.png");
    //         $("#fillHex").attr("fill","url(#screenImg)");
    //     },function(){
    //         // $("#screenHex").css("display","none");
    //         $("#fillHex").attr("fill","#a4d0d9");
    //     });

    //     $("#weathDash").hover(function(){
    //         $("#screenHex").css("display","block");
    //         $("#screenLink").attr("xlink:href","./assets/images/weathScreen.png");
    //         $("#fillHex").attr("fill","url(#screenImg)");
    //     },function(){
    //         // $("#screenHex").css("display","none");
    //         $("#fillHex").attr("fill","#a4d0d9");
    //     });
    // }
});
