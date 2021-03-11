// Variables

var input = document.querySelector('.input')
var boton_agregar = document.querySelector('.boton_agregar')
var container = document.querySelector('.container')



// Codigo

class Item {

    constructor(valueInput) {
        this.crearDiv(valueInput)
    }

    crearDiv(valueInput) {
        let input_Item = document.createElement('input')
        var div = document.createElement('div')
        div.classList.add('item')

        var botonEditar = document.createElement('button')
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add('boton_editar')

        var botonRemover = document.createElement('button')
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add('boton_remover')
        input_Item.setAttribute('value', valueInput)
        input_Item.disabled = true
        input_Item.classList.add('item_input')
        input_Item.type = "text"
        container.appendChild(div)
        div.appendChild(input_Item)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)

        botonEditar.addEventListener('click', function () {

           if(input_Item.disabled) {
            botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
           } else {
            botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
           }
                input_Item.disabled = !input_Item.disabled;

           
//botonEditar.innerHTML = input_Item.disabled ? '<i class="fas fa-lock"></i>' : '<i class="fas fa-lock-open"></i>'
            
        })
        botonRemover.addEventListener('click', function () {
            div.remove()
        })

    }

}

function chequearInput() {
    if (input.value != "") {
        new Item(input.value)
    }
}
boton_agregar.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        
        chequearInput();
    }
})
boton_agregar.addEventListener('click', function () {
    chequearInput();
})

