import './Search.css'

const Search = () => {

return  <div class="container">

<div className="searchBox">
        <div>
            <h1 className="searchTitle">Search</h1>
        </div>
        <p>Enter a policy number or part of the customer's surname</p>
        <label htmlFor="policyNumber">Policy Number:</label>
        <input id="policyNumber" type="number" />
        <br></br> 
        <label htmlFor="surName">Surname:</label>
        <input id="surName" type="text" />
        <br></br>
        <button type="button" class="searchButton">Search</button>
    </div>
</div>

}

export default Search;