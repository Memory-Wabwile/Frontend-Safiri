import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './Signup.css' ;
import {registerDriver} from '../actions/auth'
import {useNavigate} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';



const initialState = {
    username : '',
    email : '',
    password1 :'',
    password2 : ''

}

function Main(){
  let navigate =useNavigate();

    const [driverData, setDriverData] = useState(initialState)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registerDriver(driverData))
        console.log(driverData)


    }

    return(
        <div className='signup'>
        <form onSubmit={handleSubmit} type="post">
        <h3>Sign Up</h3>
        <div className="inputs">
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            name="username"
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="Email"
            className="form-control"
            placeholder="Enter Email"
            name='email'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password1'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            name= 'password2'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
      
        <div className="btn">
          <button type="submit" >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account? <Link to='/login'>login</Link>
        </p>
      </form>
      </div>

        
    )
}

export default Main;