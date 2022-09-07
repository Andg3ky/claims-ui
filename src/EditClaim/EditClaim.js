import { Fragment, useState, useReducer, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateClaim, getClaim } from '../Data/DataFunctions';

const EditClaim = () => {

    const emptyTransaction = { id : "", policyNumber : "", customer : "", address : "", dateOfClaim : "", 
    estimatedValue : "", reason : "", incidentDescription : "", addressImpacted: "", motorMake : "", motorModel : "", motorYear: "", 
    petType : "", petBreed : "", status : "", type : ""}

    const [transactionToEdit, setTransaction] = useState(emptyTransaction);

    const navigate = useNavigate();

    const params = useParams();

    const editTransactionReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [editTransaction, dispatch] = 
    useReducer(editTransactionReducer , transactionToEdit);

    getClaim(params.id)
        .then( response => {
            if (response.status === 200) {
                setTransaction(response.data);
                dispatch({field:"policyNumber",value:response.data.policyNumber})}
            else {
                console.log("Something went wrong", response.status);
            }
        } )
        .catch(error => console.log("error occurred", error));

    const transactionToEditId = params.id;

    console.log(transactionToEdit);
    console.log(editTransaction);

    const handleChange = (event) => {
        const dataToChange = { field : event.target.id, value : event.target.value };
        setTransaction({...transactionToEdit,...dataToChange})
        dispatch(dataToChange);
    }

    const {policyNumber, customer, address, dateOfClaim, estimatedValue, reason, incidentDescription, addressImpacted, motorMake, motorModel, 
        motorYear, petType, petBreed, status, type} = editTransaction;

    const [saving, setSaving] = useState(false);
    
    const submitForm = (e) => {
        
        setSaving(true);

    let response;
    
        let data = {};
        if (policyNumber !== transactionToEdit.policyNumber) {
            data = {...data, policyNumber : policyNumber};
        };
        if (customer !== transactionToEdit.customer) {
            data = {...data, customer : customer};
        };
        if (address !== transactionToEdit.address) {
            data = {...data, address : address};
        };  
        if (dateOfClaim !== transactionToEdit.dateOfClaim) {
            data = {...data, dateOfClaim : dateOfClaim};
        };
        if (estimatedValue !== transactionToEdit.estimatedValue) {
            data = {...data, estimatedValue : estimatedValue};
        };
        if (reason !== transactionToEdit.reason) {
            data = {...data, reason : reason};
        };
        if (reason !== transactionToEdit.incidentDescription) {
            data = {...data, incidentDescription : incidentDescription};
        };
        if (address !== transactionToEdit.address) {
            data = {...data, address : address};
        };        
        if (addressImpacted !== transactionToEdit.addressImpacted) {
            data = {...data, addressImpacted : addressImpacted};
        };
        if (motorMake !== transactionToEdit.motorMake) {
            data = {...data, motorMake : motorMake};
        };
        if (motorModel !== transactionToEdit.motorModel) {
            data = {...data, motorModel : motorModel};
        };
        if (type !== transactionToEdit.motorYear) {
            data = {...data, motorYear : motorYear};
        }
        if (type !== transactionToEdit.petType) {
            data = {...data, petType : petType};
        }
        if (type !== transactionToEdit.petBreed) {
            data = {...data, petBreed : petBreed};
        }
        if (type !== transactionToEdit.status) {
            data = {...data, status : status};
        }
        if (type !== transactionToEdit.type) {
            data = {...data, type : type};
        }

        response = updateClaim(params.id, data);
    

    response.then( result => {
        if (result.status === 200) {
            navigate("/edit/" + result.data.id);
        }
        else {
            console.log("Something went wrong", result.statusText);
        }
        setSaving(false);
    })

        .catch(error => {
            console.log("error occurred", error)
           setSaving(false);
        })

    }
   
    const update = () => {
        navigate("/display/" + params.id);
    }

    //The useEffect means run only once
        useEffect( () => {
            submitForm();
        } , [] );

    return (
   <div className="viewclaimsContainer">
        <Fragment> 
            <div className="tableData">
                 <h2 className="displayClaimsTitle">Edit Claim Details - {transactionToEditId}</h2>
            </div>

            <div className="tableData">
            <form className="transactionsTable" onSubmit={submitForm}>

                    {/* Policy Number */}
                     <label htmlFor="registerPolicyNumber">Policy Number</label>
                     <input type="text"  placeholder="(i.e 9 digit policy number)" name="policyNumber" id="policyNumber" 
                     onChange={handleChange} value={editTransaction.policyNumber} />

                    {/* Customer Name */}
                    <label htmlFor="customerName">Customer Name</label>
                    <input type="text" placeholder="customer name" name="customerName" id="customerName" 
                    onChange={handleChange} value={editTransaction.customer} />

                    {/* Customer Address */}
                    <label htmlFor="customerAddress">Customer Address</label>
                    <input type="text" placeholder="customer address" name="customerAddress" id="customerAddress" 
                    onChange={handleChange} value={editTransaction.address} />

                    {/* Claim Start Date */}
                    <label htmlFor="Claim Start">Claim Start Date</label>
                    <input type="text" placeholder="claim start date" id="claimStart" name="claimStart" 
                    onChange={handleChange} value={editTransaction.dateOfClaim}/>

                    {/* Claim Amount */}
                    <label htmlFor="Claim Amount">Claim Estimated Value($)</label>
                    <input type="text" placeholder="claim amount - $0.00" name="claimAmount" id="claimAmount" 
                    onChange={handleChange} value={editTransaction.estimatedValue}/>

                    {/* Reason for Claim */}
                    <label htmlFor="Claim Reason">Claim Reason (Enter details)</label>
                    <input type="text" placeholder="reason for claim" name="claimReason" id="claimReason" 
                    onChange={handleChange} value={editTransaction.reason} />

                    {/* Description of Incident leading up to Claim */}
                    <label htmlFor="Incident Description">Incident Description (Enter details)</label>
                    <textarea name="incidentDescription" placeholder="Enter incident description" id="incidentDescription" 
                    onChange={handleChange} value={editTransaction.incidentDescription} rows="3" cols="63"></textarea>

                    {/* Insurance Type Specific Fields Start */}
                    <label htmlFor="propertyAddressImpacted">Property Impacted* (Property Only)</label>
                    <textarea name="propertyAddressImpacted" placeholder="Enter property address affected" id="propertyAddressImpacted" 
                    onChange={handleChange} value={editTransaction.addressImpacted} rows="3" cols="63"></textarea>

                    {/* Motor Make */}
                    <label htmlFor="motorMake">Motor Make* (Motor Only)</label>
                    <input type="text" name="motorMake" placeholder="motor make" id="motorMake" 
                    onChange={handleChange} value={editTransaction.motorMake} />

                    {/* Motor Model */}
                    <label htmlFor="motorModel">Motor Model* (Motor Only)</label>
                    <input type="text" name="motorModel" placeholder="motor model" id="motorModel" 
                    onChange={handleChange} value={editTransaction.motorModel} />

                    {/* Motor Year */}
                    <label htmlFor="motorYear">Motor Year* (Motor Only)</label>
                    <input type="number" name="motorYear" placeholder="motor year" id="motorYear" 
                    onChange={handleChange} value={editTransaction.motorYear} />

                    {/* Pet Type */}
                    <label htmlFor="petType">Pet Type* (Pet Only)</label>
                    <input type="text" name="petType" placeholder="pet type(i.e dog, cat)" id="petType" 
                    onChange={handleChange} value={editTransaction.petType} />

                    {/* Pet Breed */}
                    <label htmlFor="petBreed">Pet Breed* (Pet Only)</label>
                    <input type="text" name="petBreed" placeholder="pet breed(i.e. terrior, bulldog, maine coon)" id="petBreed" 
                    onChange={handleChange} value={editTransaction.petBreed} />

                    {/* Claim Status */}
                    <label htmlFor="claimStatus">Claim Status</label>
                    <input type="text" name="claimStatus" placeholder="claim status" id="claimStatus" 
                    onChange={handleChange} value={editTransaction.status} />

                    {/* Insurance Type */}
                    <label htmlFor="insuranceType">Type of Insurance </label>
                    <input type="text" name ="insuranceType" placeholder= "insurance type" id="insuranceType" 
                    onChange={handleChange} value={editTransaction.type}/>

            <button onClick={update} disabled={saving} onSubmit={submitForm} type="submit">Update Claim Details</button>
            <button onClick={update} type="submit">Return to Display Claim</button>
            </form>
            </div>
        </Fragment>

      </div>
    );
}

export default EditClaim;