const ele = document.querySelector ("#ele1");
ele.setAttribute("style","background-color: green")

const pinta = (setColor, color) => {
    setColor.style.backgroundColor = color;
};
ele.addEventListener("click", () => pinta(ele, "yellow"));