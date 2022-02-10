import React, { useContext } from 'react';
import { AppContext } from './Context'; 

const EducationItem = () => {
  const {
    educationList,
    removeEducation

  } = useContext(AppContext);

  return (
    <div className='inputWrapper'>
      {educationList.map((educationItem, index) => (
        <React.Fragment key={educationItem.id}>
          <div className='inputFormItems' >School: {educationItem.university}</div>
          <div className='inputFormItems' >{educationItem.from} - {educationItem.to}</div>
          <div className='inputFormItems' >Major: {educationItem.major}</div>
          <div className='inputFormItems' >Minor: {educationItem.minor}</div>
          <button className='inputFormItems formButton lrgFont red' type='submit' onClick={()=> removeEducation(index)}>Remove Education</button>
        </React.Fragment>
      ))}
    </div>
  );
}
export default EducationItem;