

function newQuote(){

    
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    
      return response.json();
    })
    .then(function(data) {
       
      let random = Math.floor(Math.random()*data.length)
      document.getElementById('quote').innerText = data[random].text
      document.getElementById('author').innerText = 'Author: ' + data[random].author

    });


}

