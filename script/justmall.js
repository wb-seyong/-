$(function(){
    tabs();
    popup();
    gnb();
});
function gnb(){
    //메인메뉴 마우스 오버하면 서브메뉴 모두 부드럽게 펼쳐줘
    //그리고 마우스 오버한 메인메뉴는 하이라이트를 적용해줘
    // $("#gnb > li").mouseover(function(){
    //     $(this).addClass("on"); //추가해
    //     $(".lnb").show();
    // });
    // $("#gnb > li").mouseout(function(){
    //     $(this).removeClass("on");//제거해
    //     $(".lnb").hide();
    // })

    // $("#gnb > li").hover(
    //     function(){
    //         $(this).addClass("on");
    //         $(".lnb").show();
    //     },
    //     function(){
    //         $(this).removeClass("on");
    //         $(".lnb").hide();
    //     }
    // )
    $("#gnb > li").on({
        mouseover:function(){
            $(this).addClass("on");
            $(".lnb").show();
        },
        mouseout:function(){
            $(this).removeClass("on");
            $(".lnb").hide();
        }
    });
}
function tabs(){
    // notice_on();
    // gallery_on();
    $(".board_title li").click(function(){
//        console.log("클릭한 LI :"+$(this).index());
        if(!$(this).hasClass("on")) {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });
}
// function notice_on(){
// }
// function gallery_on(){
//     $(".board_title li").click(function(){

//     });
// }
function popup() {
    popup_open();
    popup_close();
    }
function popup_open() {
    $("#notice li:eq(0)").click(function(){
        //console.log("click");
        $(".popup").css("display","block");
    });
}
function popup_close(){
    $(".popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
    });
}