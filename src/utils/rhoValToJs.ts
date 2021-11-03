const rhoUnforgeableToJs = (expr: any) => {
  const unforgeable: {
    UnforgPrivate?: string;
    UnforgDeploy?: string;
    UnforgDeployer?: string;
  } = {};

  Object.keys(expr.ExprUnforg.data).forEach((u: any) => {
    if (u === "UnforgPrivate") {
      unforgeable.UnforgPrivate = expr.ExprUnforg.data[u].data;
    } else if (u === "UnforgDeploy") {
      unforgeable.UnforgDeploy = expr.ExprUnforg.data[u].data;
    } else if (u === "UnforgDeployer") {
      unforgeable.UnforgDeployer = expr.ExprUnforg.data[u].data;
    }
  });

  return unforgeable;
};

const rholangMapToJsObject = (expr: any) => {
  const obj: { [key: string]: any } = {};
  Object.keys(expr.ExprMap.data).forEach((k: any) => {
    obj[k] = rhoValToJs(expr.ExprMap.data[k]);
  });

  return obj;
};

const rhoExprStringToJs = (expr: any) => {
  return expr.ExprString.data;
};
const rhoExprUriToJs = (expr: any) => {
  return expr.ExprUri.data;
};
const rhoExprBoolToJs = (expr: any) => {
  return expr.ExprBool.data;
};
const rhoExprIntToJs = (expr: any) => {
  return expr.ExprInt.data;
};
const rhoExprListToJs = (expr: any) => {
  return expr.ExprList.data.map((e: any) => rhoValToJs(e));
};
const rhoExprTupleToJs = (expr: any) => {
  return expr.ExprTuple.data.map((e: any) => rhoValToJs(e));
};
const rhoExprSetToJs = (expr: any) => {
  return expr.ExprSet.data.map((e: any) => rhoValToJs(e));
};

export const rhoValToJs = (expr: any) => {
  /* if (val.ids && val.ids[0]) {
        return rhoIdsToJs(val.ids);
      } else  */
  if (expr.ExprUnforg) {
    return rhoUnforgeableToJs(expr);
  } else if (expr.ExprMap) {
    return rholangMapToJsObject(expr);
  } else if (expr.ExprString) {
    return rhoExprStringToJs(expr);
  } else if (expr.ExprUri) {
    return rhoExprUriToJs(expr);
  } else if (expr.ExprBool) {
    return rhoExprBoolToJs(expr);
  } else if (expr.ExprInt) {
    return rhoExprIntToJs(expr);
  } else if (expr.ExprList) {
    return rhoExprListToJs(expr);
  } else if (expr.ExprTuple) {
    return rhoExprTupleToJs(expr);
  } else if (expr.ExprSet) {
    return rhoExprSetToJs(expr);
  } else {
    console.warn("Not implemented", expr);
    return null;
  }
};
