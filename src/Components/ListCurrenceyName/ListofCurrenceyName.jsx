/* eslint-disable react/prop-types */

// CurrencyOptions component for displaying a dropdown to select currency direction
const CurrencyOptions = ({ currencies, currenciesdiraction, setDiraction, flag }) => {
  return (
    // Container div for the entire CurrencyOptions component
    <div className="border border-black py-1 px-1 text-lg font-semibold rounded cursor-pointer hover:shadow-md hover:shadow-teal-500 shadow-black shadow-md lg:py-2 lg:px-3 lg:text-xl transition-all ease-in-out delay-200 duration-300 flex">
      {/* Flag image for visual representation of the currency */}
      <img src={flag} alt="" className="w-[30px]"/>
      {/* Dropdown to select the currency direction */}
      <select
        value={currenciesdiraction}
        onChange={(e) => setDiraction(e.target.value)}
        className="border-none outline-none w-full h-full cursor-pointer bg-white"
      >
        {/* Mapping through available currencies to create dropdown options */}
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

// Exporting the CurrencyOptions component for use in other parts of the application
export default CurrencyOptions;
