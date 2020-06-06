window.onload = function ()
{
    // Set line position
    document.getElementById('line').style.top = localStorage.getItem("line-position");

    // Set line thickness
    document.getElementById('lineheader').style.height = localStorage.getItem("line-thickness");

    // Set scroll positions
    document.getElementById('left').scrollTop = Number(localStorage.getItem("scroll-pos-left"));
    document.getElementById('right').scrollTop = Number(localStorage.getItem("scroll-pos-right"));
    // Set texts
    document.getElementById("rightOutput").innerHTML = localStorage.getItem("textRight");
    document.getElementById("leftOutput").innerHTML = localStorage.getItem("textLeft");
    // Set text names
    document.getElementById('file_name_right').innerHTML = localStorage.getItem("textRightName");
    document.getElementById('file_name_left').innerHTML = localStorage.getItem("textLeftName");
}