# Amazon Web Services

# First steps
[Get to Know the AWS Cloud](https://aws.amazon.com/getting-started/#Get_to_Know_the_AWS_Cloud)

## Create account - the very root account.

## IAM (Identity access management)

* [Secure the root account](https://aws.amazon.com/getting-started/guides/setup-environment/module-two/)
  * Activate Multi Factor Authentication (MFA)
  * Create separate users for specific roles and functions
    * Create group -> [Admin group name] -> Attach permission policies -> "AdministratorAccess"
    * Create user -> [user name]/[password] -> Add user to group -> [Admin group name]
* Create Alias for account number
* Log out of root account
* Log in with new [user name]

## AWS CLI

[Setting Up the AWS CLI](https://aws.amazon.com/getting-started/guides/setup-environment/module-three/)

* [Installation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  * Check aws cli version: `aws --version`
* Configuring AWS CLI
  * `aws configure`
  * Enter:
    * [AWS Access Key ID]
    * [AWS Secret Access Key]
    * [Default region name] *<- example: us-west-1*, [List of regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)
    * [Default output format] *<- example: json*
  * Test if configuration successful: `aws ec2 describe-vpcs`
  * If you are accessing more than one AWS account, you can set up profiles

## AWS SAM CLI (AWS Serverless Application Model Command Line Interface)

[Installing the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

**Requirements**

* docker



## Setting Up Your Cloud9 IDE Environment
[Setting Up Your Cloud9 IDE Environment](https://aws.amazon.com/getting-started/guides/setup-environment/module-four/)

* `aws cloud9 create-environment-ec2 --name getting-started --description "Getting started with AWS Cloud9." --instance-type t3.micro --automatic-stop-time-minutes 60` this command will return "environmentId"
* Open IDE: https://[Default region name].console.aws.amazon.com/cloud9/ide/[environmentId]
* Delete resources created:
  * `aws cloud9 delete-environment --environment-id <environmentID>`

## Get Started with AWS CDK(Cloud Development Kit)

[Get Started with AWS CDK](https://aws.amazon.com/getting-started/guides/setup-cdk/)

* Installing the AWS CDK CLI

`npm install -g aws-cdk`

`cdk --version`

* Bootstrapping your AWS Account *(prepare account for deployment)*, <- I think this enables required services for CDK
  * Get account id: `aws sts get-caller-identity`
  * Bootstrap the account: `cdk bootstrap aws://ACCOUNT-NUMBER/REGION`

### Create Your First AWS CDK Project

**Create a new CDK Project**

```
mkdir cdk-demo
cd cdk-demo
cdk init --language typescript
```

**Creating infrastructure**

To start building out a project, a common starting point is to create a logically isolated virtual network that you define, called an [Amazon Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc)

**Code for the VPC**

* install [construct library modules](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html). 

`npm install @aws-cdk/aws-ec2`

* `bin/cdk-project.ts` <- Entry point for CDK app. This will load all the stacks we define under `lib/*`

```typescript
...
const app = new cdk.App();
new CdkDemoStack(app, 'CdkDemoStack', {
  // Add Account nr. and region
  env: { account: '123456789012', region: 'eu-west-1' },

});
...
```

* `lib/cdk-project-stack.ts` <- Main CDK Stack definition (Resources/Properties)

```typescript
...
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';
...
```

