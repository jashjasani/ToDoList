console.log(module);
exports.getDate = function (){

var event = new Date();

const options ={weekday : "long",year : "numeric",month : "long",day:"numeric"};

return event.toLocaleDateString("en-us",options);
 
}