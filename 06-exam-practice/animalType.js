function animalType(input) {
    let type = input[0];

    switch(type) {
        case "dog": console.log("mammal"); break;
        case "crocodile": 
        case "snake": 
        case "tortoise": console.log("reptile"); break;
        default: console.log("unknown"); break;
    }

}

animalType(["dog"]);