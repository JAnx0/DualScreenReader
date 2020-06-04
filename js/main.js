const hide = () => {
    let line = document.getElementById('line');

    if (!line.classList.contains('hide'))
    {
        line.classList.add('hide');
    }
    else
    {
        line.classList.remove('hide');
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

document.getElementById('hamburger').addEventListener('mouseover', function () {
    let line = document.getElementById('line');

    if (!line.classList.contains('hide')) {
        line.classList.add('hide');
    }
})

document.getElementById('hamburger').addEventListener('mouseout', function () {
    let line = document.getElementById('line');

    if (line.classList.contains('hide')) {
        line.classList.remove('hide');
    }
})