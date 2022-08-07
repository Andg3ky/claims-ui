import ViewClaimsRow from "./ViewClaimsRow";
import './ViewClaims.css';

const ViewClaims = () => {

    

    return <div className="viewclaimsContainer">
    <div className="viewClaimsBox">
        <div>
            <h1 className="viewClaimsTitle">View Claims</h1>
        </div>

        <div className="viewClaimsFilter">
          <label htmlFor="statusFilterBy">Status Filter By: </label>
          <select 
            id="statusFilterBy" 
            name="statusFilterBy">
             <option value="" defaultValue>-- Select Status --</option>
             <option value="awaitingAssessment">Awaiting Assessment</option>
             <option value="inProgress">In Progress</option>
             <option value="rejected">Rejected</option>
             <option value="awaitingPayment">Awaiting Payment</option>
             <option value="acceptedAndPaid">Accepted and Paid</option>
             <option value="transferred">Transferred to Main Claims</option>
          </select>
        </div>

        <div className="viewTable"> 

        <table id="myTable">
          <thead>
            <tr>
                <th>Claim ID</th>
                <th>Policy Number</th>
                <th>Type</th>
                <th>Name</th>
                <th>Date of Claim</th>
                <th>Status</th>
                <th></th>
            </tr>
           </thead>

         <tbody>
          <ViewClaimsRow id="101" policy="923880431" type="Property" surname="Mr Alan James" dateofclaim="2022-05-25" status="Awaiting Assessment" button="View" />
          <ViewClaimsRow id="102" policy="973621146" type="Auto" surname="Miss Daisy Harrison" dateofclaim="2022-04-01" status="Rejected" button="View" />
          <ViewClaimsRow id="103" policy="900632137" type="Pet" surname="Mr James Willis" dateofclaim="2022-01-10" status="In Progress" button="View" />
          <ViewClaimsRow id="104" policy="912989853" type="Auto" surname="Mrs Samantha Burton" dateofclaim="2022-02-18" status="Rejected" button="View" />
          <ViewClaimsRow id="105" policy="934324234" type="Pet" surname="Mr John Smith" dateofclaim="2021-11-30" status="Awaiting Assessment" button="View" />
          <ViewClaimsRow id="106" policy="923444656" type="Property" surname="Mrs Talia Johnson" dateofclaim="2021-10-13" status="Awaiting Payment" button="View" />
          <ViewClaimsRow id="107" policy="980380734" type="Property" surname="Mr Michael Cole" dateofclaim="2021-06-23" status="Accepted and Paid" button="View" />
          <ViewClaimsRow id="108" policy="924343889" type="Pet" surname="Mrs Jane Bailey" dateofclaim="2021-11-06" status="Transferred to Main Claims" button="View" />
          <ViewClaimsRow id="109" policy="975260750" type="Auto" surname="Mr Grant Stewart" dateofclaim="2022-04-19" status="Accepted and Paid" button="View" />
          <ViewClaimsRow id="110" policy="977308734" type="Auto" surname="Miss Libby Graham" dateofclaim="2022-02-22" status="In Progress" button="View" />
         </tbody>
        </table>
        </div>
      </div>
    </div>
}

export default ViewClaims;