//Illustrates how async works. 
//even though setTimeout is only 500ms, the cb is on the stack
//and need to wait for the while loop to finish in 1000ms 
var startTime = new Date;

setTimeout(function () {
  var endTime = new Date;
  console.log('Time elapsed: ', endTime - startTime, 'ms');
}, 500);

while (new Date - startTime < 1000) {};