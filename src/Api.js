export default class Api {
    getBpi = () => {
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