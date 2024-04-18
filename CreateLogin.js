const AWS = require('aws-sdk')

const iam = new AWS.IAM();

const params ={
    Password:'Mypassword123',
    PasswordResetRequired:true,
    UserName:"NewUser"
}

iam.createLoginProfile(params,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})