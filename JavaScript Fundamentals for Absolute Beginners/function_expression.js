/*
setTimeout(function () {
        console.log('I waited 2 seconds'); 
    }, 2000);
*/

/*
let counter = 0;
function timeOut() {
    setTimeout(function () {
            console.log('Hi ' + counter++); 
            timeOut();
        }, 2000);

}

timeOut();
*/




let counter = 0;
(function timeOut() {
    setTimeout(function () {
            console.log('Hi ' + counter++); 
            timeOut();
        }, 2000);

})()

