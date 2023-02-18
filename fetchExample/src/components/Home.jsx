import React, { useState, useEffect } from 'react'

const Home = () => {

 const [movies, setMovies] = useState([])

 const movie = movies.map((each, index) => {

  let url = `https://image.tmdb.org/t/p/w500/${each.poster_path}`

  return (
   <div className="card item" key={index}>
    <img src={url} className="card-img-top" alt={'Error'} />
    <div className="card-body">
     <p className="card-text text-center">{each.original_title}</p>
    </div>
   </div>
  )
 })


 useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`).then(response => response.json()).then((data) => {
   console.log(data)
   setMovies(data.results)
  })
 }, [])

 return (
  <>
   <div className="home display-5 my- text-center">Popular Movies </div>
   <div className='layout mx-4 mb-5'>{movie}</div>
  </>
 )
}

export default Home