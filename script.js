let todos = document.querySelector('#todos')
let pcs = document.querySelector('#computadores')
let notes = document.querySelector('#notebooks')
let videoGame = document.querySelector('#videogames')
let acessorios = document.querySelector('#acessorios')

pcs.style.display = 'none'
notes.style.display = 'none'
videoGame.style.display = 'none'
acessorios.style.display = 'none'

function exibirCategoria(categoria) {
    
    let tabelas = document.querySelectorAll('table')
    
    for(let i = 0; i < tabelas.length; i++) {

        if(tabelas[i].id == categoria) {

            tabelas[i].style.display = 'block'

        } else {
            
            tabelas[i].style.display = 'none'
        }
    }
}

function mudaEstilo() {
    let itemMenu = event.target

    itemMenu.addEventListener("mouseenter", function() {
        itemMenu.style.color = 'black'
    })

    itemMenu.addEventListener("mouseout", function() {
        itemMenu.style.color = 'white'
    })
}

function mudaEstilo2() {
    let li = event.target

    li.addEventListener("mouseenter", function() {
        li.style.backgroundColor = '#7575a3'
        li.style.color = 'white'
        li.style.textDecoration = 'underline'
        li.style.padding = '8px'
    })

    li.addEventListener("mouseout", function() {
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        li.style.textDecoration = 'none'
        li.style.padding = '0px'
    })
}

function alteraImg() {
    let img = event.target

    let url = img.getAttribute('src')

    window.open(url,'Image','width=450px,height=450px,resizable=1')
}