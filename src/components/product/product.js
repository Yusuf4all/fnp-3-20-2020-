import React from 'react';
import './productStyle.css';
import { Link } from 'react-router-dom';
export const Product = (props) => {
    return (
        <div id='product' className='container-fluid'>
            <div className='product_nav'>
                <ul className='d-flex justify-content-start'>
                    <li><Link to='/HomePage' className='decorate' >Home</Link> <i className="fas fa-angle-right"></i></li>
                    <li>Personalised Pretty Cushion n Mug For Mom</li>
                </ul>
            </div>

            <div className='product_content d-flex'>
                <div className='product_img'>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/images/pr/l/v20200306141801/personalised-pretty-cushion-n-mug-for-mom_1.jpg' alt='' />
                    </div>
                    <div className='logo d-flex'>
                        <img src='https://i9.fnp.com/assets/images/custom/homepage_target/Ferns_N_Petals_Trust_Seal_4.svg ' alt=''/>
                        <ul>
                            <li><i className="fas fa-shield-alt"></i> 100% Safe and Secure Payments.</li>
                            <li><i className="fas fa-smile"></i> 6 Million People Trust Us.</li>
                        </ul>
                    </div>
                </div>
                <div className='product_info'>
                    <h2>Personalised Pretty Cushion n Mug For Mom</h2>
                    <h3>AED <span>139</span></h3>
                    <p>Inclusive of all taxes</p>
                    <div>
                    <select>
                        <option>Select Country</option>
                        <option>Dubai</option>
                        <option>Abu Dhabi</option>
                        <option>Sharjah</option>
                        <option>Ajman</option>
                        <option>Al Ain</option>
                        <option>Ras Al Khaimah</option>
                        <option>Umm Al Quwain</option>
                        <option>Fujairah</option>
                    </select>
                    <input className='calender' type='date'/>
                    </div>
                    <input className='files' type='file'/>

                    <div className='product_buttons'>
                    <button className='btn btn-success'><i className="fas fa-cart-plus"></i>ADD TO CARD</button>
                    <button className ='btn btn-warning'><i className="fas fa-shopping-bag"></i>BUY NOW</button>
                    </div>

                    <div className='desc'>
                        <h3>Description</h3>
                        <p>Product Details</p>
                        <ul>
                            <li>One Printed Mug</li>
                            <li>Mug Material- Ceramic</li>
                            <li>Mug Dimensions- Height: 4 inches & Diameter: 3 inches</li>
                            <li>Capacity- Can hold liquid upto 325 ml</li>
                            <li>One Printed Cushion Cover</li>
                            <li>Cushion Material- Canvas Poly Duck</li>
                            <li>Recron Filled Cushion</li>
                            <li>Cushion Dimensions (L x W)- 10 -11 inches</li>
                        </ul>
                        <h3>Delivery Information</h3>
                        <ul>
                        <li>The image displayed is only indicative in nature.</li>
                        <li>Although we make 100% efforts to match the image displayed, the actual product delivered may vary in shape or design as per the availability.</li>
                        <li>A majority of our orders are delivered on time as per the time slot selected.</li>
                        <li>This is not met in very rare cases where the situation is beyond our control viz., traffic congestion enroute, remote address for delivery, etc.</li>
                        <li>Once the order is prepared for delivery, the delivery cannot be redirected to any other address.</li>
                        <li>Although we try not to, occasionally, substitution is necessary due to temporary and/or regional unavailability issues.</li>
                        <li>Please be noted that we may have to do this without informing you because we give utmost importance to delivery on time since most of our orders are gifts for a certain occasion</li>
                        </ul>
                        <h3>Care Instructions</h3>
                        <ul>
                            <li>This mug is made of ceramic and is breakable.</li>
                            <li>It is microwave safe and dishwasher safe.</li>
                            <li>Made for hot beverages.</li>
                            <li>Clean it with a sponge.</li>
                            <li>Do not scrub.</li>
                            <li>Always hand wash the cover, using a mild detergent.</li>
                            <li>Never put it in a washing machine.</li>
                            <li>You can also get it dry cleaned.</li>
                            <li>It should be allowed to air dry outside.</li>
                            <li>Iron inside out.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
} 