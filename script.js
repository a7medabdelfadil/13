var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    // Line
    var pageHeight = document.documentElement.scrollHeight;
    var visiblePageHeight = document.documentElement.clientHeight;
    var scrollHeight = pageHeight - visiblePageHeight;
    var scrollPosition = window.scrollY;
    var lineWidthPercent = scrollPosition / scrollHeight * 100;
    line1.style.width = lineWidthPercent + "%";
    line2.style.width = lineWidthPercent + "%";

    // Button
    if (window.pageYOffset > 1000) {
        scrollToTopBtn.style.opacity = "1";
    } else {
        scrollToTopBtn.style.opacity = "0";
    }

    // Scroll
    if (window.scrollY < 1000) {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#607d8b');
    } else if (window.scrollY < 2000) {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#009688');
    } else if (window.scrollY < 3000) {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#4caf50');
    } else {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#8bc34a');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
