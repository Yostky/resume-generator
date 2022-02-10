import React, { useContext } from 'react';
import { AppContext } from './Context';
import SkillsItem from './SkillsItem';

const Skills = () => {
    const {
        skill, setSkill,
        skillDescription, setSkillDescription,
        addSkill
      } = useContext(AppContext);
    return (
        <form className='inputWrapper'>
            <h2 className='inputFormItems header marginTop'>Skills</h2>
            <input className='inputFormItems' placeholder='Name of skill' value = {skill} onChange={(e)=> setSkill(e.target.value)}></input>
            <textarea className='inputFormItems' placeholder='Optional Description (keep it short)' value = {skillDescription} onChange={(e)=> setSkillDescription(e.target.value)}></textarea>
            <button className='inputFormItems formButton lrgFont' type='submit' onClick={addSkill}>Add</button>
            <br></br>
            <SkillsItem/>
        </form>
    );
}
export default Skills;