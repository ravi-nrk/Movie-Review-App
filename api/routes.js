var https = require('https');
var validator = require('validator');


module.exports = function(app){

app.get('/',function(req,res){
	res.send("Please Use /api/books or /api/genres ---- ");
});

// app.post('/api/addContact',function(req,res){
// 	if(req.body){
// 		var obj = {};
// 		if(req.body.firstName){
// 			var x = validator.isUppercase(req.body.firstName);
// 			if(x == true){
// 				obj.firstName = req.body.firstName.toLowerCase();
// 			}else{
// 				obj.firstName = req.body.firstName;
// 			}
// 		} 
// 		if(req.body.dob){
// 			var y = validator.toDate(req.body.dob);
// 			obj.dob = y;
// 		} 
// 		if(req.body.lastName){
// 			obj.lastName = validator.escape(req.body.lastName);
// 		}
// 		obj.contact = req.body.contact;
// 		obj.email = req.body.email;
// 		res.send(obj);
// 	}else{
// 		res.send({Message:"Please send Data"});
// 	}
	
// });


}