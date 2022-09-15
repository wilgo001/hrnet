const Select = (props) => {
    const name = props.name;
    const options = props.options;
    const id = props.id;
    const onChangeCallBack = (e) => {
        console.log(e.target.value);
        props.onChange(e.target.value)
    } 
    return(
        <select name={name} onChange={(e) => onChangeCallBack(e)} id={id}>
            {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
        </select>
    )
}

export default Select