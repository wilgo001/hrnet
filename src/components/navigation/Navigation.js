import { Link } from 'react-router-dom'

const Navigation = (props) => {
    const links = props.links

    return(
        <div>
            {links.map((link, index) => 
                <Link to={link.path} key={index}>{link.title}</Link>
            )}
        </div>
    )
}

export default Navigation