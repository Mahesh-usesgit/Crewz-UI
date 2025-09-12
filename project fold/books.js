console.log("this is for attrribute of book ")

 console.log("=== Hour 1: JSON Basics (Books Example) ===");
 let books= 
     {
        title: "python",
        author: "guido rossuom",
        published_in: "1995"
     };
    
     {
        title: "java",
        author: "james",
        published_in: "1994"

     };
     {
        title: "c-lang",
        author: "charles",
        published_in: "1970"
     };

let jsonString = JSON.stringify(books);
console.log("JSON String:", jsonString);

let parsedBooks = JSON.parse(jsonString);
console.log("Parsed Object:", parsedBooks);


 

 