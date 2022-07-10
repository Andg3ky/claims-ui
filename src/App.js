import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from "./Transactions/Transactions";
import PageFooter from './PageFooter/PageFooter';

function App() {
  return (
    <div className="App">
      
      <PageHeader />
      <Search />
      <Transactions/>
      <PageFooter />

    </div>
  );
}

export default App;
