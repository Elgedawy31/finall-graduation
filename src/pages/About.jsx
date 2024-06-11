import React from 'react'
import aboutlogo from '../images/aboutLogo.png'
import '../styles/About.css'
import aboutPerson from '../images/aboutPerson.png'
import icone1 from '../images/abouticon1.svg'
import icone2 from '../images/abouticon2.svg'
import icone3 from '../images/abouticon3.svg'
import icone4 from '../images/abouticon4.svg'
import aboutgirl1 from '../images/aboutGirl.png'
import aboutman1 from '../images/aboutman1.png'
import aboutman2 from '../images/aboutman2.png'
import aboutman3 from '../images/aboutman3.png'
import Table from '../components/Table'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigation = useNavigate()
    return (

        <div>
            <Header />
            <section className='blogheader'>
        <div className='row m-auto text-center pt-5 pb-5'>
          <div className='col'>
            <div className='h1'>About</div>
          </div>
        </div>

      </section>
            {/* first section */}
            <Container className='aboutsection  mt-5'>
                <div className='aboutfdiv'>
                    <img src={aboutlogo} />
                    <h3>Quality and  Tradition </h3>
                    <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.</p>

                    <p>Josfine</p>
                    <h2>JOSEFINE</h2>
                    <button className='aboutbtn'>See More</button>
                </div>


                <div className='aboutsecdiv'>

                    <div className='aboutPosition p-3'>
                        <div className='d-flex justify-content-between mb-3'>
                            <img src={aboutPerson} />
                            <div> <p>Josfine</p>
                                <p>CEO & Founder</p></div>
                        </div>

                        <p>
                            Capitalize on low hanging fruit
                            to identify a ballpark
                        </p>

                    </div>
                </div>


            </Container>

            {/* second section  */}
            <section className='aboutGround '>
                <div>
                    <img src={icone1} />
                    <h3>Fresh Products</h3>
                    <p>Professional consider everyone
                        probls small niche friendly.</p>
                    <button onClick={() => navigation('/order')}>See more</button>

                </div>

                <div>
                    <img src={icone2} />
                    <h3>Fresh Products</h3>
                    <p>Professional consider everyone
                        probls small niche friendly.</p>
                    <button onClick={() => navigation('/order')}>See more</button>
                </div>

                <div>
                    <img src={icone3} />
                    <h3>Fresh Products</h3>
                    <p>Professional consider everyone
                        probls small niche friendly.</p>
                    <button onClick={() => navigation('/order')}>See more</button>
                </div>
                <div className='notBorder'>
                    <img src={icone4} />
                    <h3>Fresh Products</h3>
                    <p>Professional consider everyone
                        probls small niche friendly.</p>
                    <button onClick={() => navigation('/order')}>See more</button>

                </div>
            </section>
            {/* third section */}
            <section className='aboutThirdSection'>
                <div className='aboutsec'>
                    <h6>TEAM</h6>
                    <h3>Meet Our Professional Chefs</h3>

                </div>
                <div className='aboutProfession'>
                    <div>
                        <img src={aboutgirl1} />
                        <h4>Avroko</h4>
                        <p>Master Chef</p>
                    </div>

                    <div>
                        <img src={aboutman1} />
                        <h4>Evan Mattew</h4>
                        <p>Master Chef</p>
                    </div>
                    <div>
                        <img src={aboutman2} />
                        <h4>Diane Cloksen</h4>
                        <p>Master Chef</p>
                    </div>
                    <div>
                        <img src={aboutman3} />
                        <h4>Dan Raflian</h4>
                        <p>Master Chef</p>
                    </div>

                </div>
            </section>
            {/*   fourth section about grid */}

            <section className='aboutFourth'>
                <div className=' aboutFtext '>
                    <h6>
                        GALARY
                    </h6>
                    <h1>What We Make</h1>

                </div>

                <section className='aboutFGrid'>
                    <div className='aboutg1'>

                    </div>

                    <div className='aboutg2'>
                    </div>

                    <div className='aboutg3'>
                    </div>

                    <div className='aboutg4'>
                    </div>

                    <div className='aboutg5'>
                    </div>



                </section>
            </section>
            {/* fifth section table */}
            <section className='aboutTable'>
                <Table />

            </section>
            <Footer />
        </div>
    )
}

export default About