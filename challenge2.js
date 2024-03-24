function speedDetector(speed) {
  const speedLimit = 70;
  let demeritPoints = 0;

  //checks for above speed limit
  if (speed > 70) {
    let aboveSpeed = speed - speedLimit;
    demeritPoints = Math.floor(aboveSpeed / 5); //rounds down the result to get the quotient, dropping the remainder.

    //checks for above 12 demerit points
    if (demeritPoints > 12) {
      return "License suspended";
    } else return `Demerit points: ${demeritPoints}`;
  } else return "OK";
}

//console.log(speedDetector(150));
