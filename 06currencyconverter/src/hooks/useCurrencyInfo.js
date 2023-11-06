import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {        //custom hook
    const [data, setData] = useState({});
    useEffect(() => {     // re-render with useEffect() for up-to-date info
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())      // get data from the API
        .then((res) => setData(res[currency]))  // target the currency from the data
    }, [currency]);
    console.log(data)
    return data;    // returns a data object
}


export default useCurrencyInfo;