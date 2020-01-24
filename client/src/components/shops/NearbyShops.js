import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NearbyShop from "./NearbyShop";
import { fetchNearbyShops } from '../../store/actions/shopActions';
import Spinner from "../layout/Spinner";



class NearbyShops extends Component {
    componentDidMount(){
        if (this.props.user)
            this.props.fetchNearbyShops(this.props.user.token);
    }
    render() {
        if(!this.props.user) return <Redirect to="/signin" />

        const { shops, loading } = this.props;

        let result = (
            <div>
                <h1>This is the list of nearby shops:</h1>
                <hr />
                <div className="container">
                    {shops && shops.map(shop => {
                        return <NearbyShop key={shop._id} shop={shop} />
                    })}
                </div>

            </div>
        )

        if (!shops[0]){
            result =(
                <div>
                    <h1>Your Nearby Shops list is empty.</h1>
                </div>
            )
        }
        if(loading){
            result = <Spinner />
        }

        return result;
    }
}

const mapStateToProps = state => ({
    shops: state.shop.nearbyShops.shops,
    user: state.auth.user,
    loading: state.shop.nearbyShops.loading
});

const mapDispatchToProps = (dispatch) => ({
    fetchNearbyShops: (token) => dispatch(fetchNearbyShops(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyShops);