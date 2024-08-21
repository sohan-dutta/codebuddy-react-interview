const InputElement = ({
  labelName,
  value,
  onValueChange,
  type,
  isValid,
  errorMsg,
  isRequired = false,
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-semibold text-gray-700">{labelName}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm
        ${isValid ? "border-gray-300 focus:border-blue-500 focus:outline-none" : "border-red-500"}`}
        required={isRequired}
      />
      {!isValid && <p className="text-xs text-red-600">{errorMsg}</p>}
    </div>
  );
};

export default InputElement;