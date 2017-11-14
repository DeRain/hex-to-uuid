"use strict";

const uuidParse = require('uuid-parse');
const isHex = require('validator/lib/isHexadecimal');

module.exports = (hexString) => {
    const parsedHexString = hexString.replace(new RegExp('^0x'), '');

    if (!isHex(parsedHexString)) {
        throw new Error('hexString is not valid hexadecimal number', 0);
    }

    //Allocate 16 bytes for the uuid bytes representation
    let hexBuffer = Buffer.from(parsedHexString, 'hex');

    //Parse uuid string representation and send bytes into buffer
    const uuidResultBuffer = uuidParse.unparse(hexBuffer);

    //Create uuid utf8 string representation
    return uuidResultBuffer.toString('utf8');
};