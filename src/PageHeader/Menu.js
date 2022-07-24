import { Link } from "react-router-dom";

const Menu = (props) => {

    return <ul className="nav">
        <li><Link to="/welcome"> Welcome</Link></li>
        <li><Link to="/new"> New Claim</Link></li>
        <li><Link to="/open"> Open Claims</Link></li>
        <li><Link to="/find"> Search Claims</Link></li>
        <li>Archive</li>
    </ul>

    
}

export default Menu;