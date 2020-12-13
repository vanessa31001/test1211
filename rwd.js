// hamburger icon 的切換
$(function(){
    $("button.hamburger").on("click", function(){
        $(this).toggleClass("is-active");
        $('.nav1').slideToggle();
    });
});

//A內容更換
$(window).resize(function(){
    if(window.innerWidth < 576){
        $(".aList>p").text("A:Click"); 
    }
    if(window.innerWidth >= 576){
        $(".aList>p").text("A:Hover"); 
    }
});

//A點擊後出現list
$(function showAList(){
    if(window.innerWidth < 576){
        $("li.aList").on("click",function(){
            $("#nav2").toggleClass("showlist");
            console.log(window.innerWidth);
        })
    }
});

//每0.5秒針測視窗大小
setInterval(function(){
    if(window.innerWidth >= 576){
        $("#nav2").removeClass("showlist");
    }
},500);
