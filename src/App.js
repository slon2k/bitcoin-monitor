import React from 'react';
import './App.css';
import Api from './Api'

const spinner = () => {
    return <div>Loading ...</div>
}

const errorMessage = () => {
    return <div>Unable to get data</div>
}

export default class App extends React.Component {
    state = {
        loading: false,
        error: false
    }

    api = new Api();

    componentWillMount() {
        const bpi = this.api.getBpi();
        this.setState({bpi});
    }

    render() {
        const {loading, bpi, error} = this.state;

        return(
            <div>
                <h2>App</h2>
                { !error || errorMessage()}
                { !loading || spinner()}

            </div>
        )
    }
}

