document.getElementById('left').addEventListener('scroll', function () {
    localStorage.setItem("scroll-pos-left", document.getElementById('left').scrollTop.toString())
});

document.getElementById('right').addEventListener('scroll', function () {
    localStorage.setItem("scroll-pos-right", document.getElementById('right').scrollTop.toString())
});