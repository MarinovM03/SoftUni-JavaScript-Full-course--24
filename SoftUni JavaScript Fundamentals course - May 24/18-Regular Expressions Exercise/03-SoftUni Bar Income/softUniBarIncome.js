function softUniBarIncome(input) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;
    let total = 0;
    let line = input.shift();

    while (line !== 'end of shift') {
        const isValid = line.match(pattern);

        if (!isValid) {
            line = input.shift();
            continue;
        }

        const customerName = isValid.groups.customer;
        const productName = isValid.groups.product;
        const count = isValid.groups.count;
        const price = isValid.groups.price;

        const currentTotal = Number(count) * Number(price);
        total += currentTotal;

        console.log(`${customerName}: ${productName} - ${currentTotal.toFixed(2)}`);
        line = input.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$','%Peter%<Gum>|1|1.3$','%Maria%<Cola>|1|2.4$','end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$','%Peter%<Gum>1.3$','%Maria%<Cola>|1|2.4','%Valid%<Valid>valid|10|valid20$','end of shift']);