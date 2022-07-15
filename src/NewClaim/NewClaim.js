import './NewClaims.css'
import Welcome from "./Welcome"
import Images from "./Images"

const NewClaim = () => {

    //Register New Claim entry form
    return( <div> <Welcome />
            <div><Images /></div>

        <div className="newContainer">
      <h2>Register new claim</h2>
      <form action="somepage.html" method="post">

        {/* Policy Number */}
        <label htmlFor="registerPolicyNumber">Policy Number *</label>
        <input type="number" name="registerpolicyNumber" id="registerpolicyNumber" required />

        {/* Type of Insurance */}
        <label>Type of Insurance *</label>
        <div className="radio-container">
          
          <input type="radio" id="property" value="property" name="insuranceType" />
          <label className="radio-label" htmlFor="property">property</label>

          <input type="radio" id="motor" value="motor" name="insuranceType" />
          <label className="radio-label" htmlFor="motor">motor</label>

          <input type="radio" id="pet" value="pet" name="insuranceType" />
          <label className="radio-label" htmlFor="pet">pet</label>
        </div>

        {/* Radio Button Insurance Specific Questions */}
        <div id="div1" className="hide">
        <label htmlFor="propertyAddress">Property Address</label>
        <textarea name="incidentDescription" id="incidentDescription" rows="4" cols="30"></textarea>
        </div>

        <div id="div2" className="hide">
          <label htmlFor="vehicleMake">Vehicle Make</label>
          <input type="text" name="vehicleMake" id="vehicleMake" required />
          <label htmlFor="vehicleModel">Vehicle Model</label>
          <input type="text" name="vehicleModel" id="vehicleModel" required />
          <label htmlFor="vehicleYear">Vehicle Year</label>
          <input type="number" name="vehicleYear" id="vehicleYear" required />
          </div>

          <div id="div3" className="hide">
            <label htmlFor="petType">Pet Type</label>
            <input type="text" name="petType" id="petType" required />
            <label htmlFor="petBreed">Pet Breed</label>
            <input type="text" name="petBreed" id="petBreed" required />
            </div>

        {/* Title of Person */}
        <label htmlFor="title">Title *</label>
        <select id="title" name="title" required>
          <option value="" defaultValue>-- select --</option>
          <option value="mr">Mr</option>
          <option value="ms">Mrs</option>
          <option value="mx">Mx</option>
        </select>

        {/* First Name */}
        <label htmlFor="firstName">First Name *</label>
        <input type="text" name="firstName" id="firstName" required />
        {/* Surname */}
        <label htmlFor="registersurname">Surname *</label>
        <input type="text" name="registersurname" id="registersurname" required />
        {/* Claim Start Date */}
        <label htmlFor="Claim Start">Claim Start Date</label>
        <input type="date" id="claimStart" name="claimStart" />
        {/* Claim Amount */}
        <label htmlFor="Claim Amount">Claim Amount (approx)</label>
        <input type="number" name="claimAmount" id="claimAmount" required />
        {/* Reason for Claim */}
        <label htmlFor="Claim Reason">Claim Reason (Please enter details)</label>
        <input type="text" name="claimReason" id="claimReason" required />
        {/* Description of Incident leading up to Claim */}
        <label htmlFor="Incident Description">Incident Description (Please enter details)</label>
        <textarea name="incidentDescription" id="incidentDescription" rows="4" cols="70"></textarea>
        <br></br>
        {/* Register Button */}
        <button type="button" className="button">Register</button>
      </form>
    </div>
    </div>
    )
}

export default NewClaim;