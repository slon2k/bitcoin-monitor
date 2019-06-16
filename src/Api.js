export default class Api {
    url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    getBpi = async () => {
        const result = await fetch(this.url);
        if (!result.ok) {
            throw new Error(`Unable to get data : ${result.status}`)
        }
        return await result.json();
    }

    getFakeBpi = () => {
        return {
            "bpi": {
                "USD": {
                    "code": "USD",
                    "symbol": "&#36;",
                    "rate": "9,277.7500",
                    "description": "United States Dollar",
                    "rate_float": 9277.75
                },
                "GBP": {
                    "code": "GBP",
                    "symbol": "&pound;",
                    "rate": "7,367.1366",
                    "description": "British Pound Sterling",
                    "rate_float": 7367.1366
                },
                "EUR": {
                    "code": "EUR",
                    "symbol": "&euro;",
                    "rate": "8,261.9292",
                    "description": "Euro",
                    "rate_float": 8261.9292
                }
            }
        }
    }
}