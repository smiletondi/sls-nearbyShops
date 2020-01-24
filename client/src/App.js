import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashborad from "./components/dashboard/Dashboard";
import NearbyShops from "./components/shops/NearbyShops";
import PreferredShops from "./components/shops/PreferredShops";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import { connect } from "react-redux";

import { updateUserState } from "./store/actions/authActions";

function App(props) {
  const itemFromStorage=localStorage.getItem("user");
  let userFromStorage;
  if (itemFromStorage)
    userFromStorage = JSON.parse(itemFromStorage);

  const { userFromState, updateUserState }= props;
  if (!userFromState && userFromStorage){
    updateUserState(userFromStorage)
  }
  // console.log(userFromState);
  return (
    <Router basename="/HF_frontEnd">
      <div className="App">
        <Navbar />
        <div className="container">

          <Switch>
            <Route exact path="/" component={Dashborad} />
            <Route path="/nearbyshops" component={NearbyShops} />
            <Route path="/preferredshops" component={PreferredShops} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  userFromState: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  updateUserState: (data) => dispatch(updateUserState(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
