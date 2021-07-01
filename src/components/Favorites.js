import React, { Component } from 'react'
import Dog from './Dog'

export default class Favorites extends Component {
    state = {
        pictures: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/pictures?favorite=true')
        .then(response => response.json())
        .then(data => this.setState({
            pictures: data
        }))
    }

    render() {
        return (
            <div>
                <h3> Your Favorites </h3>
                {this.state.pictures.map((item) => <Dog pic={item.pic} id={item.id} favorite={item.favorite} like={item.like}/>)}
            </div>
        )
    }
};
