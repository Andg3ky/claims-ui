import { Link } from "react-router-dom";

const Menu = (props) => {

    return <ul className="nav">
        <strong>
          <li><Link to="/home">Home </Link></li>
          <li><Link to="/new"> New Claim</Link></li>
          <li><Link to="/view"> View Claims</Link></li>
          <li><Link to="/find"> Search Claims</Link></li>
          <li><Link to="/login"> Login</Link></li>
        </strong>
    </ul>

    
}

export default Menu;