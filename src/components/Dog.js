import React, { Component } from 'react'

export default class Dog extends Component {
    state = {

    }


    button = (type) =>{
        fetch(`http://localhost:5000/${type}` ,{method: 'POST',
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                pic: this.props.pic
            })
        })
    }

    render() {
        return (
            <div>
                <img src={this.props.pic} alt="Cute Dog" width="500" />
                <button onClick={() => this.button('likes')} style={{color:'FFF', backgroundColor:'000'}}> Like</button>
                <button onClick={() => this.button('favorites')} style={{color:'FFF', backgroundColor:'000'}}> Favorite</button>
            </div>
        )
    }
}