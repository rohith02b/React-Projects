import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Search = (props) => {

 const { keyword } = props
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

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REATCT_APP_API_KEY}&query=${keyword}&page=1&include_adult=false`).then(response => response.json()).then((data) => {
   console.log(data)
   setMovies(data.results)
  })
 }, [keyword])

 return (
  <>
   <div className="home text-center h4">
    You are searching for '{keyword}'
   </div>
   <div className='home layout mx-4 mb-5'>
    {movie}
   </div>
   <div className='text-light text-center mb-5'>
    <button className='btn btn-lg btn-primary'><Link to={'/'} className='link text-light'>Home Page</Link>
    </button>
   </div>

  </>
 )
}

export default Search