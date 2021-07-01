import React, { Component } from 'react'
import Dog from './Dog'

export default class Home extends Component {
    state = {
        pictures: []
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => this.setState({
            pictures: data.message
        }))
    }

    render() {
        return (
            <div>
                {this.state.pictures.map((item) => <Dog pic={item}/>)}
            </div>
        )
    }
};
