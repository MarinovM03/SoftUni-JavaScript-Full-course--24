function timeToWalk(steps, footprintInMeters, speedInKm) {
    const distanceInMeters = steps * footprintInMeters;
    const speedMetersInSec = speedInKm / 3.6;
    const time = distanceInMeters / speedMetersInSec;
    const rest = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
    const timeInSec = Math.round(time - timeInMin * 60);

    timeInMin += rest;
    const hours = Math.floor(timeInMin / 60);
    timeInMin %= 60;

    const hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    const minToPrint = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    const secsToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secsToPrint}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);