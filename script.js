$(document).ready(function(){
        $(".center").delay(3000).animate({opacity: 0, marginBottom: "25%"}, 600, function(){
            $(".text").css({display: "none"});
            $(".center").css({marginBottom: "-25%"});
            $(".links").css({display: "initial" , opacity: 1});
        });
        $(".center").animate({opacity: 1, marginBottom: "0"}, 600);
    $(".links").click(function() {
        $(".center").animate({opacity: 0, marginBottom: "25%"}, 600, function(){
            $(".links").css({display: "none"});
            $(".center").css({marginBottom: "-25%"});
            $(".text").css({display: "initial" , opacity: 1});
        });
        $(".center").animate({opacity: 1, marginBottom: "0"}, 600);
    });
});
