import React, { Component } from 'react'
import Dog from './Dog'

export default class Likes extends Component {
    componentDidMount(){
        fetch('http://localhost:5000/likes')
        .then(response => response.json)
        .then(data => console.log(data))
    };

    render() {
        return (
            <div>

                <h3> Your Likes </h3>

            </div>
        )
    }
};
