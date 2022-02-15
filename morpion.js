//dome
var jouer1scor = document.querySelector('#joueur1')
var jouer2scor = document.querySelector('#joueur2')
var test = document.querySelector('#test')
var grille = document.querySelectorAll("#Grille button");
var reset = document.querySelector('#reset')
var img = document.querySelector('#img')
var audio = new Audio('sii.mp3');

//player names
player1Name = document.querySelector('#player1Name')
player2Name = document.querySelector('#player2Name')

//dome form
var form = document.querySelector('#form')
var pseudo = document.querySelector('#pseudo')
var choicePlayer = document.querySelector('#joueur')
var player2 = document.querySelector('#formBis')
var pseudo2 = document.querySelector('#pseudo2')
//var choice = document.querySelector('#cpu').value

//var
var jouer1scor = 0;
var jouer2scor = 0;
var gamer = "gamer 1"
var player = ""
let pseudo2Value;
let pseudoInString
let choiceValue

jouer1.innerHTML = jouer1scor
jouer2.innerHTML = jouer2scor

for (let i = 0; i < grille.length; i++) {
    grille[i].disabled = true
}

function choice() {
    pseudo2Value = pseudo2.value
    pseudoInString = ""
    choiceValue = choicePlayer.value
    pseudoInString = pseudo.value
    if (choiceValue === "joueur2") {
        player2.style.display = "flex"
    }
    if (pseudoInString != "" && choiceValue === "cpu" || choiceValue === "joueur2" && pseudo2Value != "") {
        form.style.display = "none";
    }
    if (pseudo2.value != "" || choiceValue === "cpu") {
        for (let i = 0; i < grille.length; i++) {
            grille[i].disabled = false
        }
    }
}






//changement de joueur 1 et 2
function clickGame(element) {
    if (element.innerHTML === "") {
        if (gamer === "gamer 1") {
            element.style.color = "blue";
            player = "X"
            test.innerHTML = pseudo.value;
            gamer = "gamer 2"

            if (choiceValue === "cpu" && gamer === "gamer 2") {
                {
                    setTimeout(() => {// appelle ma fonction avec un delai de 1sec  
                        ia()
                        gamer = "gamer 1"
                        victoiryif()
                    }, 1000); // delai toujours en milliseconde
                }
            }

        } else if (gamer === "gamer 2") {
            element.style.color = "red";
            player = "O"
            test.innerHTML = pseudo2.value;
            gamer = "gamer 1"
        }
    }

    element.innerHTML = player
    victoiryif()
}


//ia
function ia() {

    for (let i = 0; i < grille.length; i++) {
        let random = Aleatoire(0, 8)
        if (grille[random].innerHTML == "") {
            grille[random].innerHTML = "O"
            grille[random].style.color = "red";
            break;
        }
    }
}

//Condition de victoire
function victoiryif() {
    player1Name.innerHTML = pseudoInString
    if (choiceValue === "cpu") {
        player2Name.innerHTML = "cpu"
    } else {
        player2Name.innerHTML = pseudo2Value
    }


    if (grille[0].innerHTML === "X" && grille[1].innerHTML === "X" && grille[2].innerHTML === "X" ||
        grille[3].innerHTML === "X" && grille[4].innerHTML === "X" && grille[5].innerHTML === "X" ||
        grille[6].innerHTML === "X" && grille[7].innerHTML === "X" && grille[8].innerHTML === "X" ||
        grille[0].innerHTML === "X" && grille[3].innerHTML === "X" && grille[6].innerHTML === "X" ||
        grille[1].innerHTML === "X" && grille[4].innerHTML === "X" && grille[7].innerHTML === "X" ||
        grille[6].innerHTML === "X" && grille[7].innerHTML === "X" && grille[8].innerHTML === "X" ||
        grille[0].innerHTML === "X" && grille[4].innerHTML === "X" && grille[8].innerHTML === "X" ||
        grille[2].innerHTML === "X" && grille[4].innerHTML === "X" && grille[6].innerHTML === "X"
    ) {
        jouer1scor++
        jouer1.innerHTML = jouer1scor
        gamer = "gamer 1"
        stop()
        img.style.display = "block";
        audio.play();
        return
    } else if (grille[0].innerHTML === "O" && grille[1].innerHTML === "O" && grille[2].innerHTML === "O" ||
        grille[3].innerHTML === "O" && grille[4].innerHTML === "O" && grille[5].innerHTML === "O" ||
        grille[6].innerHTML === "O" && grille[7].innerHTML === "O" && grille[8].innerHTML === "O" ||
        grille[0].innerHTML === "O" && grille[3].innerHTML === "O" && grille[6].innerHTML === "O" ||
        grille[1].innerHTML === "O" && grille[4].innerHTML === "O" && grille[7].innerHTML === "O" ||
        grille[6].innerHTML === "O" && grille[7].innerHTML === "O" && grille[8].innerHTML === "O" ||
        grille[0].innerHTML === "O" && grille[4].innerHTML === "O" && grille[8].innerHTML === "O" ||
        grille[2].innerHTML === "O" && grille[4].innerHTML === "O" && grille[6].innerHTML === "O") {
        jouer2scor++
        jouer2.innerHTML = jouer2scor
        grille.disabled = "true";
        gamer = "gamer 1"
        stop()
        img.style.display = "block";
        audio.play();
        return
    } else if (matchnul()) {

    }


}
//stop le jeux
function stop() {
    for (let i = 0; i < grille.length; i++) {
        grille[i].disabled = true;
    }
}
//reset toute la grille
function restart() {
    for (var i = 0; i < grille.length; i++) {
        grille[i].innerHTML = "";
        grille[i].disabled = false;
        img.style.display = "none";
        test.innerHTML = "Grille"
        gamer = "gamer 1"
    }
}
function matchnul() {
    var reply = 0;
    for (let i = 0; i < grille.length; i++) {
        if (grille[i].innerHTML != "") {
            reply++
        }
    }
    if (reply === 9) {
        test.innerHTML = "Egalité"
        gamer = "gamer 1"
        return
    }
}
function Aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



