$(function(){
    tabs();
    popup();
});
function tabs(){
    $(".board_title li").click(function(){
        if(!$(this).hasClass("on")) {
            $("#gallery").css("display","block");
        } else {
            $("#gallery").css("display","none");
        }
    });
}
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