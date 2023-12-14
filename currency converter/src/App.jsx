import React, { useState, useEffect } from 'react';
import Inputs_or_Auto_Convert_Panel from './Components/Inputs_or_Auto_Convert_Panel';
import axios from 'axios';
import './App.css'

function App() {
 const [amount1, setAmount1] = useState(0);
 const [amount2, setAmount2] = useState(0);
 const [currency1, setCurrency1] = useState('usd');
 const [currency2, setCurrency2] = useState('usd');
 const [rate, setRate] = useState({});
 const [currencyAPI, setCurrencyAPI] = useState(currency1);


 useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyAPI}.json`
      )
      .then((res) => {
        let data = res.data;
        setRate(data[currencyAPI]);
        console.log(rate)
      });
 }, [currencyAPI,currency1,currency2]);

 let rateArr = Object.entries(rate);

 function handleOnAmountChange1(value1) {
    console.log("currencyAPI : "+currencyAPI)
    setAmount2(value1 * parseFloat(rate[currency2]));
    setAmount1(value1);
 }

 function handleOnAmountChange2(value2) {
    setAmount1(value2 * parseFloat(rate[currency2]));
    setAmount2(value2);
 }

 function handleOnCurrencyChange1(curr1) {
    console.log(curr1)
    setCurrencyAPI(curr1);
    console.log("currencyAPI : "+currencyAPI)
    setAmount2(amount1 * parseFloat(rate[currency2]));
    console.log(rate[currency2])
    setCurrency1(curr1);
    handleOnAmountChange1(amount1)
 }

 function handleOnCurrencyChange2(curr2) {
    setAmount2(amount1 * parseFloat(rate[curr2]));
    setCurrency2(curr2);
 }

 return (
    <div className="max-w-sm mx-auto my-20 rounded overflow-hidden shadow-lg">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Currency Converter</h1>
        <Inputs_or_Auto_Convert_Panel
          currency_names={rateArr}
          amount={amount1}
          currency={currency1}
          onAmountChange={handleOnAmountChange1}
          onCurrencyChange={handleOnCurrencyChange1}
          readOnly={false}
        />
        <Inputs_or_Auto_Convert_Panel
          currency_names={rateArr}
          amount={amount2}
          currency={currency2}
          onAmountChange={handleOnAmountChange2}
          onCurrencyChange={handleOnCurrencyChange2}
          readOnly={true}
        />
      </div>
    </div>
 );
}

export default App;