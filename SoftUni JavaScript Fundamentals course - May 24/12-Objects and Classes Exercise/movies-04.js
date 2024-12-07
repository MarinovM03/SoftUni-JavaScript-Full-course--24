function movies(arr) {
    const movies = [];

    for (const command of arr) {

        if (command.includes(`addMovie`)) {
            // 1st type command - add name
            const tokens = command.split(`addMovie `)
            const movieName = tokens[1];

            movies.push({ name: movieName });

        } else if (command.includes(`directedBy`)) {
            // 2nd type command - add director
            const [movieName, movieDirector] = command.split(` directedBy `);

            const existingMovie = movies.find(movieObj => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.director = movieDirector;
            }

        } else if (command.includes(`onDate`)) {
            // 3rd type command - add date
            const [movieName, date] = command.split(` onDate `);

            const existingMovie = movies.find(movieObj => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.date = date;
            }
        }

    }

    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
// movies(['addMovie The Avengers','addMovie Superman','The Avengers directedBy Anthony Russo','The Avengers onDate 30.07.2010','Captain America onDate 30.07.2010','Captain America directedBy Joe Russo']);