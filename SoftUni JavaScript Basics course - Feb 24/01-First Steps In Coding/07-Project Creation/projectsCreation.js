function projectsCreation(name, project) {
    let hour = project * 3;
    let result = `The architect ${name} will need ${hour} hours to complete ${project} project/s.`;

    console.log(result);
}    

projectsCreation("Martin", 9);