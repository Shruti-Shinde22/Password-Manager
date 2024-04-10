const crypto = require("crypto");

var secret_key = crypto.randomBytes(32);
console.log(secret_key)
const encrypt = (userPass) =>
{
    var ivstring = crypto.randomBytes(32)
    // DECLARING AND IV (basically an identifier for decryption)
    const iv = new Buffer.from(crypto.randomBytes(16));

    // CREATING A CIPHER (actual encryption)
    const cipher = crypto.createCipheriv("aes-256-cbc", secret_key,  iv)

    ;
    const bufferEncryptedPassword = cipher.update(userPass, 'utf8', 'hex') + cipher.final('hex');

    return {
        iv: ivstring,
        encryptedPassword: bufferEncryptedPassword
    }     
}

const decrypt = (encrypted, ivstring) =>
{
    const decipher = crypto.createDecipheriv("aes-256-cbc", secret_key, ivstring);

  
    const decryptedPassword =  decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");

    return decryptedPassword;
}

module.exports = { encrypt, decrypt };