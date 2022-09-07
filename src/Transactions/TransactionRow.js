import { useNavigate } from "react-router";

const TransactionRow = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/display/${props.id}`);
    }

    return <tr>
        <th>{props.id}</th>
        <th>{props.policyNumber}</th>
        <th>{props.customer}</th>
        <th>{props.status}</th>
        <th><button onClick={handleClick} className="showDetailBtn">View/Edit</button></th>
    </tr>
}

export default TransactionRow;