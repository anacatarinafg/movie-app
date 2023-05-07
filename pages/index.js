import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Movies from "../components/Movies"
import Footer from '../components/Footer'


export default function Home() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getMoviesRequest = async () => {
    try {
      const url = `http://www.omdbapi.com/?s=home alone&apikey=a8669583`
      const response = await fetch(url);
      const resJson = await response.json();
      setMovies(resJson.Search);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviesRequest()
  }, [])

  const getResults = async (search) => {
    try {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=a8669583`
      const response = await fetch(url);
      const resJson = await response.json();
      setResults(resJson.Search);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getResults(search)
  }, [search])

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Movies movies={movies} results={results} />
      <Footer />
    </div>
  )
}