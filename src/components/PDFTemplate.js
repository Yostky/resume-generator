import React, { useContext } from 'react';
import { AppContext } from './Context'; 

const PDFTemplate = React.forwardRef((props, ref) => {
  const {
    personalsList, experienceList,
    skillsList, educationList,
  } = useContext(AppContext);

  return (
    <div className='pdfPreview' ref={ref}>
      <div className='borderLine mostlyFullWidth'>
        {personalsList.map((personalsItem) => (
          <React.Fragment key={personalsItem.id}>
            <div className='inputItem header paddingTop' >{personalsItem.name}</div>
            <div className='inputItem' >Mobile: {personalsItem.phoneNumber} | Email: {personalsItem.email}</div>
          </React.Fragment>
        ))}
      </div>
      <div className='mostlyFullWidth borderLine'>
        <h1 className='headerBorder header'>Experience</h1>
        {experienceList.map((experienceItem) => (
          <div className='flex' key={experienceItem.id}>
            <div className='groupLeft'>
              <div className='bold' >{experienceItem.jobTitle}</div>
              <div className='italic' >{experienceItem.company}</div>
              <div className='jobDescription' >{experienceItem.jobDescription}</div>
            </div>
            <div className='inputItem bold' >{experienceItem.from} - {experienceItem.to}</div>
          </div>
        ))}
      </div>
      <div className='borderLine mostlyFullWidth'>
        <h1 className='headerBorder header'>Skills</h1>
        <div className='flex skillGrid'>
          {skillsList.map((skillsItem) => (
            <ul className='listWrapper' key={skillsItem.id}>
              <li className='listItem bold' >{skillsItem.skill}</li>
              <div className='listItem' >{skillsItem.skillDescription}</div>
            </ul>
          ))}
        </div>
      </div>
      <div className=' mostlyFullWidth'>
        <h1 className='header headerBorder'>Education</h1>
        {educationList.map((educationItem) => (
          <div key={educationItem.id} className='flex'>
            <div className='groupLeft'>
              <div className='bold' >{educationItem.university}</div>
              <div className='italic' >Major: {educationItem.major}</div>
              <div className='italic' >Minor: {educationItem.minor}</div>
            </div>
            <div className='inputItem bold' >{educationItem.from} - {educationItem.to}</div>
          </div>
        ))}
      </div>
    </div>
    );
});

export default PDFTemplate;