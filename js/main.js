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
    }
    else
    {
        line.classList.remove('thick');
        line.style.height = '3px';
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
    }
    else
    {
        left.classList.remove('yellow');
        left.style.backgroundColor = 'white';
        right.classList.add('yellow');
        right.style.backgroundColor = 'yellow';
    }
}

const serverAdress = () => {
    let server = prompt('Bitte Server-URL eingeben:', 'http://idefix.informatik.htw-dresden.de/bibo/');
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