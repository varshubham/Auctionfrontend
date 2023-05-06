import React from "react";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { loadContract } from "../utils/load-contract";
import Context from "../Context/Context";
const Auciton = () =>{
    const context = useContext(Context);
    const navigate = useNavigate()
    const [contracts,setContracts] = useState()
    const {web3Api, currentAccount ,indexx} = context;
    const [inputc,setInputc] = useState(0)
    const [highestbid,setHighestbid] = useState(0)
    // const [adminaddress, setAdminaddress] = useState(null)
    // const [hbidder,setHbidder] = useState(null)
    // const [hbid,setHbid] = useState(0)
    // const [auctioner,setAuctioner] = useState(null)
    useEffect(() => {
        window.ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
    }, [])
    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            setTimeout(() => {
                navigate('/')
            }, 1500)
        }
    }

    useEffect(()=>{
        const loadingcontract = async () => {
            const contract = await loadContract()
            const mycontract = await new web3Api.web3.eth.Contract(contract.abi, contract.networks[5777].address);
            console.log(mycontract)
            // setStatedata({ ...statedata, contract: mycontract })
            setContracts(mycontract)
        }
        // useEffect(() => {
        //    
        // }, [web3Api.web3])
        loadingcontract();
        const get = async()=>{
            if(contracts)
            {
                const tres = await contracts.methods.getAuctionDetails(indexx).call();
                const ress = tres[3];
                console.log(ress);
                setHighestbid(ress)
            }
           else{
            console.log("skdkfnj")
           }
        }
        get();
    },[])

    // useEffect(()=>{
    //     if(contract)
    //     {
    //         auctionr()
    //     }
    // },[auctioner])

    // const auctionr = async () =>{
    //     const auc = await contract.methods.auctioneer().call();
    //     setAuctioner(auc)
    // }
    // const clicked = async () => {
    //     const res = await contract.methods.admin().call();
    //     console.log(res)
    //     setAdminaddress(res);
    // }

    // const isendd = async () => {
    //     const res = await contract.methods.ended().call();
    //     console.log(res)
      
    // }

    // const setaucitonclick = async (base,duration) => {
    //     // const res = await contract.methods.setAuctioneer().call((20,200))
    //     // await contract.methods.bid().send({from : currentAccount , value : Web3.utils.toWei('2','ether')})
    //     try {
    //         const data = await contract.methods.setAuctioneer(base, duration).send({ from: currentAccount });
    //         console.log(data)
    //         setTimeout(()=>{
    //             navigate('/auction')
    //         },1500)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    // const auctioneerclicked = async () => {
    //     const aucitoneer = await contract.methods.auctioneer().call();
    //     console.log(aucitoneer)
    //     setAuctioner(aucitoneer)
    // }
    // const baseprice = async () => {
    //     const baseprice = await contract.methods.basePrice().call();
    //     console.log(baseprice)
    // }
    // const highestbid = async () => {
    //     const highestbid = await contract.methods.highestbid().call();
    //     setHbid(highestbid)
    // }
    // const highestbidder = async () => {
    //     const highestbidder = await contract.methods.highestbidder().call();
        
    //     setHbidder(highestbidder)
    // }

    // const bidclick = async () => {
    //     contract.methods.bid().send({ from: currentAccount, value: Web3.utils.toWei(inputc.toString(), 'ether') }).then(()=>{console.log("done")}).catch((error)=>{console.log(error)})
    //     // console.log(biddetails)
    // }

    // const auctionendtime = async () => {
    //     const endtime = await contract.methods.auctionendtime().call();
    //     console.log(endtime)
    // }
    const inputchange = (e)=>{
        setInputc(e.target.value)
    }
    const bidclick = async()=>{
        
        const res = await contracts.methods.bid(indexx).send({
            from:currentAccount,
            value : Web3.utils.toWei(inputc.toString(),'ether')
        })
        console.log(res)
    }
    const withdrawclick = async()=>{
        const ress = await contracts.methods.withdraw(indexx).send({from:currentAccount})
        console.log(ress)
        if(ress)
        {
            alert('Successfully Withdraw');
            setTimeout(()=>{
                navigate('/home')
            },700)
        }
        else{
            alert("Some Error Occured, Can't withdraw your ethers")
        }
    }
    return(
        <>

{/*         
         <button onClick={auctionendtime}>auction end time</button>
            <button onClick={isendd}>isended</button>
            <button onClick={setaucitonclick}>Set Auctioneer</button>
            <button onClick={clicked}>click to get admin address</button>

            <p>Auctioneer Address : {auctioner}</p> */}

            <div className="card" style={{width:"18rem",margin:"auto",marginTop:"50px"}}>
                <div>Highest Bid : {highestbid}</div>
                <div className="card-body" style={{display:"block"}}>
                    <div>
                    <input type="number" placeholder="enter amount of bid" onChange={inputchange}/>
                    </div>
                    <div>
                    <button style={{margin:"5px"}} onClick={bidclick}>BID</button>
                    <button style={{margin:"5px"}} onClick={withdrawclick}>Withdraw</button>
                    </div>
                    
                    {/* <p>Highest Bidder : {hbidder ? hbidder : " "}</p> */}
                    {/* <p>Highest Bid : {hbid}</p> */}
                </div>
            </div>
        </>
    )
}
export default Auciton