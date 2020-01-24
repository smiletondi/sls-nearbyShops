import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { removeShop } from "../../store/actions/shopActions";

function PreferredShop(props) {
    // Destructuring name, distance and imageUrl
    const { shop, shop: { name, distance, imageUrl }, token } = props;

    const handleRemove = () => {
        props.removeShop(shop, token);
        return <Redirect to="/preferredshops" />
    }
    return (
        <div className="card shadow d-inline-flex mr-4 mb-4" style={{ width: "18rem" }}>
            <h5 className="card-title text-center">{name}</h5>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <button onClick={handleRemove} className="btn btn-danger mr-3"><i className="far fa-trash-alt"></i> Remove</button>
            </div>
            <div className="card-footer">
                <small className="text-muted">distrance: {distance} miles</small>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.auth.user.token
});

const mapDispatchToProps = (dispatch) => {
    return {
        removeShop: (shop, token) => dispatch(removeShop(shop, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferredShop);
