moveLine(document.getElementById("line"));

function moveLine(elmnt)
{
    let y1 = 0, y2 = 0;

    if (document.getElementById(elmnt.id + "header"))
    {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else
    {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e)
    {
        e = e || window.event;
        e.preventDefault();

        y2 = e.clientY;

        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e)
    {
        e = e || window.event;
        e.preventDefault();

        y1 = y2 - e.clientY
        y2 = e.clientY

        let pos = elmnt.offsetTop - y1;

        elmnt.style.top = (pos) + "px";
        localStorage.setItem("line-position", pos.toString() + "px");
    }

    function closeDragElement()
    {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}