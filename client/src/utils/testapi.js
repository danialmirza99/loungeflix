
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
}

fetch('https://online-movie-database.p.rapidapi.com/title/get-plots?tconst=tt0944947', options)
    .then(res => res.json())
    .then((result) => {
        console.log(result)
    }
    )