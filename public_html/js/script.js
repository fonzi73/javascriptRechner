var eingabe = 0;
function naechsteEingabe(eingabeAktuell) {
    document.getElementById("wert" + (++eingabeAktuell)).type = "number";
    if (eingabeAktuell === 2){
        eingabe += 1;
    }
    eingabe += 1;
    document.getElementById("test").innerHTML = eingabe;
}

function myFunctionAri() {

    var i;
    var sum = 0;
    for (i = 0; i <  3; i++) {
        sum += parseInt(document.getElementById("wert" + (i + 1)).value);
    }
    document.getElementById("ausgabe").value = sum / eingabe;
    eingabe = 0;
}

function resetB(){
    var i;
    for (i = 0; i < 3; i++){
        if(i === 0){
            var j;
            for (j = 0; j < 3; j++){
            document.getElementById("wert" + (j + 1)).value = "";
        }} else{
        document.getElementById("wert" + (i +1)).type = "hidden";       
    }
    }
    document.getElementById("ausgabe").value = "";
}