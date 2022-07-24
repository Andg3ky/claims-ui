import './App.css';
import PageHeader from './PageHeader/PageHeader';
import PageFooter from './PageFooter/PageFooter';
import Home from './Home/Home';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './Transactions/NewTransaction';
import OpenTransactions from './Transactions/OpenTransactions';
import PageNotFound from './PageNotFound';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <PageHeader  />
      <Routes>
        {/* Default to welcome page */}
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element= {<Home />} />
        <Route path="/new" element = {<NewTransaction />} />
        <Route path="/open" element = {<OpenTransactions />} />
        <Route path="/find" element = {<FindATransaction />} />
        <Route path="*" element = {<PageNotFound />} />
       </Routes>
      <PageFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
