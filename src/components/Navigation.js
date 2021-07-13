import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        const header = {
            display: "flex",
            background: "#ADD8E6",
            height: "7rem",
            padding: "1rem",
          }
        return (
            <div style={header}>
                <Link to="/" style={{padding: "14px", fontSize: "xxx-large", color:"#fff"}}>
                    Dogstagram
                </Link>
                <Link to="/likes" style={{padding: "28px", fontSize: "xx-large", color:"#fff"}}>
                    Likes
                </Link>
                <Link to="/favorites" style={{padding: "28px", fontSize: "xx-large", color:"#fff"}}>
                    Favorites
                </Link>

            </div>
        )
    }
}