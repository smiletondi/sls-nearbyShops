import React from 'react';
import { connect } from "react-redux";
import { likeShop, dislikeShop } from "../../store/actions/shopActions";

function NearbyShop(props) {
    // Destructuring name, distance and imageUrl
    const { shop, shop: { name, distance, imageUrl }, token } = props;

    const handleLike = () => {
        props.likeShop(shop, token);
    }
    const handleDisLike = () => {
        props.dislikeShop(shop, token);
    }

    return (
        <div className="card shadow d-inline-flex mr-4 mb-4" style={{ width: "18rem" }}>
            <h5 className="card-title text-center">{name}</h5>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <button onClick={handleDisLike} className="btn btn-danger mr-3"><i className="far fa-thumbs-down"></i> Dislike</button>
                <button onClick={handleLike} className="btn btn-success"><i className="far fa-thumbs-up"></i> Like</button>
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
        likeShop: (shop, token) => dispatch(likeShop(shop, token)),
        dislikeShop: (shop, token) => dispatch(dislikeShop(shop, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyShop);
