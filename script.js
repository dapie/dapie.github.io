$(document).ready(function(){
    $("#open").click(function() {
        $("#main_info").animate({opacity: 0, marginTop: "600px"}, 400, function(){
            $("#main_info_container").css({display: "none"});
        });
        $("#links").css({display: "block"});
        $("#links").animate({marginTop: "0px", opacity: 1}, 700);
    });
    $("#back").click(function() {
        $("#links").animate({marginTop: "-600px", opacity: 0}, 400, function(){
            $("#links").css({display: "none"});
        });
        $("#main_info_container").css({display: "-webkit-box",display: "-moz-box",display: "-ms-flexbox",display: "-webkit-flex",display: "flex",});
        $("#main_info").animate({opacity: 1, marginTop: "0px"}, 500);
    });
});
