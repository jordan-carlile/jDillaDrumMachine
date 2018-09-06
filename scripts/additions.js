// provides functionality for selector
// let testResponse; //debug

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="album"]').onchange=changeEventHandler;
    document.getElementById('refresh-login').onclick=refreshLogin
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) {
        alert('Please select an album :)');
    } else {
        // change "src" of iframe
        document.getElementById('music-embed').src = event.target.value;
    } 
}

function refreshLogin() {
    fetch('https://us-central1-jdillaspotifyintegration.cloudfunctions.net/helloGoogleNode')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.table(myJson);
    });
}