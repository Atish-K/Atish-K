const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'user-profile'
    })
}
// module.exports.profile = function(req,res){
//     res.end('<h1>User Profile</h1>');
// }

// Render the sign up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}
// Render the sign in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

// get the sign up data

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err,user){
        if(err){console.log('error in finding user in signing uo'); return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating user whilesigning up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });

}
// sign in and create a session for the user
module.exports.createSession = function(req,res){
    return res.redirect('/');

}

module.exports.destroySession = function(req, res){
    // req.logout();
    
    // return res.redirect('/');
    req.session.destroy((err) => {
        res.redirect('/') // will always fire after session is destroyed
      })
}