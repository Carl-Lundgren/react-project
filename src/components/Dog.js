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
        const style = {
            textAlign: "center",
            padding: "1rem",
            border: 'grey solid 1px',
            display: "inline-grid",
            margin: "1rem 2rem",
          }
        return (
            <div style={style}>
                <img src={this.props.pic} alt="Cute Dog" width="500" />
                <button onClick={() => this.button('like')} style={{backgroundColor:'#B6D0E2', border: 'white solid 5px', padding: "2px"}}> Like</button>
                <button onClick={() => this.button('favorite')} style={{backgroundColor:'#B6D0E2', border: 'white solid 5px', padding: "2px"}}> Favorite</button>
            </div>
        )
    }
}