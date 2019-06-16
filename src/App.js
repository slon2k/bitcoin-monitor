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
        error: false,
        bpi: {},
        bpiPrev: {}
    }

    api = new Api();

    onDataLoaded = ({bpi}) => {
        const bpiPrev = this.state.bpi;
        this.setState({bpi, bpiPrev, loading: false, error: false})
    }

    onError = (err) => {
        console.log(err);
        this.setState({error: true, loading: false})
    }


    updateData() {
        console.log("Updating");
        this.api.getBpi()
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        this.setState({loading: true});
        this.updateData();
    }

    render() {
        const {loading, bpi, bpiPrev, error} = this.state;

        const rates = Object.values(bpi).map((item) => <Rate key={item.code} item={item} prev={bpiPrev[item.code]}/>)

        return(
            <div>
                <h2>App</h2>
                { !error || errorMessage()}
                { !loading || spinner()}
                {rates}

                <button type="Button" onClick={() => this.updateData()}>Refresh</button>

            </div>
        )
    }
}

