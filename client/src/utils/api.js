import React, { useState, useEffect } from 'react';
import { Home } from '../pages/Home';
import axios from 'axios'

let searchValue = localStorage.getItem("searchInput");

const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: {q: searchValue},
    headers: {
        'X-RapidAPI-Key': '51d6e0d84cmshc0d9de2b1434d7bp126665jsn3d6cfe1721c5',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
};

export default function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        axios.request(options).then(function (result) {
                setIsLoaded(true);
                setItems(result.data.d[0].l.s[0]);
                console.log(result.data.d[0]);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error)
        return <div>Error: {error.message}</div>;
    else if (!isLoaded)
        return <div>Loading...</div>;
    else {
        return (
            <ul>
                {items}
            </ul>
        );
    }
// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// setItems(response.data.d[0].l);
// });
 }



