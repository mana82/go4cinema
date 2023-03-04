import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const AddNew = () => {
    const state = useLocation().state;
    const [synopsis, setSynopsis] = useState(state?.synopsis || "");
    const [name, setName] = useState(state?.name || "");
    const [year, setYear] = useState(state?.year || []);
    const [genres, setGenres] = useState(state?.genres || []);
    const [ageLimit, setAgeLimit] = useState(state?.ageLimit || []);
    const [rating, setRating] = useState(state?.rating || "");
    //const [actors, setActors] = useState(state?.actors || []); //actors.firstName = "", actors.lastName = ""
    //const [director, setDirector] = useState(state?.director || []); //director.firstName = "", director.lastName = ""


    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            state
                ? await axios.put(`http://localhost:5000/api/movies/${state._id}`, {
                    name,
                    synopsis: synopsis,
                    year,
                    genres,
                    ageLimit,
                    rating,
                    //actors,
                    //director
                })
                : await axios.post(`http://localhost:5000/api/movies/`, {
                    name,
                    synopsis: synopsis,
                    year,
                    genres,
                    ageLimit,
                    rating,
                    //actors,
                    //director,
                });
           // navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add">
            <div className="content">
                <input
                    type="text"
                    placeholder="Movie Title"
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)}/>

                <input type="text" placeholder="Genres" onChange={(e) => setGenres(e.target.value)}/>

                <input type="text" placeholder="ageLimit" onChange={(e) => setAgeLimit(e.target.value)}/>

                <input type="text" placeholder="rating" onChange={(e) => setRating(e.target.value)}/>

                {/*<input type="text" placeholder="actors" onChange={(e) => setActors(e.target.value)}/>*/}

                {/*<input type="text" placeholder="director" onChange={(e) => setDirector(e.target.value)}/>*/}

                <div className="editorContainer">
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={synopsis}
                        onChange={setSynopsis}
                    />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <div className="buttons">
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddNew;