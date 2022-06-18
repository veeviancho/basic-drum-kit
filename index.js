// Detect click
for (let i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// Detect keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {
    var sounds = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
    switch(key) {
        case "w":
            let audio1 = new Audio("sounds/" + sounds[0] + ".mp3");
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio("sounds/" + sounds[1] + ".mp3");
            audio2.play();
            break;

        case "s":
            let audio3 = new Audio("sounds/" + sounds[2] + ".mp3");
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio("sounds/" + sounds[3] + ".mp3");
            audio4.play();
            break;

        case "j":
            let audio5 = new Audio("sounds/" + sounds[4] + ".mp3");
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio("sounds/" + sounds[5] + ".mp3");
            audio6.play();
            break;

        case "l":
            let audio7 = new Audio("sounds/" + sounds[6] + ".mp3");
            audio7.play();
            break;

        default: 
            console.log(key);
    }
}

function buttonAnimation(key) {
    var element = document.querySelector("." + key);
    element.classList.add("pressed");
    window.setTimeout(function() {
        element.classList.remove("pressed")
    }, 100); //0.1s
}