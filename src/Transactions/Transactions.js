import { getAllClaims } from '../Data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = () => {

    // { id: 1, policynumber: 5051, customer: "Mr Alan James", status: "Open", type: "Property", address: "21216652", estimatedvalue: 450, dateofclaim: "2022-05-25", reason: "Window Smashed" },

    const transactions = getAllClaims();

    const displayTransactions = transactions.map ( trans => 
        <TransactionRow key={trans.id} id={trans.id} policynumber={trans.policynumber} customer={trans.customer} status={trans.status} type={trans.type}
        address={trans.address} estimatedvalue={trans.estimatedvalue} dateofclaim={trans.dateofclaim} reason={trans.reason} />
    );

    return <div class="table"> 
        <table classname="transactionsTable">
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