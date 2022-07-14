import './PageHeader.css'
import Menu from "./Menu";

const PageHeader = (props) => {

    return(
        <div className="pageHeader">
        <h1>Direct<span>claims</span></h1>
        <Menu setSelectedPage={props.setSelectedPage} />
        </div>
    )
}

export default PageHeader;