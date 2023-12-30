import unkuser from "../image/UnknownUser.png";
import green_cricle_img from "../image/activity_green.webp";
import frgx from "../image/frgx.webp";
import img1 from '../image/Vector.svg';
import team from "../image/Team.png";
import axios from "axios";
import Partners from "../image/Partners.png";
import Ratio from "../image/Ratio.png";
import Profits from "../image/bnbBusd.png";
import achievements_cupImg from "../image/svg-image-25.svg";
import img26 from "../image/svg-image-26.svg";
import info27 from "../image/svg-image-27.svg";
import img28topicon from "../image/svg-image-28.svg";
import bluesedo from "../image/blue-blur.png";
import purplesedo from "../image/purple-blur.png";
import pinksedo from "../image/pink-blur.png";
import goldsedo from "../image/gold-blur.png";
import tiffanysedo from "../image/tiffany-blur.png";
import greensedo from "../image/green-blur.png";
import svg31viewicon from "../image/svg-image-31.svg";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import PriviewId from "./PriviewId";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import img21copy from '../image/svg-image-21.svg'
import React, { useState, useEffect, useRef } from "react";
import {
  ConnectWallet,
  useSDK,
  useTokenBalance,
  useContract,
  useAddress,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { renderToString } from "react-dom/server";

const Dashboard = () => {
  let [loading , setLoading] = useState()
  const [response, setResponse] = useState(null);
  const [USDTAmt, setUSDTAmt] = useState("");
  let [userRes, setUserRes] = useState({});
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const [approveAmt, setApproveAmt] = useState("");
  const [BuyTokenLoading, setBuyTokenLoading] = useState(false);
  const [SellTokensloading, setSellTokensLoading] = useState(false);
  const [WithdrawTokensloading, setWithdrawTokensLoading] = useState(false);
  const [ApproveTokensloading, setApproveTokensLoading] = useState(false);
  const referralLinkRef = useRef(null);
  const [referralCode, setReferralCode] = useState("");
  const [BTCprice, setBTCPrice] = useState("");
  const [BNBprice, setBNBPrice] = useState("");
  const isValidUSDTamount = Number(USDTAmt) >= 20 || USDTAmt == "";


  const [previewID, setPreviewID] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setPreviewID(event.target.value);
  };

  const [price, setPrice] = useState("");
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://api.dex-trade.com/v1/public/ticker?pair=MJCTUSDT"
        );
        setPrice(response.data.data.last);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, []);

  const result2 = ( userData?.data?.total_profit / price).toFixed(0);
  const recentProfitMJC = ( userData?.data?.recent_profit / price).toFixed(0);
   console.log("result2", result2)


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



  

  useEffect(() => {
    const fetchedbtcprice = async () => {
      // try {
      //   const response = await fetch(
      //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      //   );

      //   if (!response.ok) {
      //     throw new Error("Response is not ok");
      //   }
      //   const result = await response.json();
      //   setBTCPrice(result.bitcoin.usd);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    fetchedbtcprice();
  }, []);

  useEffect(() => {
    const fetchedbnbprice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
        );

        if (!response.ok) {
          throw new Error("Response is not ok");
        }
        const result = await response.json();
        setBNBPrice(result.binancecoin.usd);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedbnbprice();
  }, []);

  //read functions
  const address = useAddress();
  const { contract } = useContract(
    "0xc989DdF90f11E12367b66844EFDa0bc05efF0260"
  );
  // const { data: cunWalletBal, isLoading: isCunWalletBalLoading } =
  //   useTokenBalance(contract, address);
  //console.log(!address)
  useEffect(()=>{
      if(address){
        getDetails(address)
      }
  },[address])
  const getDetails = async (Address)=>{
    //console.log(Address.toString)
     try {
        let dumy = await fetch('http://localhost:3200/v1/user' , {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({address:Address}),
        })
        let response = await dumy.json();
        if(!response){
          // setLoading(true)
        }else{
          setLoading(false)
          setUserRes({...response.data})
        }
        
        //console.log(response.data)
     } catch (error) {
       console.log(error);
     }
  }
  const { contract: USDTContract } = useContract(
    "0xb810550336560A6E0f3E3EA3A7515AbB341E3e46"
  );
  const { data: walletBal, isLoading: walletBalLoading } = useTokenBalance(
    USDTContract,
    address
  );
  // const { data: rewardAmt, isLoading: isRewardAmtLoading } = useContractRead(
  //   contract,
  //   "RewardAmount",
  //   [address]
  // );
  //console.log(userRes);
  const { data: parent, isLoading: isParentLoading } = useContractRead(
    contract,
    "parent",
    [address]
  );
  
  // const { data: availableRewards, isLoading: isAvailableRewardsLoading } =
  //   useContractRead(contract, "getAvailableRewards", [address]);
  // const { data: rewardLimit, isLoading: isRewardLimitLoading } =
  //   useContractRead(contract, "getRewardLimit", [address]);
  // const { data: totalWithdrawn, isLoading: istotalWithdrawnLoading } =
  //   useContractRead(contract, "totalWithdrawn", [address]);
  // const { data: tokenPrice, isLoading: isTokenPriceLoading } = useContractRead(
  //   contract,
  //   "TokenPrice",
  //   []
  // );
  // const { data: owner, isLoading: isOwnerLoading } = useContractRead(
  //   contract,
  //   "Owner",
  //   []
  // );
  // const { data: totalInvested, isLoading: istotalInvestedLoading } =
  //   useContractRead(contract, "totalInvested", [address]);
  const { data: directChild, isLoading: isDirectChildLoading } =
    useContractRead(contract, "showAllDirectChild", [address]);


  const { data: indirectChild, isLoading: isIndirectChildLoading } =
  useContractRead(contract, "showAllInDirectChild", [address]);
  // const { data: userLevels, isLoading: isUserLevelsLoading } = useContractRead(
  //   contract,
  //   "userLevels",
  //   [address]
  // );
  // const { data: sellLimit, isLoading: isSellLimitlsLoading } = useContractRead(
  //   contract,
  //   "getSellingLimit",
  //   [address]
  // );
  // const { data: soldLimit, isLoading: isSoldLimitlsLoading } = useContractRead(
  //   contract,
  //   "totalAmountSold",
  //   [address]
  // );

  // const { data: liverate, isLoading: isLiverateLoading } = useContractRead(
  //   contract,
  //   "TokenPrice",
  //   []
  // );

  //write funcs
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      setReferralCode(`${value}`);
    });
  }, []);

  //console.log("Address", referralCode);

  //approve tokens
  const { mutateAsync: approve, isLoading: isApproveLoading } =
    useContractWrite(USDTContract, "approve");

  const handleCopyReferralLink = () => {
    if (referralLinkRef.current) {
      referralLinkRef.current.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();

      // Use react-toastify to display a toaster notification
      toast.success("Referral link copied to clipboard!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const approveTokens = async () => {
    try {
      setApproveTokensLoading(true);
      let spender = "0xEA0Ebbe34Aebe6c68628734384954e10A5b29eBe"; //contract address
      let approveAmount = ethers.utils.parseEther(approveAmt).toString();
      const data = await approve({ args: [spender, approveAmount] });
      console.info("contract call successs", data);
      toast.success("Successfully approved tokens!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error("Approve Failed !", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("contract call failure", err);
    } finally {
      setApproveAmt("");
      setApproveTokensLoading(false);
    }
  };

  //buyTokens
  // const { mutateAsync: buyTokens, isLoading: isBuyTokensLoading } =
  //   useContractWrite(contract, "buyTokens");

  // const getThePlanCounts = async () => {
  //   setBuyTokenLoading(true);
  //   try {
  //     let ref;
  //     if (parent === "0x0000000000000000000000000000000000000000") {
  //       ref = referralCode;
  //     } else {
  //       ref = parent;
  //     }
  //     let usdtAmt = ethers.utils.parseEther(USDTAmt).toString();

  //     console.log("usdtAmt", usdtAmt);

      // const data = await getThePlanCount({ args: [0xDeb088a8c74d948a03897ce9b571592445CFd491
      //   , 100] });
      // console.info("contract call successs", data);

  
      const { data: getThePlansCount, isLoading: isPlanCountLoading } =
      useContractRead(contract, "getThePlanCount", [wallet_address , 50]);
      
      const { data: getThePlansCount100, isLoading: is100PlanCountLoading } =
      useContractRead(contract, "getThePlanCount", [wallet_address , 100]);
      
      const { data: getThePlansCount200, isLoading: is200PlanCountLoading } =
      useContractRead(contract, "getThePlanCount", [wallet_address , 200]);
      
      const { data: getThePlansCount500, isLoading: is500PlanCountLoading } =
      useContractRead(contract, "getThePlanCount", [wallet_address , 500]);
      
      
      const { data: getThePlansCount1000, isLoading: is1000PlanCountLoading } =
      useContractRead(contract, "getThePlanCount", [wallet_address , 1000]);
      
      

     

  //     toast.success("Tokens Bought Successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } catch (err) {
  //     toast.error("You can not buy more than $1000 in one transaction", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.error("contract call failure", err);
  //   } finally {
  //     setUSDTAmt("");
  //     setBuyTokenLoading(false);
  //   }
  // };


 
  //sell Token
  // const { mutateAsync: sellTokens, isLoading: isSellTokenLoading } =
  //   useContractWrite(contract, "sellTokens");

  // const sellToken = async () => {
  //   try {
  //     setSellTokensLoading(true);
  //     let amount = ethers.utils.parseEther(cunAmt);
  //     const data = await sellTokens({ args: [amount] });
  //     console.info("contract call successs", data);
  //     toast.success("Tokens sold successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } catch (err) {
  //     toast.error("Selling amount exceeds limit", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });

  //     console.error("contract call failure", err);
  //   } finally {
  //     setCunAmt("");
  //     setSellTokensLoading(false);
  //   }
  // };

  //withdraw Tokens
  // const { mutateAsync: withdraw, isLoading: isWithdrawTokensLoading } =
  //   useContractWrite(contract, "withdraw");

  // const withdrawToken = async () => {
  //   try {
  //     setWithdrawTokensLoading(true);
  //     let amount = ethers.utils.parseEther(withdrawAmt);
  //     const data = await withdraw({ args: [amount] });
  //     console.info("contract call successs", data);
  //     toast.success("Tokens Has Been Successfully Withdrawn", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } catch (err) {
  //     toast.error("Tokens Withdraw Failed", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.error("contract call failure", err);
  //   } finally {
  //     setWithdrawAmt("");
  //     setWithdrawTokensLoading(false);
  //   }
  // };

  useEffect(() => {
    if (
      //!walletBalLoading &&
     // !isCunWalletBalLoading &&
      //!isTokenPriceLoading &&
      !isDirectChildLoading &&
      !isIndirectChildLoading
    ) {
      // console.log("contract : ", contract);
      // console.log(address);
      // console.log("usdtBal", walletBal);
      // console.log("cun bal : ", cunWalletBal);
      // console.log("token price : ", tokenPrice?.toString());
      // console.log("totalWithdrawn : ", totalWithdrawn?.toString());
    }
    // if (!isRewardAmtLoading) {
    //   // console.log(rewardAmt?.toString());
    // }
    // if (!isParentLoading) {
    //  // console.log(parent);
    // }
    // if (
    //   !isAvailableRewardsLoading &&
    //   !isRewardLimitLoading &&
    //   !isOwnerLoading
        
   
  }, []);

  const postData = async (userId) => {
   
    console.log(userId);
    const apiUrl = "http://localhost:3200/v1/alldetails";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("this is" ,data);
      if(data){
        setLoading(false);
        setResponse(data.data);
      }else{
        setLoading(true)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //console.log(response);

  useEffect(() => {
    if(userRes.user_id){
      postData(userRes.user_id);
    }
  }, [userRes.user_id]);


const result50 = getThePlansCount;
const result100 = getThePlansCount100;
const result200 = getThePlansCount200;
const result500 = getThePlansCount500;
const result1000 = getThePlansCount1000;


 const box50 = Number(result50 && result50._hex)
 const box100 = Number(result100 && result100._hex)
 const box200 = Number(result200 && result200._hex)
 const box500 = Number(result500 && result500._hex)
 const box1000= Number(result1000 && result1000._hex)



  const numberOfElements = 10; // Change this to the desired number of elements

  const blueElements50 = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className={index < box50 ? "forsage_blue" : "forsage_blue other_box"}></div>
  ));

  const blueElements100 = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className={index < box100 ? "forsage_blue" : "forsage_blue other_box"}></div>
  ));

  const blueElements200 = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className={index < box200 ? "forsage_blue" : "forsage_blue other_box"}></div>
  ));
  
  const blueElements500 = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className={index < box500 ? "forsage_blue" : "forsage_blue other_box"}></div>
  ));

  const blueElements1000 = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className={index < box1000 ? "forsage_blue" : "forsage_blue other_box"}></div>
  ));

 
  const removeAndReplaceMiddleCharacters = (input, removeCount, replaceCount) => {
    const length = input?.length;
    const middleIndex = Math.floor(length / 2);
  
    // Calculate the start and end indices for removing characters
    const startIndex = middleIndex - Math.floor(removeCount / 2);
    const endIndex = startIndex + removeCount;
  
    // Create a new string by removing characters and adding dots
    const modifiedString =
      input?.substring(0, startIndex) +
      '.'.repeat(replaceCount) +
      input?.substring(endIndex);
  
    return modifiedString;
  };

  const modifiedAddress = removeAndReplaceMiddleCharacters(userRes.address, 30, 5);



 

  // const { data: getThePlanCount, isLoading: isPlanCountLoading } = useContractRead(
  //   contract,
  //   "getThePlanCount",
  //   [address]
  // );



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
   <ToastContainer/>
      <div className="content">
        <div className="container">
          <div className="personal_user">
            <div className="row">
              <div className="col-lg-6 profile-section">
                <div className="personal_user_left">
                  <div className="unknowuser_img">
                    <span className="unknowUser">
                      <img className="user_logo" src="/logo.svg"/>
                    </span>
                  </div>

                  <div className="id_user right_text">
                    <h1>
                      Insight_Team{" "}
                      <span className="id_bg id_user_top">
                        
                          {loading ? "loading" : userRes.user_id}
                      </span>
                    </h1>
                    <p style={{width:"200px" , fontSize:"13px"}}> {modifiedAddress} </p>
                    {/* <span className='copy_con'><img src={img21copy} className='img21copy' alt='copy'/></span> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="personal_user_right">
                  <div className="personal_link">
                    <p>
                      Personal link{" "}
                      {/* <span className="question_icon">
                        <i className="fa fa-question" aria-hidden="true"></i>
                      </span> */}
                    </p>

                    <div className="forsage">
                      {/* <h3>forsage.io/b/xqg1z8</h3>
                      <button href="#"></button> */}

                         <input
                            className="link-copy-input"
                            type="text"
                            value={`http://localhost:3000/Registration/?ref=${address}`}
                            ref={referralLinkRef}
                            readOnly
                          />

                          <div className="purch desktop_button_share">
                            <button onClick={handleCopyReferralLink}>
                             Copy
                            </button>

                    </div>
                    </div>
                  </div>

                  <div
                    className="frgx"
                    style={{
                      backgroundImage: `url(${frgx})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="login_to_show">
                      <p>FRGX Token</p>
                      <p className="login_P">Login to show balance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners_card_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 left-box">
                <div
                  className="teams_all_card Partners1"
                  style={{
                    backgroundImage: `url(${Partners})`,
                    backgroundSize: "cover",
                  }}
                >
                  <p className="card_title">Partners</p>
                  <h1>
                  {!isDirectChildLoading ? directChild?.length : 0}
                    </h1>

                  <div className="part_green_down">
                    <div className="down_green">
                      <p>
                        {" "}
                        <span className="toparrow">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {response?.recent_reffrals }
                      </p>
                    </div>

                    <div className="green_cricle">
                      <img
                        src={green_cricle_img}
                        className="green_cricle_img"
                        alt="green_cricle_img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 right-box">
                <div
                  className="teams_all_card"
                  style={{
                    backgroundImage: `url(${team})`,
                    backgroundSize: "cover",
                  }}
                >
                  <p className="card_title">Team</p>
                  <h1> 
                    {!isIndirectChildLoading ? indirectChild?.length : 0}
                   
                  </h1>

                  <div className="part_green_down">
                    <div className="down_green">
                      <p>
                        {" "}
                        <span className="toparrow">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        763
                      </p>
                    </div>

                    <div className="green_cricle">
                      <img
                        src={green_cricle_img}
                        className="green_cricle_img"
                        alt="green_cricle_img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className='col-lg-2'>
              <div className='teams_all_card ' style={{ backgroundImage: `url(${Ratio})`, backgroundSize: 'cover' }}>
                <p className='card_title'>Ratio</p>
                <h1>22051</h1>

                <div className='part_green_down'>
                  <div className='down_green'>
                    <p> <span className='toparrow'><i className="fa fa-long-arrow-up" aria-hidden="true"></i></span>17</p>
                  </div>

                  <div className='green_cricle'>
                    <img src={green_cricle_img} className='green_cricle_img' alt='green_cricle_img' />
                  </div>
                </div>
              </div>
            </div> */}

              <div className="col-lg-6">
                <div
                  className="teams_all_card"
                  style={{
                    backgroundImage: `url(${Profits})`,
                    backgroundSize: "cover",
                  }}
                >
                  <p className="card_title">Profits</p>
                  <div className="Profits-number">
                    <div className="pro_num">
                      <h1>{userData ? userData?.data?.total_profit : "0.00"} USDT
                      </h1>
                      <p>
                        {" "}
                        <span className="toparrow">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {userData ? userData?.data?.recent_profit : "0.00"} USDT
                      </p>
                    </div>

                    <div className="pro_num">
                      <h1>{result2 ? result2 : "0.00"} MJC</h1>
                      <p>
                        {" "}
                        <span className="toparrow">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {recentProfitMJC ? recentProfitMJC : "0.00"} MJC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="archivment_img">
          <div className="container">
            <div className="achievements_cup">
              <div className="achievements_cupImg">
                <img
                  src={achievements_cupImg}
                  alt="achievements_cupImg"
                  className="achievements_cupImg"
                />
                <img
                  src={achievements_cupImg}
                  alt="achievements_cupImg"
                  className="achievements_cupImg"
                />
                <img
                  src={achievements_cupImg}
                  alt="achievements_cupImg"
                  className="achievements_cupImg"
                />
                <img
                  src={achievements_cupImg}
                  alt="achievements_cupImg"
                  className="achievements_cupImg"
                />
              </div>

              <div className="archivment_show">
                <a href="#">
                  Show all{" "}
                  <span className="rightarrow">
                    <img
                      src={img26}
                      alt="rightarrow"
                      className="rightarrow26"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="forsage_main">
          <div className="container">
            <div className="forsage_title">
              <h2>MJC Programs</h2>

              <span className="forsage_info">
                {" "}
                <img src={info27} alt="Info" className="Info27" /> Info{" "}
              </span>
            </div>

            <div className="forsage_card_main">
              <div className="row">
                <div className="col-lg-6">
                  <Link to="/Forsage_xxx">
                    <div
                      className="forsage_card"
                      style={{
                        backgroundImage: `url(${bluesedo})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div className='blue_color'>
                      <img src={bluesedo} alt='blue_color' className='blue_color_img' />
                    </div> */}
                      <div className="card_menu">
                        <h4>$50</h4>


                        <h4>{box50 ? ((50-50*.15)/2)*box50 : "0.00"} USDT</h4>
                        
                      </div>

                      <div className="preview_card_sec">
                        <div className="forsage_step">{blueElements50}</div>

                        <div className="prievi_btn">
                          <button>
                            Preview{" "}
                            <span>
                              <img
                                src={img28topicon}
                                alt="img28topicon"
                                className="img28topicon1"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6">
                  <Link to="/Forsage_xxx2">
                    <div
                      className="forsage_card"
                      style={{
                        backgroundImage: `url(${purplesedo})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div className='blue_color'>
                      <img src={purplesedo} alt='blue_color' className='blue_color_img' />
                    </div> */}
                      <div className="card_menu">
                        <h4>$100</h4>
                        <h4>{box100 ? ((100-100*.15)/2)*box100 : "0.00"} USDT</h4>
                      </div>

                      <div className="preview_card_sec">
                        <div className="forsage_step">{blueElements100}</div>

                        <div className="prievi_btn">
                          <button>
                            Preview{" "}
                            <span>
                              <img
                                src={img28topicon}
                                alt="img28topicon"
                                className="img28topicon1"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6">
                  <Link to="/Forsage_xxx3">
                    <div
                      className="forsage_card"
                      style={{
                        backgroundImage: `url(${pinksedo})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div className='blue_color'>
                      <img src={pinksedo} alt='blue_color' className='blue_color_img' />
                    </div> */}
                      <div className="card_menu">
                        <h4>$200</h4>
                        <h4>{box200 ? ((200-200*.15)/2)*box200 : "0.00"} USDT</h4>
                      </div>

                      <div className="preview_card_sec">
                        <div className="forsage_step">{blueElements200}</div>

                        <div className="prievi_btn">
                          <button>
                            Preview{" "}
                            <span>
                              <img
                                src={img28topicon}
                                alt="img28topicon"
                                className="img28topicon1"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6">
                  <Link to="/Forsage_xxx4">
                    <div
                      className="forsage_card"
                      style={{
                        backgroundImage: `url(${goldsedo})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div className='blue_color'>
                      <img src={goldsedo} alt='blue_color' className='blue_color_img gold_blue' />
                    </div> */}
                      <div className="card_menu">
                        <h4>$500</h4>
                        <h4>{box500 ? ((500-500*.15)/2)*box500 : "0.00"} USDT</h4>
                      </div>

                      <div className="preview_card_sec">
                        <div className="forsage_step">{blueElements500}</div>

                        <div className="prievi_btn">
                          <button>
                            Preview{" "}
                            <span>
                              <img
                                src={img28topicon}
                                alt="img28topicon"
                                className="img28topicon1"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* <div className='col-lg-6'>
                <div className='forsage_card'>
                  <div className='blue_color'>
                    <img src={tiffanysedo} alt='blue_color' className='blue_color_img greensedo2' />
                  </div>
                  <div className='card_menu'>
                    <h4>x3</h4>
                    <h4>367 975 BUSD</h4>
                  </div>

                  <div className='preview_card_sec'>
                    <div className='forsage_step'>
                      {blueElements}
                    </div>

                    <div className='prievi_btn'>
                      <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                    </div>
                  </div>
                </div>
              </div> */}

                <div className="col-lg-6">
                  <Link to="/Forsage_xxx5">
                    <div
                      className="forsage_card"
                      style={{
                        backgroundImage: `url(${greensedo})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div className='blue_color'>
                      <img src={greensedo} alt='blue_color' className='blue_color_img ' />
                    </div> */}
                      <div className="card_menu">
                        <h4>$1000</h4>
                        <h4>{ box1000 ? ((1000-1000*.15)/2)*box1000 : "0.00"} USDT</h4>
                      </div>

                      <div className="preview_card_sec">
                        <div className="forsage_step">{blueElements1000}</div>

                        <div className="prievi_btn">
                          <button>
                            Preview{" "}
                            <span>
                              <img
                                src={img28topicon}
                                alt="img28topicon"
                                className="img28topicon1"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='recent activity'>
        <div className='container'>
          <div className='forsage_title'>
            <h2>Platform recent activity</h2>
            <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span>
          </div>

          <div className='platfroms'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='seemore'>
                  <div className='view_Section_blank'></div>
                  <div className='seemore_btn'>
                    <button> <span><img src={svg31viewicon} alt='svg31viewicon' className='svg31viewicon' />
                    </span> See more </button>
                  </div>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='menber_totla_title'>
                  <h3>Members total <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span> </h3>

                  <h4>1 634 321</h4>

                  <p><span className='toparrow'><i className="fa fa-long-arrow-up" aria-hidden="true"></i></span>719</p>
                </div>

                <div className='menber_totla_title'>
                  <h3>Members total <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span> </h3>
                  <div className='busd busd2'>
                    <h2>BUSD</h2>
                    <h6>+ BUSD</h6>
                  </div>

                  <div className='busd'>
                    <h2>BNB</h2>
                    <h6>+ BNB</h6>
                  </div>
                </div>

                <div className='link_section_all'>
                  <h3>Forsage BUSD Contracts</h3>

                  <div className='link_contracts'>
                    <p>x3/x4</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i className="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i className="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xXx</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i className="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i className="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xGold</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i className="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i className="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xQore</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i className="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i className="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>maxQore</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i className="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i className="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='trajection_made'>
                    <h3>Transactions made</h3>

                    <p>+</p>

                    <h3>Turnover, BUSD</h3>

                    <p>+</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="container">
          <div className="copy_right">
            <p>© 2023 All Rights Reserved</p>
            <p>Documents</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
