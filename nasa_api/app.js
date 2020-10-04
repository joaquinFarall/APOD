//Llamo a la API
let req = new XMLHttpRequest();
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "oWeTgvDU2qldPwoUaVjWjN6mfGeJ0OpklCUG7UoW";

let btn = document.getElementById("btn-get");
btn.addEventListener('click', getAPOD);

function getAPOD(){
    btn.hidden = true;
    document.getElementById("container").hidden = false;
    req.open("GET", url+api_key, true);
    req.send();

    req.addEventListener("load", function(){
        if(req.status == 200 && req.readyState == 4){
            var response = JSON.parse(req.responseText);
            document.getElementById("title").innerHTML = response.title;
            document.getElementById("date").innerHTML = response.date;
            document.getElementById("copyright").innerHTML = "By: "+response.copyright;
            document.getElementById("explanation").innerHTML = response.explanation;
            if(response.media_type == "image"){
                document.getElementById("media").innerHTML = `<img src="${response.hdurl}" width="500">`;
            }else if(response.media_type == "video"){
                document.getElementById("media").innerHTML = `<iframe src="${response.url}" width="500"></iframe>`;
            }
        }
    })
}