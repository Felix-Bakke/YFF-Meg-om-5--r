

//endre bakgrunnsfargene
function changeBackgroundColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "white", "brown", "orange", "pink", "wheat", "aqua", "navy"]; // listen med farger (jeg la til noen flere)
    // Skriv koden din her!!
    const randomcolor = colors[Math.floor(Math.random()* colors.length)]; // dette vil velge en tilfeldig farge.
    document.body.style.backgroundColor = randomcolor; // og dette vil ta denne tilfeldige fargen å sette den som bakgrunnsfarge.
    document.getElementById("#toppen").style.backgroundColor = randomcolor;
}
function changeBack () {
    document.body.style.backgroundColor = "";
    document.getElementById("#toppen").style.backgroundColor = "";
}


function changeBackgroundColor2() {
    const colors = ["red", "blue", "green", "yellow", "purple", "white", "brown", "orange", "pink", "wheat", "aqua", "navy"]; // listen med farger (jeg la til noen flere)
    // Skriv koden din her!!
    const randomcolor = colors[Math.floor(Math.random()* colors.length)]; // dette vil velge en tilfeldig farge.
    const idliste = ["nav2", "kant5", "kant4", "header", "kant", "kant2", "kant3"];
    const randomid = idliste[Math.floor(Math.random()* idliste.length)];
    document.getElementById(randomid).style.backgroundColor = randomcolor; // og dette vil ta denne tilfeldige fargen å sette den som bakgrunnsfarge.
}
function changeBack2 () {
    document.getElementById("nav2").style.backgroundColor = "";
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("kant").style.backgroundColor = "";
    document.getElementById("kant2").style.backgroundColor = "";
    document.getElementById("kant3").style.backgroundColor = "";
    document.getElementById("kant4").style.backgroundColor = "";
    document.getElementById("kant5").style.backgroundColor = "";
}




// endre farge tema på alt

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeToggle");

// her så vil den bytte mellom dark mode og light mode
    themeButton.addEventListener("click", () => { 
        document.body.classList.toggle("dark-mode"); 
        document.body.classList.toggle("light-mode");

        // Lagre brukerens valg i localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Sjekk lagret tema og bruk det
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme + "-mode");
    } else {
        document.body.classList.add("light-mode"); // Standard modus
    }
});




function addToDo() {
    let selectedWord = document.querySelector("#wordList").value;
    const colors = ["red", "blue", "green", "yellow", "purple", "white", "brown", "orange", "pink", "wheat", "aqua", "navy"]; // listen med farger (jeg la til noen flere)
    //skriv koden din her!!
    if (selectedWord) {
        let li = document.createElement("li");
        li.textContent = selectedWord;
        
        let slett = document.createElement("button");
        slett.textContent = "X"; // legger til en 'X' ved siden av det man legger til slik at man kan fjerne det man legger til.
        slett.style.marginLeft = "10px"; // legger 10px mellomrom ved siden av 'X* til venstre for den slik at det er et lite mellomrom
        slett.onclick = function () { // dette er functionen som får 'X' til å fungere 
            li.remove(); 
        };
        li.onclick = function(){

            const colors = ["red", "blue", "green", "yellow", "purple", "white", "brown", "orange", "pink", "wheat", "aqua", "navy"]; // listen med farger (jeg la til noen flere)
    // Skriv koden din her!!
    const randomcolor = colors[Math.floor(Math.random()* colors.length)]; // dette vil velge en tilfeldig farge.
    const idliste = ["nav2", "kant5", "kant4", "header", "kant", "kant2", "kant3"];
    const randomid = idliste[Math.floor(Math.random()* idliste.length)];
    document.getElementById(randomid).style.backgroundColor = randomcolor; // og dette vil ta denne tilfeldige fargen å sette den som bakgrunnsfarge.

        }
        li.appendChild(slett); 
        document.querySelector("#nav2").appendChild(li);
    }
       
      
}



