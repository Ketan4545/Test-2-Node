var request = require('request');

var program = {
    script : `print('i')`,
    language: "python3",
    stdin : "",
    versionIndex: "3",
    clientId: "6a4fec7ef491a5a7c555ac94b8fef60e",
    clientSecret:"e2a58c11444c9c0be0d10e4a6e503335c0f465bb39469cdb5d2993f7d7fb696b"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});

module.exports=request;