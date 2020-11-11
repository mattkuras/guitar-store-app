import React, { Component } from 'react';

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }

       // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // this.setState({count: this.state.count + 1})

        console.log('a')

        fetch("https://guitar-store-backend.herokuapp.com/guitars")
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b')
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
        
        console.log('e');

        // a, e, d
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>Click Me!</button>
            <p>{this.state.count}</p>
            </>
        )
    }
}
export default Counter 