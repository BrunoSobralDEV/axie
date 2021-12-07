function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero +num;
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
    document.getElementById('resultado').innerHTML = '';
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}