"use strict";
exports.__esModule = true;
var rhoUnforgeableToJs = function (expr) {
    var unforgeable = {};
    Object.keys(expr.ExprUnforg.data).forEach(function (u) {
        if (u === "UnforgPrivate") {
            unforgeable.UnforgPrivate = expr.ExprUnforg.data[u].data;
        }
        else if (u === "UnforgDeploy") {
            unforgeable.UnforgDeploy = expr.ExprUnforg.data[u].data;
        }
        else if (u === "UnforgDeployer") {
            unforgeable.UnforgDeployer = expr.ExprUnforg.data[u].data;
        }
    });
    return unforgeable;
};
var rholangMapToJsObject = function (expr) {
    var obj = {};
    Object.keys(expr.ExprMap.data).forEach(function (k) {
        obj[k] = exports.rhoValToJs(expr.ExprMap.data[k]);
    });
    return obj;
};
var rhoExprStringToJs = function (expr) {
    return expr.ExprString.data;
};
var rhoExprUriToJs = function (expr) {
    return expr.ExprUri.data;
};
var rhoExprBoolToJs = function (expr) {
    return expr.ExprBool.data;
};
var rhoExprIntToJs = function (expr) {
    return expr.ExprInt.data;
};
var rhoExprListToJs = function (expr) {
    return expr.ExprList.data.map(function (e) { return exports.rhoValToJs(e); });
};
var rhoExprTupleToJs = function (expr) {
    return expr.ExprTuple.data.map(function (e) { return exports.rhoValToJs(e); });
};
var rhoExprSetToJs = function (expr) {
    return expr.ExprSet.data.map(function (e) { return exports.rhoValToJs(e); });
};
exports.rhoValToJs = function (expr) {
    /* if (val.ids && val.ids[0]) {
          return rhoIdsToJs(val.ids);
        } else  */
    if (expr.ExprUnforg) {
        return rhoUnforgeableToJs(expr);
    }
    else if (expr.ExprMap) {
        return rholangMapToJsObject(expr);
    }
    else if (expr.ExprString) {
        return rhoExprStringToJs(expr);
    }
    else if (expr.ExprUri) {
        return rhoExprUriToJs(expr);
    }
    else if (expr.ExprBool) {
        return rhoExprBoolToJs(expr);
    }
    else if (expr.ExprInt) {
        return rhoExprIntToJs(expr);
    }
    else if (expr.ExprList) {
        return rhoExprListToJs(expr);
    }
    else if (expr.ExprTuple) {
        return rhoExprTupleToJs(expr);
    }
    else if (expr.ExprSet) {
        return rhoExprSetToJs(expr);
    }
    else {
        console.warn("Not implemented", expr);
        return null;
    }
};
