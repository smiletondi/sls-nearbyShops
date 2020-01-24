import React, { Component } from 'react';
import { connect } from "react-redux";

import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        confirmedPassword: "",
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ error: null})
        const { email, password, confirmedPassword } = this.state;

        if (password !== confirmedPassword) {
            return this.setState({ error: true })
        }

        this.props.signUp({ email, password }, this.props.history);
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
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
                    <small className="form-text text-muted">You only know your password (Your password is stored encrypted in our database).</small>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmedPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmedPassword"
                        placeholder="Confirm your Password"
                        onChange={this.handleChange} />
                </div>
                <input type="submit" value="Sign Up" className="btn btn-primary" />
                {
                    (this.state.error) ? <div className="alert alert-danger text-center">
                        Passwords don't match
                </div> :
                    (this.props.serverError) ? <div className="alert alert-danger text-center">
                    {this.props.serverError}
            </div> : null
                }
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUp: (newUser, aa) => dispatch(signUp(newUser, aa))
});

const mapStateToProps = state => ({
    serverError: state.auth.signUp.error
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);