console.log("azax.js");

fetch("https://jsonplaceholder.typicode.com/posts/1");

.then(response => response.json())
.then(data => console.log("fetched data: ",data))
.catch(error => console.log("error:",error));