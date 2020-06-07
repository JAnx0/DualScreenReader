function handleFileSelectL(evt)
{
    const fileInput = document.getElementById("file-upload-left");
    const files = fileInput.files;
    document.getElementById('file_name_left').innerHTML = files[0].name;
    localStorage.setItem("textLeftName", files[0].name);
    const fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        var fileContent = fileReader.result;
        fileContent= fileContent.replace(/\n/g, "<br> ------------------------------ </br>");
        localStorage.setItem("textLeft", fileContent);
        document.getElementById("leftOutput").innerHTML= fileContent;
    }

    fileReader.readAsText(files[0]);
    document.getElementById('file-upload-left').addEventListener('change', handleFileSelectL, false);
}