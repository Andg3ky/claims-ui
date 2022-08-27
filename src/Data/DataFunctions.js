import axios from "axios";

export const getAllClaimsAxiosVersion = () => {
    
    const claimsPromise = axios({ url :"http://localhost:8080/api/direct-claims-server/",
         method: "GET", headers: { 'Accept': 'application/json' } });
        
    return claimsPromise;
}

export const addNewClaim = (id) =>  {
    return axios({ url : "http://localhost:8080/api/direct-claims-server/", 
    method : "POST", 
    headers : {'Accept': 'application/json', 'Content-Type' : 'application/json' } });
}

export const updateClaim = (id) =>  {
    return axios({ url : "http://localhost:8080/api/direct-claims-server/" + id, 
    method : "PUT", 
    headers : {'Accept': 'application/json', 'Content-Type' : 'application/json' } } );
}

export const getClaim = (id) => {
    return axios(
        {url : "http://localhost:8080/api/direct-claims-server/" + id,
        method: "GET",
        headers : {'Accept': 'application/json' } } );
}