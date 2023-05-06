// import '../rsetmod.css';
import './HomePage1.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';
import Card from '../Card';


const Frame1 = () => {
    const [datas, setDatas] = useState([])
    const navigate = useNavigate();
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

    useEffect(() => {
        data();
    }, [])
    const data = async () => {
        const res = await fetch('http://localhost:5000/api/detail/fetchall', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await res.json();
        console.log(json)
        setDatas(json)
    }

    const registrationclick = () => {

    }
    const joinclick = () => {
        navigate('/registerauction')
    }
    const sellclick = () => {
        navigate('/sell')
    }
    return (
        // <div className={`clapyResets h1root`}>
        //   {/* <div className="rectangle1"></div> */}
        //   <div className="unsplash27HiryxnHJk"></div>
        //   {/* <div className="testAccount"></div> */}
        //   <div className="buyTradeSell" onClick={sellclick} style={{fontWeight:"bolder",fontSize:"20px",cursor:"pointer"}}>
        //     <button className='button'>Sell</button>
        //   </div>
        //   {/* <div className="rectangle2"></div> */}
        //   {/* <div className="menu"></div> */}
        //   {/* <div className="rectangle3"></div>
        //   <div className="whatWereYouLookingForToday">What were you Looking for today?</div>
        //   <div className="search"></div> */}
        //   <div className='registration'>
        //     <button className='button' onClick={registrationclick}>Registration Open!</button>
        //   </div>
        //   {/* <div className="line1"></div> */}
        //   {/* <div className="rectangle4"></div>
        //   <div className="registrationsOpen" onClick={registrationclick}>Registrations Open !</div> */}
        //   {/* <div className="rectangle13"></div>
        //   <div className="indexPage">1</div>
        //   <div className="rectangle14"></div>
        //   <div className="moreThan"></div>
        //   <div className="rectangle15"></div>
        //   <div className="chevronLeft"></div>
        //   <div className="attachment_1179782161"></div>
        //   <div className="rectangle16"></div>
        //   <div className="refresh">Refresh</div>
        //   <div className="refresh2"></div> */}
        //   {/* <div className="activity4"></div>
        //   <div className="rectangle11"></div>
        //   <div className="join4" onClick={joinclick}>Join</div>
        //   <div className="rectangle12"></div>
        //   <div className="mark4">Mark</div>
        //   <div className="_22FurniturePngImage1"></div>
        //   <div className="sofaSet21">Sofa Set (2 + 1)</div>
        //   <div className="activity1"></div>
        //   <div className="rectangle5"></div>
        //   <div className="join1" onClick={joinclick}>Join</div>
        //   <div className="rectangle6"></div>
        //   <div className="mark1">Mark</div>
        //   <div className="_12GoldFreeDownloadPng1"></div>
        //   <div className="_22CaratGoldBiscuits">22 Carat Gold Biscuits</div>
        //   <div className="activity2"></div>
        //   <div className="rectangle7"></div>
        //   <div className="join2" onClick={joinclick}>Join</div>
        //   <div className="rectangle8"></div>
        //   <div className="mark2">Mark</div>
        //   <div className="_94941844_canvasPosterFrameBrus"></div>
        //   <div className="wallArtwork">Wall Artwork</div>
        //   <div className="activity3"></div>
        //   <div className="rectangle9"></div>
        //   <div className="join3" onClick={joinclick}>Join</div>
        //   <div className="rectangle10"></div>
        //   <div className="mark3">Mark</div>
        //   <div className="fd1"></div>
        //   <div className="_12BHKVilla">12 BHK Villa</div> */}
        //   {/* {
        //     datas && datas.map((da,index)=>{
        //         // <Card key={index} data={da} index={index}/>
        //         return <Card key={index} data={da} index={index}/>
        //     })
        //   } */}
        // </div>
        <>
            {/* <div className='Sell'>
                <button className='button'>Sell</button>
            </div>
            <div className='cardbody'>
                
            </div> */}
            <section class="hero">
                <h1>Welcome to Bid</h1>
                <p>Find the best deals on the items you want</p>
                <button onClick={sellclick}>Sell Now</button>
            </section>

            <section class="featured-items">
                <div className='heading'>
                    <h2 >Featured Items</h2>
                </div>
                <div className='card-body'>
                    {
                        datas && datas.map((da, index) => {
                            return <Card key={index} data={da} index={index} />
                        })
                    }

                </div>

                {/* <div class="item">
                    <img src="https://via.placeholder.com/250" alt="Item"/>
                        <h3>Item Name</h3>
                        <p>Description of item goes here.</p>
                        <button>Bid Now</button>
                </div>
                <div class="item">
                    <img src="https://via.placeholder.com/250" alt="Item"/>
                        <h3>Item Name</h3>
                        <p>Description of item goes here.</p>
                        <button>Bid Now</button>
                </div>
                <div class="item">
                    <img src="https://via.placeholder.com/250" alt="Item"/>
                        <h3>Item Name</h3>
                        <p>Description of item goes here.</p>
                        <button>Bid Now</button>
                </div> */}
            </section>
        </>
    );
}

export default Frame1
