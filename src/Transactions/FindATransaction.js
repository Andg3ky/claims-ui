import {Fragment, useState} from "react";
import { useParams } from "react-router";
import Search from "../Search/Search";
import Transactions from "./Transactions";


const FindATransaction = ()=> {

    const [searchTerm, setSearchTerm] = useState("");

    const params = useParams();
    if (params.policyNumber != null && params.policyNumber !== searchTerm) {
        setSearchTerm(params.policyNumber);
    }
    if (params.customer != null && params.customer !== searchTerm) {
        setSearchTerm(params.customer);
    }      

    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm}/>
                <Transactions searchTerm={searchTerm} />
             </Fragment>);

}

export default FindATransaction;