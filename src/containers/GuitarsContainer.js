import React, { Component } from 'react'
import Guitars from '../components/guitars/Guitars'
import {connect} from 'react-redux';
import {fetchGuitars} from '../actions/fetchGuitars'
import {Route, Switch} from 'react-router-dom'
import Guitar from '../components/guitar/Guitar'
import {fetchItems} from '../actions/fetchItems'
import {addItem} from '../actions/addItem'


class GuitarsContainer extends React.Component {
    

    componentDidMount(){
        this.props.fetchGuitars()
        this.props.fetchItems()
    }
    render (){
        return(
            <div>
                <Switch>
                    <Route exact path='/guitars/:id' render= {(routerProps) =>  <Guitar {...routerProps} guitars={this.props.guitars}/>} />
                    <Route exact path='/' render= {(routerProps) =>  <Guitars {...routerProps} guitars={this.props.guitars} addItem={this.props.addItem}/>} />
                    
                    
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guitars: state.guitars,
        cart: state.cart
    }
}

export default connect(mapStateToProps, {addItem, fetchGuitars, fetchItems})(GuitarsContainer)