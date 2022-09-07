import { getAllClaimsAxiosVersion } from '../Data/DataFunctions';
import { useEffect, useState } from "react";
import ViewClaimsRow from "./ViewClaimsRow";
import './ViewClaims.css';

const ViewClaims = () => {

    const [transactions, setTransactions] = useState([]);

    const getTransactionsDataFromServer = () => 
    {
         const paymentsPromise = getAllClaimsAxiosVersion();
         paymentsPromise.then (
            (response) => {
                console.log(response)
                if(response.status === 200) {
                    setTransactions(response.data);    
                }
                else {
                    console.log("Something went wrong", response.status);
                }
            }
        )
            .catch (
                (error) => {
                    console.log("Server error", error);
                }
            );

    }

    //The useEffect means run only once
    useEffect( () => {
      getTransactionsDataFromServer();
    } , [] );

    const viewTransactions = transactions.map (trans => 
        <ViewClaimsRow 
        key={trans.id} 
        id={trans.id} 
        policyNumber={trans.policyNumber} 
        customer={trans.customer} 
        status={trans.status} 
        type={trans.type}
        address={trans.address} 
        estimatedvalue={trans.estimatedvalue} 
        dateOfClaim={trans.dateOfClaim} 
        reason={trans.reason} />
    );

    return <div className="viewclaimsContainer">
    <div className="viewClaimsBox">
        <div>
            <h1 data-testid="h1" className="viewClaimsTitle">View Claims</h1>
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
                <th>Status{}</th>
                <th>View/Edit Claim</th>
            </tr>
           </thead>

           <tbody>
          {viewTransactions}
        </tbody>
        </table>

        {transactions.length === 0 && <p>Please wait... loading data</p>}

        </div>
      </div>
    </div>
}

export default ViewClaims;