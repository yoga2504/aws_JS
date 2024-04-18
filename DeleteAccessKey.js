const AWS = require('aws-sdk')

const iam = new AWS.IAM();

const parameter = {
    AccessKeyId:"AKIATCKATWNJMACIRNJY",
    UserName :'NewUser'
}

iam.deleteAccessKey(parameter , function(err,data){
    if(err){
        console.log(err, err.stack);
    }else{
        console.log(data);
    }
})