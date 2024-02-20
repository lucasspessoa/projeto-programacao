//por meio do JS, será criada função para quando ocorrer o click no índice econômico automaticamente puxar caixa com conteúdo referente ao mesmo.

const connect = document.getElementById('text-connection')

//as const's abaixo contêm os respectivos textos de cada índice econômico.

const Inflação = {
    text: "O índice de inflação esperado para 2023 ao início do ano foi 5,36%. Entretanto, finalizou 2023 em 4,46%."
}

const PIB = {
    text: "O PIB esperado para 2023 ao início do ano ficou em 0,78%. Entretanto, finalizou 2023 em 2,92%."
}

const Câmbio = {
    text: "O Câmbio esperado para 2023 ao início do ano ficou em R$ 5,28. Entretanto, finalizou 2023 em R$ 4,90."
}

const Selic = {
    text: "A Selic esperada para 2023 ao início do ano ficou em 12,25%. Entretanto, finalizou 2023 em 11,75%."
}

const selecaoMedidas = [Inflação, PIB, Câmbio, Selic]

//a função abaixo cria const para que possa capturar o input selecionado e automaticamente gerar o texto respectivo das const's acima.

function selecaoIndice() {
    const opcaoEcoIndice = document.querySelector('[name="index"]:checked').id.charAt(0);
    ecoIndice = opcaoEcoIndice;

    connect.innerHTML = selecaoMedidas[ecoIndice].text
}