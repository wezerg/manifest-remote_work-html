fetch('./includes/aside.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.querySelector('nav').innerHTML = data;
    });