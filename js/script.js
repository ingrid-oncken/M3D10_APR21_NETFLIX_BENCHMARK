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

window.onload = async () => {
  const categoryEndPoint = "https://striveschool-api.herokuapp.com/api/movies/"

  const row4movies = document.querySelectorAll("movie-row > row") //don't forget this wull return array!!!

  //deleting the movie cards
  row4movies.forEach((element) => {
    row4movies.innerHTML = ""
  })

  try {
    //Fetch the categories
    const response = await fetch(categoryEndPoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwY2QyN2RjMTQ1ODAwMTVlNGFkZGUiLCJpYXQiOjE2MjUyMzMxNTcsImV4cCI6MTYyNjQ0Mjc1N30.7JSv8NoAH_q4Z2AIIRUoMgDrM1BcWFg7dW4HmA4rTR8",
      },
    })
    if (response.ok) {
      const movieCategories = await response.json()
      console.log(movieCategories)

      //for each category I need to implement a fetch, so Fetch.all
      //then map the categories to make an arrays of categories with movies array inside
      const movies = await Promise.all(
        movieCategories.map((eachCategory) => {
          const response = await fetch("")
          return
        })
      )
    }

    movieCategories.forEach((element) => {
      //populate the empty spaces with movie cards
      const movieCard = `
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div>
                          <div class="col-md-2">
                            <img class="movie-cover" src="${element.sth}" />
                          </div> 
                          `
      // row4movies.forEach((element) => {
      //   row4movies.apendChild(movieCard)
      // })
    })
  } catch (err) {
    console.log(err)
  }
}
