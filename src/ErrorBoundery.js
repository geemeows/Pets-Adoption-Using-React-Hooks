import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error("Error Boundery caught an error:", err, info);
  }

  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError) {
      return (
        <h1>
          An Error happend here! Click <Link to="/">here</Link> to get back to
          home, or wait 5 sec to redirect!
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
