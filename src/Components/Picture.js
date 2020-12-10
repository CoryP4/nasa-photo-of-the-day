import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navi from './Navi'



// 'https://api.nasa.gov/planetary/apod?api_key=TFS5d5OKSn23dtUNocoJnDaM1RrUCVBWqUo7kaOt'

export default function Picture() {
    const [pictureData, setPictureData] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=TFS5d5OKSn23dtUNocoJnDaM1RrUCVBWqUo7kaOt')
        .then(res => {
            setPictureData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    if (!pictureData) return <div>oops!</div>;

    return(
        <>
        <Navi/>
        <div className="nasa-picture">
            {pictureData.media_type === "image" ? 
            <img src={pictureData.url} alt={pictureData.title} className="picture" /> :
            <iframe
            title="NASA video"
            src={pictureData.url}
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="picture"
            />
            }
            <div>
                <h1>{pictureData.title}</h1>
                <p className="date">{pictureData.date}</p>
                <p className="explanation">{pictureData.explanation}</p>
            </div>
        </div>
        </>
    )
}