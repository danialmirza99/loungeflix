import React, { useState, useEffect } from 'react';

export default function MyComponent() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?t=the+matrix&apikey=c4e6157a')
            .then(res => res.json())
            .then((result) => {
                setItems([result.Title, result.Actors, result.Plot, result.Poster]);
            })
    })

    return (
        <ul>
            {items.map(item => <li> {item}</li>)}
        </ul>
    );
}
