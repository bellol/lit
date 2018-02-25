'using strict';

const AuroraApi = require('nanoleaf-aurora-client');
const { Client } = require('node-ssdp');

const client = new Client();

const interval = setInterval(() => client.search('nanoleaf_aurora:light'), 500);
client.on('response', (headers, code, rinfo) => {
  clearInterval(interval);

  const api = new AuroraApi({
    host: rinfo.address,
    base: '/api/v1/',
    port: '16021',
    accessToken: '3j4Waqef7RFpuYthMlBRcEgT5iIMhM4k',
  });

  api.setEffect('Snowfall')
    .then(() => console.log('Changed color'))
    .catch(() => console.log('Oop!'));
});
