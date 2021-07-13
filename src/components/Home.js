import React, { Component } from 'react'
import Dog from './Dog'

export default class Home extends Component {
    state = {
        pictures: [],
        scrollLocation: 0
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => this.setState({
            pictures: data.message
        }))
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > this.state.scrollLocation+350){
            this.setState({
                scrollLocation: window.scrollY + 300
            })
            fetch('https://dog.ceo/api/breeds/image/random/2')
            .then(response => response.json())
            .then(data => this.setState({
                pictures: [...this.state.pictures, ...data.message]
            }))
        }
    }

    render() {
        return (
            <div>
                {this.state.pictures.map((item) => <Dog pic={item}/>)}
            </div>
        )
    }
};
