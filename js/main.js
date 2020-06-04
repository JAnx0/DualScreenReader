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