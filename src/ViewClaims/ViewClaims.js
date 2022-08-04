import ViewClaimsRow from "./ViewClaimsRow";
import './ViewClaims.css';

const ViewClaims = () => {

    return <div className="viewclaimsContainer">
    <div className="viewClaimsBox">
        <div>
            <h1 className="viewClaimsTitle">View Claims</h1>
        </div>

        <div className="table"> <table>
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Surname</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        
        <ViewClaimsRow id="101" policy="923880431" surname="James" status="Open" button="View" />
        <ViewClaimsRow id="102" policy="973621146" surname="Harrison" status="Rejected" button="View" />
        <ViewClaimsRow id="103" policy="900632137" surname="Willis" status="Paid" button="View" />
        <ViewClaimsRow id="104" policy="912989853" surname="Burton" status="Rejected" button="View" />
        <ViewClaimsRow id="105" policy="934324234" surname="Smith" status="Open" button="View" />
        <ViewClaimsRow id="106" policy="923444656" surname="Johnson" status="Paid" button="View" />
        <ViewClaimsRow id="107" policy="980380734" surname="Cole" status="Open" button="View" />
        <ViewClaimsRow id="108" policy="924343889" surname="Bailey" status="Rejected" button="View" />
        <ViewClaimsRow id="109" policy="975260750" surname="Stewart" status="Paid" button="View" />
        <ViewClaimsRow id="110" policy="977308734" surname="Graham" status="Open" button="View" />

        </tbody>
        </table>
        </div>
      </div>
    </div>
}

export default ViewClaims;