function adAstra(input) {
    const pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<exp_date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    const str = input.shift();

    let totalCalories = 0;
    let items = [];

    let match = pattern.exec(str);

    while (match) {
        let itemName = match.groups.item;
        let expirationDate = match.groups.exp_date;
        let calories = Number(match.groups.calories);

        totalCalories += calories;

        items.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);
        
        match = pattern.exec(str);
    }

    const days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);