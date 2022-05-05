import {HangmanHelper} from 'HangmanHelper.js';

function myFunction()
{

    let hh = new HangmanHelper(document.getElementById("input").value, document.getElementById("exclude").value);

    let temp = "";
    for (let i in hh.alphabetList)
    {
        temp += hh.alphabetList[i][0] + ": " + hh.alphabetList[i][1] + "<br>";
    }
    document.getElementById("alphabetList").innerHTML = temp;

    temp = "";
    for (let i in hh.finalLibrary)
    {
        temp += hh.finalLibrary[i] + "<br>";
    }
    temp += "<br>" + hh.finalLibrary.length + "<br>";
    document.getElementById("finalLibrary").innerHTML = temp;

}

document.getElementById("button").onclick = function() {myFunction()};

document.querySelector("include, exclude").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    document.querySelector("button").click();
    event.preventDefault()
});
