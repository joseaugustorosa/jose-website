import React from 'react';
import '../styles/profile.css'

function Profile() {
    return (
      <div className='main_container_profile'>
       <div className='container_profile'>
        <div className='photo_profile'>
            <img src='profile.jpeg' className='photo'/>           
        </div>
        <div className='content_profile'>
           <p>teste</p>
        </div>

       </div>
      </div>
    );
}

export default Profile;