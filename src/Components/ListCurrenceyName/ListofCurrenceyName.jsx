/* eslint-disable react/prop-types */

function CurrencyOptions({ currencies, currenciesdiraction, setDiraction, flag })
 {
  return (
    <div className="border border-black py-1 px-1 text-lg font-semibold rounded cursor-pointer hover:shadow-md hover:shadow-teal-500 shadow-black shadow-md lg:py-2 lg:px-3 lg:text-xl transition-all ease-in-out delay-200 duration-300 flex">
      <img src={flag} alt="" className="w-[30px]"/>
      <select value={currenciesdiraction} onChange={(e) => setDiraction(e.target.value)} className="border-none outline-none w-full h-full cursor-pointer bg-white">
        {currencies.map((currency) => (
          <option key={currency} value={currency} className="cursor-pointer">
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyOptions;