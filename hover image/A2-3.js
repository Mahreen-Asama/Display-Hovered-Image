function upDate(previewPic){
    var img = document.getElementById("image");
    img.innerHTML = previewPic.alt;
    img.style.backgroundImage = "url(" + previewPic.src + ")";
    
}

function unDo(){
    var img = document.getElementById("image");
    img.innerHTML = "Hover over an image below to display here.";
    img.style.backgroundImage = "url('')";
}