const Select = () => {
  return (
    <div className="flex justify-center">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block w-4/5 py-2.5 px-0 mb-4 text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option defaultValue>Choose a category</option>
        <option>All</option>
        <option>Art</option>
        <option>Cars</option>
        <option>Cinema</option>
        <option>Daily Life</option>
        <option>Ecology</option>
        <option>Game</option>
        <option>Gastronomy</option>
        <option>Geography</option>
        <option>All</option>
        <option>Art</option>
        <option>Cars</option>
        <option>Cinema</option>
        <option>Culture</option>
        <option>Daily Life</option>
        <option>Ecology</option>
        <option>Game</option>
        <option>Gastronomy</option>
        <option>Geography</option>
      </select>
    </div>
  );
};

export default Select;
