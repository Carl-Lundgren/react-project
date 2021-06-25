import React, { Component } from 'react'

export default class Dog extends Component {
    state = {
        liked: false,
        favorited: false
    }

    render() {
        return (
            <div>
                <img src={pic} alt="Cute Dog" width="250" />

            </div>
        )
    }
}