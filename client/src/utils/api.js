//not needed anymore i believe
import React, { useState, useEffect } from 'react';


export default function MyComponent() {
    const [items, setItems] = useState([]);

    // fetch('http://www.omdbapi.com/?t=the+matrix&apikey=c4e6157a')
    //     .then(res => res.json())
    //     .then((result) => {
    //         setItems([result.Title, result.Actors, result.Plot, result.Poster]);
    //     })

    // return (
    //     <ul>{items.map(item => <li> {item}</li>)}</ul>
    // );
    useEffect(() => {
        fetch('http://www.omdbapi.com/?t=the+matrix&apikey=c4e6157a')
            .then(res => res.json())
            .then((result) => {
                setItems([result.Title, result.Actors, result.Plot, result.Poster]);
                sessionStorage.setItem("title", result.Title);
                sessionStorage.setItem("actors", result.Actors);
                sessionStorage.setItem("plot", result.Plot);
                sessionStorage.setItem("poster", result.Poster);
            })
    })
    return (null);
}

export const test = (query) => {
    return fetch(`http://www.omdbapi.com/?t=${query}&apikey=c4e6157a`);
};