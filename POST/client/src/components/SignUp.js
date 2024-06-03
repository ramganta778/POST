import React from 'react'
import { useRef } from 'react';

function SignUp() {


    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileInputRef = useRef();
    
    let onSignup = async ()=>{


     let myHeader  = new Headers();
     myHeader.append("content-type","application/json");

    let dataToSend = {

    firstName : firstNameInputRef.current.value,
    lastName : lastNameInputRef.current.value,
    age : ageInputRef.current.value,
    email  : emailInputRef.current.value,
    password : passwordInputRef.current.value,
    mobile : mobileInputRef.current.value,




    }

     let reqOptions = {

        method:"POST",
        headers : myHeader,
        body:JSON.stringify(dataToSend),
     };
       let JSONData = await fetch("http://localhost:9441/register",reqOptions);

       let JSOData = await JSONData.json();
    
       console.log(JSOData);



    };





  return (
    <div className='signup'>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Age</label>
                <input ref={ageInputRef}></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Mobile No</label>
                <input ref={mobileInputRef}></input>
            </div>
            <div>
                <button className='group' type='button' onClick={()=>{

               onSignup();
                }}>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp