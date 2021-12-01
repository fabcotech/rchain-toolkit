"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rhoUnforgeableToJs = (expr) => {
    const unforgeable = {};
    Object.keys(expr.ExprUnforg.data).forEach((u) => {
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
const rholangMapToJsObject = (expr) => {
    const obj = {};
    Object.keys(expr.ExprMap.data).forEach((k) => {
        obj[k] = exports.rhoValToJs(expr.ExprMap.data[k]);
    });
    return obj;
};
const rhoExprStringToJs = (expr) => {
    return expr.ExprString.data;
};
const rhoExprUriToJs = (expr) => {
    return expr.ExprUri.data;
};
const rhoExprBoolToJs = (expr) => {
    return expr.ExprBool.data;
};
const rhoExprIntToJs = (expr) => {
    return expr.ExprInt.data;
};
const rhoExprListToJs = (expr) => {
    return expr.ExprList.data.map((e) => exports.rhoValToJs(e));
};
const rhoExprTupleToJs = (expr) => {
    return expr.ExprTuple.data.map((e) => exports.rhoValToJs(e));
};
const rhoExprSetToJs = (expr) => {
    return expr.ExprSet.data.map((e) => exports.rhoValToJs(e));
};
exports.rhoValToJs = (expr) => {
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
