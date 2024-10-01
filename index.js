const https = require('https');

const url = 'https://babel-in.xyz/tata/channels';

const data = JSON.stringify({
    'X-API-Key': 'babel-23003cca3ba04020bade44a193'
});

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Babel/5.0'
    }
};

const req = https.request(url, options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log(responseData);
    });
});

req.on('error', (e) => {
    console.error(`Error sending request: ${e.message}`);
});

req.write(data);
req.end();
