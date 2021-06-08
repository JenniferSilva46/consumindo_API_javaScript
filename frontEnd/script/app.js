const knowMore = document.getElementById('know-more');
const address = document.getElementById('address');
const filterInput = document.querySelector('#filter');


//Pegando os dados da api
const getData = async () => {
    const response = await fetch(`http://localhost:3000/random/10`)
    return response.json();
}


// exibindo informações no html
function addGetDataDom(json) {
    let dataTemplate = ""
    dataTemplate += "<div class='cardConteudo'>"

    dataTemplate += `<h2 class="title">${json.name}</h2>`
    Object.keys(json).map(key => {

        dataTemplate += `<strong>${json[key]}</strong>`
    })
    dataTemplate += "</div>"
    return dataTemplate;
}


function main() {
    getData().then(data => {

        let container = "<div class='container'>"
        data.forEach(element => {
            container += addGetDataDom(element)
        });
        container += "</div>"
        let template = document.querySelector('#card-info')
        template.innerHTML = container
    })
}

main();


filterInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.cardConteudo');
    let cont = 0;
    cards.forEach(card => {
        const name = card.querySelector('.title').textContent.toLowerCase();

        if (name.includes(inputValue)) {
            cont++;
            console.log(card);

            card.getElementsByClassName.display = 'flex'
            results(cont);
            return
        }
        card.style.display = 'none'

    })
    results(cont);
})



const results = (cont) => {
    const result = document.querySelector(".result");

    if (cont != 0) {
        const menseger = `<span>${cont} produto encontrado</span>`;
        result.innerHTML = menseger;
    } else {
        const mensegerErr = `<span>Nenhum produto encontrado</span>`;
        result.innerHTML = mensegerErr;
    }

}