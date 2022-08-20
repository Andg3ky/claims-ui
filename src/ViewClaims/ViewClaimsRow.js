const ViewClaimsRow = (props) => {

    return <tr>
        <th>{props.id}</th>
        <th>{props.policyNumber}</th>
        <th>{props.type}</th>
        <th>{props.customer}</th>
        <th>{props.dateOfClaim}</th>
        <th>{props.status}</th>
        <th><button className="viewBtn">View</button></th>
    </tr>

}

export default ViewClaimsRow;