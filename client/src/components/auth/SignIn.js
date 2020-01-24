import React, { Component } from 'react'
import { connect } from "react-redux";

import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state, this.props.history); // we passed the history property to redirect in the 
        //                                                      signin() function
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { authError } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In</h1>
                <hr />

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={this.handleChange} />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={this.handleChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
                { authError? <div className="alert alert-danger text-center">
                    {authError}
                </div> : null}
            </form >
        )
    }
}

const mapStateToProps = (state) => ({
    authError: state.auth.error
})

const mapDispatchToProps = dispatch => ({
    signIn: (login, a) => dispatch(signIn(login, a))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);