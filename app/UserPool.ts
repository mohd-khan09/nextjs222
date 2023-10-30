import { CognitoUserPool, ICognitoUserPoolData } from "amazon-cognito-identity-js";

const poolData: ICognitoUserPoolData = {
    UserPoolId: 'us-east-1_Cpx9UluvY',
    ClientId: '1l4gs7kgejugi3t5qp9t8uamum'
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;