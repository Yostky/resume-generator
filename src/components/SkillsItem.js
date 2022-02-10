import React, { useContext } from 'react';
import { AppContext } from './Context'; 

const SkillsItem = () => {
  const {
    skillsList,
    removeSkill

  } = useContext(AppContext);
  
  return (
      <div className='inputWrapper'>
        {skillsList.map((skillsItem, index) => (
          <React.Fragment key={skillsItem.id}>
            <div className='inputFormItems' >Skill: {skillsItem.skill}</div>
            <div className='inputFormItems' >Skill description: {skillsItem.skillDescription}</div>
            <button className='inputFormItems formButton lrgFont red' type='submit' onClick={()=> removeSkill(index)}>Remove Skill</button>
          </React.Fragment>
        ))}
      </div>
  );
};
export default SkillsItem;