import React from 'react'
import {Redirect} from 'react-router-dom'
import './guitar.css'

const Guitar = (props) => {

    let guitar = props.guitars[props.match.params.id - 1]
    return(
        <div className='displayGuitar'>
            {guitar ? <img className='guitarImg' src={guitar.image} /> : <Redirect to='/guitars'/>}
            <h2>{guitar ? guitar.name : <Redirect to='/guitars'/>} - {guitar ? guitar.price : <Redirect to='/guitars'/>}</h2>
            {guitar ? guitar.description : <Redirect to='/guitars'/>} 
        </div>
    )

}

export default Guitar