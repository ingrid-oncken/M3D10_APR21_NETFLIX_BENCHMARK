// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJfaWQiOiI2MGIwY2QyN2RjMTQ1ODAwMTVlNGFkZGUiLCJpYXQiOjE2MjIxOTk1OTIsImV4cCI6MTYyMzQwOTE5Mn0
//   .nkb8XMEmTHg4JjXVp_oZCbm_0ghI5vUSWhPuBBV9Uow
// You can use it in your request setting the headers in this way:

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgyYmM1YTEwOWJiYzAwMTVlNDA1ZGQiLCJpYXQiOjE2MjIxOTg3NjksImV4cCI6MTYyMzQwODM2OX0.-B6XEVZix1plno-d0yb768ia1QaC0mZd6tRgoCiF_3E"
// }
// }
// const url = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/"
// const headers = new Headers({
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwY2QyN2RjMTQ1ODAwMTVlNGFkZGUiLCJpYXQiOjE2MjIxOTk1OTIsImV4cCI6MTYyMzQwOTE5Mn0.nkb8XMEmTHg4JjXVp_oZCbm_0ghI5vUSWhPuBBV9Uow",
//     "Content-Type": "application/json",
//   },
// })

// fetch(url, {})

window.onload = async function () {
  const url = "https://striveschool-api.herokuapp.com/api/movies/"
  // console.log(row4movies)
  const row4movies = document.getElementsByClassName("movie-row > row") //don't forget this wull return array!!!

  //The ideia here would be: cicle in the rows deleting the movie cards
  row4movies.forEach((element) => {
    row4movies.innerHTML = ""
  })

  try {
    const response = await fetch(url)
    const events = await response.json()
    // console.log(events)

    // if (events.lenght > 0) {
    events.forEach((element) => {
      //the idea here would be: populate the empty spaces with movie cards
      const movieCard = `
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}g" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${dinamicImage}g" />
                          </div> 
                          `
      row4movies.forEach((element) => {
        row4movies.apendChild(movieCard)
      })
    })
    // }
  } catch (error) {
    console.log(error)
  }
}
