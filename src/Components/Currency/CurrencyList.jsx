/* eslint-disable react/jsx-no-undef */
import useHooksCurrencey from "../../hooks/UseCurrencyHooks";
import CurrencyOptions from "../ListCurrenceyName/ListofCurrenceyName";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft, faCoins } from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";
const CurrencyConverter = () => {
  const {
    fromCurrency,
    toCurrency,
    setAmount,
    setFromCurrency,
    setToCurrency,
    convertedAmount,
    currencies,
    swapCurrency,
    isloading,
    amount
  } = useHooksCurrencey();

  return (
    <div className="border rounded w-[300px] h-[450px] flex flex-col flex-wrap py-2 px-2 bg-white " id="sahdow">
      <section className="w-full h-[90%] flex flex-col justify-center px-2 gap-6">
      <div className="w-full h-[10%] flex flex-col justify-center">
      <h1 className="text-center text-2xl font-bold bg-clip-text text-transparent" id="back-2">Currency Converter</h1>
      </div>
      <FontAwesomeIcon icon={faCoins} className="text-7xl text-yellow-400"/>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Enter {fromCurrency} Amount</label>
          <div className="shadow-md shadow-teal-300 border-black border rounded" >
            <input
            type="number" 
            value={amount}          
            onChange={(e) => setAmount(e.target.value)} className=" px-1 py-1 rounded text-lg font-semibold border-none border-transparent outline-none w-full"
          /></div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div>
            <label className="text-lg font-semibold">From</label>
            <CurrencyOptions
              currenciesdiraction={fromCurrency}
              setDiraction={setFromCurrency}
              currencies={currencies}
            />
          </div>
          <button onClick={() => swapCurrency()}><FontAwesomeIcon icon={faRightLeft} className="mt-6"/></button>
          <div>
            <label className="text-lg font-semibold">To</label>
            <CurrencyOptions
              currenciesdiraction={toCurrency}
              setDiraction={setToCurrency}
              currencies={currencies}
            />
          </div>
        </div>

        {amount.length === 0 ? <div className="text-center text-lg font-semibold text-[#e50914]">Please Enter any Amount!</div>:isloading? <div className="flex justify-center"><Loader/></div>:<div className="flex flex-col text-lg font-semibold gap-1">
          <p className="text-center">Converted Amount:</p> 
          <div>
          <p className="text-center">{convertedAmount} {toCurrency}</p>
          </div>
          </div>}
      </section>
    </div>
  );
};

export default CurrencyConverter;
