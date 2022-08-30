import { useReducer, useState } from 'react'
import './NewClaims.css'
import { useParams } from "react-router";
import { addNewClaim } from '../Data/DataFunctions';

const NewClaim = () => {

    //empty list of fields to map different properties
    const emptyNewClaim = { policyNumber: "", typeOfInsurance: "", title: "", customerName: "", customerAddress: "",
      claimStart: new Date().toISOString().slice(0,10) , claimAmount: "", claimReason: "", incidentDescription: "",
      propertyAddressImpacted: "", vehicleMake: "", vehicleModel: "", vehicleYear: "", petType: "", petBreed: ""}

    //standard Reducer function to use with each form - START
    const newClaimReducer = (state, data) => {
       return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(newClaimReducer, emptyNewClaim);

    //new data we want to send to our Reducer function
    const handleChange = (event) => {
        const dataToChange = { field: event.target.id, value : event.target.value}
        dispatch(dataToChange);
    }
    //standard Reducer function to use with each form - END

    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false);

    //destructuring
    const {policyNumber, title, customerName, customerAddress, claimStart, claimAmount, claimReason, incidentDescription,
      propertyAddressImpacted, vehicleMake, vehicleModel, vehicleYear, petType, petBreed} = newClaim;

    //Submit of Form - NOTE to put in Axios Link in DataFunctions
    const submitForm = (e) => {
      e.preventDefault();
      console.log(newClaim);
      setSaving(true);
      setMessage("please wait - registering new claim")
    }

    //Radio Button trigger of additional fields
    const [selectedRadio, setSelectedRadio] = useState("");
    
    const changeHandler = e => {
      setSelectedRadio(e.target.value);
    };

    const params = useParams();

    let data = {};
    let response;
    response = addNewClaim(params.id, data);

    response.then ( result => {
      if (result.status === 200) {
        console.log(response)
      }
      else {
          setMessage ("something went wrong ", result.statusText)
      }
      setSaving(false);
    })
      

    //Register New Claim entry form
    return( <div> 
        <div className="newContainer">
      <h2>Register new claim</h2>
      <form onSubmit={submitForm} >

       {/* Policy Number */}
        <label htmlFor="registerPolicyNumber">Policy Number</label>
        <input type="text"  placeholder="(i.e 9 digit policy number)" name="policyNumber" id="policyNumber" 
         onChange={handleChange} value={policyNumber} />

         {/* Type of Insurance */}
        <label>Type of Insurance </label>
        <div className="radio-container">
          
          <input type="radio" id="property" value="property" name="insuranceType" 
          checked={selectedRadio === "property"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="property">Property</label>

          <input type="radio" id="motor" value="motor" name="insuranceType" 
          checked={selectedRadio === "motor"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="motor">Motor</label>

          <input type="radio" id="pet" value="pet" name="insuranceType" 
          checked={selectedRadio === "pet"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="pet">Pet</label>
        </div>

        {/* Title of Person */}
        <label htmlFor="title">Title</label>
        <select id="title" name="title" onChange={handleChange} value={title}>
          <option value="" defaultValue>-- select --</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Mrs</option>
          <option value="Mx">Mx</option>
        </select>

        {/* Customer Name */}
        <label htmlFor="customerName">Customer Name</label>
        <input type="text" placeholder="customer name" name="customerName" id="customerName" onChange={handleChange} value={customerName} />

        {/* Customer Address */}
        <label htmlFor="customerAddress">Customer Address</label>
        <input type="text" placeholder="customer address" name="customerAddress" id="customerAddress" onChange={handleChange} value={customerAddress} />

        {/* Claim Start Date */}
        <label htmlFor="Claim Start">Claim Start Date</label>
        <input type="date" id="claimStart" name="claimStart" onChange={handleChange} value={claimStart}/>

        {/* Claim Amount */}
        <label htmlFor="Claim Amount">Estimated Claim Amount (approx)</label>
        <input type="text" placeholder="claim amount - $0.00" name="claimAmount" id="claimAmount" onChange={handleChange} value={claimAmount}/>

        {/* Reason for Claim */}
        <label htmlFor="Claim Reason">Claim Reason (Enter details)</label>
        <input type="text" placeholder="reason for claim" name="claimReason" id="claimReason" onChange={handleChange} value={claimReason} />

        {/* Description of Incident leading up to Claim */}
        <label htmlFor="Incident Description">Incident Description (Enter details)</label>
        <textarea name="incidentDescription" placeholder="Enter incident description" id="incidentDescription" onChange={handleChange} 
        value={incidentDescription} rows="3" cols="63"></textarea>

        <div>
            <h1 className="insuranceSpecificTitle">Insurance Type Specific Fields</h1>
        </div>

        <br></br>

        {/* Property Address Impacted - if property radio button is selected */}
        <div aria-hidden={selectedRadio !== "property" ? true : false}>
          <div id="myPropertyDIV">
            <label htmlFor="propertyAddressImpacted">Property Address Impacted</label>
            <textarea name="propertyAddressImpacted" placeholder="Enter property address affected" id="propertyAddressImpacted" onChange={handleChange} 
           value={propertyAddressImpacted} rows="3" cols="63"></textarea>
          </div>
        </div>

        {/* Vehicle Make - if motor radio button is selected */}
        <div aria-hidden={selectedRadio !== "motor" ? true : false}>
          <div id="myMotorDIV">
           <label htmlFor="vehicleMake">Vehicle Make</label>
            <input type="text" name="vehicleMake" placeholder="vehicle make" id="vehicleMake" onChange={handleChange} value={vehicleMake} />
        {/* Vehicle Model - if motor radio button is selected */}
            <label htmlFor="vehicleModel">Vehicle Model</label>
            <input type="text" name="vehicleModel" placeholder="vehicle model" id="vehicleModel" onChange={handleChange} value={vehicleModel} />
        {/* Vehicle Year - if motor radio button is selected */}
            <label htmlFor="vehicleYear">Vehicle Year</label>
            <input type="number" name="vehicleYear" placeholder="vehicle year" id="vehicleYear" onChange={handleChange} value={vehicleYear} />
          </div>
        </div>

        {/* Pet Type - if pet radio button is selected */}
        <div aria-hidden={selectedRadio !== "pet" ? true : false}>
          <div id="myPetDIV">
            <label htmlFor="petType">Pet Type</label>
            <input type="text" name="petType" placeholder="pet type(i.e dog, cat)" id="petType" onChange={handleChange} value={petType} />
        {/* Pet Breed - if pet radio button is selected */}
            <label htmlFor="petBreed">Pet Breed</label>
            <input type="text" name="petBreed" placeholder="pet breed(i.e. terrior, bulldog, maine coon)" id="petBreed" onChange={handleChange} value={petBreed} />
          </div>
        </div>

        {/* Register Button */}
        <button disabled={saving} type="submit" className="button">Register</button>
        <p>{message}</p>
      </form>
    </div>
    </div>
    )
}

export default NewClaim;