function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  testMe(); 
  
  function delayedGreet() {
    setTimeout(() => {
      console.log('welcome');
    }, 3000);
  }
  
  
  function helloGoodbye() {
    console.log('hello');
    setTimeout(() => {
      console.log('good bye');
    }, 3000);
  }
  helloGoodbye(); 
  
  function brokenRecord() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', handleStop);
  
    let interval = setInterval(() => console.log('hi again'), 1000);
  
    function handleStop() {
      clearInterval(interval);
    }
  }
  brokenRecord(); 
  
  function limitedRepeat() {
    let interval = setInterval(hi, 1000);
  
    function hi() {
      console.log('hi for now');
    }
    setTimeout(() => clearInterval(interval), 5000);
  }
  limitedRepeat(); 
  
  function everyXsecsForYsecs(fn, interval, duration) {
    let intervalId = setInterval(fn, interval * 1000);
    setTimeout(() => clearInterval(intervalId), duration * 1000);
  }
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); 
  function delayCounter(target, wait) {
    return () => {
      let counter = 1;
      let interval = setInterval(printNo, wait);
  
      function printNo() {
        console.log(counter);
        counter++;
        if (counter > target) clearInterval(interval);
      }
    };
  }
  
  const countLogger = delayCounter(3, 1000);
  countLogger();
  
  function promised(val) {
    return new Promise((res) => {
      setTimeout(() => res(val), 2000);
    });
  }
  
  const createPromise = promised('wait for it...');
  createPromise.then((val) => console.log(val));
  
  class SecondClock {
    constructor(cb) {
      this.cb = cb;
      this.seconds = 0;
      this.id = undefined;
    }
    start() {
      this.id = setInterval(() => {
        this.seconds++;
        this.cb(this.seconds % 60);
      }, 1000);
    }
    reset() {
      this.seconds = 0;
      clearInterval(this.id);
    }
  }
  
  const clock = new SecondClock((val) => {
    console.log(val);
  });
  console.log('Started Clock.');
  clock.start();
  setTimeout(() => {
    clock.reset();
    console.log('Stopped Clock after 6 seconds.');
  }, 6000);
  
  function debounce(callback, interval) {
    let counter = 0;
    let firstRun;
    return () => {
      let intervalId;
      if (!firstRun) {
        firstRun = true;
        intervalId = setInterval(() => counter++, 1);
        return callback();
      } else {
        if (counter < interval) {
          counter = 0;
          clearInterval(intervalId);
          intervalId = setInterval(() => counter++, 1);
          return undefined;
        } else {
          counter = 0;
          clearInterval(intervalId);
          intervalId = setInterval(() => {
            counter++, 1;
          });
          return callback();
        }
      }
    };
  }
  
  function giveHi() {
    return 'hi';
  }
  const giveHiSometimes = debounce(giveHi, 3000);
  console.log(giveHiSometimes()); // -> 'hi'
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 2000); 
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 4000); 
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 8000); 