function meetings(input) {
    const meetings = {};
    
    for (const reservation of input) {
        const [weekDay, name] = reservation.split(` `);
        
        if (meetings.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);
// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);