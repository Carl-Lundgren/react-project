import React, { Component } from 'react'
import Dog from './Dog'

export default class Likes extends Component {
    state = {
        pictures: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/likes')
        .then(response => response.json())
        .then(data => this.setState({
            pictures: data
        }))
    }

    render() {
        return (
            <div>
                <h3> Your Likes </h3>
                {this.state.pictures.map((item) => <Dog pic={item.pic} id={item.id}/>)}
            </div>
        )
    }
};
