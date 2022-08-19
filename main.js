let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);

const registeredEarly = false; 
const runnersAge = 18;

if (registeredEarly && runnersAge >= 18) {
  console.log(raceNumber += 1000)
}

if (registeredEarly && runnersAge >= 18) {
  console.log(`You will race at 9:30am and your number is ${raceNumber}.`)
} else if (runnersAge >= 18 && !registeredEarly){
  console.log(`You will race at 11:00am and your number is ${raceNumber}.`)
} else if (runnersAge < 18){
  console.log(`You will run at 12:30pm and your number is ${raceNumber}.`)
}

// Early adults' race number >= 1000

// All other adults' race number < 1000


// Adult registrants run at 9:30am or 11:00am

// Early adults run at 9:30am

// Late adults run at 11:00am


// Youth registrants run at 12:30pm
