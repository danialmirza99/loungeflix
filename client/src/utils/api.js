import React, { useState, useEffect } from 'react';

const options = {
    method: 'GET',
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
        fetch('https://online-movie-database.p.rapidapi.com/title/get-plots?tconst=tt0944947', options)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.base.title);
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
}