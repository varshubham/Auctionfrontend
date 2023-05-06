import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../Context/Context";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Bid = () => {
    const context = useContext(Context);
    const navigate = useNavigate()
    const { contract, currentAccount } = context;
    const [inputc,setInputc] = useState(0)
    const [adminaddress, setAdminaddress] = useState(null)
    const [hbidder,setHbidder] = useState(null)
    const [hbid,setHbid] = useState(0)
    const [auctioner,setAuctioner] = useState(null)
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
    
    const clicked = async () => {
        const res = await contract.methods.admin().call();
        console.log(res)
        setAdminaddress(res);
    }

    const isendd = async () => {
        const res = await contract.methods.ended().call();
        console.log(res)
    }

    const setaucitonclick = async (base,duration) => {
        // const res = await contract.methods.setAuctioneer().call((20,200))
        // await contract.methods.bid().send({from : currentAccount , value : Web3.utils.toWei('2','ether')})
        try {
            const data = await contract.methods.setAuctioneer(base, duration).send({ from: currentAccount });
            console.log(data)
            setTimeout(()=>{
                navigate('/auction')
            },1500)
        } catch (error) {
            console.log(error)
        }

    }

    const auctioneerclicked = async () => {
        const aucitoneer = await contract.methods.auctioneer().call();
        console.log(aucitoneer)
        setAuctioner(aucitoneer)
    }
    const baseprice = async () => {
        const baseprice = await contract.methods.basePrice().call();
        console.log(baseprice)
    }
    const highestbid = async () => {
        const highestbid = await contract.methods.highestbid().call();
        setHbid(highestbid)
    }
    const highestbidder = async () => {
        const highestbidder = await contract.methods.highestbidder().call();
        
        setHbidder(highestbidder)
    }

    const bidclick = async () => {
        contract.methods.bid().send({ from: currentAccount, value: Web3.utils.toWei(inputc.toString(), 'ether') }).then(()=>{console.log("done")}).catch((error)=>{console.log(error)})
        // console.log(biddetails)
    }

    const auctionendtime = async () => {
        const endtime = await contract.methods.auctionendtime().call();
        console.log(endtime)
    }
    const inputchange = (e)=>{
        setInputc(e.target.value)
    }
    // useEffect(()=>{
    //     highestbidder();
    //     highestbid();
    //     auctioneerclicked()
    // },[])

    const [basebid,setBasebid] = useState(0);
    const [duration,setDuration] = useState(0);
    const basechange = (e)=>{
            setBasebid(e.target.value)
    }
    const durationchange = (e)=>{
            setDuration(e.target.value)
    }
    const startclick=()=>{
        setaucitonclick(basebid,duration)
    }
    return (
        <>
        <div className="App"></div>
            <input type="number" placeholder="Enter Base Bid here" onChange={basechange} />
            <input type="number" placeholder="Enter Auction Duration" onChange={durationchange} />
            <button onClick={startclick}>Start Auction</button>
            {/* <button onClick={auctionendtime}>auction end time</button>
            <button onClick={isendd}>isended</button>
            <button onClick={setaucitonclick}>Set Auctioneer</button>
            <button onClick={clicked}>click to get admin address</button>

            <p>Auctioneer Address : {auctioner}</p>

            <div className="card" style={{width:"18rem",margin:"auto"}}>
                <div className="card-body">
                    <input type="number" placeholder="enter amount of bid" onChange={inputchange}/>
                    <button onClick={bidclick}>BID</button>
                    <p>Highest Bidder : {hbidder ? hbidder : " "}</p>
                    <p>Highest Bid : {hbid}</p>
                </div>
            </div> */}
        </>
    )
}

export default Bid