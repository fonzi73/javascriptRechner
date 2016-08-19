function naechsteEingabe(eingabeAktuell) {
    if (document.getElementById("wert1").value !== "") {
        var zeile = '<tr>\n\
                <td></td>\n\
                <td><input id="" type="number" name="" value="' + document.getElementById("wert1").value + '" /></td>\n\
                </tr>';
        document.getElementById("janko").innerHTML += zeile;
    }
//                document.getElementById("wert1").focus();
//            document.getElementById("wert" + (++eingabeAktuell)).type = "number";
}

function myFunctionAri() {
    var i;
    var sum = 0;
    var zaehler = 0;
    var anzahl = document.forms[0].elements.length;
    for (i = 1; i < anzahl; i++) {
////        document.getElementById("test").innerHTML = parseInt(document.getElementById("wert" + (i + 1)).value);
        if (document.forms[0].elements[i].value !== "") {
            sum += parseInt(document.forms[0].elements[i].value);
            zaehler++;
        }
    }
    if (zaehler > 0) {
        document.getElementById("ausgabe").value = sum / zaehler;
    }
}

function resetButton() {

    var jankoStart = '<tr>\n\
                    <td>Wert: </td>\n\
                    <td><input id="wert1" type="number" name="" value="" onblur="naechsteEingabe()" /></td>\n\
                    </tr>';
    document.getElementById("janko").innerHTML = jankoStart;
    document.getElementById("ausgabe").value = "";
}