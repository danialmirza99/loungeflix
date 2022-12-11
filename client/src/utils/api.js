const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81d9ff8616msh18bfa5227ee6e93p19118fjsnb9f5c497d681',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(data => console.log(data))
	.catch(err => console.error(err));