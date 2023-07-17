
let items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []
showItem()

function addItem() {

    let pedidoItem = document.getElementById('pedido').value
    let cantidadItem = document.getElementById('cantidad').value
    let nombreItem = document.getElementById('nombre').value
    let valorItem = document.getElementById('valor').value

    if(pedidoItem && cantidadItem && nombreItem && valorItem){
        items.push({ 'pedidoArticulo': pedidoItem, 'cantidadArticulo': cantidadItem, 'nombreArticulo': nombreItem, 'valorArticulo': valorItem })
        showItem()
    }
}

function showItem() {

    document.getElementById('pedido').value    = ''
    document.getElementById('cantidad').value    = ''
    document.getElementById('nombre').value       = ''
    document.getElementById('valor').value      = ''

    let html = ''
    items.forEach((elemt, index) => {
        
        html += `<div class="col-2 mb-3"> ${elemt.pedidoArticulo} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.cantidadArticulo} </div>`
        html += `<div class="col-3 mb-3"> ${elemt.nombreArticulo} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.valorArticulo} </div>`
        html += `<div class="col-2"> <a href="#" class="btn btn-danger" onclick="deleteItem(${index})"> ELIMINAR </a> </div>`
    });

    localStorage.setItem('itemList', JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    items.splice(item, 1)
    showItem()
}