import {useState} from 'react';
import './Search.css'

const Search = (props) => {

const [searchTerm, setSearchTerm] = useState("");
// test if valid entry to the box
const [valid, setValid] = useState(false);
const [touched, setTouched] = useState(false);

const doSearch = (event) => {
    event.preventDefault();
    props.setSearchTerm(searchTerm.trim());
}

const handleChange = (event) => {
    const value = event.target.value;
    setTouched(true);
    setSearchTerm(value);
    setValid(value.trim().length > 0);
}

return  <div className="searchContainer">

<div className="searchBox">
        {/* Search Title */}
        <div>
            <h1 className="searchTitle">Search Claims</h1>
        </div>

        {/* Bind our form to an event */}
        <form onSubmit={doSearch}>

            <div className="searchInstructions">
            <h3>Instructions</h3>
            <ul>
             <li>Please enter the full policy number or the full customer name for the claim.</li>
             <li>Click Search to search the claim.</li>
            </ul>
            </div>
            
            {/* Policy Number */}
            <div className="searchEntry">
                <label htmlFor="policyNumber">Policy Number:</label>
                 <input onChange={handleChange} value={searchTerm} type="text"  placeholder="policy number" 
                 name="policyNumber" id="policyNumber" />
            </div>

            {/* Customer Name */}
            <div className="searchEntry">
                <label htmlFor="customerName">Customer Name:</label>
                <input type="text" placeholder="customer name" 
                name="customerName" id="customerName" />
            </div>

            {/* Search Button */}
            <button
             type="submit" disabled={!valid} className="searchButton">Search</button>
            {touched && !valid && <p className="notValid">Please enter a valid policy number</p>}
        </form>
    </div>
</div>

}

export default Search;