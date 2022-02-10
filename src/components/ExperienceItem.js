import React, { useContext } from 'react';
import { AppContext } from './Context'; 

const ExperienceItem = () => {
    const {
        experienceList,
        removeExperience

    } = useContext(AppContext);

  return (
    <div className='inputWrapper'>
        {experienceList.map((experienceItem, index) => (
            <React.Fragment key={experienceItem.id}>
                <div className='inputFormItems' >Company name: {experienceItem.company}</div>
                <div className='inputFormItems' >Job title: {experienceItem.jobTitle}</div>
                <div className='inputFormItems' >{experienceItem.from} - {experienceItem.to}</div>
                <div className='inputFormItems' >Description: {experienceItem.jobDescription}</div>
                <button className='inputFormItems formButton lrgFont red' type='submit' onClick={()=> removeExperience(index)}>Remove Experience</button>
            </React.Fragment>
        ))}
    </div>
  );
}
export default ExperienceItem;