import React from 'react'
import {Link} from 'react-router-dom'

export default function Navi() {
    return(
        <div className="nav">
            <ul>
                <Link className="link" to="/">Too much space.. TAKE ME BACK!</Link>
            </ul>
        </div>
    )
}