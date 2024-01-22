import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter2 = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [fromCurrencyFlag, setFromCurrencyFlag] = useState(null);
  const [toCurrencyFlag, setToCurrencyFlag] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const currencyList = Object.keys(response.data.rates);
        setCurrencies(currencyList);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchCurrencyFlags = async () => {
      try {
        // Replace these URLs with the actual URLs of your flag images based on currency codes
        const fromFlag = `https://flagcdn.com/48x36/${fromCurrency.toLowerCase().substring(0,2)}.png`;
        const toFlag = `https://flagcdn.com/48x36/${toCurrency.toLowerCase().substring(0,2)}.png`;
        console.log(fromFlag);

        setFromCurrencyFlag(fromFlag);
        setToCurrencyFlag(toFlag);
      } catch (error) {
        console.error('Error fetching currency flags:', error);
      }
    };

    fetchCurrencyFlags();
  }, [fromCurrency, toCurrency]);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      const result = (amount * rate).toFixed(2);
      setConvertedAmount(result);
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="currency-converter-container">
      <h1 className="app-title">Currency Converter</h1>
      <div className="input-container">
        <label>From:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        {fromCurrencyFlag && <img src={fromCurrencyFlag} alt={fromCurrency} className="currency-flag" />}
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="input-container">
        <label>To:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        {toCurrencyFlag && <img src={toCurrencyFlag} alt={toCurrency} className="currency-flag" />}
        <p className="converted-amount">Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter2;
