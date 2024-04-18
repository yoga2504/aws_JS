const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    PolicyArn:"arn:aws:iam::211125777234:policy/fullpolicyfornewuser",
    UserName:"yoga"
}

iam.attachUserPolicy(params, (err,data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})