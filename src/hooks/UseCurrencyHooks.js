/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import axios from "axios";
import { useEffect, useState } from "react";

function useHooksCurrencey() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [fromFlage, setFromFlage] = useState(null);
  const [toFlage, settoFlage] = useState(null);

  async function downloadCurrency() {
    
    try{
    const reponce = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/USD`
    );
    const currencyList = Object.keys(reponce.data.rates);
    console.log(reponce.data);
    setCurrencies(currencyList);
    } catch(err){
        console.log("Error: " + err);
    }
    
  }

  
    const fetchCurrencyFlags = async () => {
      try {
        // Replace these URLs with the actual URLs of your flag images based on currency codes
        const fromFlag = `https://flagcdn.com/48x36/${fromCurrency.toLowerCase().substring(0,2)}.png`;
        const toFlag = `https://flagcdn.com/48x36/${toCurrency.toLowerCase().substring(0,2)}.png`;
        console.log(fromFlag);

        setFromFlage(fromFlag);
        settoFlage(toFlag);
      } catch (error) {
        console.error('Error fetching currency flags:', error);
      }
    };

    
 

  async function convertCurrency() {
    setisloading(true);
    setTimeout(async () => {
        try {
            const responce = await axios.get(
              `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
            );
            const rates = responce.data.rates[toCurrency];
            console.log(rates);
            const result = (amount * rates).toFixed(2);
            setConvertedAmount(result);
          } catch (err) {
            console.log("Error: " + err);
          }
          setisloading(false);
    }, 2000);
  }

  useEffect(() => {
    downloadCurrency();
        convertCurrency();
        fetchCurrencyFlags();
    
  }, [fromCurrency, toCurrency, amount, fromCurrency, toCurrency]);

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // eslint-disable-next-line no-dupe-keys
  return {
    currencies,
    setFromCurrency,
    setToCurrency,
    setAmount,
    convertedAmount,
    fromCurrency,
    amount,
    toCurrency,
    currencies,
    convertedAmount,
    swapCurrency,
    isloading,
    fromFlage, 
    toFlage
  };
}

export default useHooksCurrencey;
