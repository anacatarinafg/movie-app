import React from 'react'
import Image from 'next/image'

function Movies(props) {
  return (
    <main>
      <section className='movie'>
        {props.results && props.results.map((movie, index) =>
          movie.Poster !== "N/A" && (
            <div className='movie__box' key={movie.imdbID}>
              <Image
                src={movie.Poster}
                width={300}
                height={400}
                alt={movie.Title}
                className='movie__image'
              />
              <div className='movie__info'>
                <span className='movie__name'>{movie.Title}</span>
                <span className='movie__year'>{movie.Year}</span>
              </div>
            </div>
          )
        )}

        {/* If no results, display the movies */}
        {!props.results && props.movies.map((movie, index) =>
          movie.Poster !== "N/A" && (
            <div className='movie__box' key={movie.imdbID}>
              <Image
                src={movie.Poster}
                width={300}
                height={400}
                alt={movie.Title}
                className='movie__image'
              />
              <div className='movie__info'>
                <span className='movie__name'>{movie.Title}</span>
                <span className='movie__year'>{movie.Year}</span>
              </div>
            </div>
          )
        )}
      </section>
    </main>
  )
}

export default Movies;