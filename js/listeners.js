let destUrl = localStorage.getItem("server-address");
if (destUrl === null)
{
    destUrl = 'http://idefix.informatik.htw-dresden.de/bibo/';
}

const load = (webDiv, dest, url) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let myObj = JSON.parse(this.responseText);

            let output = '<h3 style="float: right; margin-bottom: 2%;" onclick="document.getElementById(\'web-content\').style.display = \'none\'">x</h3><p id="item-0" onclick="getTxt(this.id, \'' + dest + '\')">';

            for (let i in myObj)
            {
                output += myObj[i] + '</p><p id="item-' + Number(Number(i) + 1).toString() + '" onclick="getTxt(this.id, \'' + dest + '\')">';
            }

            output += "</p>";

            webDiv.innerHTML = output;
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

document.getElementById('left').addEventListener('scroll', function () {
    localStorage.setItem("scroll-pos-left", document.getElementById('left').scrollTop.toString())
});

document.getElementById('right').addEventListener('scroll', function () {
    localStorage.setItem("scroll-pos-right", document.getElementById('right').scrollTop.toString())
});

document.getElementById('left-download').addEventListener('click', function () {
    let webDiv = document.getElementById('web-content');
    let lineVisibility = localStorage.getItem("line-visibility");

    if (lineVisibility === "hidden")
    {
        if (webDiv.style.display === 'none')
        {
            webDiv.style.display = 'inline';
            load(webDiv, 'left', destUrl);
        }
        else
        {
            webDiv.style.display = 'none';
        }
    }
    else
    {
        if (webDiv.style.display === 'none')
        {
            hideLine();
            webDiv.style.display = 'inline';
            load(webDiv, 'left', destUrl);

        }
        else
        {
            showLine();
            webDiv.style.display = 'none';
        }
    }
})

document.getElementById('right-download').addEventListener('click', function () {
    let webDiv = document.getElementById('web-content');
    let lineVisibility = localStorage.getItem("line-visibility");

    if (lineVisibility === "hidden")
    {
        if (webDiv.style.display === 'none')
        {
            webDiv.style.display = 'inline';
            load(webDiv, 'right', destUrl);
        }
        else
        {
            webDiv.style.display = 'none';
        }
    }
    else
    {
        if (webDiv.style.display === 'none')
        {
            hideLine();
            webDiv.style.display = 'inline';
            load(webDiv, 'right', destUrl);

        }
        else
        {
            showLine();
            webDiv.style.display = 'none';
        }
    }
})