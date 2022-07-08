import './PageHeader.css'
import Menu from "./Menu";

const PageHeader = () => {
    return (
        <div className="pageHeader">
            <h1>Direct Claims</h1>
            <Menu/>
        </div>
    );
}

export default PageHeader;