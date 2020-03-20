import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Head } from '../components/anniversary/headAnni';
import { GiftAnnniversary } from '../components/anniversary/giftAnni';
import { AboutAnniversary } from '../components/anniversary/aboutAnni';
export class AnniversaryPage extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }
    render(){
        return(
            <div className='container-fluid'>
            <Head/>
            <GiftAnnniversary/>
            <AboutAnniversary/>
            </div>
        )
    }
}