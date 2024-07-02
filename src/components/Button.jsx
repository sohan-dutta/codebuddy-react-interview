const Button = ({ label = "", onClick, disabled = false }) => {
  return (
    <button
      className={`text-md flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm ${
        disabled ? "opacity-50" : "hover:bg-orange-500"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
