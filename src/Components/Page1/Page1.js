import './Page1.css'
import '../rsetmod.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../Context/Context';
const Frame2 = () => {
    // const [contracts,setContracts] = useState()
    const context = useContext(Context);
    const { currentdata } = context
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

    const userregisterclick = () => {
        navigate('/auctiondetails')
    }
    return (
        //   <div className={`clapyResets root`}>
        //     {/* <div className="rectangle1"></div>
        //     <div className="unsplash27HiryxnHJk"></div>
        //     <div className="rectangle3"></div>
        //     <div className="line1"></div>
        //     <div className="rectangle2"></div>
        //     <div className="_94941844_canvasPosterFrameBrus"></div> */}
        //     <div className="ellipsis"></div>
        //     <div className="wallArtworkAcrylicArtPiece">Wall Artwork (Acrylic Art piece)</div>
        //     <div className="auctionBeginsIn">Auction Begins in</div>
        //     <div className="_35910">03:59:10 </div>
        //     <div className="sellerInformation">Seller Information</div>
        //     <div className="rectangle6"></div>
        //     <div className="attachment_1179782161"></div>
        //     <div className="testAccount"></div>
        //     <div className="rectangle4"></div>
        //     <div className="register" onClick={userregisterclick}>Register</div>
        //     <div className="addUserMale"></div>
        //     <div className="rectangle5"></div>
        //     <div className="favorites">Favorites</div>
        //     <div className="favorite"></div>
        //     <div className="productDescription">Product Description :</div>
        //     <div className="specifications">Specifications :</div>
        //     <div className="thisIsAOneOfAKindPieceThatWasC">
        //       This is a one-of-a-kind piece that was created by a highly talented artist, and it&#39;s sure to be a treasured
        //       addition to any collection. Don&#39;t miss your chance to own this incredible work of art – bid now and make it
        //       yours !
        //     </div>
        //     <div className="sizeThePaintingWillMeasure36X4">
        //       <ol className="list">
        //         <li>
        //           <div className="textBlock">
        //             Size: The painting will measure 36&quot; x 48&quot;, making it a large-scale work of art that will create
        //             a striking focal point on any wall.
        //           </div>
        //         </li>
        //         <li>
        //           <div className="textBlock2">
        //             Medium: The painting will be created using high-quality oil paints on a stretched canvas, which will
        //             ensure its longevity and durability.
        //           </div>
        //         </li>
        //         <li>
        //           <div className="textBlock3">
        //             Theme: The painting will depict a tree in sunset, with warm and vibrant colors that capture the beauty and
        //             serenity of nature.
        //           </div>
        //         </li>
        //         <li>
        //           <div className="textBlock4">
        //             Style: The painting will be created in a realistic style, with intricate details that create a sense of
        //             depth and dimension in the image.
        //           </div>
        //         </li>
        //         <li>
        //           <div className="textBlock5">
        //             Technique: The artist will use a variety of techniques, including blending and layering, to create a
        //             stunning and unique work of art.
        //           </div>
        //         </li>
        //       </ol>
        //     </div>
        //     <div className="rectangle7"></div>
        //     <div className="menu"></div>
        //   </div>
        <>
            <main class="container">

                {/* <!-- Left Column / Headphones Image --> */}
                <div class="left-column">
                    <img data-image="black" src="images/black.png" alt="" />

                </div>


                {/* <!-- Right Column --> */}
                <div class="right-column">

                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h1>{currentdata.name}</h1>
                        <p>{currentdata.pdesc}</p>

                    </div>

                    {/* <!-- Product Configuration --> */}
                    <div class="product-configuration">
                        <p>{currentdata.specifications}</p>
                        {/* <!-- Product Color --> */}
                        {/* <div class="product-color">
                            <span>Color</span>

                            <div class="color-choose">
                                <div>
                                    <input data-image="red" type="radio" id="red" name="color" value="red" checked />
                                    <label for="red"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                                    <label for="blue"><span></span></label>
                                </div>
                                <div>
                                    <input data-image="black" type="radio" id="black" name="color" value="black" />
                                    <label for="black"><span></span></label>
                                </div>
                            </div> */}

                        {/* </div> */}

                        {/* <!-- Cable Configuration --> */}
                        {/* <div class="cable-config">
                            <span>Cable configuration</span>

                            <div class="cable-choose">
                                <button>Straight</button>
                                <button>Coiled</button>
                                <button>Long-coiled</button>
                            </div>

                            <a href="#">How to configurate your headphones</a>
                        </div>
                    </div> */}

                        {/* <!-- Product Pricing -->
                                <div class="product-price">
                                    <span>148$</span>
                                    <a href="#" class="cart-btn">Add to cart</a>
                                </div> */}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Frame2
