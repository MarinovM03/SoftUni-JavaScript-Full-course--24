function fishTank(length, width, height, percent) {

    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);

    let totalArea = length * width * height / 1000;
    let percentTaken = totalArea * (percent / 100);

    let finalArea = totalArea - percentTaken;

    console.log(finalArea);

}

fishTank("85", "75", "47", "17");