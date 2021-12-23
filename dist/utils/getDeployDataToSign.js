"use strict";
exports.__esModule = true;
var jspb = require("google-protobuf");
exports.getDeployDataToSign = function (payment) {
    // Create binary stream writer
    var writer = new jspb.BinaryWriter();
    // Write fields (protobuf doesn't serialize default values)
    var writeString = function (order, val) { return val != "" && writer.writeString(order, val); };
    var writeInt64 = function (order, val) { return val != 0 && writer.writeInt64(order, val); };
    // Serialize fields
    writeString(2, payment.term);
    writeInt64(3, payment.timestamp);
    writeInt64(7, payment.phloPrice);
    writeInt64(8, payment.phloLimit);
    writeInt64(10, payment.validAfterBlockNumber);
    return Buffer.from(writer.getResultBuffer());
};
