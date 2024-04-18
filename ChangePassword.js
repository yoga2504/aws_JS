const AWS = require('aws-sdk');
const iam = new AWS.IAM()

const params = {
     UserName:'NewUser1',
    Password:'yoga@123',
    PasswordResetRequired:false
    
    
}

iam.updateLoginProfile(params,function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }

})