const Header = (props) => {
    const title = props.title;
    
    return(
        <div className="title">
            <h1>{title}</h1>
        </div>
    )
}

export default Header;