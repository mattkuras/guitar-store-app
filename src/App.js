import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGuitars} from './actions/fetchGuitars'
import GuitarsContainer from './containers/GuitarsContainer'
import Cart from './components/cart/Cart';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route } from 'react-router-dom';
import About from './components/about'

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <Header/>
        <GuitarsContainer/>
         <Route exact path='/cart' component={Cart} />
         <Route exact path ='/about' component= {About} />
         <Footer />
      </div>
    )
  }
} 

export default connect(null, {fetchGuitars})(App);

