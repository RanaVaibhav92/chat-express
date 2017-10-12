var express = require('express');
var User = require('./model/user');
var routes = express.Router();


routes.get('/signup',function(request,response,next){

    response.render('home');
})


routes.get('/userlist',function(request,response,next){
    User.find().exec(function(err,user){
        if(err){
            console.log("error in getting user list"+err);
            throw err;

        }
        else{
            console.log("user list  : "+user);
            response.render('userlist',{userListData : user});
        }
    })
    
})

routes.delete('/deleteUser',function(request,response,next){
    console.log("request    :"+JSON.stringify(request.body));
    var deleteUserId = request.body.emailId;
    User.remove({emailId:deleteUserId},function(error,user){
        if(error){console.log("error in delting  :  "+error)}
        else{console.log("succesfully deleted;"+JSON.stringify(user));
      //  response.redirect('http://localhost:3000/userlist');
    }
}); 

})


routes.post('/signup',function(request,response,next){

    console.log("body data   :   %j",request.body);
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var gender = request.body.gender;
    var emailId = request.body.emailId;
    var displayName = request.body.displayName;

    var newUser = new User({
        firstName : firstName,
        lastName : lastName,
        gender : gender,
        emailId : emailId,
        displayName : displayName
    })
    newUser.save(function(error,user){
        if(error){
            console.log(error);
            throw error;
        }
        else{
            console.log("user details submitted"+user);
            next();
        }
    });
    response.redirect('http://localhost:3000/signup');

})

 module.exports = routes;


