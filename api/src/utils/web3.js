// web3, fortmatic .. gRpc
require('dotenv').config({});
const env = process.env;
const Web3 = require('web3');
const Fortmatic = require('fortmatic');

const connectFortmaticWallet = () => {
    const fm = new Fortmatic(env.FORTMATIC_API_TEST_KEY);
    window.web3 = new Web3(fm.getProvider());
    var address;
    fm.configure({ primaryLoginOption: 'phone'}).then(() => {
        fm.user.login().then(() => {
            address = web3.eth.getAccounts();
        });
    });
    console.log(address);
};
connectFortmaticWallet();
/*
module.exports = {
    connectFortmaticWallet,
}; 

*/