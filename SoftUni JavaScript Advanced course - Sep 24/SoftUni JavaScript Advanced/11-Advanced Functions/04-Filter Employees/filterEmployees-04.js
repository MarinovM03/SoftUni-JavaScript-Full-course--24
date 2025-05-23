function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);

    function createFilter(criteria) {
        const [key, value] = criteria.split('-');

        return function (employee) {
            return criteria === 'all' || employee[key] === value;
        };
    }

    const filterFunction = createFilter(criteria);

    employees
        .filter(filterFunction)
        .forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');