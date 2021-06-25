import React, { Component } from 'react'

export default class Dog extends Component {
    state = {
        like: false,
        favorite: false
    }

    function button(e, type){
        e.preventDefault
        this.setState({
            type: !this.state[type]
        })
        if (e.style.backgroundColor === '000') {
            e.style.backgroundColor = 'F00';
        } else {
            e.style.backgroundColor = '000';
        }
    }

    render() {
        return (
            <div>
                <img src={pic} alt="Cute Dog" width="250" />
                <button onSubmit={button(e, like)} style={{color:FFF}, {backgroundColor:000}}> Like</button>
                <button onSubmit={button(e, favorite)} style={{color:FFF}, {backgroundColor:000}}> Favorite</button>
            </div>
        )
    }
}