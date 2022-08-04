import './App.css';
import PageHeader from './PageHeader/PageHeader';
import PageFooter from './PageFooter/PageFooter';
import Home from './Home/Home';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './Transactions/NewTransaction';
import ViewTransactions from './Transactions/ViewTransactions';
import PageNotFound from './PageNotFound';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './Login/Login';

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
        <Route path="/view" element = {<ViewTransactions />} />
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
