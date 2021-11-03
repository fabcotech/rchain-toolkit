// When compiling for browser (iife ./rollup.config.iife.js )
// we have to import protobufs like this
// very annoying
import rnodeProtos from "../rnode-protos";

export const decodePar = (par: any) => {
  const a = rnodeProtos.Par.decode(par);
  return a.toJSON();
};
