export default class Api {
    url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    getBpi = async () => {
        const result = await fetch(this.url);
        if (!result.ok) {
            throw new Error(`Unable to get data : ${result.status}`)
        }
        return await result.json();
    }

}