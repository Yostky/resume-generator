import React, { useContext } from 'react';
import { AppContext } from './Context';
import EducationItem from './EducationItem';

const Education = () => {
    const {
        university, setUniversity,
        from, setFrom,
        to, setTo,
        major, setMajor,
        minor, setMinor,
        addEducation
      } = useContext(AppContext);
    return (
        <form className='inputWrapper'>
            <h2 className='inputFormItems header marginTop'>Education</h2>
            <input className='inputFormItems' placeholder='University Name' value = {university} onChange={(e)=> setUniversity(e.target.value)}></input>
            <input className='inputFormItems' placeholder='From' value = {from} onChange={(e)=> setFrom(e.target.value)}></input>
            <input className='inputFormItems' placeholder='To' value = {to} onChange={(e)=> setTo(e.target.value)}></input>
            <input className='inputFormItems' placeholder='Major' value = {major} onChange={(e)=> setMajor(e.target.value)}></input>
            <input className='inputFormItems' placeholder='Minor' value = {minor} onChange={(e)=> setMinor(e.target.value)}></input>
            <button className='inputFormItems formButton lrgFont' type='submit' onClick={addEducation}>Add</button>
            <br></br>
            <EducationItem/>
        </form>
    );
}

export default Education;