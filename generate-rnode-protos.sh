pbjs --keep-case -t static-module -w commonjs -o ./src/rnode-protos.js ./src/protobuf/*.proto && pbts -o src/rnode-protos.d.ts src/rnode-protos.js