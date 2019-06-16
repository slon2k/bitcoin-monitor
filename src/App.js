import React from 'react';
import './App.css';
import Api from './Api'
import Rate from './Rate'

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
        const bpi = this.api.getFakeBpi();
        this.setState({bpi: bpi.bpi});
    }

    render() {
        const {loading, bpi, error} = this.state;
        console.log(bpi);
        console.log(Object.values(bpi));
        const rates = Object.values(bpi).map((item) => <Rate key={item.code} item={item}/>)

        return(
            <div>
                <h2>App</h2>
                { !error || errorMessage()}
                { !loading || spinner()}
                {rates}

            </div>
        )
    }
}

