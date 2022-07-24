import OpenClaimsRow from "./OpenClaimsRow";
import './OpenClaims.css';

const OpenClaims = () => {

    return <div className="openclaimsContainer">
    <div className="openClaimsBox">
        <div>
            <h1 className="openClaimsTitle">Open Claims</h1>
        </div>

        <div className="table"> <table>
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Surname</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        
        <OpenClaimsRow id="101" policy="5051" surname="James" status="Open" button="Open" />
        <OpenClaimsRow id="102" policy="1256" surname="Harrison" status="Rejected" button="Open" />
        <OpenClaimsRow id="103" policy="7835" surname="Willis" status="Paid" button="Open" />
        <OpenClaimsRow id="104" policy="9335" surname="Burton" status="Rejected" button="Open" />
        <OpenClaimsRow id="105" policy="3998" surname="Smith" status="Open" button="Open" />
        <OpenClaimsRow id="106" policy="6689" surname="Johnson" status="Paid" button="Open" />
        <OpenClaimsRow id="107" policy="5054" surname="Cole" status="Open" button="Open" />
        <OpenClaimsRow id="108" policy="9129" surname="Bailey" status="Rejected" button="Open" />
        <OpenClaimsRow id="109" policy="1033" surname="Stewart" status="Paid" button="Open" />
        <OpenClaimsRow id="110" policy="4724" surname="Graham" status="Open" button="Open" />

        </tbody>
        </table>
        </div>
      </div>
    </div>

}

export default OpenClaims;