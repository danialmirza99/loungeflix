//not needed anymore i believe
import React, { useState, useEffect } from 'react';

let searchValue = sessionStorage.getItem("searchValue");
console.log(searchValue);

export default function MyComponent() {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch(`http://www.omdbapi.com/?t=${searchValue}&apikey=c4e6157a`)
    //         .then(res => res.json())
    //         .then((result) => {
    //             setItems([result.Title, result.Actors, result.Plot, result.Poster]);
    //             sessionStorage.setItem("title", result.Title);
    //             sessionStorage.setItem("actors", result.Actors);
    //             sessionStorage.setItem("plot", result.Plot);
    //             sessionStorage.setItem("poster", result.Poster);
    //         })
    // })
    return (null);
}

export const searchMovies = (query) => {
    return fetch(`http://www.omdbapi.com/?t=${query}&apikey=c4e6157a`)
};