import Context from "./Context";
import { useState } from "react";

const State = (props) =>{

    const [contract,setContract] = useState(null)
    const [currentAccount,setCurrentAccount] = useState(null)
    const [indexx,setIndexx] = useState(0)
    const [currentdata,setCurrentdata] = useState()
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
    })
    return (
        <Context.Provider value = {{contract,setContract,currentAccount,setCurrentAccount,web3Api,setWeb3Api,indexx,setIndexx,currentdata,setCurrentdata}}>
            {props.children}
        </Context.Provider>
    )
}

export default State