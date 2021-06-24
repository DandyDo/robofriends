import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            scriptName: ''
        }
    }

    // Render the error message if something went wrong.
    componentDidCatch(error, info) {
        this.setState({ hasError : true });
        this.setState({ scriptName : info });

    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. :(</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;