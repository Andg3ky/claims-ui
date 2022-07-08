import './Search.css'

const Search = () => {

return <div className="searchBox">
    <label htmlFor="policyNumber">Policy Number:</label>
    <input id="policyNumber" type="number" />  
    <label htmlFor="surName">Surname:</label>
    <input id="surName" type="text" />
    <br></br>
    <button>Search</button>
</div>

}

export default Search;