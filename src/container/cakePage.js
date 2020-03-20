import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Head} from '../components/cakes/headCake'; 
import {GiftCake} from '../components/cakes/giftCake';
import {AboutCake} from '../components/cakes/aboutCake';
export class CakePage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
        <div className='container-fluid'>
            <Head/>
            <GiftCake/>
            <AboutCake/>
        </div>
        )}
}