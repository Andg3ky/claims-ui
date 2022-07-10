import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = () => {

    return <div class="table"> <table classname="transactionsTable">
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Surname</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        
        <TransactionRow id="1" policy="5051" surname="James" status="Open" button="Open" />
        <TransactionRow id="2" policy="1256" surname="Harrison" status="Rejected" button="Open" />
        <TransactionRow id="3" policy="7835" surname="Willis" status="Paid" button="Open" />
        <TransactionRow id="4" policy="9335" surname="Burton" status="Rejected" button="Open" />
        <TransactionRow id="5" policy="3998" surname="Smith" status="Open" button="Open" />
        <TransactionRow id="6" policy="6689" surname="Johnson" status="Paid" button="Open" />

        </tbody>
        </table>
        </div>

}

export default Transactions;