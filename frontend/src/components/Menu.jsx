import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/find/${cat}`);
                setMovies(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    return (
        <div className="menu">
            <h1>More to explore</h1>
            {movies.map((movies) => (
                <div className="post" key={movies._id}>
                    <h2>{movies.name}</h2>
                    <b>RATING - {movies.rating}</b>
                    <b><br />Release Year -</b> {movies.year}         &nbsp; &nbsp; &nbsp; <b>Age Limit -</b> {movies.ageLimit}<br />
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;