console.log(checkSpeed(75));

function checkSpeed(speed) {
  const speedLimit = 70;
  if (speed < speedLimit + 5) {
    return "OK";
  } else {
    const overSpeed = Math.floor((speed - speedLimit) / 5);
    console.log(overSpeed);
    if (overSpeed >= 12) {
      return "license suspended";
    }
    return "point:" + overSpeed;
  }
}
