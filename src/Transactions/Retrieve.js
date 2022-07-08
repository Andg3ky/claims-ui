import '.Retrieve.css';

const Retrieve = () => {

    return <table classname="retrieveTable">
        <thead>
        <tr><th>Claim ID</th><th>Policy Number</th><th>Surname</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
        <tr><th>1</th><th>5051</th><th>James</th><th>Open</th><th></th></tr>
        <tr><th>2</th><th>1256</th><th>Harrison</th><th>Rejected</th><th></th></tr>
        <tr><th>3</th><th>7835</th><th>Smith</th><th>Open</th><th></th></tr>
        <tr><th>4</th><th>9398</th><th>Burton</th><th>Open</th><th></th></tr>
        <tr><th>5</th><th>3998</th><th>Willis</th><th>Paid</th><th></th></tr>
        </tbody>
        </table>

}

export default Retrieve;