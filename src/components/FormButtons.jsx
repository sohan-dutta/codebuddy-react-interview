const ButtonEle = ({ type = "", buttonLabel, onButtonClick, isDisabled }) => {
  return (
    <button
      type={type}
      onClick={(e) => onButtonClick(e)}
      disabled={isDisabled}
      className={`rounded-lg px-4 py-2 text-white shadow
      ${
        isDisabled
          ? "form-button-disabled bg-blue-300"
          : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      }`}
    >
      {buttonLabel}
    </button>
  );
};

const FormButtons = ({
  isBackDisabled,
  onBack,
  onSave,
  onSaveAndNext,
  isSaveAndNextDisabled,
  shouldShowSubmit,
}) => {
  return (
    <div className="flex w-fit gap-2">
      <ButtonEle buttonLabel="Back" isDisabled={isBackDisabled} onButtonClick={onBack} />
      <ButtonEle buttonLabel="Save" onButtonClick={onSave} />
      <ButtonEle
        buttonLabel="Save and Next"
        onButtonClick={onSaveAndNext}
        isDisabled={isSaveAndNextDisabled}
      />
    </div>
  );
};

export default FormButtons;