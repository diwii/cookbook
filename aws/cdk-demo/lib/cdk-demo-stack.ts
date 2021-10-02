import * as cdk from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here
        const vpc = new Vpc(this, 'MainVpc', {
            // this is where we define how many AZs(Availability Zones) to use
            maxAzs: 2,

            // We define a single subnet configuration per AZ.
            subnetConfiguration: [
                {
                    // this is it's CIDR mask so 255.255.255.0
                    cidrMask: 24,

                    // a name for each of these subnets
                    name: 'public-subnet',

                    // and the subnet type to be used - here we will have
                    // a public subnet. There are other options available here.
                    subnetType: SubnetType.PUBLIC
                },
            ]
        });
    }
}
