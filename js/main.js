
  const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&api-key=hIJFSjrZY41L1TA5AkA9t29B6DsLzGZV'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        for(i=0;i<data.results.length;i++){
          const newTitle = document.createElement("h2");
          const newYear = document.createElement("span");
          
          const newImg = document.createElement("img");
          const newSummary = document.createElement("p");

        newTitle.innerText = data.results[i].display_title
        let year = data.results[i].publication_date
        newYear.innerText = year.substring(0,4)
        
        newImg.src = data.results[i].multimedia.src
        newSummary.innerText = data.results[i].summary_short
      
        const currentDiv = document.getElementById("content");
  document.body.insertBefore(newTitle, currentDiv)
  document.body.insertBefore(newYear, currentDiv)
  
  document.body.insertBefore(newImg, currentDiv)
  document.body.insertBefore(newSummary, currentDiv)
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


