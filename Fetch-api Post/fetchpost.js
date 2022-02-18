//Fetch api post methods
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

document.getElementById("submit").addEventListener("click", function(){
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    console.log(title, body);
    let postData = {title:title, body:body};
    nowPostToServer(postData);
})


function nowPostToServer(postDataInfo){
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postDataInfo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));


//  }
}