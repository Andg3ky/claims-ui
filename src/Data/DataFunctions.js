import axios from "axios";

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