const DatePicker = (props) => {
    const id = props.id;
    const onChangeCallBack = (e) => {props.onChange(e.target.value)} 
    return(
        <input type="date" id={id} onChange={(e)=>{onChangeCallBack(e)}}/>
    )
}

export default DatePicker