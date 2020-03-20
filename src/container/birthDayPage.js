import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Head } from '../components/birthday/headBirthDay';
import { BirthDayGift } from '../components/birthday/birthDayGift';
import { AboutBirthDay } from '../components/birthday/aboutBirthDay';
export class BirthDayPage extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }
    render(){
        return(
            <div className='container-fluid'>
            <Head/>
            <BirthDayGift/>
            <AboutBirthDay/>
            </div>
        )
    }
}