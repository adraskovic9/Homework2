console.log('CHALLENGE 1');
function createFunction() {
  return () => {
    console.log('hello');
  };
}

const function1 = createFunction();
function1(); 

console.log('CHALLENGE 2');
function createFunctionPrinter(input) {
  return () => {
    console.log(input);
  };
}

const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello(); 

console.log('CHALLENGE 3');
function outer() {
  let counter = 0; 
  return () => {
    counter++;
    console.log('counter', counter);
  };
}

const willCounter = outer();
const jasCounter = outer();
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  return (input) => {
    return x + input;
  };
}

const addByTwo = addByX(2);
console.log(addByTwo(1)); 
console.log(addByTwo(2)); 
console.log(addByTwo(3)); 

const addByThree = addByX(3);
console.log(addByThree(1)); 
console.log(addByThree(2)); 

const addByFour = addByX(4);
console.log(addByFour(4)); 
console.log(addByFour(5)); 

console.log('CHALLENGE 4');
function once(func) {
  let first = true;
  let output;
  return (input) => {
    if (first) {
      output = func(input);
      first = false;
    }
    return output;
  };
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4)); 
console.log(onceFunc(10)); 
console.log(onceFunc(9001)); 
console.log('CHALLENGE 5');
function after(count, func) {
  let counter = 1;
  return () => {
    if (counter === count) func();
    counter++;
  };
}

const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
afterCalled();
afterCalled(); 
afterCalled(); 

console.log('CHALLENGE 6');
function delay(func, wait) {
  return setTimeout(() => {
    func();
  }, wait);
}

delay(() => {
  console.log('wait is over');
}, 1000);

console.log('CHALLENGE 7');
function rollCall(names) {
  let counter = 0;
  return () => {
    if (counter === names.length) return 'Everyone accounted for';
    counter++;
    return names[counter - 1];
  };
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
console.log(rollCaller()); 
console.log(rollCaller()); 
console.log(rollCaller()); 
console.log(rollCaller()); 

console.log('CHALLENGE 8');
function saveOutput(func, magicWord) {
  const obj = {};
  return (arg) => {
    if (arg === magicWord) {
      return obj;
    }
    let result = func(arg);
    obj[arg] = result;
    return result;
  };
}


const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); 
console.log(multBy2AndLog(9)); 
console.log(JSON.stringify(multBy2AndLog('boo'))); 
console.log('CHALLENGE 9');
function cycleIterator(array) {
  let counter = 0;
  return () => {
    if (counter < array.length) {
      counter++;
      return array[counter - 1];
    } else {
      counter = 0;
      return array[counter];
    }
  };
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); 
console.log(getDay());
console.log(getDay()); 
console.log(getDay()); 

console.log('CHALLENGE 10');
function defineFirstArg(func, arg) {
  return (arg2) => {
    return func(arg, arg2);
  };
}

const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); 

console.log('CHALLENGE 11');
function dateStamp(func) {
  return (arg) => {
    const date = new Date();
    const obj = {
      date: date.toDateString(),
      output: func(arg),
    };
    return obj;
  };
}
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(JSON.stringify(stampedMultBy2(4))); 
console.log(JSON.stringify(stampedMultBy2(6))); 

console.log('CHALLENGE 12');
function censor() {
  const pairs = [];
  return (...args) => {
    if (args.length > 1) {
      pairs.push([args[0], args[1]]);
    } else {
      let argsChanged = args.toString();
      pairs.forEach((pair) => {
        argsChanged = argsChanged.replaceAll(pair[0], pair[1]);
      });
      return argsChanged;
    }
  };
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
console.log('CHALLENGE 13');
function createSecretHolder(secret) {
  let secretProp = secret;

  return {
    setSecret: (secret) => {
      secretProp = secret;
    },
    getSecret: () => {
      return secretProp;
    },
  };
}

obj = createSecretHolder(5);
console.log(obj.getSecret()); 
obj.setSecret(2);
console.log(obj.getSecret()); 

console.log('CHALLENGE 14');
function callTimes() {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); 
console.log(myNewFunc1()); 
console.log(myNewFunc2());
console.log(myNewFunc2()); 

console.log('CHALLENGE 15');
function russianRoulette(num) {
  return () => {
    num--;
    if (num > 0) {
      return 'click';
    } else if (num === 0) {
      return 'bang';
    } else {
      return 'reload to play again';
    }
  };
}

const play = russianRoulette(3);
console.log(play()); 
console.log(play());
console.log(play()); 
console.log(play()); 
console.log(play()); 

console.log('CHALLENGE 16');
function average() {
  let arr = [];
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length || 0;

  return (arg = null) => {
    if (arg === null) {
      return average(arr);
    } else {
      arr.push(arg);
      return average(arr);
    }
  };
}
const avgSoFar = average();
console.log(avgSoFar()); 
console.log(avgSoFar(4)); 
console.log(avgSoFar(8)); 
console.log(avgSoFar()); 
console.log(avgSoFar(12)); 
console.log(avgSoFar()); 

console.log('CHALLENGE 17');
function makeFuncTester(arrOfTests) {
  return (cb) => {
    return arrOfTests.every((arr) => {
      return cb(arr[0]) === arr[1];
    });
  };
}

/*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); 
console.log(shouldCapitalizeLast(capLastAttempt2)); 

console.log('CHALLENGE 18');
function makeHistory(limit) {
  let history = [];
  return (str) => {
    if (str === 'undo' && history.length > 0) {
      let undo = history.pop();
      return `${undo} undone`;
    } else if (str === 'undo' && history.length <= 0) {
      return 'nothing to undo';
    }
    if (history.length === limit) {
      history.shift();
    }
    history.push(str);
    return `${str} done`;
  };
}

const myActions = makeHistory(2);
console.log(myActions('jump')); 
console.log(myActions('undo')); 
console.log(myActions('walk')); 
console.log(myActions('code')); 
console.log(myActions('pose')); 
console.log(myActions('undo')); 
console.log(myActions('undo')); 
console.log(myActions('undo')); 

console.log('CHALLENGE 19');
function blackjack(array) {
  let counter = 0;
  return (a, b) => {
    let sum;
    let first = true;
    let second = false;
    let bust = false;
    return () => {
      if (!bust) {
        if (first) {
          first = false;
          second = true;
          return a + b;
        } else if (second) {
          sum = array[counter] + a + b;
          second = false;
        } else {
          sum += array[counter];
        }
        counter++;
        if (sum > 21) {
          bust = true;
          return 'bust';
        } else {
          return sum;
        }
      } else {
        return 'you are done!';
      }
    };
  };
}


const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously()); 
console.log(i_like_to_live_dangerously()); 
console.log(i_like_to_live_dangerously()); 
console.log(i_like_to_live_dangerously()); 
console.log(i_like_to_live_dangerously()); 
console.log(i_like_to_live_dangerously()); 

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); 
console.log(i_TOO_like_to_live_dangerously()); 
console.log(i_TOO_like_to_live_dangerously()); 
console.log(i_TOO_like_to_live_dangerously()); 
console.log(i_TOO_like_to_live_dangerously()); 
console.log(i_TOO_like_to_live_dangerously()); 

const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); 
console.log(i_ALSO_like_to_live_dangerously()); 
console.log(i_ALSO_like_to_live_dangerously()); 
console.log(i_ALSO_like_to_live_dangerously()); 
console.log(i_ALSO_like_to_live_dangerously()); 
``