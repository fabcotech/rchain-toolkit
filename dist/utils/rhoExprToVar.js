"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  converts expr received by decoding buffers
  and decoding Par to javascript variables
*/
exports.rhoExprToVar = (a
//a: rnodeProtos.IExpr
) => {
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
            return a.e_list_body.ps.map((ps) => {
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
            return a.e_tuple_body.ps.map((ps) => {
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
            return a.e_set_body.ps.map((ps) => {
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
        const obj = {};
        if (a.e_map_body.kvs) {
            a.e_map_body.kvs.forEach((kv) => {
                if (kv.key && kv.key.exprs && kv.key.exprs[0]) {
                    if (kv.value && kv.value.exprs && kv.value.exprs[0]) {
                        obj[exports.rhoExprToVar(kv.key.exprs[0])] = exports.rhoExprToVar(kv.value.exprs[0]);
                    }
                    else {
                        obj[exports.rhoExprToVar(kv.key.exprs[0])] = null;
                    }
                }
            });
            return obj;
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
