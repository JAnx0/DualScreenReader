function handleFileSelectR(evt)
{
    const fileInput = document.getElementById("file-upload-right");
    const files = fileInput.files;
    document.getElementById('file_name_right').innerHTML = files[0].name;
    localStorage.setItem("textRightName", files[0].name);
    const fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        var fileContent = fileReader.result;
        fileContent= fileContent.replace(/\n/g, "<br> ------------------------------ </br>");
        localStorage.setItem("textRight", fileContent);
        document.getElementById("rightOutput").innerHTML= fileContent;
    }

    fileReader.readAsText(files[0]);
    document.getElementById('file-upload-right').addEventListener('change', handleFileSelectR, false);
}