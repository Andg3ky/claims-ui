import { useReducer, useState } from 'react'
import './NewClaims.css'
import { addNewClaim } from '../Data/DataFunctions';

const NewClaim = () => {

    //empty list of fields to map different properties
    const emptyNewClaim = { policyNumber: "", type: "", customer: "", address: "",
      claimStart: new Date().toISOString().slice(0,10) , estimatedValue: "", reason: "", incidentDescription: "",
      addressImpacted: "", motorMake: "", motorModel: "", motorYear: "", petType: "", petBreed: ""}

    //standard Reducer function to use with each form - START
    const newClaimReducer = (state, data) => {
       return {...state, [data.field] : data.value}
    }

    const [newTransaction, dispatch] = useReducer(newClaimReducer, emptyNewClaim);

    //new data we want to send to our Reducer function
    const handleChange = (event) => {
        const dataToChange = { field: event.target.id, value : event.target.value}
        dispatch(dataToChange);
    }
    //standard Reducer function to use with each form - END

    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false);

//Radio Button trigger of additional fields
const [selectedRadio, setSelectedRadio] = useState("");
    
const changeHandler = e => {
  setSelectedRadio(e.target.value);
  dispatch({field : "type", value : e.target.value})
};

//const params = useParams();

    //destructuring
    const {policyNumber, type, customer, address, claimStart, estimatedValue, reason, incidentDescription,
      addressImpacted, motorMake, motorModel, motorYear, petType, petBreed} = newTransaction;

    const submitForm = (e) => {
      e.preventDefault();
      console.log(newTransaction);
      setSaving(true);
      setMessage("New Claim registered")
    
    let response;
    response = addNewClaim(newTransaction);

    response.then ( result => {
      if (result.status === 200) {
        console.log(response)
      }
      else {
          setMessage ("something went wrong first error ", result.statusText)
      }
      setSaving(false);
    })
    .catch (error => {
      setMessage("something went wrong second error ", error)
      setSaving(false);
  })

}

    //Register New Claim entry form
    return( <div> 
        <div className="newContainer">
      <h2 data-testid="h2">Register new claim</h2>

      <div className="instructions">
        <h3>Instructions</h3>
        <ul>
          <li>Please fill in the fields for the claim.</li>
          <li>Click Register to record new claim.</li>
        </ul>
      </div>

      <div>
            <h1 className="insuranceSpecificTitle">Claim Form</h1>
      </div>

      <form onSubmit={submitForm} >

       {/* Policy Number */}
        <label htmlFor="registerPolicyNumber">Policy Number</label>
        <input type="text"  placeholder="(i.e 9 digit policy number)" name="policyNumber" id="policyNumber" 
         onChange={handleChange} value={policyNumber} required />

         {/* Type of Insurance */}
        <label>Type of Insurance </label>
        <div className="radio-container">
          
          <input type="radio" id="property" value="property" name="type" 
          checked={type === "property"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="property">Property</label>

          <input type="radio" id="motor" value="motor" name="type" 
          checked={type === "motor"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="motor">Motor</label>

          <input type="radio" id="pet" value="pet" name="type" 
          checked={type === "pet"} onChange={changeHandler} />
          <label className="radio-label" htmlFor="pet">Pet</label>
        </div>

        {/* Customer Name */}
        <label htmlFor="customerName">Customer Full Name</label>
        <input type="text" placeholder="full customer name (i.e Mr/Ms/Mx)" name="customer" id="customer" onChange={handleChange} value={customer} required />

        {/* Customer Address */}
        <label htmlFor="customerAddress">Customer Address</label>
        <input type="text" placeholder="customer address" name="address" id="address" onChange={handleChange} value={address} required />

        {/* Claim Start Date */}
        <label htmlFor="Claim Start">Claim Start Date</label>
        <input type="date" id="claimStart" name="claimStart" onChange={handleChange} value={claimStart} />

        {/* Claim Amount */}
        <label htmlFor="Claim Amount">Estimated Claim Amount (approx)</label>
        <input type="text" placeholder="claim amount - $0.00" name="estimatedValue" id="estimatedValue" onChange={handleChange} value={estimatedValue} required/>

        {/* Reason for Claim */}
        <label htmlFor="Claim Reason">Claim Reason (Enter details)</label>
        <input type="text" placeholder="reason for claim" name="reason" id="reason" onChange={handleChange} value={reason} required />

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
            <textarea name="addressImpacted" placeholder="Enter property address affected" id="addressImpacted" onChange={handleChange} 
           value={addressImpacted} rows="3" cols="63"></textarea>
          </div>
        </div>

        {/* Motor Make/Model/Year - if motor radio button is selected */}
        <div aria-hidden={selectedRadio !== "motor" ? true : false}>
          <div id="myMotorDIV">
        {/* Motor Make */}
           <label htmlFor="motorMake">Motor Make</label>
            <input type="text" name="motorMake" placeholder="motor make" id="motorMake" onChange={handleChange} value={motorMake} />
        {/* Motor Model */}
            <label htmlFor="vehicleModel">Motor Model</label>
            <input type="text" name="motorModel" placeholder="motor model" id="motorModel" onChange={handleChange} value={motorModel} />
        {/* Motor Year */}
            <label htmlFor="motorYear">Motor Year</label>
            <input type="number" name="motorYear" placeholder="motor year" id="motorYear" onChange={handleChange} value={motorYear} />
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
        <button disabled={saving} onSubmit={submitForm} type="submit" className="button">Register</button>
        <p>{message}</p>
      </form>
    </div>
    </div>
    )
}

export default NewClaim;