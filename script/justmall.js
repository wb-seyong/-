$(function(){
    tabs();
    popup();
});
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