import React from 'react';
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
    return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to="/signup" className="nav-item nav-link" href="#">Sign Up</NavLink>
                    <NavLink to="/signin" className="nav-item nav-link text-success" href="#"><i className="fas fa-sign-in-alt"></i> Log in</NavLink>
                </div>
            </div>
    )
}

export default SignedOutLinks;
