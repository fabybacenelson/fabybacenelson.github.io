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

    if(Math.max(document.documentElement.clientWidth) <= 550){
        $("#catsLink").attr("href", "#imgHex");
        $("#catsTrap").attr("points", "25,0 75,0 100,43 50,43");
        $("#catsTri").attr("points", "0,43 25,0 50,43");

        $("#catIcon").attr("x", "15");
        $("#catIcon").attr("y", "19");

        $(".my").attr("x", "43");
        $(".cats").attr("x", "51");
    }

    $(window).on('resize', function(){
        if(Math.max(document.documentElement.clientWidth) <= 550){
            $("#catsLink").attr("href", "#imgHex");
            $("#catsTrap").attr("points", "25,0 75,0 100,43 50,43");
            $("#catsTri").attr("points", "0,43 25,0 50,43");
    
            $("#catIcon").attr("x", "15");
            $("#catIcon").attr("y", "19");
    
            $(".my").attr("x", "43");
            $(".cats").attr("x", "51");
        }else{
            $("#catsLink").attr("href", "#");
            $("#catsTrap").attr("points", "0,0 50,0 75,43 25,43");
            $("#catsTri").attr("points", "50,0 100,0 75,43");
    
            $("#catIcon").attr("x", "65");
            $("#catIcon").attr("y", "6");
    
            $(".my").attr("x", "22");
            $(".cats").attr("x", "29");
        }
    });

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
