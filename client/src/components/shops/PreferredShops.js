import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PreferredShop from "./PreferredShop";
import { fetchPreferredShops } from '../../store/actions/shopActions';
import Spinner from "../layout/Spinner";

class PreferredShops extends Component {
    componentDidMount() {
        if (this.props.user)
            this.props.fetchPreferredShops(this.props.user.token);
    }

    render() {
        if (!this.props.user) return <Redirect to="/signin" />

        const { shops, loading } = this.props;
        let result = (
            <div>
                <h1>This is the list of preferred shops:</h1>
                <hr />
                <div className="container">
                    {shops && shops.map(shop => {
                        return <PreferredShop key={shop._id} shop={shop} />
                    })}
                </div>

            </div>
        )

        if (!shops[0]) {
            result = (
                <div>
                    <h1>Your preferred Shops list is empty.</h1>
                </div>
            )
        }
        if (loading) {
            result = <Spinner />
        }

        return result;
    }
}

const mapStateToProps = state => ({
    shops: state.shop.preferredShops.shops,
    user: state.auth.user,
    loading: state.shop.preferredShops.loading
});

const mapDispatchToProps = (dispatch) => ({
    fetchPreferredShops: (token) => dispatch(fetchPreferredShops(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(PreferredShops);