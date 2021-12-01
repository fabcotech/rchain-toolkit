"use strict";
exports.__esModule = true;
exports.getDeployData = function (timestamp, term, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = 0; }
    return {
        timestamp: timestamp,
        term: term,
        phloLimit: phloLimit,
        phloPrice: phloPrice,
        validAfterBlockNumber: validAfterBlockNumber
    };
};
