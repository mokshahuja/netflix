import React from 'react'
import './MovieResult.css'

const MovieResult = ({title, ImageUrl}) => {
    return (
        <div className="movie__result">
            <div>
                <img className="movieResult__posters" src={ImageUrl} alt={title}/>
            </div>
            <div className="movie__name">
                {title}
            </div>
        </div>
    )
}

export default MovieResult
