import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./../media/images/go4 Cinema logo.jpg";

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/find">
                        <h6>MOVIE SEARCH</h6>
                    </Link>
                    <Link className="link" to="/?find=new">
                        <h6>NEW RELEASE</h6>
                    </Link>
                    <Link className="link" to="/find/Genres">
                        <h6>GENRES</h6>
                    </Link>

                    <span className="add_new">
                        <Link className="link" to="/new">
                        ADD NEW MOVIE
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;