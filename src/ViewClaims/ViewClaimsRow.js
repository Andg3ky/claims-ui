import { useNavigate } from "react-router";

const ViewClaimsRow = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/display/${props.id}`);
    }

    return <tr>
        <th>{props.id}</th>
        <th>{props.policyNumber}</th>
        <th>{props.type}</th>
        <th>{props.customer}</th>
        <th>{props.dateOfClaim}</th>
        <th>{props.status}</th>
        <th><button onClick={handleClick} className="showDetailBtn">View</button></th>
    </tr>

}

export default ViewClaimsRow;