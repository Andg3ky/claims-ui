import './NewClaims.css'
import Welcome from "./Welcome"
import Images from "./Images"

const RegisterNewClaim = () => {

    //Register New Claim entry form
    return( <div> <Welcome />
            <div><Images /></div>

        <div class="container">
      <h2>Register new claim</h2>
      <form action="somepage.html" method="post">

        {/* Policy Number */}
        <label for="Policy Number *">Policy Number *</label>
        <input type="number" name="policyNumber" id="policyNumber" required />

        {/* Type of Insurance */}
        <label>Type of Insurance *</label>
        <div class="radio-container">
          
          <input type="radio" id="property" value="property" name="insuranceType" onclick="show1();"/>
          <label class="radio-label" for="property">property</label>

          <input type="radio" id="motor" value="motor" name="insuranceType" onclick="show2();"/>
          <label class="radio-label" for="motor">motor</label>

          <input type="radio" id="pet" value="pet" name="insuranceType" onclick="show3();"/>
          <label class="radio-label" for="pet">pet</label>
        </div>

        {/* Radio Button Insurance Specific Questions */}
        <div id="div1" class="hide">
        <label for="propertyAddress">Property Address</label>
        <textarea name="incidentDescription" id="incidentDescription" rows="4" cols="30"></textarea>
        </div>

        <div id="div2" class="hide">
          <label for="vehicleMake">Vehicle Make</label>
          <input type="text" name="vehicleMake" id="vehicleMake" required />
          <label for="vehicleModel">Vehicle Model</label>
          <input type="text" name="vehicleModel" id="vehicleModel" required />
          <label for="vehicleYear">Vehicle Year</label>
          <input type="number" name="vehicleYear" id="vehicleYear" required />
          </div>

          <div id="div3" class="hide">
            <label for="petType">Pet Type</label>
            <input type="text" name="petType" id="petType" required />
            <label for="petBreed">Pet Breed</label>
            <input type="text" name="petBreed" id="petBreed" required />
            </div>

        {/* Title of Person */}
        <label for="title">Title *</label>
        <select id="title" name="title" required>
          <option value="" disabled selected>-- select --</option>
          <option value="mr">Mr</option>
          <option value="ms">Mrs</option>
          <option value="mx">Mx</option>
        </select>

        {/* First Name */}
        <label for="firstName">First Name *</label>
        <input type="text" name="firstName" id="firstName" required />
        {/* Surname */}
        <label for="surname">Surname *</label>
        <input type="text" name="surname" id="surname" required />
        {/* Claim Start Date */}
        <label for="Claim Start">Claim Start Date</label>
        <input type="date" id="claimStart" name="claimStart" />
        {/* Claim Amount */}
        <label for="Claim Amount">Claim Amount (approx)</label>
        <input type="number" name="claimAmount" id="claimAmount" required />
        {/* Reason for Claim */}
        <label for="Claim Reason">Claim Reason (Please enter details)</label>
        <input type="text" name="claimReason" id="claimReason" required />
        {/* Description of Incident leading up to Claim */}
        <label for="Incident Description">Incident Description (Please enter details)</label>
        <textarea name="incidentDescription" id="incidentDescription" rows="4" cols="70"></textarea>
        <br></br>
        {/* Register Button */}
        <button type="button" class="button">Register</button>
      </form>
    </div>
    </div>
    )
}

export default RegisterNewClaim;