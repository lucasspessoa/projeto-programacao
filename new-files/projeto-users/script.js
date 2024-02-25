const selecao = document.getElementById('selecao').value;
const resposta = document.getElementById('resposta');

function Dados() {
    if (selecao == 'George') {
        resposta.innerHTML = selecao
    }
}

function fetchData {
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then((data) => console.log(data))
.catch((error) => console.log('error'))
}