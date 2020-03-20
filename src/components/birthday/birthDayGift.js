import React from 'react';
import { NavLink } from 'react-router-dom';
import './bdGiftStyle.css';
export const BirthDayGift = (props) => {
    return (
        <div id='giftItem'>
            <div class="d-flex bd-highlight navOfItem">
                <div class="mr-auto p-2 bd-highlight">
                    <ul className='d-flex justify-content-start'>
                        <li><NavLink to='' className='decorate' >Home</NavLink> <i className="fas fa-angle-right"></i></li>
                        <li><NavLink to='' className='decorate'>Online Gifts Delivery</NavLink> <i className="fas fa-angle-right"></i></li>
                        <li>Birthday Gift Ideas</li>
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
                                <section className='dropDownGiftType'>
                                    <ul className='scrollList'>
                                        <li>Flowers</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Pesonalised Gifts</li>
                                        <li>Mugs</li>
                                        <li>Cushiobs</li>
                                        <li>Pesonalised Chocolates</li>
                                        <li>Pesonalised Photo Frame</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Gifts</li>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Combos</li>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>French Bakery</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Bakemart</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Cake Walk</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Same Day Delivery Gifts</li>
                                    </ul>
                                </section>
                            </li>
                            <li>Occassion <i className="fas fa-angle-down"></i>
                                <section className='dropDownGiftType'>

                                    <ul className='scrollList'>
                                        <li>Gifts</li>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Combos</li>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>French Bakery</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Cake Walk</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Same Day Delivery Gifts</li>
                                    </ul>
                                </section>
                            </li>
                            <li>Delivery City <i className="fas fa-angle-down"></i>
                            <section className='dropDownDelivery'>
                                    <ul className='scrollList'>
                                        <li>Flowers</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Pesonalised Gifts</li>
                                        <li>Mugs</li>
                                        <li>Cushiobs</li>
                                        <li>Pesonalised Chocolates</li>
                                        <li>Pesonalised Photo Frame</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Cake</li>
                                        <li>Flowers Bouquets</li>
                                        <li>Flowers Arrangements</li>
                                        <li>Basket Flowers</li>
                                        <li>Roses</li>
                                        <li>Tulips</li>
                                        <li>Lilies</li>
                                        <li>Mixed Flowers</li>
                                        <li>Carnations</li>
                                        <li>Chrysanthemums</li>
                                        <li>Daisies</li>
                                        <li>Gerberas</li>
                                        <li>Orchids</li>
                                        <li>Anthuriums</li>
                                        <li>Vase Arrangements</li>
                                        <li>Exotic Flowers</li>
                                        <li>Forever Roses</li>
                                        <li>Rose Teddy Bears</li>
                                        <li>Sunflowers</li>
                                        <li>Premium flowers</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>French Bakery</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Cake Walk</li>
                                    </ul>
                                    <ul className='scrollList'>
                                        <li>Same Day Delivery Gifts</li>
                                    </ul>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='rightMenu'>
                    <ul className='d-flex'>
                        <li>Price<i className="fas fa-angle-down"></i>
                            <section className='dropDown'>
                                <ul>
                                    <li><input type='checkbox' /><span>Below AED 200</span></li>
                                    <li><input type='checkbox' /><span>AED 200+</span></li>
                                    <li><input type='checkbox' /><span>AED 400+</span></li>
                                    <li><input type='checkbox' /><span>AED 600 And Above</span></li>
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
                                <img src='https://i4.fnp.ae//images/pr/l/v20200114154234/mixed-flowers-in-square-glass-vase_2.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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
                                <img src='https://i3.fnp.ae//images/pr/l/v20200226181448/roses-n-carnations-in-glass-vase_3.jpg' alt='' />
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