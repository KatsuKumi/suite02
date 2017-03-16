/*

    Find Sum By Multiples

    If we list all the natural numbers below 10 that are
    multiples of 3 or 5, we get 3, 5, 6 and 9.

    The sum of these multiples is 23.

    In a function "findSumByMultiples", find the sum of all the multiples of 3 or 5 below 1000.

    Write your own tests !
    
*/

// write your code below this comment

function findSumByMultiples(max){
    if (!isNaN(max)){
        var sum = 0;
        for (var nb = 0; nb < max; nb++){
            if (nb % 3 == 0 || nb % 5 == 0){
                sum += nb;
            }
        }
        return sum;
    }
}
console.log(findSumByMultiples(2000));