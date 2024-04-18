const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const pd = {

        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
            }
        ]
    }

    const param = {
        PolicyDocument : JSON.stringify(pd),
        PolicyName : 'fullpolicyfornewuser',
        Description : 'This is the new full access policy'
    }

    iam.createPolicy(param,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })