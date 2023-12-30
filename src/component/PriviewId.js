import React, { useEffect, useState } from 'react';
import img1 from '../image/Vector.svg';
import { ConnectWallet } from '@thirdweb-dev/react';

const PriviewId = () => {
  const [previewID, setPreviewID] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setPreviewID(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3200/v1/alldetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: previewID }),
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  console.log(userData);

  return (
    <div className='container'>
      <div className='pre_Id'>
        <div className='pri_id_img'>
          <img src={img1} alt='logo' className='logoimg_priview' />
          <p>Preview ID</p>
          <div className='input_btn'>
            <input value={previewID} type='number' onChange={handleChange} className='input_NUmber' />
            <button type='button' onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className='connect_btn'>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default PriviewId;