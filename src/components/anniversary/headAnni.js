import React from 'react';
import './headAnniStyle.css';
import { NavLink } from 'react-router-dom';
export const Head = (props) => {
    return (    
        <div id='anniversaryHead'>
            <div className='category_disc'>
                <h1>Anniversary Gifts</h1>
                <p>Life would have been really boring without your better half. Anniversary is that day when you actually realize how special he/she is to you. So, surprise your partner with romantic anniversary gifts online from Ferns N Petals. You will find flowers, cakes, personalized gifts, plants, and many more heart-warming gift ideas here to impress your darling.</p>
            </div>
            <div className='category_items'>
                <ul className='d-flex justify-content-around'>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/anniversary/flowers-min-16-jan-2020.png' alt='Cake' /><p>Flowers</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/anniversary/cakes-min-16-jan-2020.png' alt='Cake' /><p>Cakes</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/anniversary/accessories-min-16-jan-2020.png' alt='Cake' /><p>Accessories</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/anniversary/flower-n-cake-min-16-jan-2020.png' alt='Cake' /><p>Flowers & Cake</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/anniversary/decoration-min-16-jan-2020.png' alt='Cake' /><p>Decoration</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/anniversary/photo-cake-min-16-jan-2020.png' alt='Cake' /><p>Photo Cakes</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/anniversary/personalised-min-16-jan-2020.png' alt='Cake' /><p>Personalised</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/anniversary/chocolates-min-16-jan-2020.png' alt='Cake' /><p>Chocolates</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/anniversary/perfume-min-16-jan-2020.png' alt='Cake' /><p>Perfume</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/anniversary/rose-teddy-min-16-jan-2020.png' alt='Cake' /><p>Rose Teddy</p></NavLink></li>
                    
                </ul>
            </div>            
        </div>
    )
}