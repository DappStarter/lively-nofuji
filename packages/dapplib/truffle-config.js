require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rescue rural solid heavy end army ghost'; 
let testAccounts = [
"0xd1e826fc2495e6c5417b1de542b3b2aa0923186e25dceb552ac2bb4cf79eebe5",
"0x69820498a6ad0da8ba326c5e92c5feef40db53d6bcf25583de92be2d00f20303",
"0xe2802a5e43580af8e040ad0af98b6113a05a2fe55fa33ca3ee887a9146f066c5",
"0x738067439a647cac6c9e8d022393255040c57d71f8652dbee8094ab8112e3b7a",
"0x601b72f2f729e7b8f3c35ccb5bbf449dd30188b32e0c8b31dd49f586250c593b",
"0x99080b489269f3c46ae4521c6b5722ce82c765627e6225d8cf235f42cbf36826",
"0x87023310f088b123fb3ffdbf7fc89088100b6e5e7b27da3c63e77f1a7446858f",
"0xf07782b8e16d4bae1fc61b1f933b26a8ef990330121e8e8f90b40914d6654ce6",
"0xda54c138503be85859887d576aa7ed99391fbb64df03f6f92c4891135a0aafb2",
"0x55960e311695b43b279dda907057ef748109132caa64d3fb129b18a62c51f6db"
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
