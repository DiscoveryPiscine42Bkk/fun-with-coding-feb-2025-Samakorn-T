$(document).ready(function () {
    $(".hamburger").click(function () {
        $("#nav-menu").slideToggle();
    });

    function isInViewport(element) {
        let rect = element.get(0).getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= $(window).height();
    }

    function handleScroll() {
        $(".experience-item").each(function () {
            if (isInViewport($(this))) {
                $(this).addClass("visible");
            }
        });
    }

    $(window).on("scroll", handleScroll);
    handleScroll();
});
