/*

    Eval Expr

    Write a function "evalExpr" that can solve simples arithmetic calculs;

    We will pass only positive integer numbers.

    Exemples:

    evalExpr(4, 5, "*"); // 20
    evalExpr(3, 3, "+"); // 6
    evalExpr(2, 2, "%"); // 0
    evalExpr(3, 3, "-"); // 0
    evalExpr(10, 2, "/"); // 5

    evalExpr(10, 0, "/"); // 0

    Validation:
    I want to see at least 6 functions.

    Write your own tests !
    
    Forbidden functions:
    eval

*/

// write your code below this comment


console.log(evalExpr(4, 5, "*")); // 20
console.log(evalExpr(3, 3, "+")); // 6
console.log(evalExpr(2, 2, "%")); // 0
console.log(evalExpr(3, 3, "-")); // 0
console.log(evalExpr(10, 2, "/")); // 5
console.log(evalExpr(10, 0, "/")); // 5


function evalExpr(nb1, nb2, operator){
    if (operator == "*"){
        return multiply(nb1, nb2)
    }
    else if (operator == "+"){
        return addition(nb1, nb2)
    }
    else if (operator == "%"){
        return modulo(nb1, nb2)
    }
    else if (operator == "-"){
        return substract(nb1, nb2)
    }
    else if (operator == "/"){
        return nb2 != 0 ? divide(nb1, nb2) : 0;
    }
}
function multiply(nb1, nb2){
    return nb1*nb2;
}
function addition(nb1, nb2){
    return nb1+nb2;
}
function modulo(nb1, nb2){
    return nb1%nb2;
}
function substract(nb1, nb2){
    return nb1-nb2;
}
function divide(nb1, nb2){
    return nb1/nb2;
}