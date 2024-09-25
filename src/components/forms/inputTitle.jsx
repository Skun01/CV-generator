export default function InputSectionTitle({title, titleIcon, handleClick, isDropDown}){
  return(
    <div className={isDropDown ? "input-section-title clickable" : "input-section-title"} onClick={handleClick}>
      <div className="title">
        <span className={titleIcon}></span>
        <p>{title}</p>
      </div>
      <span className={isDropDown ? "ti-angle-up angle": ""}></span>
    </div>
  )
}