export default function DropDown(){
    return (
        <div className="flex flex-col">
      <label htmlFor="options" className="text-gray-700 font-medium mb-2">
        Choose an option
      </label>
      <select
        id="options"
        name="options"
        className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
    )
}