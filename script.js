let todos = document.getElementById('tabela_todos')
let pcs = document.getElementById('tabela_computadores')
let notes = document.getElementById('tabela_notebooks')
let videoGame = document.getElementById('tabela_vgs')
let acessorios = document.getElementById('tabela_acs')

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