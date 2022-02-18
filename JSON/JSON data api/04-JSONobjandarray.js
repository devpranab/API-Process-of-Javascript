//JSON object and array
//come into as object data from data.json (api system) 

//By ajax code(api system)
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = this.responseText;
        //console.log(data);
        jsondata(data) //f() call
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

//convert json data to object
/*
function jsondata(json_obj){
//console.log(json_obj);
let js_obj = JSON.parse(json_obj);
console.log(js_obj);
}
*/

//access by loop in f()
function jsondata(json_obj){
    let js_obj = JSON.parse(json_obj);
    for(let x in js_obj.person){
    // console.log(js_obj.person[x]);
     for(let y in js_obj.person[x]){
        console.log(js_obj.person[x][y]);
    }
 }
}