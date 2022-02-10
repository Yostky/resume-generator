import React from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import PersonalInfo from './PersonalInfo';


const InputForm = () => {
  return (
    <div className='formWrapper'>
      <PersonalInfo/>
      <Experience/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default InputForm;

/*
- I need to add an alert to the RESET button to ask if they would like to reset.
- Figure out how to open up the filesystem with a button ONCLICK event for GENERATE PDF.
*/