const POP_UP = document.getElementById('popUp');
let produkti = [];

window.addEventListener('load', () => {
    produkti = JSON.parse(localStorage.getItem("produkti") || "[]");
    console.log(produkti)
    render();
});