import React from 'react';
import './headerStyle.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
export const Header = (props) => {
    return (
        <header>
            <div id='contact'>
                <p>Call Us +918802130906 | AED <i className="fas fa-caret-down"></i></p>
            </div>
            <div className='mainHeader '>
                <div className="d-flex">
                    <div className="mr-auto ">
                        <ul>
                            <li className='logo'><NavLink to='/homePage' style={{ textDecoration: 'none' }}><img src='https://i4.fnp.ae/assets/images/logo-fnpae.png' alt='not found' /></NavLink></li>
                            <li className='search'> <input type='text' placeholder='Search flowers,cakes,gifts etc.' /><button className='searchBtn'><i className="fas fa-search"></i></button>
                                <input type="checkbox" className="checkbox" />
                                <button className="menu-btn">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </button></li>

                            <li className='clock'><img src='https://image.useinsider.com/fnp/defaultImageLibrary/Clock-eyfxGQCCW7u9VbHIaOYM1569422185.gif' alt='not found' />
                                <p>Need Today?</p></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='help right'><button><i className="far fa-question-circle"></i><span>Help</span></button></li>
                            <li className='corporate right'><button><i className="far fa-building"></i><span>Corporate</span></button></li>
                            <li className='cart right'><button><i className="fas fa-shopping-cart"></i><span>Cart</span></button></li>
                            <li className='account right'><button><i className="fas fa-user-circle"></i><span>Account</span></button></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='navigation'>
                <ul className='d-flex'>
                    <li className='women'><NavLink to='/SpecialDayPage' className='decorate active'>WOMEN'S DAY</NavLink>
                        <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>

                    <li className='birthday'><NavLink to='/BirthDayPage' className='decorate'>BIRTHDAY</NavLink>
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='anniversary'><NavLink to='/AnniversaryPage' className='decorate'>ANNIVERSARY</NavLink>
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='flowers'><NavLink to='/FlowersPage' className='decorate'>FLOWERS</NavLink>
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='cakes'><NavLink to='/CakePage' className='decorate'>CAKES</NavLink>
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='personalised'>PERSONALISED
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='plants'>PLANTS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='other'>OTHER GIFTS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='occations'>OCCATIONS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='cities'>BY CITIES
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='outside'>OUTSIDE UAE
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='stength'>OUT STRENGTH
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                </ul>
            </div>
        </header>
    )
}