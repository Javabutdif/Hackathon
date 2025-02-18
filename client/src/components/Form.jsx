function Form({
  method = "POST",
  action = "#",
  onSubmit = "#",
  inputElements = [
    label,
    type,
    placeHolder,
    className,
    attribs,
  ],
  submitLabel = "Submit",
  fieldsetClassName = "",
  fieldsetLegend = "",
}) {
  {
    /*
    inputElements: list of dict
    elements:
    label,
    type,
    placeHolder,
    className,
    attribs (such as 'required'),
*/
  }

  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      <fieldset className={`fieldset ${fieldsetClassName}`}>
        <legend className="fieldset-legend text-primary-content">{fieldsetLegend}</legend>
        {inputElements.map((element) => {
          return (
            <div key={element.label}>
              <label className="fieldset-label mb-1 text-primary-content">{element.label}</label>
              <input
                type={element.type || "text"}
                placeholder={`${element.placeHolder}`}
                className={`input input-primary text-white placeholder:text-neutral-700 w-full mb-2 ${element.className}`}
                {...element.attribs}
              />
            </div>
          );
        })}
      </fieldset>
      <button type="submit" className="btn btn-neutral w-full mt-1">
        {submitLabel}
      </button>
    </form>
  );
}

export default Form;
