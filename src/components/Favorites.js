import React, { Component } from 'react'
import Dog from './Dog'

export default class Favorites extends Component {
    componentDidMount(){
        fetch('http://localhost:5000/favorites')
        .then(response => response.json)
        .then(data => console.log(data))
    };

    render() {
        return (
            <div>

                <h3> Your Favorites </h3>

            </div>
        )
    }
};
