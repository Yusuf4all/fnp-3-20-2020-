import React from 'react';
import './headCakeStyle.css';
import { NavLink } from 'react-router-dom';
export const Head = (props) => {
    return (    
        <div id='cake_head'>
            <div className='category_disc'>
                <h1>Birthday Gifts Online</h1>
                <p>Birthdays are the special days in our calendar and missing that is not granted at all. Gifts for birthdays are always the most searched ones and the birthday boy/girl feels overjoyed receiving them. In case you were busy and couldn’t find time for shopping the gift, then, you can surely check Ferns N Petals as we have some beautiful online birthday gift ideas. Check flowers, cakes, personalized gifts, and many more exciting gift ideas here to make someone feel special!</p>
            </div>
            <div className='category_items'>
                <ul className='d-flex justify-content-around'>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/cakes/chocolate-cake-min.png' alt='Chocolate' /><p>Chocolate</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/cakes/eegless-min.png' alt='Eggless' /><p>Eggless</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/cakes/cheese-cake-min.png' alt='Cheese Cake' /><p>Cheese Cake</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/cakes/half-kg-min.png' alt='Half KG' /><p>Half KG</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/cakes/birthday-cake-min.png' alt='Birthday' /><p>Birthday</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/cakes/anniversary-cake-min.png' alt='Anniversary' /><p>Anniversary</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i3.fnp.ae/assets/images/custom/category/cakes/photo-cake-min.png' alt='Photo Cake' /><p>Photo Cake</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i4.fnp.ae/assets/images/custom/category/cakes/designer-cake-min.png' alt='Designer' /><p>Designer</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i1.fnp.ae/assets/images/custom/category/cakes/cartoon-cake-min.png' alt='Cartoon' /><p>Cartoon</p></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none' }} to=''><img src='https://i2.fnp.ae/assets/images/custom/category/cakes/cupcake-min.png' alt='Cup Cake' /><p>Cup Cake</p></NavLink></li>
                </ul>
            </div>            
        </div>
    )
}