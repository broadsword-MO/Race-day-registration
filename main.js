// Set the runner's registration details.
const runnerAge = 21;
const earlyAdult = true;

// Log the registration settings while testing.
console.log('⚡earlyAdult >>', earlyAdult);
console.log('⚡runnerAge >>', runnerAge);

// Early adult registrants use numbers from 1000 to 2999; others use 0 to 999.
const raceNumber =
    runnerAge >= 18 && earlyAdult
        ? Math.floor(Math.random() * 2000) + 1000
        : Math.floor(Math.random() * 1000);

// Select the race schedule based on the runner's age and registration status.
if (runnerAge > 0 && runnerAge < 18 && earlyAdult === false) {
    console.log(
        `Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`,
    );
} else if (runnerAge >= 18) {
    const registrationType = earlyAdult ? 'Early' : 'Late';
    const raceTime = earlyAdult ? '9:30 am' : '11 am';
    console.log(
        `${registrationType} adult registrants run at ${raceTime}. Your race number is ${raceNumber}.`,
    );
} else {
    console.log(
        'There was an error in your registration. Please contact the office.',
    );
}
