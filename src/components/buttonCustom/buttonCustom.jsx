import './buttonCustom.css'
import icons from "../../constants/icons"
export default function ButtonCustom({children, remove, ...props}) {
    const buttonClass = remove ? 'buttonCustom red' : 'buttonCustom green';


  return (
    <div  className={`containerButton ${buttonClass}`}
    onSubmit={props.onSubmit} onClick={props.onClick}>
        {remove ? <img src={icons.remove}/> :  <img src={icons.addTask}/>}
        
        <button className='buttonCustom' type={props.type} >{children}</button>
    </div>
  )
}
