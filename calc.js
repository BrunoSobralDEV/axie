
function insert(num) {
    //Criar e inserir o li no HTML
    let ulHistory = document.querySelector('.history')
    let addLi = document.createElement('li')
    addLi.innerHTML = num

    ulHistory.prepend(addLi)

    //contagem
    let points = document.querySelector('.actual')
    points.innerHTML = num
    console.log(points)
}
function start() {
    clean()
    document.getElementById('resultado').innerHTML = '+3';
}

function next() {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + '+2';
}
function clean() {
    //document.getElementById('resultado').innerHTML = '';
    document.querySelector('.history').innerHTML = '';
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}