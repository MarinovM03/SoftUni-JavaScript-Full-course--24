function moreExer6(input) {

    let skumriq = Number(input[0]);
    let cica = Number(input[1]);
    let palamud = (input[2]);
    let safrid = Number(input[3]);
    let mudi = Number(input[4]);

    let palamudSum = skumriq + skumriq * 0.6;
    let totalPalamud = palamudSum * 1.5;
    let safridSum = cica + cica * 0.8;
    let totalSafrid = safridSum * safrid;
    let mudiSum = mudi * 7.5;

    let totalSum = totalPalamud + totalSafrid + mudiSum;


    console.log(totalSum);

}

moreExer6([6.90,4.20,1.5,2.5,1]);