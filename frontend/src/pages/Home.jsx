import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);

    const cat = useLocation().search


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies`);
                //console.log(res);
                setMovies(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }


    return (
        <div className="home">
            <div className="posts">
                {movies.map((movies) => (
                    <div className="post" key={movies._id}>
                        <div className="img">
                            <div className="content-box">
                                <b>RATING - {movies.rating}</b><br />
                                <b><br />Release Year -</b> {movies.year}         &nbsp; &nbsp; &nbsp; <b>Age Limit -</b> {movies.ageLimit}<br />
                                <b><br />Director -</b>
                                {movies.director.map((item) => (
                                    <span key={item._id}>
                                    {item.firstName}
                                        {item.lastName}
                                </span>
                                ))}
                                <br />
                                <b><br />Stars / Cast & crew -</b><br />
                                {movies.actors.map((actor) =>(
                                    <span key={actor._id}>
                                        {actor.firstName} {actor.lastName}<br />
                                    </span>
                                ))}
                                <br />
                                <b>Genres -</b>
                                {movies.genres}
                                <br />
                            </div>

                        </div>
                        <div className="content">
                            <Link className="link" to={`/movies/${movies._id}`}>
                                <h1>{movies.name}</h1>
                            </Link>
                            <p>{getText(movies.synopsis)}</p>
                            <Link className="link" to={`/movies/${movies._id}`}><button>Read More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;