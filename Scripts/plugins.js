$(document).ready(function () {
    "use strict";

    $("html").niceScroll();
    //المدة الخاصة بالاسليدر
    $('.carousel').carousel({
        interval: 6000
    });
    //Show Color Option Div When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").slideToggle(600);

    });


    //Change Theme Color On Click
    var Color_li = $(".color-option ul li");
    
    Color_li.eq(0).css("backgroundColor", "#E41B17").end()
            .eq(1).css("backgroundColor", "#ffd800").end()
            .eq(2).css("backgroundColor", "#0a36b0").end()
            .eq(3).css("backgroundColor", "#00ff21").end()
            .eq(4).css("backgroundColor", "#f800cd");
    Color_li.click(function () {
        $("link[href*='TemplateColor']").attr("href",$(this).attr("data-value"));
        //console.log($(this).attr("data-value"));
    });



    //Loding Screen

    //$(window).load(function () {
    //    //Loding Elements
    //    $(".loding-overlay .spinner").fadeOut(2000,
    //        function () {
    //            $(this).parent().fadeOut(2000,
    //                function () {
    //                    //Show The Scroll
    //                    $("body").css("overflow", "auto");
    //                    $(".loding-overlay").css("position", "fixed");  
    //                    $(this).remove();

    //                });
    //        })
    //});


    //Loding Screen
    $(window).on("load", function () {
        //Loding Elements
        $(".loding-overlay .spinner").fadeOut(2000,
            function () {
                $(this).parent().fadeOut(2000);
            })
    });

    //Smoothly Scroll To Element
    $(".navbar li").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top  +1
        }, 1000);

    });


    //Caching The Scroll Top Element 
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        //console.log($(this).scrollTop());
        $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();

        $(".block").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top -150)  {
                //console.log($(this).attr("id"));
                var blockID = $(this).attr("id");
                $("#bs-example-navbar-collapse-1 ul li").removeClass("active");
                $('#bs-example-navbar-collapse-1 ul li[data-scroll="' + blockID + '"]').addClass("active");
            }

        });

    });

    //click On Button To Scroll Top
    scrollButton.click(function () {  
        $("html,body").animate({ scrollTop: 0 }, 600);

    });
    




    


});