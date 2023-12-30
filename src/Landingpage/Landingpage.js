import React from 'react'
import './style.css'
import roadmap1 from '../image/social.png';
import roadmap2 from '../image/achievements.png';
// import roadmap3 from '../image/bigRefferalСontest.png';
import roadmap4 from '../image/games.png';
import roadmap5 from '../image/customInvitePdf.png';
import roadmap6 from '../image/maxqore.png';
import roadmap7 from '../image/token.png';
import img26tick from '../image/greentick.svg';
import info27 from '../image/svg-image-27.svg';
import svg31viewicon from '../image/svg-image-31.svg';
import bluecircle from '../image/blue-blur.webp';
import icon1 from '../image/icon3.svg';
import icon2 from '../image/icon1.svg';
import icon3 from '../image/icon2.svg';
import logo from '../image/Vector.svg'
import frx from '../image/bg.webp'
import poket_img from '../image/kisspng.svg';
import bluesedo from '../image/gold-blur.png';
import plashtfiny from '../image/tiffany-blur.png'
import { Link } from 'react-router-dom';
const Landingpage = () => {
    return (

        <div className='landingpage_main'>
            <div className='container'>

                <div className='main_top_logo'>
                    <div className='logos_landing'>
                        <span><img src={logo} alt='logos' className='logolanding' /></span>
                    </div>

                    <div className='smart_chains'>
                        <div className='smart_chain_1'>
                            <spna><img src={icon1} alt='smart_chain' className='smart_chain_icon' /></spna>
                            <p>Smart Chain</p>
                        </div>

                        <div className='connect_btn'>
                            <button> <Link to="/Registration">Register </Link></button>
                        </div>
                    </div>
                </div>
                <div className='register_in' style={{ backgroundImage: `url(${plashtfiny})`, backgroundSize: 'cover'}}>
                    <div className='register_left' >
                        <h1>Register on MJC platform</h1>
                        <p>Connect your wallet to start working. First time here? Watch a tutorial to learn more</p>
                        <div className='join_bth'>
                            <button className='join_btn'>Connect now</button>
                            <button className='wath_tut'>Watch tutorial</button>
                        </div>
                    </div>

                    <div className='register_right'>
                        <img src={poket_img} alt='pocket_img' className='poket_img'/>
                    </div>
                </div>


                <div className='owl_crousel'>
                    <div id="demo" class="carousel slide" data-ride="carousel">


                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>


                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='maxqore' style={{ backgroundImage: `url(${frx})`, backgroundSize: 'cover'}} >
                                    <h5>FRGX Token</h5>

                                    <button>More about FRGX</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div className='maxqore' style={{ backgroundImage: `url(${frx})`, backgroundSize: 'cover'}} >
                                    <h5>FRGX Token</h5>

                                    <button>More about FRGX</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div className='maxqore' style={{ backgroundImage: `url(${frx})`, backgroundSize: 'cover'}} >
                                    <h5>FRGX Token</h5>

                                    <button>More about FRGX</button>
                                </div>
                            </div>
                        </div>


                       
                    </div>
                </div>

                <div className='Account_preview'>
                    <div className='account_title'>
                        <h1>Account preview</h1>
                        <p>Look up any Forsage BUSD member account in preview mode. Enter ID or BUSD address to preview or click Demo to view a random account.</p>
                    </div>

                    <div className='wallwte_input'>
                        <div className='wall_left'>
                            <p>Enter ID or BUSDwallet</p>

                            <div className='previw_input_btn'>
                                <input type='number' className='account_input' val="" />
                                <button>Preview</button>
                            </div>
                        </div>

                        <div className='wall_right'>
                            <p>Don’t know any ID?</p>
                            <button>Check demo</button>
                        </div>
                    </div>
                </div>


                <div className='rodmap_main'>
                    <h1>Roadmap</h1>

                    <div className='roadmap_card'>
                        <div className='social_card ' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>

                            <img src={roadmap1} alt='tokenimg' className='roadmaping' />
                            <p>Social</p>

                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <img src={roadmap2} alt='tokenimg' className='roadmaping' />
                            <p>Achievements</p>
                            <div className='social_crd_right_line3'></div>
                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <div className='social_crd_left_line2'></div>
                            {/* <img src={roadmap3} alt='tokenimg' className='roadmaping' /> */}
                            <p>Cycle Rally Marathon</p>

                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <img src={roadmap4} alt='tokenimg' className='roadmaping' />
                            <p>Forsage Games</p>
                            <div className='social_crd_right_line2'></div>
                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <div className='social_crd_left_line3'></div>
                            <img src={roadmap5} alt='tokenimg' className='roadmaping' />
                            <p>Custom invite page</p>

                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <div className='social_crd_right_line'></div>
                            <img src={roadmap6} alt='tokenimg' className='roadmaping' />
                            <p>New program</p>

                            <div className='ab_number1'>
                                <span className='tickicons12'><img src={img26tick} alt='tickicon' className='rickiconq' /></span>
                                <p>21.08</p>
                            </div>
                        </div>

                        <div className='social_card ' style={{ backgroundImage: `url(${bluesedo})`, backgroundSize: 'cover'}}>
                            <div className='social_crd_left_line'></div>
                            <img src={roadmap7} alt='tokenimg' className='roadmaping' />
                            <p>Token</p>

                            <div className='ab_number1'>
                                <span className='circle_line'>1</span>
                                <p>21.08</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='need_help_section'>
                    <h1>Need help with using the platform?</h1>
                    <p>Get qualified support from Forsage experts via online chat</p>
                    <button className='contact_suppo'>Contact support</button>

                    <img src={bluecircle} alt='bluecircle' className='bluecircle' />
                </div>


                <div className='copy_right'>
                    <div className='copy_left'>

                        <p>© 2023 All Rights Reserved</p>
                        <p>Documents</p>
                    </div>

                    <div className='social_media'>
                        <i class="fa fa-telegram" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
