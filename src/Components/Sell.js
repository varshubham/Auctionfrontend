import React, { useEffect } from "react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context/Context";
import { loadContract } from '../utils/load-contract';
import AuctionHead from "./AuctionHead";
// import {create} from 'ipfs-http-client'
// import {Buffer} from 'buffer';


// // const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
// const projectid = "59966deda16843968cf2e86e969da359"
// const projectse = "7348199706cf415499e52f46c68fc659"
// const auth = 'Basic'+Buffer.from(projectid+':'+projectse).toString('base64')
// const ipppfs = create({
//     host:"ipfs.infura.io",
//     port:5001,
//     protocol:"https",
//     apiPath:"/api/v0",
//     headers:{
//         authorization:auth
//     }
// })
const Sell = () => {
    const context = useContext(Context);
    const { web3Api ,currentAccount} = context
    const navigate = useNavigate()
    const [count,setCount] = useState(0)
    const [statedata, setStatedata] = useState({ pdesc: "", specifications: "",name:"", basePrice: 0, duration: 0, contract: {} })
    const [show, setShow] = useState(false)

    const handlechange = (e) => {
        setStatedata({ ...statedata, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        const loadingcontract = async () => {
            const contract = await loadContract()
            const mycontract = await new web3Api.web3.eth.Contract(contract.abi, contract.networks[5777].address);
            console.log(mycontract)
            setStatedata({ ...statedata, contract: mycontract })
        }
        // useEffect(() => {
        //    
        // }, [web3Api.web3])
        loadingcontract();
    },[])
    //    const handlechange = async(e) =>{
    //     const file = e.target.files[0];
    //     console.log(file);

    //     let result = await ipppfs.add(file);
    //     console.log(result)
    //    }
    //     const dd = async () =>{
    //         const ipfs = await create({
    //             host:'ipfs.infura.io',
    //             port:5001,
    //             protocol:"https"
    //         })
    //         return ipfs;
    //     }
    const submitclick = async () => {


        
        const { pdesc, specifications, basePrice, duration,name } = statedata
        const response = await fetch(`http://localhost:5000/api/detail/adddetail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ pdesc, specifications, basePrice, duration,name })
        });
        const note = await response.json();
        console.log(note)
        if(note)
        {
            console.log("contract",statedata.contract)
            const reees = await statedata.contract.methods.createAuction(statedata.name).send({from:currentAccount})
            console.log(reees);
            const ress = await statedata.contract.methods.setduration(statedata.duration).send({from:currentAccount});
            console.log(ress);
            const count = await statedata.contract.methods.getAuctionsCount().call();
            setCount(count)
            setTimeout(()=>{
                setShow(true)
            },700)
        }
        // if (note) {
        //     setShow(true)
        // }
    }
    return (
        <>

            {
                !show && (
                    // <div>
                    //     <input type="text" placeholder="Enter Description" name="pdesc" onChange={handlechange} />
                    //     <input type="text" placeholder="name" name="name" onChange={handlechange}/>
                    //     <input type="text" placeholder="Enter Specification" name="specifications" onChange={handlechange} />
                    //     {/* <input type="number" placeholder="Enter Base Price" name="basePrice" onChange={handlechange} /> */}
                    //     <input type="number" placeholder="Enter Duration" name="duration" onChange={handlechange} />
                    //     <button onClick={submitclick}>Submit</button>
                    // </div>
                    <div style={{width:"70%",margin:"auto",marginTop:"50px"}}>
                    <label for="name">First Name</label>
                    <input type="text" placeholder="Enter Name of Product" name="name" onChange={handlechange}/>
                
                    <label for="pdesc">Description</label>
                    <input type="text" placeholder="Enter Description" name="pdesc" onChange={handlechange} />
                    <label for="specification">Specification</label>
                    <input type="text" placeholder="Enter Specification" name="specifications" onChange={handlechange} />
                    <label for="duration">Duration(in minutes)</label>
                    <input type="number" placeholder="Enter Duration" name="duration" onChange={handlechange} />
                    <button style={{margin:"20px"
                    }} onClick={submitclick}>Submit</button>
                    </div>
                )

            }
            {
                show && <AuctionHead contract={statedata.contract} count={count}/>
            }

        </>
    )
}

export default Sell