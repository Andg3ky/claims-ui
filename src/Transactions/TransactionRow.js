const TransactionRow = (props) => {

    return <tr><th>{props.id}</th><th>{props.policyNumber}</th><th>{props.customer}</th><th>{props.status}</th>
    <th><button className="showDetailBtn">Show Detail</button></th></tr>

}

export default TransactionRow;