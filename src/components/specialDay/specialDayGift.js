import React from 'react';
import { NavLink } from 'react-router-dom';
import './sdGiftStyle.css';
export const SpecialDayGift = (props) => {
    return (
        <div id='giftItem'>
            <div class="d-flex bd-highlight navOfItem">
                <div class="mr-auto p-2 bd-highlight">
                    <ul className='d-flex justify-content-start'>
                        <li><NavLink to='' className='decorate' >Home</NavLink> <i className="fas fa-angle-right"></i></li>
                        <li><NavLink to='' className='decorate'>Online Gifts Delivery</NavLink> <i className="fas fa-angle-right"></i></li>
                        <li>Mother's Day Gifts Online</li>
                    </ul>
                </div>
                <div class="p-2 bd-highlight sortItem">
                    <ul className='d-flex'>
                        <li>
                            <p>Showing 60 gifts out of 248 | Sort By</p>
                        </li>
                        <li>
                            <select>
                                <option>Recommended</option>
                                <option>New</option>
                                <option>Price:Low to High</option>
                                <option>Price:High to Low</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex bd-highlight menu">
                <div className="mr-auto">
                    <div className='leftMenu'>
                        <ul className='d-flex'>
                            <li>Gift Type<i className="fas fa-angle-down"></i>
                                <section className='dropDown'>
                                    <a href='#'> All gifs </a>
                                    <a href='#'> All flowers </a>
                                    <a href='#'> Shop by emirate </a>
                                    <a href='#'> Dubai </a>
                                    <a href='#'> Abu dhabi </a>
                                </section>
                            </li>
                            <li>Occassion <i className="fas fa-angle-down"></i>
                                <section className='dropDown'>
                                    <a href='#'> All gifs </a>
                                    <a href='#'> All flowers </a>
                                    <a href='#'> Shop by emirate </a>
                                    <a href='#'> Dubai </a>
                                    <a href='#'> Abu dhabi </a>
                                </section></li>
                            <li>Delivery City <i className="fas fa-angle-down"></i>
                                <section className='dropDown'>
                                    <a href='#'> All gifs </a>
                                    <a href='#'> All flowers </a>
                                    <a href='#'> Shop by emirate </a>
                                    <a href='#'> Dubai </a>
                                    <a href='#'> Abu dhabi </a>
                                </section></li>
                        </ul>
                    </div>
                </div>

                <div className='rightMenu'>
                    <ul className='d-flex'>
                        <li>Price<i className="fas fa-angle-down"></i>
                        <section className='dropDown'>
                            <ul>
                                <li><input type='checkbox'/><span>Below AED 200</span></li>
                                <li><input type='checkbox'/><span>AED 200+</span></li>
                                <li><input type='checkbox'/><span>AED 400+</span></li>
                                <li><input type='checkbox'/><span>AED 600 And Above</span></li>
                            </ul>
                        </section>
                        </li>
                        <li>Delivery Date <i className="fas fa-angle-down"></i></li>
                    </ul>
                </div>
            </div>
            <div id='giftItems'>
                <div className='row'>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <div className='card'>
                        <div className='imgOfCard'>
                            <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt=''/>
                        </div>
                        <div className='descOfCard'>
                        <p>Roses N Carnations in Glass Vase</p>
                        <h6>AED 249</h6>
                        <p>Earliest Delivery:<span>Today</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}