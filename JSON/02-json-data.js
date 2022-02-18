//https://jsonlint.com - helps to verify json data
//string
//numbers             //but does`nt support undefined,functionand date have to write as a array/string
//object (JSON object)
//array
//boolean
//null

var person = {
    name: "pranab", //string
    age: 21, //number
    married: false, //boolean
    dob: 1995-05-12, //date
    test_null: null, //null
    test_undefined: undefined, //undefined
    greet: function(){ //function
        console.log(`hi ${this.name}`);
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);