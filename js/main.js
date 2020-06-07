const hide = () => {
    let line = document.getElementById('line');

    if (!line.classList.contains('hide'))
    {
        line.classList.add('hide');
        localStorage.setItem("line-visibility", "hidden");
    }
    else
    {
        line.classList.remove('hide');
        localStorage.setItem("line-visibility", "visible");
    }
}

const thick = () => {
    let line = document.getElementById('lineheader');

    if (!line.classList.contains('thick'))
    {
        line.classList.add('thick');
        line.style.height = '5px';
        localStorage.setItem("line-thickness", "5px");
    }
    else
    {
        line.classList.remove('thick');
        line.style.height = '3px';
        localStorage.setItem("line-thickness", "3px");
    }
}

const swapColors = () => {
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    if (right.classList.contains('yellow'))
    {
        right.classList.remove('yellow');
        right.style.backgroundColor = 'white';
        left.classList.add('yellow');
        left.style.backgroundColor = 'yellow';
        localStorage.setItem("colorRight", "white");
        localStorage.setItem("colorLeft", "yellow");

    }
    else
    {
        left.classList.remove('yellow');
        left.style.backgroundColor = 'white';
        right.classList.add('yellow');
        right.style.backgroundColor = 'yellow';
        localStorage.setItem("colorLeft", "white");
        localStorage.setItem("colorRight", "yellow");
    }
}

const serverAddress = () => {
    let defaultAddress = 'http://idefix.informatik.htw-dresden.de/bibo/';
    let localAddress = localStorage.getItem("server-address");

    if (!localAddress)
    {
        let serverAddress = prompt('Bitte Server-URL eingeben:', defaultAddress);
        if (serverAddress[serverAddress.length - 1] === '/')
            localStorage.setItem("server-address", serverAddress.toString());
        else
            localStorage.setItem("server-address", serverAddress.concat('/').toString());
    }
    else
    {
        let serverAddress = prompt('Bitte Server-URL eingeben:', localAddress);
        if (serverAddress[serverAddress.length - 1] === '/')
            localStorage.setItem("server-address", serverAddress.toString());
        else
            localStorage.setItem("server-address", serverAddress.concat('/').toString());
    }
}

const reset = () => {
    window.localStorage.clear();
    location.reload();
}

const hideLine = () => {
    let line = document.getElementById('line');

    if (!line.classList.contains('hide')) {
        line.classList.add('hide');
    }
}

const showLine = () => {
    let line = document.getElementById('line');

    if (line.classList.contains('hide')) {
        line.classList.remove('hide');
    }
}

function openNav() {
    document.getElementById("mySidebar").style.height = "400px";
    document.getElementById("mySidebar").style.paddingTop = "30px";
    let lineVisibility = localStorage.getItem("line-visibility");

    if (!(lineVisibility === 'hidden'))
    {
        hideLine();
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("mySidebar").style.paddingTop = "0px";
    let lineVisibility = localStorage.getItem("line-visibility");
    

    if (!(lineVisibility === 'hidden'))
    {
        showLine();
    }
}

const getTxt = (elementId, outputDiv) => {
    let url = localStorage.getItem("server-address");
    if (url === null)
    {
        url = 'http://idefix.informatik.htw-dresden.de/bibo/';
    }

    let file = document.getElementById(elementId).innerHTML;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let output= this.responseText.replace(/\n/g, "<br> ------------------------------ </br>"); // added paragraph highlighting

            document.getElementById(outputDiv + 'Output').innerHTML = output;
            document.getElementById('file_name_' + outputDiv).innerHTML = file;

            if(outputDiv==='left') {
                localStorage.setItem("textLeft", output); //storing texts locally
                localStorage.setItem("textLeftName", file);
            }
            else {
                localStorage.setItem("textRight", output);
                localStorage.setItem("textRightName", file);
            }
        }
    };

    xhr.open("GET", url + file, true);
    xhr.send();
}