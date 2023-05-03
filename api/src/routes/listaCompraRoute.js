const listaCompra = []

async function listaCompraRoute (fastify) {
    // pegar a lista de compra//
    fastify.get('/', async (request) => {
        return listaCompra
    })
    // adicionar um novo item a lista de compra //
    fastify.post('/', async (request) => {
        // pega o item do corpo//
        const itemCompra = request.body
        // adiciona o item na lista//
        listaCompra.push(itemCompra)
        return itemCompra
    })
    // alterar um item da lista de compra//
    fastify.put('/:id' , async (request) => {
        // pega o id da url
        const id = request.params.id
        // pega o item do corpo 
        const itemCompra = request.body
        // alterar na lista de compra o array escolhido e alterar o item //
        listaCompra[id] = itemCompra
        return itemCompra
    })
    // deletar item da lista de compras
    fastify.delete('/:id', async (request) => {
        // pega id da url
        const id = request.params.id
        listaCompra.splice(id,1)

    })
}
export default listaCompraRoute;

