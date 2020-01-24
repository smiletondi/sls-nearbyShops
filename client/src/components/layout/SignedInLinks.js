import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <NavLink to="/nearbyshops" className="nav-item nav-link">Nearby Shops List</NavLink>
                <NavLink to="/preferredshops" className="nav-item nav-link">My Preferred Shops</NavLink>
                <NavLink to="" onClick={props.signOut} className="nav-item nav-link text-danger"><i className="fas fa-sign-out-alt"></i> Log Out</NavLink>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(SignedInLinks);
