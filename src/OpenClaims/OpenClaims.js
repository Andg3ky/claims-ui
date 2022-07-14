import OpenClaimsRow from "./OpenClaimsRow";
import './OpenClaims.css';

const OpenClaims = () => {

    return <div class="openclaimsContainer">
    <div className="openClaimsBox">
        <div>
            <h1 className="openClaimsTitle">Open Claims</h1>
        </div>

        <div class="table"> <table>
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Surname</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        
        <OpenClaimsRow id="1" policy="5051" surname="James" status="Open" button="Open" />
        <OpenClaimsRow id="2" policy="1256" surname="Harrison" status="Rejected" button="Open" />
        <OpenClaimsRow id="3" policy="7835" surname="Willis" status="Paid" button="Open" />
        <OpenClaimsRow id="4" policy="9335" surname="Burton" status="Rejected" button="Open" />
        <OpenClaimsRow id="5" policy="3998" surname="Smith" status="Open" button="Open" />
        <OpenClaimsRow id="6" policy="6689" surname="Johnson" status="Paid" button="Open" />

        </tbody>
        </table>
        </div>
      </div>
    </div>

}

export default OpenClaims;