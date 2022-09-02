import { Fragment, useState, useReducer, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateClaim } from '../Data/DataFunctions';

const EditClaim = () => {

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
    useReducer(editTransactionReducer , editMode ? transactionToEdit : transactionToEdit);

    const handleChange = (event) => {
        const dataToChange = { field : event.target.id, value : event.target.value };
        dispatch(dataToChange);
    }

    const {policyNumber, customer, address, dateOfClaim, estimatedValue, reason, incidentDescription, addressImpacted, motorMake, motorModel, 
        motorYear, petType, petBreed, status, type} = editTransaction;

    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false);
    
    const submitForm = (e) => {
        setSaving(true);
        setMessage("please wait - saving")

    let response;

    
    if (editMode) {
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
    } 

    response.then( result => {
        if (result.status === 200) {
            navigate("/edit/" + result.data.id);
        }
        else {
            setMessage("Something went wrong", result.statusText);
        }
        setSaving(false);
    })

        .catch(error => {
           setMessage("error occurred", error)
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
                     onChange={handleChange} value={policyNumber} />

                    {/* Customer Name */}
                    <label htmlFor="customerName">Customer Name</label>
                    <input type="text" placeholder="customer name" name="customerName" id="customerName" 
                    onChange={handleChange} value={customer} />

                    {/* Customer Address */}
                    <label htmlFor="customerAddress">Customer Address</label>
                    <input type="text" placeholder="customer address" name="customerAddress" id="customerAddress" 
                    onChange={handleChange} value={address} />

                    {/* Claim Start Date */}
                    <label htmlFor="Claim Start">Claim Start Date</label>
                    <input type="text" placeholder="claim start date" id="claimStart" name="claimStart" 
                    onChange={handleChange} value={dateOfClaim}/>

                    {/* Claim Amount */}
                    <label htmlFor="Claim Amount">Estimated Claim Amount (approx)</label>
                    <input type="text" placeholder="claim amount - $0.00" name="claimAmount" id="claimAmount" 
                    onChange={handleChange} value={estimatedValue}/>

                    {/* Reason for Claim */}
                    <label htmlFor="Claim Reason">Claim Reason (Enter details)</label>
                    <input type="text" placeholder="reason for claim" name="claimReason" id="claimReason" 
                    onChange={handleChange} value={reason} />

                    {/* Description of Incident leading up to Claim */}
                    <label htmlFor="Incident Description">Incident Description (Enter details)</label>
                    <textarea name="incidentDescription" placeholder="Enter incident description" id="incidentDescription" 
                    onChange={handleChange} value={incidentDescription} rows="3" cols="63"></textarea>

                    {/* Insurance Type Specific Fields Start */}
                    <label htmlFor="propertyAddressImpacted">Property Impacted* (Property Only)</label>
                    <textarea name="propertyAddressImpacted" placeholder="Enter property address affected" id="propertyAddressImpacted" 
                    onChange={handleChange} value={addressImpacted} rows="3" cols="63"></textarea>

                    {/* Vehicle Make */}
                    <label htmlFor="vehicleMake">Vehicle Make* (Motor Only)</label>
                    <input type="text" name="vehicleMake" placeholder="vehicle make" id="vehicleMake" 
                    onChange={handleChange} value={motorMake} />

                    {/* Vehicle Model */}
                    <label htmlFor="vehicleModel">Vehicle Model* (Motor Only)</label>
                    <input type="text" name="vehicleModel" placeholder="vehicle model" id="vehicleModel" 
                    onChange={handleChange} value={motorModel} />

                    {/* Vehicle Year */}
                    <label htmlFor="vehicleYear">Vehicle Year* (Motor Only)</label>
                    <input type="number" name="vehicleYear" placeholder="vehicle year" id="vehicleYear" 
                    onChange={handleChange} value={motorYear} />

                    {/* Pet Type */}
                    <label htmlFor="petType">Pet Type* (Pet Only)</label>
                    <input type="text" name="petType" placeholder="pet type(i.e dog, cat)" id="petType" 
                    onChange={handleChange} value={petType} />

                    {/* Pet Breed */}
                    <label htmlFor="petBreed">Pet Breed* (Pet Only)</label>
                    <input type="text" name="petBreed" placeholder="pet breed(i.e. terrior, bulldog, maine coon)" id="petBreed" 
                    onChange={handleChange} value={petBreed} />

                    {/* Claim Status */}
                    <label htmlFor="claimStatus">Claim Status</label>
                    <input type="text" name="claimStatus" placeholder="claim status" id="claimStatus" 
                    onChange={handleChange} value={status} />

                    {/* Insurance Type */}
                    <label htmlFor="insuranceType">Type of Insurance </label>
                    <input type="text" name ="insuranceType" placeholder= "insurance type" id="insuranceType" 
                    onChange={handleChange} value={type}/>

            </form>
            <button onClick={update} disabled={saving} type="submit">Update Claim Details</button>
            <button onClick={update} type="submit">Go back to View Claims</button>
            <p>{message}</p>
            </div>
        </Fragment>

        {/* Claim Notes */}
        <label htmlFor="claimNotes">Notes: </label>
        <textarea name="claimNotes" placeholder="Actions to be taken" id="claimNotes" onChange={handleChange} rows="2" cols="64"></textarea>

        </div>
    );
}

export default EditClaim;