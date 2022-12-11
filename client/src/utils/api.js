// export const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '81d9ff8616msh18bfa5227ee6e93p19118fjsnb9f5c497d681',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
//     .then(data => console.log(data))
// 	.catch(err => console.error(err));

// export const getMe  = () => {
// 	return fetch('/api/users/me', {
// 	  method: 'GET',
// 	  headers: {
// 		'X-RapidAPI-Key': '81d9ff8616msh18bfa5227ee6e93p19118fjsnb9f5c497d681',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	  },
// 	});
//   };

//   export const createUser = (userData) => {
// 	return fetch('/api/users', {
// 	  method: 'POST',
// 	  headers: {
// 		'Content-Type': 'application/json',
// 	  },
// 	  body: JSON.stringify(userData),
// 	});
//   };

//   export const saveMovie = (movieData) => {
// 	return fetch('/api/users', {
// 	  method: 'PUT',
// 	  headers: {
// 		'Content-Type': 'application/json',
// 		'X-RapidAPI-Key': '81d9ff8616msh18bfa5227ee6e93p19118fjsnb9f5c497d681',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	  },
// 	  body: JSON.stringify(movieData),
// 	});
//   };



// export const options = (query) => {
// 	return fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game')
// }