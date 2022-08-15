import axios from "axios";

export const getAllClaims = () => {
    return [
        { id: 101, policynumber: 923880431, customer: "Mr Alan James", status: "Awaiting Assessment", type: "Property", address: "1 Main Road", estimatedvalue: 450, dateofclaim: "2022-05-25", reason: "Window Smashed" },
        { id: 102, policynumber: 973621146, customer: "Miss Daisy Harrison", status: "Rejected", type: "Auto", address: "29 Grove Hill", estimatedvalue: 270, dateofclaim: "2022-04-01", reason: "Car Backed Into" },
        { id: 103, policynumber: 900632137, customer: "Mr James Willis", status: "In Progress", type: "Pet", address: "15 Green Lane", estimatedvalue: 100, dateofclaim: "2022-01-10", reason: "Pet Dental Work" },
        { id: 104, policynumber: 912989853, customer: "Mrs Samantha Burton", status: "Rejected", type: "Auto", address: "60 Burnley Gardens", estimatedvalue: 500, dateofclaim: "2022-02-18", reason: "Car Door Vandalised" },
        { id: 105, policynumber: 934324234, customer: "Mr John Smith", status: "Awaiting Assessment", type: "Pet", address: "5 Main Street", estimatedvalue: 350, dateofclaim: "2021-11-30", reason: "Pet Leg Injury" },
        { id: 106, policynumber: 923444656, customer: "Mrs Talia Johnson", status: "Awaiting Payment", type: "Property", address: "40 Mayfair Park", estimatedvalue: 50, dateofclaim: "2021-10-13", reason: "Roof Slates Fallen" },
        { id: 107, policynumber: 980380734, customer: "Mr Michael Cole", status: "Accepted and Paid", type: "Property", address: "50 Warren Drive", estimatedvalue: 150, dateofclaim: "2021-06-23", reason: "Water Damage" },
        { id: 108, policynumber: 924343889, customer: "Mrs Jane Bailey", status: "Transferred to Main Claims", type: "Pet", address: "18 Parker Avenue", estimatedvalue: 190, dateofclaim: "2021-11-06", reason: "Pet Illness" },
        { id: 109, policynumber: 975260750, customer: "Mr Grant Stewart", status: "Accepted and Paid", type: "Auto", address: "20 Morrison Lane", estimatedvalue: 350, dateofclaim: "2022-04-19", reason: "Electrical Fault" },
        { id: 110, policynumber: 977308734, customer: "Miss Libby Graham", status: "In Progress", type: "Auto", address: "61 Beverley Road", estimatedvalue: 90, dateofclaim: "2022-02-22", reason: "Mirrors Broken" },

    ]

}

export const getClaimsRestVersion = () => {
    const headers = new Headers({ 'Accept': 'application/json' });

    const claimsPromise = fetch("http://localhost:8080/api/direct-claims-server/",
        { method: "GET", headers: headers });
        
    return claimsPromise;
}

export const getAllClaimsAxiosVersion = () => {
    
    const claimsPromise = axios({ url :"http://localhost:8080/api/direct-claims-server/",
         method: "GET", headers: { 'Accept': 'application/json' } });
        
    return claimsPromise;
}

export const getClaims = (id) => {
    return axios(
        {url : `http://localhost:8080/api/direct-claims-server/${id}`,
        method: "GET",
        headers : { 'Accept': 'application/json'}
        }
    )
}

export const getClaimsRestExample = () => {
    //GET  http://localhost:8080/api/direct-claims-server

    const headers = new Headers({ 'Accept': 'application/json' });

    const claimsPromise = fetch("http://localhost:8080/api/direct-claims-server/",
        { method: "GET", headers: headers });

    claimsPromise.then(
        (response) => {
             if(response.ok) {
                    const dataPromise = response.json();
                    dataPromise.then ( data => {
                        console.log(data);
                    }
                  )
            }
            else {
                console.log("Something went wrong - the server responded with",
                    response.status, response.statusText);
            }

        }
    )
        .catch(
            (error) => {
                console.log("something went wrong", error);
            }
        );



}