function projectsCreation(input) {
    let name = (input[0]);
    let project = (input[1]);
    let hour = project * 3;

    let result = `The architect ${name} will need ${hour} hours to complete ${project} project/s.`;

    console.log(result);
}    

projectsCreation(["Martin", 9]);