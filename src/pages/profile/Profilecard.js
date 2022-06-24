import React from 'react';

function ProfileCard() {
  return (
    <div>
        <div className='studentInfo'>
            <h2 className='studentinfotitle'>
                Student Information
            </h2>
        </div>
        
        <div className='maincard'>
        
        
        
        
        <div className='profileLeft'>
            <div className='profileHeadImg'>

            <img className='profileImg' src='https://yt3.ggpht.com/ytc/AKedOLSVz9yrg6EnmvKGOoc9jxbFjOCQS0Q-_6l_-7-YFw=s900-c-k-c0x00ffffff-no-rj' alt='Not available'/>
            </div>
            <div className='leftInfo'>

            <p className='leftInfoText'>Rishav Jha</p>
            <p className='leftInfoText'>+91 9661353905</p>
            <p className='leftInfoText'>2001010055@krmu.edu.in</p>
            </div>
        </div>
        <div className='profileRight'>

        <div className='rightInfoText'>
        <p className='rightInfoTextQue'>Roll no: </p>
            <p className='rightInfoTextQue'>Admission Id:</p>
            <p className='rightInfoTextQue'>Course:</p>
            <p className='rightInfoTextQue'>Descipline:</p>
            <p className='rightInfoTextQue'>Batch:</p>
            <p className='rightInfoTextQue'>Period:</p>
            <p className='rightInfoTextQue'>Section:</p>
            <p className='rightInfoTextQue'>Seat Type:</p>
            <p className='rightInfoTextQue'>Address:</p>
        </div>
        <div className='rightInfoTexta'>
        <p className='rightInfoTextAns'>2001010055</p>
            <p className='rightInfoTextAns'>REG005575</p>
            <p className='rightInfoTextAns'>B.Tech</p>
            <p className='rightInfoTextAns'>Computer Science & Engineering</p>
            <p className='rightInfoTextAns'>2020-2024</p>
            <p className='rightInfoTextAns'>Semester-4</p>
            <p className='rightInfoTextAns'>Default</p>
            <p className='rightInfoTextAns'>General</p>
            <p className='rightInfoTextAns'>Gurugram, Haryana</p>
        </div>
            


            
        </div>
    </div>
    </div>
  )
}

export default ProfileCard;