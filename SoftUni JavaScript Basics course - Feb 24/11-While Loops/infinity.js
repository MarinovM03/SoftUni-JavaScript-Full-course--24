function infinity() {

    let i = 1;
    while(true) {
        console.log("infinity");
        if (i === 1000) {
            break;
        }
        i++;
    }
    
    console.log("Finish");
}

infinity();