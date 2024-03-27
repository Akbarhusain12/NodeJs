const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please Turn off the  motor');
  setTimeout(()=>{
      console.log('Please Turn off the  motor Ajay');
  },3000)
});

console.log("The script is still running")
myEmitter.emit('WaterFull');
console.log("The script is still running 1")