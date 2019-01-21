const expect = require('chai').expect;
//var assert = require('assert');
const api = require('../api');
const request = require('../post');
const calc = require('../calculate');

   describe('calc()', function(){
	    it('should add, subtract, divide, multiply, or find remainder', function(done){

			api.get("https://interview.adpeai.com/api/v1/get-task").then(function(res){

               var test = calc(res.left, res.right, res.operation);
               //assert.equal(sum1, sum2);

               request.postADP(res.left, res.right, res.id, res.operation, function(result, status){
					expect(result).to.be.equal(test);
					console.log("submit-task: "+status);

					done();
				});

				
			});
		
		});
	});

