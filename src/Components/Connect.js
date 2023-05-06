import { useEffect, useState, useContext } from 'react'
import '../App.css'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import Context from '../Context/Context'
import { loadContract } from '../utils/load-contract';
import {useNavigate } from 'react-router-dom'

const Connect = () => {
    const navigate = useNavigate();
    const context = useContext(Context);
    const {web3Api,setWeb3Api} = context
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            navigate('/login')
        }
    },[])
    useEffect(() => {
        window.ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
    }, [web3Api.web3])

    const loadingcontract = async () => {
        const contract = await loadContract()
        const mycontract = await new web3Api.web3.eth.Contract(contract.abi, contract.networks[5777].address);
        context.setContract(mycontract);
    }
    // useEffect(() => {
    //     web3Api.web3 !== null && loadingcontract();
    // }, [web3Api.web3])


    useEffect(() => {
        detectEthereumProvider().then((provider) => {
            if (provider && provider.isMetaMask) {
                provider.on('accountsChanged', handleAccountsChanged);
                setWeb3Api({
                    web3: new Web3(provider),
                    provider: provider,
                })
            } else {
                console.log('Please install MetaMask!');
            }
        });
    }, [])

    function connect() {
        window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    }

    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            context.setCurrentAccount(null)
        } else if (accounts[0] !== context.currentAccount) {
            context.setCurrentAccount(accounts[0]);
            setTimeout(()=>{
                navigate('/home')
            },1500)
        }
    }

    return (
        <div className="App">
            <p>Account : {context.currentAccount ? context.currentAccount : "not connected"}</p>
            <button onClick={connect} style={{color:"red",backgroundColor:"cyan"}}>connect</button>
            {/* <Link to="/bid">Link to path</Link> */}

        </div>
    );
}

export default Connect