// Utiliza-se a função FETCH para chamar o método DELETE no Backend
async function deleteItemListaCompra(id) {
    const response = await fetch("http://localhost:3001/" + id,{
        method: 'DELETE'
      })
      getListaCompra()
}

/*
    Cria objeto item a partir dos dados do formulário
    Utiliza-se a função FETCH para chamar o método POST no Backend
    Dentro do método POST é transformado objeto item para string e enviado como corpo 
*/
async function postListaCompra() {
    const form = document.forms.estoqueForm
    const item = {
        "nome": form.name.value,
        "marca": form.brand.value,
        "quantidade": form.quantity.value,
        "preco": form.price.value
    }
    const response = await fetch("http://localhost:3001/",{
        method: 'POST',
        body: JSON.stringify(item),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
}

/* 
    Utiliza-se a função FETCH para chamar o método GET no Backend e retornar a lista de itens em estoque
    Executa FOREACH da lista de compra para gerar a tabela do HTML
*/
async function getListaCompra() {
    const response = await fetch("http://localhost:3001/",{
        'method': 'GET'
      })
    
    const listaCompra = await response.json()
    
    const tabela = document.querySelector('#itens_tabela')
    tabela.innerHTML = ''

    listaCompra.forEach(item => {
        const row = tabela.insertRow()
        addRow(item.nome, row)
        addRow(item.marca, row)
        addRow(item.quantidade, row)
        addRow(`R$ ${item.preco}`, row)
        addDeleteButton(row)
    });
}

// Chama a função responsável por criar o item no Backend e a função que recria a tabela no HTML
async function addCurrentInventory() {
    await postListaCompra()
    getListaCompra()
}

// Adiciona a célula dentro da ROW
function addRow(texto, row) {
    const newCell = row.insertCell()
    const text = document.createTextNode(texto)
    newCell.appendChild(text)
}

// Cria célula com o botão de deletar 
function addDeleteButton(row) {
    const newCell = row.insertCell()
    const index = row.rowIndex - 1
    const button = document.createElement('button')
    button.setAttribute('class', 'btn btn-danger')
    button.setAttribute('onclick' , 'deleteItemListaCompra(' + index + ')')
    button.innerHTML = 'Deletar'
    newCell.appendChild(button)
}

// Ao iniciar a página, chama a função de preenchimento da tabela
window.onload = getListaCompra()