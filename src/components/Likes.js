import React, { Component } from 'react'
import Dog from './Dog'

export default class Likes extends Component {
    state = {
        pictures: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/pictures?like=true')
        .then(response => response.json())
        .then(data => this.setState({
            pictures: data
        }))
    }

    removePic = (id) => {
        console.log(id);
        this.setState({
            pictures:this.state.pictures.filter(dog => dog !== id)
        })
    }

    render() {
        return (
            <div>
                <h3> Your Likes </h3>
                {this.state.pictures.map((item) => <Dog pic={item.pic} id={item.id} favorite={item.favorite} like={item.like} onRemove={this.removePic}/>)}
            </div>
        )
    }
};
