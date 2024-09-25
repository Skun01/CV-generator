export default function AddDataBtn({dataName, handleClick}){
  return(
    <button className='add-data-btn' onClick={handleClick}>
      <i className= 'ti-plus'> </i>
      {dataName}
    </button>
  )
}