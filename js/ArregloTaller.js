
let productos = localStorage.getItem('itemList')
productos = productos ? productos.split(',') : []
showItem()


function addItem() {
    let item = document.getElementById('item').value
    item  = item.split(',')
    for (let i = 0; i < item.length; i++) {
        if(item[i]){
            productos.push(item[i])
            showItem()
        }
    }
   
}

function showItem() {
    
    document.getElementById('item').value = ''
    let html = ''
    for (let i = 0; i < productos.length; i++) {
        html += ` <div class="col-10 mb-3"> ${productos[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> ELIMINAR </a> </div>` 
    }
    
    localStorage.setItem('itemList', productos)
    document.getElementById('productos').innerHTML = html
}

function deleteItem(item) {
    productos.splice(item, 1)
    showItem()
}

