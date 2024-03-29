import './App.css';
import PageHeader from './PageHeader/PageHeader';
import PageFooter from './PageFooter/PageFooter';
import Home from './Home/Home';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './Transactions/NewTransaction';
import ViewTransactions from './Transactions/ViewTransactions';
import DisplayClaim from './DisplayClaim/DisplayClaim';
import PageNotFound from './PageNotFound/PageNotFound';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './Login/Login';
import EditClaim from './EditClaim/EditClaim';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <PageHeader  />
      <Routes>
        {/* Default to welcome page */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/new" element = {<NewTransaction />} />
        <Route path="/view" element = {<ViewTransactions />} />
        <Route path="/display/:id" element = {<DisplayClaim />} />
        <Route path="/edit/:id" element = {<EditClaim />} />
        <Route path="/find" element = {<FindATransaction />} />
        <Route path="/login" element = {<Login />} />
        <Route path="*" element = {<PageNotFound />} />
       </Routes>
      <PageFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
