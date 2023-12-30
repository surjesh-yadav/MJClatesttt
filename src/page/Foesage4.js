import React from 'react'
import img6 from '../image/svg-image-6.svg';
import img8 from '../image/svg-image-8.svg';
import img4 from '../image/svg-image-4.svg';
import tiffanysedo from '../image/tiffany-blur.png';
import Navbar from '../component/navbar';
import PriviewId from '../component/PriviewId';
import './style.css'
import { Link } from 'react-router-dom';
import {
  ConnectWallet,
  useSDK,
  useTokenBalance,
  useContract,
  useAddress,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
const Forsage4 = () => {


  const { contract } = useContract(
    "0xc989DdF90f11E12367b66844EFDa0bc05efF0260"
  );
  const { contract: USDTContract } = useContract(
    "0xb810550336560A6E0f3E3EA3A7515AbB341E3e46"
  );

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

const wallet_address = userData?.data?.wallet_address ;

  const numberOfElements = 10; // Change this to the desired number of elements
  const { data: getThePlansCount, isLoading: isPlanCountLoading } =
  useContractRead(contract, "getThePlanCount", [wallet_address , 500]);
  

  const result500 = getThePlansCount;
  const box500 = Number(result500 && result500?._hex)
 

  const blueElements500 = Array.from({ length: numberOfElements }, (_, index) => (
    <h3 key={index} className={index < box500 ? "forsage_detail_box" : "forsage_blue other_box"}></h3>
  ));

  return (
    <React.Fragment>
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
         <Navbar />
    <div class="content">
      <div className='container'>
        <div className='forsgae1_main'>
          <div className='forsage_title2'>
            <h1>Forsage xXx</h1>
            <h3>174 209.8 BUSD</h3>
          </div>

          <div className='forsgae_level_card'>

            <div className='bg_imes_forsgae'>
              <img src={tiffanysedo} alt='blue_color' className='greenBg2' />
            </div>
            <div className='level_title'>
              <h4></h4>
              <h1>$500</h1>
              <h4></h4>
            </div>
            <div className='levels_card_chain'>

              <div className='card_chain2'>
              { blueElements500}
              </div>
            </div>

            <div className='cycle_name'>
              <div className='cycle_name_left'>
                <div className='partners'>
                  <p>Partners</p>
                  <h5><span><img src={img6} alt='user_icon' className='userd_icon' /></span>5204</h5>
                </div>
              </div>

              <div className='Total_revenue'>
                <p>Total level revenue</p>
                
                <h5>{box500 ? ((500-500*.15)/2)*box500 :"0.00"} USDT</h5>
              </div>
            </div>
          </div>


          <div className='tabls'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Date</th>
                  <th>ID</th>
                  <th>Level</th>
                  <th>Wallet</th>
                  <th>BUSD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p><a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p><a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p><a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>
                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

                <tr>
                  <td><span className='users_icon'><i class="fa fa-user" aria-hidden="true"></i></span></td>
                  <td>27.12.2023 06:07</td>
                  <td><Link className='link_table link_table2'>id 1551134</Link></td>
                  <td>1</td>
                  <td>
                    <div className='link_icon'>
                      <p> <a href='#' className='link_table'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a></p>

                    </div>
                  </td>
                  <td>
                    2.4 BUSD
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Forsage4
