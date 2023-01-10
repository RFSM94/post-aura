$(document).ready(function() {
    $(".close").click(function() {
        return parent.history.back(), !1
    });
    $(".sideways-bar-info");
    var o = ($(".sideways-bar-project"), $(".project-wrapper")),
        t = ($(".sideways"), $(".left")),
        i = ($(".closer"));

    function s(e) {
        $(e).addClass("open")
    }

    function n(e) {
        $(e).removeClass("open")
    }

    function c(e) {
        $(e).addClass("opacity")
    }

    function a(e) {
        $(e).toggleClass("opacity")
    }

    function l(e) {
        $(e).removeClass("opacity")
    }

    function r(e) {
        $(e).toggleClass("nudge")
    }

    function p(e) {
        $(e).toggleClass("blur")
    }

    function d() {
        $(".project-list-item").removeClass("selected"), $(".sideways-title").addClass("move"), $(".project-wrapper").hasClass("open") ? l(".project-loadspot") : s(o), parseInt($(window).width()) < 1024 && (a(i), p(t))
    }
    $(window).on("resize", function() {
        1024 <= $(this).width() && (l(i), function(e) {
            $(e).removeClass("blur")
        }(t))
    }), $(document).on({
   
    }, ".sideways-bar-project"), $(document).on({
        mouseenter: function() {
            r(".project-wrapper")
        },
        mouseleave: function() {
            r(".project-wrapper")
        }
    }, ".sideways-bar-project"), $(".info-circle, .info-link").on("click", function() {
        ! function(e) {
            $(e).toggleClass("open")
        }(e), l(".project-loadspot"), parseInt($(window).width()) < 1024 && (a(i), p(t), $("body").toggleClass("stopper"))
    }), $(document).on("click", ".info-link", function() {
        l(".project-loadspot"), s(e), n(o), $(".project-list-item").removeClass("selected")
    }), $(document).on("click", "header", function() {
        l(".project-loadspot"), n(o), $(".project-list-item").removeClass("selected"), $("video").each(function() {
            $(this).get(0).pause()
        })
    }), $(document).on("click", ".closer, .close-circle", function() {
        l(".project-loadspot"), n(o), n(e), a(i), p(t), $(".project-list-item").removeClass("selected"), $("body").removeClass("stopper"), $("video").each(function() {
            $(this).get(0).pause()
        }), loadDelay = window.setTimeout(function() {
            $(".project-wrapper").html("")
        }, 450)
    }), $(".project-list-item").click(function(e) {
        if ($(this).hasClass("hide-me")) e.preventDefault();
        else {
            e.preventDefault(), d(), $(this).toggleClass("selected");
            var o = $(this).attr("href");
            window.setTimeout(function() {
                $.ajax({
                    url: o,
                    success: function(e) {
                        $(".project-wrapper").html(e)
                    },

                    complete: function(e) {
                        window.setTimeout(function() {
                            c(".project-loadspot"), $(".sideways-title").addClass("stay")
                        }, 750)
                    }
                })
            }, 250)
        }
    })


})
  
       