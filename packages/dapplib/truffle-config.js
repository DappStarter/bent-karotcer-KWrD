require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food render rice saddle midnight grace muscle army genuine'; 
let testAccounts = [
"0x7dcce07a60959f55913a93d5307c9c8aec1820d892230c78d314f3736277a027",
"0x3b301f6e055fdebb093b2dd0965922900413171ab30b1f6082f056cfa08d68cb",
"0x969c8e22ce9c3e8bc426e2766055520a05da47989e21798080d193577c2199ed",
"0x7d33fab959ca6bc7ac06d4c754dee3434a77c4e4f77062c95826671d777b82ac",
"0xc9ac5cedeef993e3b088964e30fedee93d4551f62b493a6c497dad6c06cf61b4",
"0x1d8c0e002f281cbd2e903d5c223643c92266f7147292d6cc65edb9ca77efa996",
"0xa3cdfa638d30b7aabae9d5448a57a37c28f79876fac980de692010f418ca2274",
"0xa0b0cb312f072d9348705bc9cb78a29e399dcdee015ed7c1bd6bb53dfd02ae4d",
"0x5a7ea6b7b275c0083af5409a2d5c3c7650c7f433c3df8b2995d025c4823053f5",
"0x88df46ba24d194a8e65f6095ec0e01e820fd2d413d0d9e96bc6f87907fa32450"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

