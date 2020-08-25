//speed limit = 70 -> OK
// every 5km -> 1 point
//Math.floor(1.3)->1
//point: 2 이런 식으로 나와야함.
//more than 12 points -> License suspended
/*
function checkSpeed(speed) {
  let point = 0;

  if (speed % 5 === 0) {
    Math.floor(speed);
    point += 1;
    console.log("point:", point);
  } else if (point >= 12) console.log("license suspended");
}
*/

checkSpeed(200);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) console.log("ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("license suspended");
    else console.log("points", points);
  }
}
