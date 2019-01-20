const expect = require('chai').expect;
//var assert = require('assert');
const api = require('../api');
const request = require('../post');
const calc = require('../calculate');

   describe('calc()', function(){
	    it('should find the remainder of two numbers', function(done){

			api.get("https://interview.adpeai.com/api/v1/get-task").then(function(res){

               //arrange 
               var l = 5,
               	   r = 2;

               var remainder1 = l % r,
               	   remainder2 = calc(l, r, 'remainder');

                expect(remainder1).to.be.equal(remainder2);
               //assert.equal(sum1, sum2);

               request.postADP(res.left, res.right, res.id, res.operation, function(error){
						if(error){
							console.log(error)
						}
					
				});

				done();
			});
		
		});
	});

