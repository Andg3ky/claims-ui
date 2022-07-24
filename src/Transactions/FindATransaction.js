import {Fragment, useState} from "react";
import Search from "../Search/Search";
import Transactions from "./Transactions";


const FindATransaction = ()=> {
    
    //declared stateful variable to set up search box working
    const [searchTerm, setSearchTerm] = useState("");    

    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm}/>
                <Transactions searchTerm={searchTerm} />
             </Fragment>);

}

export default FindATransaction;