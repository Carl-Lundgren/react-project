import React, { Component } from 'react'

export default class Dog extends Component {
    state = {
        like: this.props.like || false,
        favorite: this.props.favorite || false
    }


    button = (type) =>{
        if (this.state[type] === false){
            this.setState({[type]: true}, () => 
                fetch(`http://localhost:5000/pictures` ,{method: 'POST',
                    headers: 
                    {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        pic: this.props.pic,
                        like: this.state.like,
                        favorite: this.state.favorite
                    })
                })
            )
        } else {
            this.setState({[type]: false}, () =>
                
                fetch(`http://localhost:5000/pictures/${this.props.id}` ,{method: 'PUT',
                    headers: 
                    {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        pic: this.props.pic,
                        like: this.state.like,
                        favorite: this.state.favorite
                    })
                })
                    .then(response => response.json())
                    .then(data => this.props.onRemove(data.id))
            )
        }
    }

    render() {
        return (
            <div>
                <img src={this.props.pic} alt="Cute Dog" width="500" />
                <button onClick={() => this.button('like')} style={{color:'FFF', backgroundColor:'000'}}> Like</button>
                <button onClick={() => this.button('favorite')} style={{color:'FFF', backgroundColor:'000'}}> Favorite</button>
            </div>
        )
    }
}