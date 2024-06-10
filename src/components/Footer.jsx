import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import footerLogo from '../images/Logo.png'
import contactLogo from '../images/contact_logo.png'
import workingHurs from '../images/working-hours.png'

import '../styles/footer.css'
const Footer = () => {
    // const [Email, setEmail] = useState();


    return (
        <>
            <footer>
                <div className='row mb-5'>
                    <div className='col-lg-4 col-sm-12  pt-5'><h3>Instagram Feed</h3> </div>
                    <div className='col-lg-4 col-sm-12 footerLogo'><img src={footerLogo} /></div>
                    <div className='col-lg-4 col-sm-12 icons pt-5' >
                        <FaFacebook />   <FaInstagram />  <FaTwitter />  <FaPinterest />
                    </div>
                </div>

                <div className='row mb-5 mt-5'>
                    <div className='col-lg-4 col-sm-12'><img src={contactLogo} /></div>
                    <div className='col-lg-4 col-sm-12 '><p>Join our mailing list for updates,<br></br> Get news & offers events.</p></div>
                    <div className='col-lg-4 col- sm-12'><img src={workingHurs} /></div>
                </div>

                <div className='row'>

                    <div className='col'> 5 Rue Dalou, 75015 Paris  <br></br><span >Call</span>  - +33 156 78 89 56<br></br> <span style={{ color: '#E1B168' }}>benoit@mail.com</span></div>
                    <div className='col-lg-4 col-sm-12 mt-4' >
                        <input type="email" placeholder='Email' /><button>Subscribe</button>
                    </div>
                    <div className='col-lg-4 col-sm-12 mt-4'><span>Mon – Fri:</span> 7.00am – 6.00pm<br></br><span> Sat:</span> 7.00am – 6.00pm <br></br><span>Sun:</span> 8.00am – 6.00pm</div>
                </div>

            </footer>
        </>
    )
}

export default Footer