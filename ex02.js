/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.

    Write your own tests !
    
*/

// write your code below this comment

function randomTemperatur(valuetype){
    if (valuetype == "c"){
        return Math.floor((Math.random() * 500) - 273);
    }
    else if (valuetype == "f"){
        return Math.floor((Math.random() * 900) - 459);
    }
}
console.log(randomTemperatur("c"));
console.log(randomTemperatur("f"));