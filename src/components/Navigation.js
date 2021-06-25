import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    Dogstagram
                </Link>
                <Link to="/likes">
                    Likes
                </Link>
                <Link to="/favorites">
                    Favorites
                </Link>

            </div>
        )
    }
}