import React, { useContext } from 'react';
import { AppContext } from './Context';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    const {
        company, setCompany,
        jobTitle, setJobTitle,
        from, setFrom,
        to, setTo,
        jobDescription, setJobDescription,
        addWorkExperience
      } = useContext(AppContext);
    return (
        <form className='inputWrapper'>
            <h2 className='inputFormItems header marginTop'>Experience</h2>
            <input className='inputFormItems' placeholder='Company' value = {company} onChange={(e)=> setCompany(e.target.value)}></input>
            <input className='inputFormItems' placeholder='Job Title' value = {jobTitle} onChange={(e)=> setJobTitle(e.target.value)}></input>
            <input className='inputFormItems' placeholder='From' value = {from} onChange={(e)=> setFrom(e.target.value)}></input>
            <input className='inputFormItems' placeholder='To' value = {to} onChange={(e)=> setTo(e.target.value)}></input>
            <textarea className='inputFormItems' placeholder='Job Description' value = {jobDescription} onChange={(e)=> setJobDescription(e.target.value)}></textarea>
            <button className='inputFormItems formButton lrgFont' type='submit' onClick={addWorkExperience}>Add</button>
            <br></br>
            <ExperienceItem/>
        </form>
    );
}


export default Experience;