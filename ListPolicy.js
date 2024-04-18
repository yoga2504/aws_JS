const AWS = require('aws-sdk')
const iam = new AWS.IAM()
const params = {
Scope:"All" // Local, AWS 
}
iam.listPolicies(params, function(err, data)
{ 
    if(err) {
    }else {
    }
    console.log(err);
    console.log(data);
    })