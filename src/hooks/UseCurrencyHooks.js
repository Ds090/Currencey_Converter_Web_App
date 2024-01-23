/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import axios from "axios";
import { useEffect, useState } from "react";

// Custom React Hook for handling currency conversion logic
function useHooksCurrencey() {
  // State variables
  const [currencies, setCurrencies] = useState([]); // List of available currencies
  const [fromCurrency, setFromCurrency] = useState("USD"); // Source currency
  const [toCurrency, setToCurrency] = useState("INR"); // Target currency
  const [amount, setAmount] = useState(1); // Amount to be converted
  const [convertedAmount, setConvertedAmount] = useState(null); // Result of currency conversion
  const [isloading, setisloading] = useState(true); // Loading state for asynchronous operations
  const [fromFlage, setFromFlage] = useState(null); // Flag URL for source currency
  const [toFlage, settoFlage] = useState(null); // Flag URL for target currency

  // Function to fetch the list of available currencies
  async function fetchCurrencies() {
    try {
      const response = await axios.get("https://open.er-api.com/v6/latest");
      const currencyList = Object.keys(response.data.rates);
      setCurrencies(currencyList);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  }

  // Function to fetch and set flag URLs for source and target currencies
  async function fetchCurrencyFlags() {
    try {
      const fromFlag = `https://flagcdn.com/48x36/${fromCurrency.toLowerCase().substring(0, 2)}.png`;
      const toFlag = `https://flagcdn.com/48x36/${toCurrency.toLowerCase().substring(0, 2)}.png`;

      setFromFlage(fromFlag);
      settoFlage(toFlag);
    } catch (error) {
      console.error("Error fetching currency flags:", error);
    }
  }

  // Function to perform currency conversion
  async function convertCurrency() {
    setisloading(true);

    // Simulate a delay for loading indication (remove in production)
    setTimeout(async () => {
      try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const rate = response.data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result);
      } catch (error) {
        console.error("Error converting currency:", error);
      }
      setisloading(false);
    }, 2000); // Simulated delay of 2 seconds (adjust as needed)
  }

  // useEffect hook to run specified functions when dependencies change
  useEffect(() => {
    fetchCurrencies();
    convertCurrency();
    fetchCurrencyFlags();
  }, [fromCurrency, toCurrency, amount]);

  // Function to swap source and target currencies
  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Return values and functions accessible to components using this hook
  return {
    currencies,
    setFromCurrency,
    setToCurrency,
    setAmount,
    convertedAmount,
    fromCurrency,
    amount,
    toCurrency,
    swapCurrency,
    isloading,
    fromFlage,
    toFlage,
  };
}

export default useHooksCurrencey;

