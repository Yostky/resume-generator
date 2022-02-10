import React, { useContext } from 'react';
import { AppContext } from './Context'; 

const PersonalsItem = () => {
    const {
        personalsList,
        removePersonals
    } = useContext(AppContext);

  return (
    <div className='inputWrapper'>
        {personalsList.map((personalsItem, index) => (
            <React.Fragment key={personalsItem.id}>
                <div className='inputFormItems' >Name: {personalsItem.name}</div>
                <div className='inputFormItems' >Phone number: {personalsItem.phoneNumber}</div>
                <div className='inputFormItems' >Email: {personalsItem.email}</div>
                <button className='inputFormItems formButton lrgFont red' type='submit' onClick={()=> removePersonals(index)}>Remove Personals</button>
            </React.Fragment>
        ))}
    </div>
  );
}
export default PersonalsItem;