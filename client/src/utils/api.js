//import React, { useState, useEffect } from 'react';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
//         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
//     },
// };
//actors,description, poster
export default function MyComponent() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    // useEffect(() => {
    //     fetch('http://www.omdbapi.com/?t=the+matrix&apikey=c4e6157a')
    //         .then(res => res.json())
    //         .then((result) => {
    //             setIsLoaded(true);
    //             setItems(result.Title, result.Actors, result.Poster);
    //         },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])
    let actors = "";
    let title = "";
    let poster = "";

    fetch('http://www.omdbapi.com/?t=the+matrix&apikey=c4e6157a')
        .then(res => res.json())
        .then((result) => {
            title = result.Title;
            actors = result.Actors;
            poster = result.Poster;
            return (
                <ul>
                    {actors}
                    {title}
                    {poster}
                </ul>
            );
        })

    return (
        <ul>
            {actors}
            {title}
            {poster}
        </ul>
    );
}