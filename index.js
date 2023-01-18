const crypto = require('crypto');

exports.generateAuthCode = function (secret) {    
    var time = Math.floor(Date.now() / 1000);
    
    var buf = Buffer.allocUnsafe(8);
    buf.writeUInt32BE(Math.floor(time / 30), 4);
    
    secret = Buffer.from(secret, 'base64')
    
    var hmac = crypto.createHmac('sha1', secret);
    hmac = hmac.update(buf).digest();
    
    var code = hmac.readUInt32BE(hmac[19] & 0x0f) & 0x7fffffff;
    var chars = '23456789BCDFGHJKMNPQRTVWXY';
    var authCode = "";
    
    for (let i = 0; i < 5; i++) {
        authCode += chars.charAt(code % chars.length);
        code /= chars.length;
    };
    
    return authCode;
};