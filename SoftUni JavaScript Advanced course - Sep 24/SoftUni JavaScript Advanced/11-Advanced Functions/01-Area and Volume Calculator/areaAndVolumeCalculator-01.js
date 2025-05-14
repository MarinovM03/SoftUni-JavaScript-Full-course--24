function externalArea() {
    return Math.abs(this.x * this.y);
};

function externalVol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    const boxes = JSON.parse(input);
    const result = [];

    for (const box of boxes) {
        result.push({
            area: area.call(box),
            volume: vol.call(box)
        });
    }

    return result;
}

console.log(solve(externalArea, externalVol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]`));