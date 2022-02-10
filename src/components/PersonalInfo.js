import React, { useContext } from 'react';
import { AppContext } from './Context';
import PersonalsItem from './PersonalsItem';

const PersonalInfo = () => {
  const {
    name, setName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    addPersonals
  } = useContext(AppContext);
  return (
    <form className='inputWrapper'>
        <h2 className='inputFormItems header paddingTop'>Personal Information</h2>
        <input className='inputFormItems' placeholder='Name' value = {name} onChange={(e)=> setName(e.target.value)}></input>
        <input className='inputFormItems' placeholder='Phone Number' value = {phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}></input>
        <input className='inputFormItems' placeholder='Email' value = {email} onChange={(e)=> setEmail(e.target.value)}></input>
        <button className='inputFormItems formButton lrgFont' type='submit' onClick={addPersonals}>Add</button>
        <br></br>
        <PersonalsItem/>
    </form>
  );
}

export default PersonalInfo;