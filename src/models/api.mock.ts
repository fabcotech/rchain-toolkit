import { PrivateNamePreviewResponse, EitherSuccess } from "./api";

export const privateNamePreviewResponse: EitherSuccess = {
  content: "success",
  success: {
    response: {
      type_url:
        "type.rchain.coop/coop.rchain.casper.protocol.PrivateNamePreviewResponse",
      value: Buffer.from([
        10,
        32,
        145,
        79,
        72,
        91,
        227,
        162,
        74,
        195,
        45,
        139,
        30,
        13,
        129,
        250,
        118,
        169,
        41,
        99,
        44,
        225,
        167,
        214,
        40,
        87,
        62,
        68,
        234,
        184,
        159,
        181,
        165,
        117
      ])
    }
  }
};

export const privateNamesResponse: PrivateNamePreviewResponse = {
  ids: [
    Buffer.from([
      145,
      79,
      72,
      91,
      227,
      162,
      74,
      195,
      45,
      139,
      30,
      13,
      129,
      250,
      118,
      169,
      41,
      99,
      44,
      225,
      167,
      214,
      40,
      87,
      62,
      68,
      234,
      184,
      159,
      181,
      165,
      117
    ])
  ]
};

export const doDeploySecp256k1Response: EitherSuccess = {
  success: {
    response: {
      type_url:
        "type.rchain.coop/coop.rchain.casper.protocol.DeployServiceResponse",
      value: Buffer.from([
        10,
        162,
        1,
        83,
        117,
        99,
        99,
        101,
        115,
        115,
        33,
        10,
        68,
        101,
        112,
        108,
        111,
        121,
        73,
        100,
        32,
        105,
        115,
        58,
        32,
        51,
        48,
        52,
        52,
        48,
        50,
        50,
        48,
        54,
        51,
        57,
        98,
        52,
        57,
        52,
        51,
        98,
        50,
        49,
        54,
        98,
        102,
        52,
        55,
        97,
        98,
        102,
        101,
        53,
        99,
        101,
        102,
        51,
        48,
        57,
        52,
        49,
        55,
        48,
        100,
        55,
        51,
        51,
        97,
        56,
        52,
        55,
        99,
        98,
        50,
        56,
        51,
        57,
        53,
        57,
        102,
        99,
        100,
        98,
        101,
        102,
        101,
        102,
        102,
        54,
        55,
        53,
        52,
        56,
        49,
        99,
        49,
        48,
        50,
        50,
        48,
        55,
        53,
        100,
        51,
        102,
        52,
        51,
        50,
        49,
        57,
        50,
        100,
        51,
        52,
        51,
        99,
        51,
        102,
        99,
        101,
        57,
        102,
        49,
        101,
        101,
        100,
        99,
        48,
        99,
        100,
        56,
        56,
        49,
        53,
        97,
        102,
        50,
        101,
        51,
        52,
        99,
        100,
        51,
        99,
        53,
        102,
        53,
        101,
        53,
        48,
        99,
        49,
        49,
        53,
        97,
        98,
        49,
        54,
        98,
        55,
        98,
        53,
        98,
        100
      ])
    }
  },
  content: "success"
};
