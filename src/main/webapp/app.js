function evhandler(){
var promise = fetch('https://jokes-plaul.rhcloud.com/api/joke');
     promise.then(function (response) {
       return response.json();
     }).then(function (quote) {
         document.getElementById("h4").onclick = evhandler;                                                  
     });
 }
 document.getElementById("h4").onclick = evhandler;
 
//        document.getElementById("joke").innerText = quote.joke;
//        document.getElementById("id").innerText = quote.id;
//        document.getElementById("ref").innerText = quote.reference;

