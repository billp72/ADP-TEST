const https = require("https");
const querystring = require('querystring');
const add = require('./calculate');

var request = {}

request.postADP = function(left, right, id, operation, callback){

  var result = add(left, right, operation)

	if(id){

    // Configure the request payload
    var payload = {
      'id' : id,
      'result' : result
    };
    var stringPayload = querystring.stringify(payload);


    // Configure the request details
    var requestDetails = {
      'protocol' : 'https:',
      'hostname' : 'interview.adpeai.com',
      'method' : 'POST',
      'path' : '/api/v1/submit-task',
      'headers' : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(stringPayload)
      }
    };

    // Instantiate the request object
    var req = https.request(requestDetails,function(res){
        // Grab the status of the sent request
        var status =  res.statusCode;
        // Callback successfully if the request went through
        if(status == 200 || status == 201){
          callback(status);
        } else {
          callback('Status code returned was '+status+" and id result: "+result);
        }
    });

    // Bind to the error event so it doesn't get thrown
    req.on('error',function(e){
      callback(e);
    });

    // Add the payload
    req.write(stringPayload);

    // End the request
    req.end();

  } else {
    callback('Given parameters were missing or invalid');
  }
}

module.exports = request;