"use strict";
exports.__esModule = true;
/*
  converts expr received by decoding buffers
  and decoding Par to javascript variables
*/
exports.rhoExprToVar = function (a
//a: rnodeProtos.IExpr
) {
    if (a.g_string) {
        return a.g_string;
    }
    else if (a.g_uri) {
        return a.g_uri;
    }
    else if (a.g_int) {
        return parseInt(a.g_int, 10);
    }
    else if (a.g_bool) {
        return a.g_bool;
    }
    else if (a.e_list_body) {
        if (a.e_list_body && a.e_list_body.ps) {
            return a.e_list_body.ps.map(function (ps) {
                if (ps.exprs && ps.exprs[0]) {
                    return exports.rhoExprToVar(ps.exprs[0]);
                }
                else {
                    return null;
                }
            });
        }
        else {
            return [];
        }
    }
    else if (a.e_tuple_body) {
        if (a.e_tuple_body && a.e_tuple_body.ps) {
            return a.e_tuple_body.ps.map(function (ps) {
                if (ps.exprs && ps.exprs[0]) {
                    return exports.rhoExprToVar(ps.exprs[0]);
                }
                else {
                    return null;
                }
            });
        }
        else {
            return [];
        }
    }
    else if (a.e_set_body) {
        if (a.e_set_body && a.e_set_body.ps) {
            return a.e_set_body.ps.map(function (ps) {
                if (ps.exprs && ps.exprs[0]) {
                    return exports.rhoExprToVar(ps.exprs[0]);
                }
                else {
                    return null;
                }
            });
        }
        else {
            return [];
        }
    }
    else if (a.e_map_body) {
        var obj_1 = {};
        if (a.e_map_body.kvs) {
            a.e_map_body.kvs.forEach(function (kv) {
                if (kv.key && kv.key.exprs && kv.key.exprs[0]) {
                    if (kv.value && kv.value.exprs && kv.value.exprs[0]) {
                        obj_1[exports.rhoExprToVar(kv.key.exprs[0])] = exports.rhoExprToVar(kv.value.exprs[0]);
                    }
                    else {
                        obj_1[exports.rhoExprToVar(kv.key.exprs[0])] = null;
                    }
                }
            });
            return obj_1;
        }
        else {
            return {};
        }
    }
    else {
        console.warn("Not implemented", a);
        return null;
    }
};
