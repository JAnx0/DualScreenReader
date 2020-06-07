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
    const defaultAddress = 'http://idefix.informatik.htw-dresden.de/bibo/';
    const localAddress = localStorage.getItem("server-address");

    if (!localAddress)
    {
        let serverAddress = prompt('Bitte Server-URL eingeben:', defaultAddress);
        localStorage.setItem("server-address", serverAddress.toString());
    }
    else
    {
        let serverAddress = prompt('Bitte Server-URL eingeben:', localAddress);
        localStorage.setItem("server-address", serverAddress.toString());
    }
}

const reset = () => {
    window.localStorage.clear();
    location.reload();
}

const showMenu = () => {
    let menu = document.getElementById('ddct');
    let lineVisibility = localStorage.getItem("line-visibility");

    if (lineVisibility === "hidden")
    {
        if (menu.style.display === 'none')
        {
            menu.style.display = 'block';
        }
        else
        {
            menu.style.display = 'none';
        }
    }
    else
    {
        if (menu.style.display === 'none')
        {
            menu.style.display = 'block';
            hideLine();
        }
        else
        {
            menu.style.display = 'none';
            showLine();
        }
    }



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