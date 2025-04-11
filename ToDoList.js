let contador = 0
let input = document.getElementById('tarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('main')

function addTarefa() {
    // PEGAR O VALOR DIGITADO  NO INPUT:
    let valorInput = input.value

    // SE NÃO FOR VAZIO, NULO OU "Undefined":
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        contador++
        let novoItem = `
        <div class="item" id="${contador}">
            <div class="iconeChecagem" onclick="marcarTarefa(${contador})">
                <div class="circle"><i class="bi bi-check" id="icone_${contador}"></i></div>
            </div>
            <div class="nomeTarefa" onclick="marcarTarefa(${contador})">
                ${valorInput}
            </div>
            <div class="btnExcluir">
                <button class="excluirTarefa" onclick="excluir(${contador})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>`

        // ADICIONAR NOVA TAREFA:
        main.innerHTML += novoItem

        // LIMPAR O INPUT:
        input.value = ""
        input.focus()
    }
}

function excluir(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if(classe == "item") {
        // MARCAR TAREFA CLICADA:
        item.classList.add('clicado')

        // DESCER TAREFA CLICADA:
        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')
    }
}

input.addEventListener("keyup", function(event) {
    // SE DIGITOU A TECLA "ENTER":
    if(event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})