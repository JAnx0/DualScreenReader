const url = localStorage.getItem("server-address");

const load = (url) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200)
        {
            alert(this.responseText);
        }

        xhr.open("GET", url);
        xhr.send();
    }
}