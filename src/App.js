import './App.css';
import PageHeader from './PageHeader/PageHeader';
import PageFooter from './PageFooter/PageFooter';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './Transactions/NewTransaction';
import { useState } from 'react';
import OpenTransactions from './Transactions/OpenTransactions';

function App() {

  //conditional rendering of a stateful variable to pass down function from parent to child
  const [selectedPage, setSelectedPage] = useState("new");

  return (
    <div className="App">
      <PageHeader setSelectedPage={setSelectedPage} />
      {selectedPage === "new" && <NewTransaction />}
      {selectedPage === "find" && <FindATransaction />}
      {selectedPage === "open" && <OpenTransactions />}
      <PageFooter />
    </div>
  );
}

export default App;
