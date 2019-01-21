const expect = require('chai').expect;
//var assert = require('assert');
const api = require('../api');
const request = require('../post');
const calc = require('../calculate');

   describe('calc()', function(){
	    it('should find the remainder of two numbers', function(done){

			api.get("https://interview.adpeai.com/api/v1/get-task").then(function(res){

               var remainder2 = calc(res.left, res.right, res.operation);
               //assert.equal(sum1, sum2);

               request.postADP(res.left, res.right, res.id, res.operation, function(result, status){
					expect(result).to.be.equal(remainder2);
					console.log("status is: "+status);

					done();
				});

				
			});
		
		});
	});

