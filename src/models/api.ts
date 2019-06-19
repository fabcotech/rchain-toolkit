export interface PrivateNamePreviewResponse {
  success: {
    response: {
      type_url: "type.rchain.coop/coop.rchain.casper.protocol.PrivateNamePreviewResponse";
      value: Buffer;
    };
  };
  content: "success";
}

export interface DeployServiceResponse {
  success: {
    response: {
      type_url: "type.rchain.coop/coop.rchain.casper.protocol.DeployServiceResponse";
      value: Buffer;
    };
  };
  content: "success";
}
