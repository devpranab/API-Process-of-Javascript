//Ajax - asynchronous programming and xml
//get data without loading





document.getElementById("get_data").addEventListener("click", loadData);

function loadData(){
    console.log("clicked check");
    //create XHR object Xml Http request
    let xhr = new XMLHttpRequest();
    //open-take info acess
    xhr.open("GET", "data.txt", true);
    //onload-take info load start - new way

xhr.onprogress = function(){
    console.log(xhr.readyState);
}

    xhr.onload = function(){
        //HTTP Statuses
        //200:
        //403: "Forbidden"
        //404: "Not Found"
        if(this.status === 200){
         // console.log(this.responseText);
          document.getElementById("output").innerHTML = `<h5>${this.responseText}</h4`;
        }
    }
    //onload-take info load end - new way
/*
    //onload-take info load start - old way
    xhr.onreadystatechange = function(){
        //readyState Values
        //0: request not initialize
        //1: server connection established
        //2: request received
        //3: processing request
        //4: request finished & response is ready
      if(this.status === 200 && this.readyState === 4){
          console.log(this.responseText);
      }
    }
    //onload-take info load end - old way
    */

    xhr.send();
    console.log(xhr);
}