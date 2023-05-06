import React, { useEffect, useState } from "react";
import Web3 from "web3";


const AuctionHead = (props)=>{
    const [data,setData] = useState()
    const [show,setShow] = useState(false);
    useEffect(()=>{
        handleclick();
    },[])
    const handleclick = async()=>{
        const aucitoneer = await props.contract.methods.getAuctionDetails(props.count -1).call();
        console.log(aucitoneer)
        setData(aucitoneer)
    }
    const clicked = async()=>{
        const end = await props.contract.methods.endAuction(props.count-1).call();
        console.log(end);
        if(end)
        {
            setShow(true)
        }
        else{
            alert('cant end auction now');
        }
    }
    return(
        <>
            {
               !show && data && (
                    <div>
                        <div>Name : {data[1]}</div>
                        <div>Highest Bid : {data[3]}</div>
                        <div>Highest Bidder : {data[4]}</div>
                        <div>End Time : {data[2]}</div>
                        <div>Ended : {data[5].toString()}</div>
                        <button onClick={clicked}>End Auction</button>
                    </div>
                )
            }
            {
                show && (
                    <div className="card">
                        <h1>
                            The Bid Has Successfully ended.
                        </h1>
                        <div>Highest Bid : {data[3]}</div>
                        <div>{Web3.utils.fromWei(data[3])} ethers has been transfered to your account. </div>
                    </div>
                )
            }
        </>
    )
}

export default AuctionHead