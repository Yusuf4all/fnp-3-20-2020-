import React from 'react';
import { Header } from './components/header/header';
import { HomePage } from './container/homePage';
import { SpecialDayPage } from './container/specialDayPage';
import { BirthDayPage } from './container/birthDayPage';
import { AnniversaryPage } from './container/anniversaryPage';
import { FlowersPage } from './container/flowersPage';
import {CakePage} from './container/cakePage';
import {Product} from './components/product/product';
import { Footer } from './components/footer/footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/HomePage' component={HomePage} />
          <Route path='/SpecialDayPage' component={SpecialDayPage} />
          <Route path='/BirthDayPage' component={BirthDayPage} />
          <Route path='/AnniversaryPage' component={AnniversaryPage} />
          <Route path='/FlowersPage' component={FlowersPage} />
          <Route path='/CakePage' component={CakePage}/>
          <Route path='/Product' component={Product}/>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;
