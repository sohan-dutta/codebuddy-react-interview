




const FormItem = ({ label, children, errorMessage, inValid }) => {

  return (
    <div>
      <div className="text-gray-800">{label}</div>
      {children}
      {inValid && <div className="text-red-500">{errorMessage}</div>}
    </div>
  )
}

export default FormItem