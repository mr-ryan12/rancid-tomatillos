const getData = path => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    })
}

export default getData