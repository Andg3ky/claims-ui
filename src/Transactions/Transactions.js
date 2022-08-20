import { getAllClaimsAxiosVersion } from '../Data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';
import {useState, useEffect} from 'react';

const Transactions = (props) => {

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
    
    const displayTransactions = transactions
        .filter(trans => props.searchTerm=== "" || props.searchTerm === trans.policyNumber)
        .map ( trans => 
        <TransactionRow 
        key={trans.id} 
        id={trans.id} 
        policyNumber={trans.policyNumber} 
        customer={trans.customer} 
        status={trans.status} 
        type={trans.type}
        address={trans.address} 
        estimatedvalue={trans.estimatedvalue} 
        dateofclaim={trans.dateofclaim} 
        reason={trans.reason} />
    );

    //Search Table return
    return <div className="tableData"> 
        <table className="transactionsTable">
        <thead>
        <tr>
            <th>Claim ID</th>
            <th>Policy Number</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Edit Claim</th>
        </tr>
        </thead>

        <tbody>
        {displayTransactions}
        </tbody>
        </table>
    
        {transactions.length === 0 && <p>Please wait... loading data</p>}

    </div>
}

export default Transactions;