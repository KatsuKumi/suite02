/*

    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is
    evenly divisible by all of the numbers from 1 to 20?

    Write a function "smallestMultipleFor" that solves this problem.

    Write your own tests !
    
*/

// write your code below this comment

function smallestMultipleFor(nb1, nb2){
    for(var i = 1; i < Infinity ;i++){
        for( var nb = nb1; nb <= nb2; nb++){
            if  (i % nb != 0){
                break;
            }
            else if (nb == nb2){
                return i;
            }
        }
    }
}
console.log(smallestMultipleFor(1,20))