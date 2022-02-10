import React, {useState, createContext} from 'react';
export const AppContext = createContext();

const Context = (props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [durationEmployed, setDurationEmployed] = useState('');
  const [jobDescription, setJobDescription] = useState('');
 
  const [skill, setSkill] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  
  const [university, setUniversity] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');

  const [personalsList, setPersonalsList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const addPersonals = (e) => {
    e.preventDefault();
    if (personalsList.length >= 1) {
      return;
    }
    incrementCounter();

    const personalsItem = {
      id: counter,
      name,
      phoneNumber,
      email,
    }

    setPersonalsList([...personalsList, personalsItem]);
    setName('');
    setPhoneNumber('');
    setEmail('');
  }
  
  const addWorkExperience = (e) => {
    e.preventDefault();
    incrementCounter();

    const experienceItem = {
      id: counter,
      company,
      jobTitle,
      from,
      to,
      jobDescription
    }

    setExperienceList([...experienceList, experienceItem]);
    setCompany('');
    setJobTitle('');
    setFrom('');
    setTo('');
    setDurationEmployed('');
    setJobDescription('');
  }

  const addSkill = (e) => {
    e.preventDefault();
    incrementCounter();

    const skillItem = {
      id: counter,
      skill,
      skillDescription
    }

    setSkillsList([...skillsList, skillItem]);
    setSkill('');
    setSkillDescription('');
  }

  const addEducation = (e) => {
    e.preventDefault();
    incrementCounter();

    const educationItem = {
      id: counter,
      university,
      from,
      to,
      major,
      minor
    }

    setEducationList([...educationList, educationItem]);
    setUniversity('');
    setFrom('');
    setTo('');
    setMajor('');
    setMinor('');
  }

  const removePersonals = (index) => {
    personalsList.splice(index, 1);
    setPersonalsList([...personalsList]);
  }

  const removeExperience = (index) => {
    experienceList.splice(index, 1);
    setExperienceList([...experienceList]);
  }

  const removeSkill = (index) => {
    skillsList.splice(index, 1);
    setSkillsList([...skillsList]);
  }

  const removeEducation = (index) => {
    educationList.splice(index, 1);
    setEducationList([...educationList]);
  }

  return (
    <AppContext.Provider value={{
          name,setName,phoneNumber,setPhoneNumber,
          email,setEmail,company,
          setCompany,jobTitle,setJobTitle,durationEmployed,
          setDurationEmployed,jobDescription,setJobDescription,skill,
          setSkill,skillDescription,setSkillDescription,
          university,setUniversity,from, setFrom,to, setTo,major,setMajor,
          minor,setMinor,personalsList,experienceList,skillsList,educationList,
          removePersonals,removeExperience,removeSkill,removeEducation,addEducation,addSkill,
          addWorkExperience,addPersonals,
          // createPDF
        }}>
            {props.children}
        </AppContext.Provider>
  );
}

export const {Consumer} = Context;
export default Context;