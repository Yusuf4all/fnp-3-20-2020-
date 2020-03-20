import React from 'react';
import './headFlowersStyle.css';
import { NavLink } from 'react-router-dom';
export const Head = (props) => {
    return (    
        <div id='FlowersHead'>
            <div className='category_disc'>
                <h1>Flower Delivery Online</h1>
                <p>There’s a saying that where flowers bloom, hope reigns. Flowers are the most unique gifts which can be gifted to your near and dear ones for any occasion. You can order flowers online as the presentation of flowers by them is outstanding and therefore forms a big part of gifting. The best part is that everyone cheers up with this amazing gift of flowers and you are never tired of buying and gifting them.</p>
            </div>
            <div className='category_items'>
                <ul className='d-flex justify-content-around'>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/flowers/birthday-flower-min.png' alt='Cake' /><p>Birthday</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/flowers/anniversary-min.png' alt='Cake' /><p>Anniversary</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/flowers/rose-min.png' alt='Cake' /><p>Roses</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/flowers/tulips-min.png' alt='Cake' /><p>Tulips</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/flowers/premuim-min.png' alt='Cake' /><p>Premuim</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/flowers/Bouquet-min.png' alt='Cake' /><p>Bouquet</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/flowers/Arrangement-min.png' alt='Cake' /><p>Arrangement</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/flowers/Mixed-min.png' alt='Cake' /><p>Mixed</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/flowers/Decoration-min.png' alt='Cake' /><p>Decoration</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/flowers/rose-teddy-min-16-jan-2020.png' alt='Cake' /><p>Rose Teddy</p></NavLink></li>
                </ul>
            </div>            
        </div>
    )
}