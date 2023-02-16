import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const App = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/find',
    params: { q: query },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };


  const fetchData = async () => {
    await axios.request(options).then(function (response) {
      console.log(response.data)
      setMovies(response.data.results)
      setLoading(false)
    }).catch(function (error) {
      console.error(error);
    });
  }


  const movie = movies.map((each, index) => {

    let url = ''
    try {
      url = each.image.url
    }
    catch (err) {
      url = "error"
    }

    if (loading) {
      return (
        <>
          Loading
        </>
      )
    }
    return (
      <div className="card item" key={index}>
        <img src={url} className="card-img-top" alt={url} />
        <div className="card-body">
          <h5 className="card-title text-center">{each.titleType}</h5>
          <p className="card-text text-center">{each.title}</p>
        </div>
      </div>
    )
  })

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    fetchData()
    setQuery('')
  }

  return (
    <>
      <form className='m-4 text-center' >
        <input type="text" name="query" id="query" value={query} className='py-2 m-5 rounded-4' onChange={handleChange} placeholder='Search' />
        <button className='btn btn-primary' onClick={handleClick}>Go</button>
      </form>
      <div className="layout">
        {movie}
      </div>
    </>
  )
}

export default App
