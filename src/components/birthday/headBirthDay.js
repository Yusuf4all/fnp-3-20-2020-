import React from 'react';
import './headBDStyle.css';
import { NavLink } from 'react-router-dom';
export const Head = (props) => {
    return (    
        <div id='specialDayHead'>
            <div className='category_disc'>
                <h1>Birthday Gifts Online</h1>
                <p>Birthdays are the special days in our calendar and missing that is not granted at all. Gifts for birthdays are always the most searched ones and the birthday boy/girl feels overjoyed receiving them. In case you were busy and couldn’t find time for shopping the gift, then, you can surely check Ferns N Petals as we have some beautiful online birthday gift ideas. Check flowers, cakes, personalized gifts, and many more exciting gift ideas here to make someone feel special!</p>
            </div>
            <div className='category_items'>
                <ul className='d-flex justify-content-around'>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/birthday-gifts/icons/flowers.png' alt='Cake' /><p>Flowers</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/birthday-gifts/icons/cakes-1.png' alt='Flowers' /><p>Cake</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/birthday-gifts/icons/balloon-decorations.png' alt='Personalised' /><p>Balloon Decoration</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/birthday-gifts/icons/cake-n-flowers.png' alt='Gift Hamper' /><p>Flowers & Cakes</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/birthday-gifts/icons/Perfume-min.png' alt='All gifts' /><p>Perfumes</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/birthday-gifts/icons/birthday-experiential.png' alt='All gifts' /><p>Experiential Gifts</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/birthday-gifts/icons/Chocolates-min.png' alt='All gifts' /><p>Chocolates</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/birthday-gifts/icons/personalsied.png' alt='All gifts' /><p>Personalised</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/birthday-gifts/icons/Photocakes.png' alt='All gifts' /><p>Photocakes</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/birthday-gifts/icons/hampers.png' alt='All gifts' /><p>Gift Hampers</p></NavLink></li>
                </ul>
            </div>            
        </div>
    )
}