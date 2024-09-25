export function Input({label, type, handleChange, name, value}){

  return(
    <div className="input-container">
      <input type={type} onChange={handleChange} required name={name} value={value}/>
      <label>{label}</label>
    </div>
  )
}

export function FileInput({label, handleChange, name}){
  return(
    <div className="input-file-container">
      <label>{label}</label>
      <div className="file-input-wrapper">
        <button className="file-input-button">Choose File</button>
        <input type="file" onChange={handleChange} name={name} required/>
      </div>
    </div>
  )
}

export function DateInput({label, handleChange}){
  return(
    <div className="input-date-container">
      <label>{label}</label>
      <input type="date" onChange={handleChange} required/>
    </div>
  )
}
export function TextArea({label, handleChange, name, value}){
  return(
    <div className="input-textarea-container">
      <label>{label}</label>
      <textarea onChange={handleChange} name={name} required value={value}></textarea>
    </div>
  )
}
