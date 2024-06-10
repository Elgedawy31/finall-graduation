import React from 'react'
import menufimage from '../images/menufimage.jpg'
import menu1logo from '../images/menu1logo.jpg'
import menu2logo from '../images/menu2logo.jpg'
import menu3logo from '../images/menu3logo.png'
import menu4logo from '../images/menu4logo.jpg'
import mlogo1 from '../images/mlogo1.jpg'
import mlogo2 from '../images/mlogo2.jpg'
import mlogo3 from '../images/mlogo3.jpg'
import mlogo4 from '../images/mlogo4.jpg'
import menusimage from '../images/menusimage.jpg'
import mmlogo1 from '../images/mmlogo1.png'
import mmlogo2 from '../images/mmlogo2.png'
import mmlogo4 from '../images/mmlogo4.jpg'
import mmlogo3 from '../images/mmlogo3.jpg'
import menuthimg from '../images/menuthimg.jpg'
import menuline from '../images/menuline.png'
import { Container } from 'react-bootstrap'
import menuground1 from '../images/menuground.png'
import menuground2 from '../images/menuground2.png'

import Table from '../components/Table'
import '../styles/Menu.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Menu = () => {
    return (
        <div>
            <Header />
            <section className='blogheader'>
                <div className='row m-auto text-center pt-5 pb-5'>
                    <div className='col'>
                        <div className='h1'>Menu</div>
                    </div>
                </div>

            </section>
            {/* menu first section */}
            <Container className='menuFsection'>
                <div className='menufimage'>
                    <img src={menufimage} />
                </div>


                <div>
                    <h2>Starters</h2>
                    <div className=' d1'>
                        <img src={menu1logo} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Raw Scallops from Erquy</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={menu2logo} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Spring Roll</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={menu3logo} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>French Onion Soup</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={menu4logo} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Tomato Bruschetta</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>


                    <button className='menubtn'>
                        See All dishes
                    </button>
                </div>


            </Container>
            {/* second */}
            <section>
                <img src={menuground1} className='menuground1' />

            </section>

            {/* third */}
            <Container className='menuFsection'>
                <div>
                    <h2>Starters</h2>
                    <div className=' d1'>
                        <img src={mlogo1} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Grilled Salmon with Dil Saucey</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mlogo2} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Roast Beef with Vegetable</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mlogo3} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>RMarrkesh Vegetetarian Curruy</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mlogo4} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Spicy Vegan Potato Curry</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>


                    <button className='menubtn'>
                        See All dishes
                    </button>
                </div>
                <div className='menufimage'>
                    <img src={menusimage} />
                </div>

            </Container>


            {/* fourth  */}
            <section>
                <img src={menuground2} className='menuground2' />
            </section>


            {/* 5th*/}
            <Container className='menuFsection'>
                <div className='menufimage'>
                    <img src={menuthimg} />
                </div>


                <div>
                    <h2>Starters</h2>
                    <div className=' d1'>
                        <img src={mmlogo1} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Apple Pie with Cream</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mmlogo2} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Lemon Meringue Pic</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mmlogo3} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Tender Octobus and Fennel</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>

                    <div className=' d1'>
                        <img src={mmlogo4} className='d-inline rounded-circle' />
                        <div className='d-inline'>
                            <h3>Sea Boss Cevich</h3>

                            <div className=' d12'>
                                <p>Candied Jerusalem artichokes, truffle</p>
                                <img src={menuline} className='linemenu' />
                                <h4>$40</h4>
                            </div>
                        </div>




                    </div>


                    <button className='menubtn'>
                        See All dishes
                    </button>
                </div>


            </Container>

            {/* 6th */}
            <section className='aboutTable'>
                <Table />

            </section>
            <Footer />
        </div>
    )
}

export default Menu