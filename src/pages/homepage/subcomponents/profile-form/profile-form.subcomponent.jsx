import React, { useState } from 'react';
import Button from '../../../../components/button/button.component';
import './profile-form.substyles.scss';
import { connect } from 'react-redux';
import { fetchProfileAsync } from '../../../../redux/profile/profile.saga';
import { typeAction, payloadAction } from '../../../../assets/functions';
import { profileActionTypes } from '../../../../redux/profile/profile.types';


const ProfileForm = ({lookForProfile})=> {
  const [inputValue,setInputValue] = useState('')
  const handleChange = event => setInputValue(event.target.value)
  const handleSubmit = event =>{
    event.preventDefault();
    lookForProfile(inputValue)
  }
    return ( 
        <form onSubmit={handleSubmit} className="body__search">
          <div className="search__input">
            <input
              placeholder="Look for Github Profiles..."
              type="text"
              value={inputValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="search__button">
            <Button type="submit">Search</Button>
          </div>
        </form>
     );
}
 const mapDispatchToProps = dispatch =>({
   lookForProfile: (value) => dispatch(payloadAction(profileActionTypes.GET_PROFILE_START,value))
 })
export default connect(null,mapDispatchToProps)(ProfileForm);