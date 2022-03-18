const input=require("readline-sync")

function livro(titulo, paginas, autoria){
    return ({
        titulo,
        paginas,
        autoria,
    })
}

console.log(livro('Crepúsculo', 498, 'Stephenie_Meyer'))