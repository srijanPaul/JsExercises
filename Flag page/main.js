var names = ["Great Britian" , "Japan", "India", "Namibia", "South Sudan", "Canada"];
let flags = [];


function showname(num){
    document.getElementById("textbox").innerHTML = names[num];
}

function clearText(){
    document.getElementById("textbox").innerHTML = "";
}
