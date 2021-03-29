const fetch = require('node-fetch')

fetch('https://webscraperapi.datashake.com/?api_key=a3bf6b4bc4c6eaf1bd510b5f4600940b94b9da00&url=http://httpbin.org/ip')
    .then(res => res.json())
    .then(json => console.log(json));