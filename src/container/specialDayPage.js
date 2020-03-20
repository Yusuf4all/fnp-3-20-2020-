import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Head } from '../components/specialDay/head';
import { SpecialDayGift } from '../components/specialDay/specialDayGift';
import { AboutSpecialDay } from '../components/specialDay/aboutSpecialDay';
// import './specialDayStyle.css';

export class SpecialDayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                <div className='container-fluid specialDay'>
                    <Head />
                    <SpecialDayGift />
                    <AboutSpecialDay />
                </div>
        )
    }
}