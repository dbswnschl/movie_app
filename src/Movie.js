import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
function Movie({ title, poster,genres,synopsis }) {
    return (
        <div className="Movie">

            <div className="Movie_columns">

                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                {genres.map((genre,index) =><MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                <LinesEllipsis 
                text={synopsis} 
                maxLine='3'
                ellipsis=" ..."
                trimRight
                basedOn="letters"
                /></p>
            </div>
        </div>
    )
}
function MoviePoster({ poster,alt }) {
    return (
        <img src={poster} alt={alt} className="Movie_Poster" />

    )
}
function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}
MovieGenre.propTypes={

}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

export default Movie;