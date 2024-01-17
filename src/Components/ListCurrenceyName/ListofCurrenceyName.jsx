/* eslint-disable react/prop-types */

const CurrencyOptions = ({ currencies, currenciesdiraction, setDiraction }) => {
  return (
    <div>
      <select value={currenciesdiraction} onChange={(e) => setDiraction(e.target.value)} className="border border-black py-1 px-1 text-lg font-semibold rounded cursor-pointer hover:shadow-md hover:shadow-teal-500 shadow-black shadow-md">
        {currencies.map((currency) => (
          <option key={currency} value={currency} className="cursor-pointer">
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyOptions;