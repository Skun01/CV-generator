
export default function FunctionButton({functionName, functionClass, handleClick, themifyIcon}){
  return(
    <button onClick={handleClick} className={functionClass + " function-button"}>
      <i className={themifyIcon}> </i> {functionName}
    </button>
  )
}
