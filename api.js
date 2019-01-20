
const https = require("https");
const stringDecoder = require("string_decoder").StringDecoder;

var api = {
	get: function(url){
		return(new Promise(function(resolve, reject){
			https.get(url, function(resp){

	   			//get the payload, if any. Stream in a payload
	   			var decoder = new stringDecoder("utf-8");
	   			var buffer = "";
	   			var data = resp.on("data", function(data){
				buffer += decoder.write(data);
	   		});

			resp.on("end", function(){

				buffer += decoder.end();
				var pdata = JSON.parse(buffer);
				resolve(pdata);
   	    	});
          });
	  }))
   }
}
  			




module.exports = api;