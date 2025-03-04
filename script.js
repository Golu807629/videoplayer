var upload = document.getElementById("btn");
var video = document.getElementById("box");
upload.onchange = function (){
    var body1 = document.body;
    body1.style.background = "url('images/load.gif')";
    body1.style.backgroundSize = "cover";
    
    var reader = new FileReader;
    reader.readAsDataURL(upload.files[0]);
    reader.onload = function(){setTimeout(function (){
        file = reader.result;
        video.src = file;
        
        video.style.display = "block";
        video.style.backgroundSize = "cover";
        body1.style.background = "none";
    }, 5000)
}
    }