let scene = document.querySelector(".scene");
let message = document.getElementById("message");
let audio = document.getElementById("audio");

let changed = false;

function changeScene() {
    if (changed === false) {
        scene.style.backgroundColor = "#f0b77b";
        message.innerText = "A peaceful sunset in Vancouver.";
        changed = true;
    } else {
        scene.style.backgroundColor = "#8ba5b5";
        message.innerText = "A rainy day in Vancouver.";
        changed = false;
    }
}


audio.addEventListener("play", function() {
    message.innerText = "Listen to the sounds of Vancouver.";
    scene.style.opacity = "1";
    scene.classList.add("playing");
});

audio.addEventListener("pause", function() {
    message.innerText = "The sound has stopped.";
    scene.style.opacity = "0.7";
    scene.classList.remove("playing");
});

