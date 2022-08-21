import { Fragment, useState } from "react";
import { useParams } from "react-router";
import { getClaim } from '../Data/DataFunctions';

const DisplayClaim = () => {

    const emptyTransaction = { id: "", policyNumber : "", address: "", customer : "", date : new Date().toISOString().slice(0,10), 
    reason : "", status : "", type : ""}

    const [transaction, setTransaction] = useState(emptyTransaction);

    const params = useParams();
    debugger;
    getClaim(params.id)
        .then( response => {
            if (response.status === 200) {
                setTransaction(response.data);
            }
            else {
                console.log("Something went wrong", response.status);
            }
        } )
        .catch(error => console.log("error occurred", error));


    return (<div className="viewclaimsContainer">
        <Fragment> 
            <div className="tableData">
                 <h2 className="displayClaimsTitle">Display Claim Details - {transaction.id}</h2>
            </div>

            <div className="tableData">
            <table className="transactionsTable">
                <tbody>
                    <tr><th>Claim ID</th><td>{transaction.id}</td></tr>
                    <tr><th>Policy Number</th><td>{transaction.policyNumber}</td></tr>
                    <tr><th>Customer Address</th><td>{transaction.address}</td></tr>
                    <tr><th>Customer</th><td>{transaction.customer}</td></tr>
                    <tr><th>Date of Claim</th><td>{transaction.Date}</td></tr>
                    <tr><th>Claim Reason</th><td>{transaction.reason}</td></tr>
                    <tr><th>Claim Status</th><td>{transaction.status}</td></tr>
                    <tr><th>Insurance Type</th><td>{transaction.type}</td></tr>
                </tbody>
            </table>
            </div>
        </Fragment>
        </div>
    );
}

export default DisplayClaim;