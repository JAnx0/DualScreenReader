window.onload = function ()
{
    // Set line position
    document.getElementById('line').style.top = localStorage.getItem("line-position");

    // Set line thickness
    document.getElementById('line').style.height = localStorage.getItem("line-thickness");

    // Set scroll positions
    document.getElementById('left').scrollTop = Number(localStorage.getItem("scroll-pos-left"));
    document.getElementById('right').scrollTop = Number(localStorage.getItem("scroll-pos-right"));

}