import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Advertisement} from '../components/home/adver';
import {Bestgifts} from '../components/home/bestGifts';
import {AllFlowers} from '../components/home/flowers';
import {Cakes} from '../components/home/cakes';
import {FlowerCombo} from '../components/home/flowerCombo';
import {DeliveryGift} from '../components/home/deliveryGift';
import {PersonalisedGifts} from '../components/home/personalisedGifts';
import {EdibleGifts} from '../components/home/edibleGifts';
import {About} from '../components/home/about';
export class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <>
            <div className='container-fluid'>
            <Advertisement/>
            <Bestgifts/>
            <AllFlowers/>
            <Cakes/>
            <FlowerCombo/>
            <DeliveryGift/>
            <PersonalisedGifts/>
            <EdibleGifts/>
            <About/>
            </div>
            </>
        )
    }
}