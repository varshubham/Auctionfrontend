import '../rsetmod.css';
import './Page2.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Frame3 = () => {
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

    const [datastate, setDatastate] = useState({ fname: "", lname: "", aadhar: "", age: "", gender: "Male", phonenumber: "", pan: "" })
    const handlechange = (e) => {
        setDatastate({ ...datastate, [e.target.name]: e.target.value })
    }

    const submitclick = (e) =>{
        e.preventDefault();
        console.log(datastate)
        addNote();

    }
    const addNote=async ()=>{
        const{fname,lname,aadhar,age,gender,phonenumber,pan} =datastate
        const response = await fetch(`http://localhost:5000/api/data/adddata`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({fname,lname,aadhar,age,gender,phonenumber,pan})
        });
        const note = await response.json();
        console.log(note)
        if(note)
        {
            setTimeout(()=>{
                navigate('/auction')
            },1500)
        }
       
    }
    return (
        //   <div className={`clapyResets p2root`}>
        //     <div className="rectangle1"></div>
        //     <div className="unsplash27HiryxnHJk"></div>
        //     <div className="rectangle2"></div>
        //     <div className="testAccount"></div>
        //     <div className="attachment_1179782161"></div>
        //     <div className="rectangle3"></div>
        //     <div className="registrationForm">Registration Form</div>
        //     <div className="firstNameAsPerAadharRecords">
        //       <p className="labelWrapper">
        //         <span className="label">First Name </span>
        //         <span className="label2">(As per Aadhar Records)</span>
        //       </p>
        //     </div>
        //     <div className="aadharNumber">
        //         <input placeholder='firstname'/>
        //     </div>
        //     <div className="pANNumber">PAN Number</div>
        //     <div className="nomineeDetails">Nominee Details</div>
        //     <div className="correspondenceAddress">Correspondence Address</div>
        //     <div className="mobileNumber">Mobile Number</div>
        //     <div className="alternateMobileNumber">Alternate Mobile Number</div>
        //     <div className="age">Age</div>
        //     <div className="gender">Gender</div>
        //     <div className="lastNameAsPerAadharRecords">
        //       <p className="labelWrapper2">
        //         <span className="label3">Last Name </span>
        //         <span className="label4">(As per Aadhar Records)</span>
        //       </p>
        //     </div>
        //     <div className="rectangle4"></div>
        //     <div className="rectangle8"></div>
        //     <div className="rectangle11"></div>
        //     <div className="rectangle19"></div>
        //     <div className="rectangle13"></div>
        //     <div className="rectangle14"></div>
        //     <div className="rectangle15"></div>
        //     <div className="rectangle16"></div>
        //     <div className="rectangle17"></div>
        //     <div className="rectangle18"></div>
        //     <div className="addressBoxMain"></div>
        //     <div className="rectangle9"></div>
        //     <div className="rectangle10"></div>
        //     <div className="rectangle6"></div>
        //     <div className="rectangle7"></div>
        //     <div className="rectangle5"></div>
        //     <div className="dropDown"></div>
        //     <div className="dropDown2"></div>
        //     <div className="addressLine1">Address Line 1</div>
        //     <div className="participateAnonymously">Participate Anonymously</div>
        //     <div className="doYouAgreeToOurTermsAndConditi">Do you Agree to our Terms and Conditions.</div>
        //     <div className="addressLine2Optional">Address Line 2 (Optional)</div>
        //     <div className="addressLine3Optional">Address Line 3 (Optional)</div>
        //     <div className="state">State</div>
        //     <div className="city">City</div>
        //     <div className="pincode">Pincode</div>
        //     <div className="checkedCheckbox"></div>
        //     <div className="checkedCheckbox2"></div>
        //     <div className="rectangle20"></div>
        //     <div className="rectangle21"></div>
        //     <div className="saveAsDraft">Save as Draft</div>
        //     <div className="submit">Submit</div>
        //     <div className="rectangle22"></div>
        //     <div className="menu"></div>
        //   </div>
        <>
            <form style={{width:"50%",margin:"auto"}}>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name='fname' onChange={handlechange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='lname' onChange={handlechange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Aadhar Number</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" name='aadhar' onChange={handlechange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" name='age' onChange={handlechange} />
                </div>
                <select class="form-control" name='gender' onChange={handlechange}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" name='phonenumber' onChange={handlechange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">PAN Number</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='pan' onChange={handlechange} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={submitclick}>Submit</button>
            </form>
        </>
    );
};

export default Frame3
