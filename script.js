const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88caa129da14fee33827b881ed88a410&page1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API  = 'http://api.themoviedb.org/3/search/movie?api_key=88caa129da14fee33827b881ed88a410&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial getMovies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value 

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})