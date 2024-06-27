// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }

//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }

//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }

//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });
// }
// Monday();

function receivesAFunction(callbackFunction) {
  return callbackFunction();
}
receivesAFunction(function sayHello() {
  console.log("Hello World!");
});
function returnsANamedFunction() {
  console.log("Goodbye World!");
  return function sayGoodbye() {};
}
returnsANamedFunction();

// let fn = () => console.log("Anonymous function returned");
function returnsAnAnonymousFunction() {
  console.log("Anonymous function returned!");
  return () => console.log("Anonymous function returned");
}
returnsAnAnonymousFunction();
