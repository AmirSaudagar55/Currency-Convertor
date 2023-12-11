import { useEffect, useState } from "react";


function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})

    useEffect(()={

        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json")
        .then((res)=> res.json)
        .then((res)=> setData(res.currency)) //res[currency]
        console.log(data)
    },[currency])  //[]--> dependency array and here currency variable is dependency i.e value of currency variable changes with users input
    console.log(data)
    return data
}

export default useCurrencyInfo