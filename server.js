
const https = require("https");
const stringDecoder = require("string_decoder").StringDecoder;
const request = require('./post');



https.get("https://interview.adpeai.com/api/v1/get-task", function(resp){

	//get the payload, if any. Stream in a payload
	var decoder = new stringDecoder("utf-8");
	var buffer = "";
	var data = resp.on("data", function(data){
			buffer += decoder.write(data);
	});

	resp.on("end",function(){
		buffer += decoder.end();
		var parsed = JSON.parse(buffer);

		request.postADP(parsed.left, parsed.right, parsed.id, parsed.operation, function(error){
			if(error){
				console.log(error)
			}
		});
	});

});


