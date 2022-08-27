import { Fragment, useState, useReducer } from "react";
import { useNavigate, useParams } from "react-router";
import { getClaim, updateClaim } from '../Data/DataFunctions';

const EditClaim = () => {

    const emptyTransaction = { id: "", policyNumber : "", address: "", customer : "", date : new Date().toISOString().slice(0,10), 
    reason : "", status : "", type : ""}

    const [transaction, setTransaction] = useState(emptyTransaction);

    const navigate = useNavigate();

    const editTransactionReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const params = useParams();

    const transactionToEditId = params.id;
    const editMode = transactionToEditId != null;
    //EDIT
    const transactionToEdit = (state => state.transactionToEdit);

    const [editTransaction, dispatch] = 
    useReducer(editTransactionReducer , editMode ? transactionToEdit : emptyTransaction);

    const handleChange = (event) => {
        const dataToChange = { field : event.target.id, value : event.target.value };
        dispatch(dataToChange);
    }

    const {policyNumber, customer, status, type, address, estimatedvalue, dateofclaim, reason} = editTransaction;

    let response;

    if (editMode) {
        let data = {};
        if (policyNumber !== transactionToEdit.policyNumber) {
            data = {...data, policyNumber : policyNumber};
        };
        if (customer !== transactionToEdit.customer) {
            data = {...data, customer : customer};
        };
        if (status !== transactionToEdit.status) {
            data = {...data, status : status};
        };        
        if (address !== transactionToEdit.address) {
            data = {...data, address : address};
        };        
        if (estimatedvalue !== transactionToEdit.estimatedvalue) {
            data = {...data, estimatedvalue : estimatedvalue};
        };
        if (dateofclaim !== transactionToEdit.dateofclaim) {
            data = {...data, dateofclaim : dateofclaim};
        };
        if (reason !== transactionToEdit.reason) {
            data = {...data, reason : reason};
        };
        if (type !== transactionToEdit.type) {
            data = {...data, type : type};
        }

        response = getClaim(params.id, data);
    } 


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

    const update = () => {
        navigate("/display/" + params.id);
    }

    return (<div className="viewclaimsContainer">
        <Fragment> 
            <div className="tableData">
                 <h2 className="displayClaimsTitle">Edit Claim Details - {transaction.id}</h2>
            </div>

            <div className="tableData">
            <table className="transactionsTable">
                <tbody>
                    <tr><th>Claim ID</th><td>{transaction.id} </td></tr>
                    <tr><th>Policy Number</th><td>{transaction.policyNumber}</td></tr>
                    <tr><th>Customer Address</th><td>{transaction.address}</td></tr>
                    <tr><th>Customer</th><td>{transaction.customer}</td></tr>
                    <tr><th>Date of Claim</th><td>{transaction.date}</td></tr>
                    <tr><th>Claim Reason</th><td>{transaction.reason}</td></tr>
                    <tr><th>Claim Status</th><td>{transaction.status}</td></tr>
                    <tr><th>Insurance Type</th><td>{transaction.type}</td></tr>
                </tbody>
            </table>
            <button onClick={update}>Update Claim Details</button>
            </div>
        </Fragment>

        <label htmlFor="Incident Description">Notes: </label>
        <textarea name="incidentDescription" placeholder="Actions to be taken" 
        id="incidentDescription" onChange={handleChange} 
        rows="4" cols="62"></textarea>

        </div>
    );
}

export default EditClaim;