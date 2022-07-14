const TransactionRow = (props) => {

    return <tr><th>{props.id}</th><th>{props.policynumber}</th><th>{props.customer}</th><th>{props.status}</th>
    <th><button>{props.button}</button></th></tr>

}

export default TransactionRow;