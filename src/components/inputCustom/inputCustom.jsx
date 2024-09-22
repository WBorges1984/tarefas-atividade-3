import './inputCustom.css'


export default function InputCustom({type, ...props}){
    return(
        <>
            <input className='inputCustom' type={type} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </>
    )
}