const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88caa129da14fee33827b881ed88a410&page1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=88caa129da14fee33827b881ed88a410&query="'

// Get initial getMovies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}