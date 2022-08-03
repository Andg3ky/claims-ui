import { useReducer } from 'react'
import './NewClaims.css'

const NewClaim = () => {

    //empty list of fields to map different properties
    const emptyNewClaim = { policyNumber: "", typeOfInsurance: "", title: "", firstName: "",
      surName: "", claimStart: new Date().toISOString().slice(0,10) , claimAmount: "", claimReason: "", incidentDescription: ""}

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

    //destructuring
    const {policyNumber, title, firstName, surName, claimStart, claimAmount, claimReason, incidentDescription} = newClaim;

    //Submit of Form - NOTE to put in Axios Link in DataFunctions
    const submitForm = (e) => {
      e.preventDefault();
      console.log(newClaim);
    }

    //Register New Claim entry form
    return( <div> 
        <div className="newContainer">
      <h2>Register new claim</h2>
      <form onSubmit={submitForm} >

        {/* Policy Number */}
        <label htmlFor="registerPolicyNumber">Policy Number *</label>
        <input type="text"  placeholder="policy number" name="registerpolicyNumber" id="registerpolicyNumber" 
         onChange={handleChange} value={policyNumber} />

        {/* Type of Insurance */}
        <label>Type of Insurance *</label>
        <div className="radio-container">
          
          <input type="radio" id="property" value="property" name="insuranceType" onChange={handleChange} />
          <label className="radio-label" htmlFor="property">property</label>

          <input type="radio" id="motor" value="motor" name="insuranceType" onChange={handleChange} />
          <label className="radio-label" htmlFor="motor">motor</label>

          <input type="radio" id="pet" value="pet" name="insuranceType" onChange={handleChange} />
          <label className="radio-label" htmlFor="pet">pet</label>
        </div>

        {/* Title of Person */}
        <label htmlFor="title">Title *</label>
        <select id="title" name="title" onChange={handleChange} value={title}>
          <option value="" defaultValue>-- select --</option>
          <option value="mr">Mr</option>
          <option value="ms">Mrs</option>
          <option value="mx">Mx</option>
        </select>

        {/* First Name */}
        <label htmlFor="firstName">First Name *</label>
        <input type="text" placeholder="first name" name="firstName" id="firstName" onChange={handleChange} value={firstName} />
        {/* Surname */}
        <label htmlFor="registerSurname">Surname *</label>
        <input type="text" placeholder="surname" name="registerSurname" id="registersurname" onChange={handleChange} value={surName} />
        {/* Claim Start Date */}
        <label htmlFor="Claim Start">Claim Start Date</label>
        <input type="date" id="claimStart" name="claimStart" onChange={handleChange} value={claimStart}/>
        {/* Claim Amount */}
        <label htmlFor="Claim Amount">Claim Amount (approx)</label>
        <input type="text" placeholder="claim amount" name="claimAmount" id="claimAmount" onChange={handleChange} value={claimAmount}/>
        {/* Reason for Claim */}
        <label htmlFor="Claim Reason">Claim Reason (Please enter details)</label>
        <input type="text" placeholder="claim reason" name="claimReason" id="claimReason" onChange={handleChange} value={claimReason} />
        {/* Description of Incident leading up to Claim */}
        <label htmlFor="Incident Description">Incident Description (Please enter details)</label>
        <textarea name="incidentDescription" placeholder="incident description" id="incidentDescription" onChange={handleChange} value={incidentDescription} rows="4" cols="70"></textarea>
        <br></br>
        {/* Register Button */}
        <button type="submit" className="button">Register</button>
      </form>
    </div>
    </div>
    )
}

export default NewClaim;