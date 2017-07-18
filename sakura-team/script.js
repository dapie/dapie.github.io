$(document).ready(function(){
	$(".container").animate({opacity: 1, marginRight: "0"}, 500)
    $(".text").click(function() {
        $(".center").animate({opacity: 0, marginBottom: "25%"}, 600, function(){
            $(".text").css({display: "none"});
            $(".center").css({marginBottom: "-25%"});
            $(".links").css({display: "initial" , opacity: 1});
        });
        $(".center").animate({opacity: 1, marginBottom: "0"}, 600);
    });
    $(".links").click(function() {
        $(".center").animate({opacity: 0, marginBottom: "25%"}, 600, function(){
            $(".links").css({display: "none"});
            $(".center").css({marginBottom: "-25%"});
            $(".text").css({display: "initial" , opacity: 1});
        });
        $(".center").animate({opacity: 1, marginBottom: "0"}, 600);
    });
    $(".nav li").click(function() {
        $(".nav li.active").removeClass("active");
        $(this).addClass("active");
    });
});