
/*

    Bubble sort

    Write a function "bubbleSort".

    The function takes and sorts an array.

    The array contains only positive numbers.

    Exemple:
    [8, 3, 0] -> [0, 3, 8]

    Forbidden functions:
    sort

    Tips:
    use google

    Write your own tests !
    
*/

// write your code below this comment

function bubbleSort(numArray){
    var sortedarray = [];
    for(i of numArray){
        if(sortedarray[0] != undefined){
            for(num = 0; num < sortedarray.length; num++){
                if( i < sortedarray[num] ){
                    sortedarray.splice(num, 0, i); 
                    break;
                }
                else if (sortedarray.length-1 == num){
                    sortedarray.push(i);
                    break;
                }
            }
        }
        else{
            sortedarray.push(i);
        }
    }
    return sortedarray;
}
console.log(bubbleSort([5, 4, 8, 3, 0, 1555, 1444, 6167, 84, 12,  6, 2]));