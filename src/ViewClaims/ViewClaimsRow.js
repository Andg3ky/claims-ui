const ViewClaimsRow = (props) => {

    return <tr><th>{props.id}</th><th>{props.policy}</th><th>{props.surname}</th><th>{props.status}</th>
    <th><button className="viewBtn">{props.button}</button></th></tr>

}

export default ViewClaimsRow;