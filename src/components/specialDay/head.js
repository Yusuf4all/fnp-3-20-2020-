import React from 'react';
import './headStyle.css';
import { NavLink } from 'react-router-dom';
export const Head = (props) => {
    return (    
        <div id='specialDayHead'>
            <div className='category_disc'>
                <h1>Mothers Day Gifts</h1>
                <p>Mothers are your ultimate secret keepers and the perfect support in life. No matter how old you get she is someone who will always feed you like a baby. Is distance stopping you from expressing the respect and love you have for her? We, Ferns N Petals have ample options to celebrate your relation with your loving and inspiring mother. Send Mother’s Day gifts from our amazing collection.</p>
            </div>
            <div className='category_items'>
                <ul className='d-flex justify-content-around'>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/mothers-day/icons/Cake-11-mar-2020.png' alt='Cake' /><p>Cake</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/mothers-day/icons/Flowers-11-mar-2020.png' alt='Flowers' /><p>Flowers</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/mothers-day/icons/Personalised-11-mar-2020.png' alt='Personalised' /><p>Personalised</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/mothers-day/icons/hampers-1-11-mar-2020.png' alt='Gift Hamper' /><p>Gift Hamper</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/mothers-day/icons/All-Gifts-11-mar-2020.png' alt='All gifts' /><p>All Gifts</p></NavLink></li>
                </ul>
            </div>            
        </div>
    )
}