import * as rnodeProtos from "../rnode-protos";

export const decodePar = (par: any) => {
  const a = rnodeProtos.Par.decode(par);
  return a.toJSON();
};
