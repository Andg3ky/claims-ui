import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getClaim } from '../Data/DataFunctions';

const DisplayClaim = () => {

    const emptyTransaction = { id : "", policyNumber : "", customer : "", address : "", dateOfClaim : "", 
    estimatedValue : "", reason : "", incidentDescription : "", addressImpacted: "", motorMake : "", motorModel : "", motorYear: "", 
    petType : "", petBreed : "", status : "", type : ""}

    const [transaction, setTransaction] = useState(emptyTransaction);

    const navigate = useNavigate();
    
    const params = useParams();
    useEffect( () => {
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
    }, [] );
    
    //use state to check if Claim is rejected/accepted and paid then disable Edit button - start
    const [isDisabled, setDisabled] = useState(false);
    const claimStatus = transaction.status;
    useEffect(() => {
        if(claimStatus === ("Rejected")) {
            setDisabled(true);
        }
    }, []);
    //use state to check if Claim is rejected/accepted and paid then disable Edit button - end

    const edit = () => {
        navigate("/edit/" + params.id);
    }

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
                    <tr><th>Customer</th><td>{transaction.customer}</td></tr>
                    <tr><th>Customer Address</th><td>{transaction.address}</td></tr>
                    <tr><th>Date of Claim</th><td>{transaction.dateOfClaim}</td></tr>
                    <tr><th>Claim Estimated Value($)</th><td>{transaction.estimatedValue}</td></tr>
                    <tr><th>Claim Reason</th><td>{transaction.reason}</td></tr>
                    <tr><th>Incident Description</th><td>{transaction.incidentDescription}</td></tr>

                    {/* Insurance Type Specific Fields Start */}
                    <tr><th>Property Impacted* (Property Only)</th><td>{transaction.addressImpacted}</td></tr>
                    <tr><th>Motor Make* (Motor Only)</th><td>{transaction.motorMake}</td></tr>
                    <tr><th>Motor Model* (Motor Only)</th><td>{transaction.motorModel}</td></tr>
                    <tr><th>Motor Year* (Motor Only)</th><td>{transaction.motorYear}</td></tr>
                    <tr><th>Pet Type* (Pet Only)</th><td>{transaction.petType}</td></tr>
                    <tr><th>Pet Breed* (Pet Only)</th><td>{transaction.petBreed}</td></tr>
                    {/* Insurance Type Specific Fields End */}

                    <tr><th>Claim Status</th><td>{transaction.status}</td></tr>
                    <tr><th>Insurance Type</th><td>{transaction.type}</td></tr>
                </tbody>
            </table>
            <button onClick={edit} disabled={isDisabled}>Edit</button>
            </div>
        </Fragment>
        </div>
    );
}

export default DisplayClaim;