//json

let student ={
    name: "siva",
    age: 40,
    marks: [98,96,86]
};

let jsonString =JSON.stringly(student);
console.log("JSON string: ",jsonString);

let parsed =JSON.parse(jsonString);
console.log("parsed object: ",parsed);

