function employees(arrStr) {

    for (const employeeName of arrStr) {
        const personalNumber = employeeName.length;

        const employeeObj = {
            name: employeeName,
            number: personalNumber,
        };
        
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
// employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);