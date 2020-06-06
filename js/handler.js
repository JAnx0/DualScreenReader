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
    if(localStorage.getItem("textRight")!=null)
        document.getElementById("rightOutput").innerHTML = localStorage.getItem("textRight");
    else
        document.getElementById("rightOutput").innerHTML= "Kein Text lokal gespeichert. Laden Sie eine beliebige .txt Datei über die untenstehende Leiste.";
    if(localStorage.getItem("textLeft")!=null)
        document.getElementById("leftOutput").innerHTML = localStorage.getItem("textLeft");
    else
        document.getElementById("leftOutput").innerHTML= "Kein Text lokal gespeichert. Laden Sie eine beliebige .txt Datei über die untenstehende Leiste.";
    // Set text names
    if(localStorage.getItem("textRightName")!=null)
        document.getElementById('file_name_right').innerHTML = localStorage.getItem("textRightName"); 
    if(localStorage.getItem("textLeftName")!=null)
        document.getElementById('file_name_left').innerHTML = localStorage.getItem("textLeftName");
    // Set background colors
    if(localStorage.getItem("colorRight")!=null)
        document.getElementById('right').style.backgroundColor = localStorage.getItem("colorRight"); 
    if(localStorage.getItem("colorLeft")!=null)
        document.getElementById('left').style.backgroundColor = localStorage.getItem("colorLeft");
    
}