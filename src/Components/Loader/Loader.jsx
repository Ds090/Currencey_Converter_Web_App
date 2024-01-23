// Loader component for displaying a spinning animated loader or spinner.
function Loader() {
    return (
      // Container div with multiple border styles and animations to create a visually appealing spinner.
      <div className="border-8 border-stone-900 w-12 h-12 rounded-full border-t-[8px] border-t-teal-500 border-b-[8px] border-b-red-700 border-r-[8px] border-r-pink-400 border-l-[8px] border-l-yellow-300 animate-spin"></div>
    );
  }
  
  // Export the Loader component for use in other parts of the application.
  export default Loader;
  