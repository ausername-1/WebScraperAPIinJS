const fetch = require('node-fetch')

fetch('https://webscraperapi.datashake.com/?api_key=yourkey&url=http://httpbin.org/ip')
    .then(res => res.json())
    .then(json => console.log(json));
