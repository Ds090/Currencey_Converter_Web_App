// Importing the CSS file to apply styles
import './App.css';

// Importing the CurrencyConverter component from the specified path
import CurrencyConverter from './Components/Currency/CurrencyList';

// App component, the root component of the application
function App() {
  // Return JSX for rendering the App component
  return (
    // Container div with full width and height, applying background animation from 'App.css'
    <div className='w-full h-screen flex justify-center items-center' id='back'>
      {/* Render the CurrencyConverter component */}
      <CurrencyConverter />
    </div>
  );
}

// Exporting the App component for use in other parts of the application
export default App;

