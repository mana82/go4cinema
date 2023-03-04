import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
//import moment from "moment";
//import { useContext } from "react";
import DOMPurify from "dompurify";

const Single = () => {
    const [movies, setMovie] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const moviesId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies/${moviesId}`);
                setMovie(res.data.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [moviesId]);

    const handleDelete = async ()=>{
        try {
            await axios.delete(`/movies/${moviesId}`);
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="single">
            <div className="content">
                <h1>{movies.name}</h1>
                <div>
                    <b>RATING - {movies.rating}</b> &nbsp; &nbsp; &nbsp; <b>Age Limit -</b> {movies.ageLimit}<br />
                    <b><br />Release Year -</b> {movies.year}<br />

                    <br />
                    <b>Genres -</b>
                    {movies.genres}
                    <br />
                </div>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(movies.synopsis),
                    }}
                ></p>      </div>
            <Menu cat={movies.genres}/>
        </div>
    );
};

export default Single;