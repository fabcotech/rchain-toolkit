"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeployData = (timestamp, term, phloPrice = 1, phloLimit = 10000000, validAfterBlockNumber = 0) => {
    return {
        timestamp: timestamp,
        term: term,
        phloLimit: phloLimit,
        phloPrice: phloPrice,
        validAfterBlockNumber: validAfterBlockNumber,
    };
};
