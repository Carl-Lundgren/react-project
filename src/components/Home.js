import React, { Component } from 'react'
import Dog from './Dog'

export default class Home extends Component {
    state = {
        pic: ""
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json)
        .then(data => this.setState({
            pic: data.message
        }))
    }

    render() {
        return (
            <div>
                <Dog pic={this.state.pic}/>
            </div>
        )
    }
};
