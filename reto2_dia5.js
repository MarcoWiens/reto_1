
function suma(op1,op2,op3){
    return op1 + op2 + op3;
}

function resta(op1,op2){
    return op1 - op2;
}

function multiplicar(op1,op2){
    return op1 * op2;
}

function division(op1,op2){
    return op1 / op2;
}

function cuadrado(num){
    return num * num;
}

module.exports = {suma, resta, multiplicar, division, cuadrado};