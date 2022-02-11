const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

const getIndividualMovie = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

export { getAllMovies, getIndividualMovie }