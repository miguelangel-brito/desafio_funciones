//4 vaiables
const blue = document.querySelector("#blue");
blue.setAttribute("style", "background-color: blue");

const black = document.querySelector("#black");
black.setAttribute("style", "background-color: black");

const red = document.querySelector("#red");
red.setAttribute("style", "background-color: red");

const yellow = document.querySelector("#yellow");
yellow.setAttribute("style", "background-color: yellow");

//funcion
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorselect = "grey";
        return;
    } else if (event.key === "s") {
        colorselect = "purple";
        return;
    } else if (event.key === "d") {
        colorselect = "brown";
        return;
    }
});
function changeColor(event) {
    const change = event.target;
    change.style.background = colorselect;
}
blue.addEventListener("click", changeColor);
black.addEventListener("click", changeColor);
red.addEventListener("click", changeColor);
yellow.addEventListener("click", changeColor);