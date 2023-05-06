import React from "react";
import './HomePage/HomePage1.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context/Context";

const Card = (props) => {
    const navigate = useNavigate();
    const context = useContext(Context);
    const { setIndexx,setCurrentdata } = context;
    const bidclick = () => {
        setCurrentdata(props.data)
        setIndexx(props.index)
        setTimeout(() => {
            navigate('/registerauction')
        }, 400)
    }
    return (
        <>

            <div class="item">
                {/* <div class="container">
                    <h4><b>{props.data.name}</b></h4>
                </div>
                <div>{props.data.pdesc}</div>

                <button className="button" onClick={bidclick}>Bid</button> */}
                <img src="https://via.placeholder.com/250" alt="Item" />
                <h3>{props.data.name}</h3>
                <p>{props.data.pdesc}</p>
                <button onClick={bidclick}>Bid Now</button>
            </div>
        </>
    )
}

export default Card