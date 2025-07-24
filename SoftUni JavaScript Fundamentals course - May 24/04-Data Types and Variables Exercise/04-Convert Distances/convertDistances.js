function convertDistances(meters) {

    const kilometers = meters / 1000;
    const miles = (kilometers * 0.621371192).toFixed(2);

    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
}

convertDistances(1852);
convertDistances(798);