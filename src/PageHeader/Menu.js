const Menu = (props) => {

    return <ul className="nav">
        <li onClick={ () => props.setSelectedPage("new")}>New Claim</li>
        <li onClick={ () => props.setSelectedPage("open")}>OpenClaims</li>
        <li onClick={ () => props.setSelectedPage("find")}>Search</li>
        <li>Archive</li>
    </ul>

    
}

export default Menu;