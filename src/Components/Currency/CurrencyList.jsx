/* eslint-disable react/jsx-no-undef */
// Importing custom hook for currency conversion logic
import useHooksCurrencey from "../../hooks/UseCurrencyHooks";
// Importing component for displaying a list of currency options
import CurrencyOptions from "../ListCurrenceyName/ListofCurrenceyName";
// Importing FontAwesome icons for visual elements
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft, faCoins } from '@fortawesome/free-solid-svg-icons'
// Importing the Loader component for displaying a loading spinner
import Loader from "../Loader/Loader";

// CurrencyConverter component responsible for rendering the main currency conversion interface
const CurrencyConverter = () => {
  // Destructuring values and functions from the custom currency conversion hook
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
    amount,
    toFlage,
    fromFlage
  } = useHooksCurrencey();

  // JSX for rendering the CurrencyConverter component
  return (
    // Container div for the entire currency converter component
    <div className="border rounded w-[300px] h-[450px] lg:w-[500px] flex flex-col flex-wrap py-2 px-2 bg-white " id="sahdow">
      {/* Main section for the currency conversion interface */}
      <section className="w-full h-[90%] flex flex-col justify-center px-2 gap-6">
        {/* Header section with the title */}
        <div className="w-full h-[10%] flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold bg-clip-text text-transparent lg:text-3xl" id="back-2">Currency Converter</h1>
        </div>
        {/* Icon for visual representation of currency conversion */}
        <FontAwesomeIcon icon={faCoins} className="text-7xl text-yellow-400 animate-bounce"/>
        {/* Input section for entering the amount to be converted */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold lg:text-xl">Enter {fromCurrency} Amount</label>
          <div className="shadow-md shadow-teal-300 border-black border rounded" >
            <input
              type="number" 
              value={amount}          
              onChange={(e) => setAmount(e.target.value)} className=" px-1 py-1 rounded text-lg font-semibold border-none border-transparent outline-none w-full"
            />
          </div>
        </div>
        {/* Section for selecting source and target currencies */}
        <div className="w-full flex justify-between items-center">
          <div>
            <label className="text-lg font-semibold lg:text-xl" >From</label>
            <CurrencyOptions
              currenciesdiraction={fromCurrency}
              setDiraction={setFromCurrency}
              currencies={currencies}
              flag={fromFlage}
            />
          </div>
          <button onClick={() => swapCurrency()}><FontAwesomeIcon icon={faRightLeft} className="mt-9 text-lg"/></button>
          <div>
            <label className="text-lg font-semibold lg:text-xl">To</label>
            <CurrencyOptions
              currenciesdiraction={toCurrency}
              setDiraction={setToCurrency}
              currencies={currencies}
              flag={toFlage}
            />
          </div>
        </div>
        {/* Display section for showing the converted amount */}
        {amount.length === 0 ? <div className="text-center text-lg font-semibold text-[#e50914] lg:text-xl">Please Enter any Amount!</div> : isloading ? <div className="flex justify-center"><Loader/></div> : <div className="flex flex-col text-lg font-semibold gap-1">
          <p className="text-center lg:text-xl">Converted Amount:</p> 
          <div>
            <p className="text-center lg:text-xl">{convertedAmount} {toCurrency}</p>
          </div>
        </div>}
      </section>
    </div>
  );
};

// Exporting the CurrencyConverter component for use in other parts of the application
export default CurrencyConverter;

