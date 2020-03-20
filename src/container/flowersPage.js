import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Head} from '../components/flowers/headFlowers';
import {GiftFlowers} from '../components/flowers/giftFlowers';
import {AboutFlowers} from '../components/flowers/aboutFlowers';
export class FlowersPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className='container-fluid'>
                <Head/>
                <GiftFlowers/>
                <AboutFlowers/>
            </div>
        )
    }
}