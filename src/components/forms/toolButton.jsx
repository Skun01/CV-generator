export default function ToolButton({themifyIcon, toolName, toolClass, handleClick}){
  return(
    <button onClick={handleClick} className={toolClass + " tool-button btn"}>
      <i className={themifyIcon}> </i> {toolName}
    </button>
  )
}