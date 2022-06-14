module.exports.profile = function(req,res){
    return res.render('user-profile',{
        title: 'user-profile'
    })
}
// module.exports.profile = function(req,res){
//     res.end('<h1>User Profile</h1>');
// }

// Render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}
// Render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

// get the sign up data

module.exports.create = function(req,res){
    // TODO later
}
// sign in and create a session for the user
module.exports.createSession = function(req,res){
    //TODO LAter

}