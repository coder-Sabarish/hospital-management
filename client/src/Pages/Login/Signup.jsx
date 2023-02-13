import React from "react"
import './Signup.css'


const Signup = () => {
    return(
        <>
        <div className="form">
            <form>
                <label>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <input type={Text} placeholder="Enter your Name"></input> <br/><br/> 
                <label>Gender : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
                <select>
                    <option name="male"> Male</option>
                    <option name="female">Female</option>
                    <option name="female">Others</option>
                </select> <br/><br/>
                <label>Mobile Number : </label> <input type={Text} placeholder="Enter your Mobile Number"></input> <br/><br/>
                <label>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <input type={Text} placeholder="Enter your Email"></input> <br/><br/>
                <label>Aadhar Number : </label> <input type={Text} placeholder="Enter your Aadhar Number"></input> <br/><br/>
                <label>DO you have Insurence : </label> 
                <div id="radio">
                    <input type="radio" value="Male" name="gender" />Yes
                    <input type="radio" value="Female" name="gender" />No
                </div>
                
            </form>
        </div>
            
        </>
    )
}

export default Signup;