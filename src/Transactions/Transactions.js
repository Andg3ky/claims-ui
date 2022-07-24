import { getAllClaims } from '../Data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = (props) => {

    const transactions = getAllClaims();

    const displayTransactions = transactions
        .filter(trans => props.searchTerm=== "" || props.searchTerm === trans.policynumber)
        .map ( trans => 
        <TransactionRow 
        key={trans.id} 
        id={trans.id} 
        policynumber={trans.policynumber} 
        customer={trans.customer} 
        status={trans.status} 
        type={trans.type}
        address={trans.address} 
        estimatedvalue={trans.estimatedvalue} 
        dateofclaim={trans.dateofclaim} 
        reason={trans.reason} />
    );

    return <div className="tableData"> 
        <table className="transactionsTable">
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Name</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        {displayTransactions}
        </tbody>
        </table>
    </div>

}

export default Transactions;