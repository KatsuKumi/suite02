/*

    Current Time

    Write a function "displayCurrentTime" that displays, each seconds, the current time infinitly;

    If the actual time is 10:30:08

    The script displays:

    10:30:09
    10:30:10
    10:30:11
    10:30:12
    10:30:13
    10:30:14
    ...

    One line each seconds.

    Tips:
    setTimeout

    Write your own tests !

*/

// write your code below this comment

function displayCurrentTime(){
        setTimeout(function(){
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            console.log(hours + ":" + minutes + ":" + seconds);
            displayCurrentTime();
        }, 1000);
}
displayCurrentTime();