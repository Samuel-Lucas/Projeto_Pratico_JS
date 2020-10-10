let todos = document.getElementById('tabela_todos')
let pcs = document.getElementById('tabela_computadores')
let notes = document.getElementById('tabela_notebooks')
let videoGame = document.getElementById('tabela_vgs')
let acessorios = document.getElementById('tabela_acs')

function mudaEstilo2() {
    let li = event.target

    li.addEventListener("mouseenter", function() {
        li.style.backgroundColor = 'gray'
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

pcs.style.display = 'none'
notes.style.display = 'none'
videoGame.style.display = 'none'
acessorios.style.display = 'none'

function mostraTodos() {
    todos.style.display = 'block'
    pcs.style.display = 'none'
    notes.style.display = 'none'
    videoGame.style.display = 'none'
    acessorios.style.display = 'none'
}

function mostraComputadores() {
    todos.style.display = 'none'
    pcs.style.display = 'block'
    notes.style.display = 'none'
    videoGame.style.display = 'none'
    acessorios.style.display = 'none'
}

function mostraNotes() {
    todos.style.display = 'none'
    pcs.style.display = 'none'
    notes.style.display = 'block'
    videoGame.style.display = 'none'
    acessorios.style.display = 'none'
}

function mostraVgs() {
    todos.style.display = 'none'
    pcs.style.display = 'none'
    notes.style.display = 'none'
    videoGame.style.display = 'block'
    acessorios.style.display = 'none'
}

function mostraAcs() {
    todos.style.display = 'none'
    pcs.style.display = 'none'
    notes.style.display = 'none'
    videoGame.style.display = 'none'
    acessorios.style.display = 'block'
}