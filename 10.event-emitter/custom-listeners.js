const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "hello";
  }

  greet(name) {
    this.emit('greeting', `${this.greeting} ${name}`);
  }
}

const myEmitter = new MyCustomEmitter();

myEmitter.on('greeting', (input) => {
  console.log('Greeting event:', input);
});

myEmitter.greet('ashwindotwal');
