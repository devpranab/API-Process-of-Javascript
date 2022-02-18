//Get json data using ajax from external site
document.getElementById("get_data").addEventListener("click", jokesDataLoad);


function jokesDataLoad(){
    let numberInp = document.getElementById("jokehowmany").value;
console.log(numberInp);

    console.log("clicked check");
let xhr = new XMLHttpRequest();
xhr.open("GET", `http://api.icndb.com/jokes/random/${numberInp}`, true)

// onprogress - for loading start
xhr.onprogress = function(){
    document.getElementById("output").innerHTML = "<h4>Loading...</h4>";
}
// onprogress - for loading end

xhr.onload = function(){
    if(this.status === 200){
    let data = JSON.parse(this.responseText);
    //console.log(data);
    let getJoke = data.value;
     // getJoke = data.value.joke;
    // console.log(getJoke);

    // data process start
    let output = "<ol>";
    getJoke.forEach(function(items){
        console.log(items);
       output += `<li>${items.joke}</li>`;
        
    });
    // data process end
    output += "</ol>";
    document.getElementById("output").innerHTML = output;;
    }
}
xhr.send();
 }
