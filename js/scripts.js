const POP_UP = document.getElementById('popUp');
let produkti = [];

window.addEventListener('load', () => {
    produkti = JSON.parse(localStorage.getItem("produkti") || "[]");
    console.log(produkti)
    render();
});

document.getElementById('jaunsProdukts').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotProduktu').addEventListener('click', () => {
    POP_UP.style.display = 'none';
    let produkti = {produkts: produkts.value, daudzums: daudzums.value};

    produkts.value = "";
    daudzums.value = "";

    produkti.push(produkts);

    render();

})

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < produkti.length; i++) {
        let produkts = 
        <div class="produkts">
            <h3>Produkts: ${gramatas[i].produkts}</h3>
            <h4>Daudzums: ${gramatas[i].daudzums}</h4>
        </div>

        saraksts.innerHTML += produkts;

    }

localStorage.setItem("produkti", JSON.stringify(produkti))
}
