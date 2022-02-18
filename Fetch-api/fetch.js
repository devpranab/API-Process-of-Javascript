//fetch api is smarter way then ajax
//fetch api use promise not callback

//console.log(window); //if i spand, get fetch
/*
document.getElementById("get_data").addEventListener("click", getData);

function getData(){
   fetch('')
   .then(function(res){
    //console.log(res.text());
    return res.json();
   })
   .then(function(data){
       console.log(data);
   })
   .catch(function(err){
       console.log(err);
   })
}
*/

/*
//or
//fetch shortcut way to use arrow function
document.getElementById("get_data").addEventListener("click", getData);

function getData(){
    //console.log("ok");
      fetch("http://api.icndb.com/jokes/random/3")
     .then(res => res.json())
     .then(data => { console.log(data);})
     .then(err => { console.log(err);})
}
*/

document.getElementById("get_data").addEventListener("click", getData);
function getData(){
//fetch api -output in li
      fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(json => { displayUsers(json);})
     .then(err => { console.log(err);})

function displayUsers(users){
    const userNames = users.map(user => user.name);
    const ul = document.getElementById("output");

    for(let i = 0; i< userNames.length; i++){
        const username = userNames[i];

        const li = document.createElement("li");
        li.innerText = username;
        ul.appendChild(li);
  }
}
}