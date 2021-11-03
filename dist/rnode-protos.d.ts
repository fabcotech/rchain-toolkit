import * as $protobuf from "protobufjs";
/** Namespace casper. */
export namespace casper {
  /** Properties of a HasBlockRequestProto. */
  interface IHasBlockRequestProto {
    /** HasBlockRequestProto hash */
    hash?: Uint8Array | null;
  }

  /** Represents a HasBlockRequestProto. */
  class HasBlockRequestProto implements IHasBlockRequestProto {
    /**
     * Constructs a new HasBlockRequestProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IHasBlockRequestProto);

    /** HasBlockRequestProto hash. */
    public hash: Uint8Array;

    /**
     * Creates a new HasBlockRequestProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HasBlockRequestProto instance
     */
    public static create(
      properties?: casper.IHasBlockRequestProto
    ): casper.HasBlockRequestProto;

    /**
     * Encodes the specified HasBlockRequestProto message. Does not implicitly {@link casper.HasBlockRequestProto.verify|verify} messages.
     * @param message HasBlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IHasBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HasBlockRequestProto message, length delimited. Does not implicitly {@link casper.HasBlockRequestProto.verify|verify} messages.
     * @param message HasBlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IHasBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HasBlockRequestProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HasBlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.HasBlockRequestProto;

    /**
     * Decodes a HasBlockRequestProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HasBlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.HasBlockRequestProto;

    /**
     * Verifies a HasBlockRequestProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HasBlockRequestProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HasBlockRequestProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.HasBlockRequestProto;

    /**
     * Creates a plain object from a HasBlockRequestProto message. Also converts values to other types if specified.
     * @param message HasBlockRequestProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.HasBlockRequestProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HasBlockRequestProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a HasBlockProto. */
  interface IHasBlockProto {
    /** HasBlockProto hash */
    hash?: Uint8Array | null;
  }

  /** Represents a HasBlockProto. */
  class HasBlockProto implements IHasBlockProto {
    /**
     * Constructs a new HasBlockProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IHasBlockProto);

    /** HasBlockProto hash. */
    public hash: Uint8Array;

    /**
     * Creates a new HasBlockProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HasBlockProto instance
     */
    public static create(
      properties?: casper.IHasBlockProto
    ): casper.HasBlockProto;

    /**
     * Encodes the specified HasBlockProto message. Does not implicitly {@link casper.HasBlockProto.verify|verify} messages.
     * @param message HasBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IHasBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HasBlockProto message, length delimited. Does not implicitly {@link casper.HasBlockProto.verify|verify} messages.
     * @param message HasBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IHasBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HasBlockProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HasBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.HasBlockProto;

    /**
     * Decodes a HasBlockProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HasBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.HasBlockProto;

    /**
     * Verifies a HasBlockProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HasBlockProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HasBlockProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.HasBlockProto;

    /**
     * Creates a plain object from a HasBlockProto message. Also converts values to other types if specified.
     * @param message HasBlockProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.HasBlockProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HasBlockProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockRequestProto. */
  interface IBlockRequestProto {
    /** BlockRequestProto hash */
    hash?: Uint8Array | null;
  }

  /** Represents a BlockRequestProto. */
  class BlockRequestProto implements IBlockRequestProto {
    /**
     * Constructs a new BlockRequestProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockRequestProto);

    /** BlockRequestProto hash. */
    public hash: Uint8Array;

    /**
     * Creates a new BlockRequestProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockRequestProto instance
     */
    public static create(
      properties?: casper.IBlockRequestProto
    ): casper.BlockRequestProto;

    /**
     * Encodes the specified BlockRequestProto message. Does not implicitly {@link casper.BlockRequestProto.verify|verify} messages.
     * @param message BlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockRequestProto message, length delimited. Does not implicitly {@link casper.BlockRequestProto.verify|verify} messages.
     * @param message BlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockRequestProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockRequestProto;

    /**
     * Decodes a BlockRequestProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockRequestProto;

    /**
     * Verifies a BlockRequestProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockRequestProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockRequestProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockRequestProto;

    /**
     * Creates a plain object from a BlockRequestProto message. Also converts values to other types if specified.
     * @param message BlockRequestProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockRequestProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockRequestProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ForkChoiceTipRequestProto. */
  interface IForkChoiceTipRequestProto {}

  /** Represents a ForkChoiceTipRequestProto. */
  class ForkChoiceTipRequestProto implements IForkChoiceTipRequestProto {
    /**
     * Constructs a new ForkChoiceTipRequestProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IForkChoiceTipRequestProto);

    /**
     * Creates a new ForkChoiceTipRequestProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForkChoiceTipRequestProto instance
     */
    public static create(
      properties?: casper.IForkChoiceTipRequestProto
    ): casper.ForkChoiceTipRequestProto;

    /**
     * Encodes the specified ForkChoiceTipRequestProto message. Does not implicitly {@link casper.ForkChoiceTipRequestProto.verify|verify} messages.
     * @param message ForkChoiceTipRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IForkChoiceTipRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ForkChoiceTipRequestProto message, length delimited. Does not implicitly {@link casper.ForkChoiceTipRequestProto.verify|verify} messages.
     * @param message ForkChoiceTipRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IForkChoiceTipRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ForkChoiceTipRequestProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForkChoiceTipRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ForkChoiceTipRequestProto;

    /**
     * Decodes a ForkChoiceTipRequestProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForkChoiceTipRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ForkChoiceTipRequestProto;

    /**
     * Verifies a ForkChoiceTipRequestProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ForkChoiceTipRequestProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForkChoiceTipRequestProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ForkChoiceTipRequestProto;

    /**
     * Creates a plain object from a ForkChoiceTipRequestProto message. Also converts values to other types if specified.
     * @param message ForkChoiceTipRequestProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ForkChoiceTipRequestProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ForkChoiceTipRequestProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an ApprovedBlockCandidateProto. */
  interface IApprovedBlockCandidateProto {
    /** ApprovedBlockCandidateProto block */
    block?: casper.IBlockMessageProto | null;

    /** ApprovedBlockCandidateProto requiredSigs */
    requiredSigs?: number | null;
  }

  /** Represents an ApprovedBlockCandidateProto. */
  class ApprovedBlockCandidateProto implements IApprovedBlockCandidateProto {
    /**
     * Constructs a new ApprovedBlockCandidateProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IApprovedBlockCandidateProto);

    /** ApprovedBlockCandidateProto block. */
    public block?: casper.IBlockMessageProto | null;

    /** ApprovedBlockCandidateProto requiredSigs. */
    public requiredSigs: number;

    /**
     * Creates a new ApprovedBlockCandidateProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApprovedBlockCandidateProto instance
     */
    public static create(
      properties?: casper.IApprovedBlockCandidateProto
    ): casper.ApprovedBlockCandidateProto;

    /**
     * Encodes the specified ApprovedBlockCandidateProto message. Does not implicitly {@link casper.ApprovedBlockCandidateProto.verify|verify} messages.
     * @param message ApprovedBlockCandidateProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IApprovedBlockCandidateProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ApprovedBlockCandidateProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockCandidateProto.verify|verify} messages.
     * @param message ApprovedBlockCandidateProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IApprovedBlockCandidateProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an ApprovedBlockCandidateProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApprovedBlockCandidateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ApprovedBlockCandidateProto;

    /**
     * Decodes an ApprovedBlockCandidateProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApprovedBlockCandidateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ApprovedBlockCandidateProto;

    /**
     * Verifies an ApprovedBlockCandidateProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an ApprovedBlockCandidateProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApprovedBlockCandidateProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ApprovedBlockCandidateProto;

    /**
     * Creates a plain object from an ApprovedBlockCandidateProto message. Also converts values to other types if specified.
     * @param message ApprovedBlockCandidateProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ApprovedBlockCandidateProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ApprovedBlockCandidateProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an UnapprovedBlockProto. */
  interface IUnapprovedBlockProto {
    /** UnapprovedBlockProto candidate */
    candidate?: casper.IApprovedBlockCandidateProto | null;

    /** UnapprovedBlockProto timestamp */
    timestamp?: number | Long | null;

    /** UnapprovedBlockProto duration */
    duration?: number | Long | null;
  }

  /** Represents an UnapprovedBlockProto. */
  class UnapprovedBlockProto implements IUnapprovedBlockProto {
    /**
     * Constructs a new UnapprovedBlockProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IUnapprovedBlockProto);

    /** UnapprovedBlockProto candidate. */
    public candidate?: casper.IApprovedBlockCandidateProto | null;

    /** UnapprovedBlockProto timestamp. */
    public timestamp: number | Long;

    /** UnapprovedBlockProto duration. */
    public duration: number | Long;

    /**
     * Creates a new UnapprovedBlockProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnapprovedBlockProto instance
     */
    public static create(
      properties?: casper.IUnapprovedBlockProto
    ): casper.UnapprovedBlockProto;

    /**
     * Encodes the specified UnapprovedBlockProto message. Does not implicitly {@link casper.UnapprovedBlockProto.verify|verify} messages.
     * @param message UnapprovedBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IUnapprovedBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UnapprovedBlockProto message, length delimited. Does not implicitly {@link casper.UnapprovedBlockProto.verify|verify} messages.
     * @param message UnapprovedBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IUnapprovedBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UnapprovedBlockProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnapprovedBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.UnapprovedBlockProto;

    /**
     * Decodes an UnapprovedBlockProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnapprovedBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.UnapprovedBlockProto;

    /**
     * Verifies an UnapprovedBlockProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UnapprovedBlockProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnapprovedBlockProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.UnapprovedBlockProto;

    /**
     * Creates a plain object from an UnapprovedBlockProto message. Also converts values to other types if specified.
     * @param message UnapprovedBlockProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.UnapprovedBlockProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UnapprovedBlockProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Signature. */
  interface ISignature {
    /** Signature publicKey */
    publicKey?: Uint8Array | null;

    /** Signature algorithm */
    algorithm?: string | null;

    /** Signature sig */
    sig?: Uint8Array | null;
  }

  /** Represents a Signature. */
  class Signature implements ISignature {
    /**
     * Constructs a new Signature.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ISignature);

    /** Signature publicKey. */
    public publicKey: Uint8Array;

    /** Signature algorithm. */
    public algorithm: string;

    /** Signature sig. */
    public sig: Uint8Array;

    /**
     * Creates a new Signature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signature instance
     */
    public static create(properties?: casper.ISignature): casper.Signature;

    /**
     * Encodes the specified Signature message. Does not implicitly {@link casper.Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ISignature,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link casper.Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ISignature,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.Signature;

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.Signature;

    /**
     * Verifies a Signature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signature
     */
    public static fromObject(object: { [k: string]: any }): casper.Signature;

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @param message Signature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.Signature,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Signature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockApprovalProto. */
  interface IBlockApprovalProto {
    /** BlockApprovalProto candidate */
    candidate?: casper.IApprovedBlockCandidateProto | null;

    /** BlockApprovalProto sig */
    sig?: casper.ISignature | null;
  }

  /** Represents a BlockApprovalProto. */
  class BlockApprovalProto implements IBlockApprovalProto {
    /**
     * Constructs a new BlockApprovalProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockApprovalProto);

    /** BlockApprovalProto candidate. */
    public candidate?: casper.IApprovedBlockCandidateProto | null;

    /** BlockApprovalProto sig. */
    public sig?: casper.ISignature | null;

    /**
     * Creates a new BlockApprovalProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockApprovalProto instance
     */
    public static create(
      properties?: casper.IBlockApprovalProto
    ): casper.BlockApprovalProto;

    /**
     * Encodes the specified BlockApprovalProto message. Does not implicitly {@link casper.BlockApprovalProto.verify|verify} messages.
     * @param message BlockApprovalProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockApprovalProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockApprovalProto message, length delimited. Does not implicitly {@link casper.BlockApprovalProto.verify|verify} messages.
     * @param message BlockApprovalProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockApprovalProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockApprovalProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockApprovalProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockApprovalProto;

    /**
     * Decodes a BlockApprovalProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockApprovalProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockApprovalProto;

    /**
     * Verifies a BlockApprovalProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockApprovalProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockApprovalProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockApprovalProto;

    /**
     * Creates a plain object from a BlockApprovalProto message. Also converts values to other types if specified.
     * @param message BlockApprovalProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockApprovalProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockApprovalProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an ApprovedBlockProto. */
  interface IApprovedBlockProto {
    /** ApprovedBlockProto candidate */
    candidate?: casper.IApprovedBlockCandidateProto | null;

    /** ApprovedBlockProto sigs */
    sigs?: casper.ISignature[] | null;
  }

  /** Represents an ApprovedBlockProto. */
  class ApprovedBlockProto implements IApprovedBlockProto {
    /**
     * Constructs a new ApprovedBlockProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IApprovedBlockProto);

    /** ApprovedBlockProto candidate. */
    public candidate?: casper.IApprovedBlockCandidateProto | null;

    /** ApprovedBlockProto sigs. */
    public sigs: casper.ISignature[];

    /**
     * Creates a new ApprovedBlockProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApprovedBlockProto instance
     */
    public static create(
      properties?: casper.IApprovedBlockProto
    ): casper.ApprovedBlockProto;

    /**
     * Encodes the specified ApprovedBlockProto message. Does not implicitly {@link casper.ApprovedBlockProto.verify|verify} messages.
     * @param message ApprovedBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IApprovedBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ApprovedBlockProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockProto.verify|verify} messages.
     * @param message ApprovedBlockProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IApprovedBlockProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an ApprovedBlockProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApprovedBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ApprovedBlockProto;

    /**
     * Decodes an ApprovedBlockProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApprovedBlockProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ApprovedBlockProto;

    /**
     * Verifies an ApprovedBlockProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an ApprovedBlockProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApprovedBlockProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ApprovedBlockProto;

    /**
     * Creates a plain object from an ApprovedBlockProto message. Also converts values to other types if specified.
     * @param message ApprovedBlockProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ApprovedBlockProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ApprovedBlockProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an ApprovedBlockRequestProto. */
  interface IApprovedBlockRequestProto {
    /** ApprovedBlockRequestProto identifier */
    identifier?: string | null;
  }

  /** Represents an ApprovedBlockRequestProto. */
  class ApprovedBlockRequestProto implements IApprovedBlockRequestProto {
    /**
     * Constructs a new ApprovedBlockRequestProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IApprovedBlockRequestProto);

    /** ApprovedBlockRequestProto identifier. */
    public identifier: string;

    /**
     * Creates a new ApprovedBlockRequestProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApprovedBlockRequestProto instance
     */
    public static create(
      properties?: casper.IApprovedBlockRequestProto
    ): casper.ApprovedBlockRequestProto;

    /**
     * Encodes the specified ApprovedBlockRequestProto message. Does not implicitly {@link casper.ApprovedBlockRequestProto.verify|verify} messages.
     * @param message ApprovedBlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IApprovedBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ApprovedBlockRequestProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockRequestProto.verify|verify} messages.
     * @param message ApprovedBlockRequestProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IApprovedBlockRequestProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an ApprovedBlockRequestProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApprovedBlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ApprovedBlockRequestProto;

    /**
     * Decodes an ApprovedBlockRequestProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApprovedBlockRequestProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ApprovedBlockRequestProto;

    /**
     * Verifies an ApprovedBlockRequestProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an ApprovedBlockRequestProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApprovedBlockRequestProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ApprovedBlockRequestProto;

    /**
     * Creates a plain object from an ApprovedBlockRequestProto message. Also converts values to other types if specified.
     * @param message ApprovedBlockRequestProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ApprovedBlockRequestProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ApprovedBlockRequestProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a NoApprovedBlockAvailableProto. */
  interface INoApprovedBlockAvailableProto {
    /** NoApprovedBlockAvailableProto identifier */
    identifier?: string | null;

    /** NoApprovedBlockAvailableProto nodeIdentifer */
    nodeIdentifer?: string | null;
  }

  /** Represents a NoApprovedBlockAvailableProto. */
  class NoApprovedBlockAvailableProto
    implements INoApprovedBlockAvailableProto
  {
    /**
     * Constructs a new NoApprovedBlockAvailableProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.INoApprovedBlockAvailableProto);

    /** NoApprovedBlockAvailableProto identifier. */
    public identifier: string;

    /** NoApprovedBlockAvailableProto nodeIdentifer. */
    public nodeIdentifer: string;

    /**
     * Creates a new NoApprovedBlockAvailableProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoApprovedBlockAvailableProto instance
     */
    public static create(
      properties?: casper.INoApprovedBlockAvailableProto
    ): casper.NoApprovedBlockAvailableProto;

    /**
     * Encodes the specified NoApprovedBlockAvailableProto message. Does not implicitly {@link casper.NoApprovedBlockAvailableProto.verify|verify} messages.
     * @param message NoApprovedBlockAvailableProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.INoApprovedBlockAvailableProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified NoApprovedBlockAvailableProto message, length delimited. Does not implicitly {@link casper.NoApprovedBlockAvailableProto.verify|verify} messages.
     * @param message NoApprovedBlockAvailableProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.INoApprovedBlockAvailableProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a NoApprovedBlockAvailableProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoApprovedBlockAvailableProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.NoApprovedBlockAvailableProto;

    /**
     * Decodes a NoApprovedBlockAvailableProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoApprovedBlockAvailableProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.NoApprovedBlockAvailableProto;

    /**
     * Verifies a NoApprovedBlockAvailableProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a NoApprovedBlockAvailableProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoApprovedBlockAvailableProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.NoApprovedBlockAvailableProto;

    /**
     * Creates a plain object from a NoApprovedBlockAvailableProto message. Also converts values to other types if specified.
     * @param message NoApprovedBlockAvailableProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.NoApprovedBlockAvailableProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this NoApprovedBlockAvailableProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockMessageProto. */
  interface IBlockMessageProto {
    /** BlockMessageProto blockHash */
    blockHash?: Uint8Array | null;

    /** BlockMessageProto header */
    header?: casper.IHeaderProto | null;

    /** BlockMessageProto body */
    body?: casper.IBodyProto | null;

    /** BlockMessageProto justifications */
    justifications?: casper.IJustificationProto[] | null;

    /** BlockMessageProto sender */
    sender?: Uint8Array | null;

    /** BlockMessageProto seqNum */
    seqNum?: number | null;

    /** BlockMessageProto sig */
    sig?: Uint8Array | null;

    /** BlockMessageProto sigAlgorithm */
    sigAlgorithm?: string | null;

    /** BlockMessageProto shardId */
    shardId?: string | null;

    /** BlockMessageProto extraBytes */
    extraBytes?: Uint8Array | null;
  }

  /** Represents a BlockMessageProto. */
  class BlockMessageProto implements IBlockMessageProto {
    /**
     * Constructs a new BlockMessageProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockMessageProto);

    /** BlockMessageProto blockHash. */
    public blockHash: Uint8Array;

    /** BlockMessageProto header. */
    public header?: casper.IHeaderProto | null;

    /** BlockMessageProto body. */
    public body?: casper.IBodyProto | null;

    /** BlockMessageProto justifications. */
    public justifications: casper.IJustificationProto[];

    /** BlockMessageProto sender. */
    public sender: Uint8Array;

    /** BlockMessageProto seqNum. */
    public seqNum: number;

    /** BlockMessageProto sig. */
    public sig: Uint8Array;

    /** BlockMessageProto sigAlgorithm. */
    public sigAlgorithm: string;

    /** BlockMessageProto shardId. */
    public shardId: string;

    /** BlockMessageProto extraBytes. */
    public extraBytes: Uint8Array;

    /**
     * Creates a new BlockMessageProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockMessageProto instance
     */
    public static create(
      properties?: casper.IBlockMessageProto
    ): casper.BlockMessageProto;

    /**
     * Encodes the specified BlockMessageProto message. Does not implicitly {@link casper.BlockMessageProto.verify|verify} messages.
     * @param message BlockMessageProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockMessageProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockMessageProto message, length delimited. Does not implicitly {@link casper.BlockMessageProto.verify|verify} messages.
     * @param message BlockMessageProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockMessageProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockMessageProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockMessageProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockMessageProto;

    /**
     * Decodes a BlockMessageProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockMessageProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockMessageProto;

    /**
     * Verifies a BlockMessageProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockMessageProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockMessageProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockMessageProto;

    /**
     * Creates a plain object from a BlockMessageProto message. Also converts values to other types if specified.
     * @param message BlockMessageProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockMessageProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockMessageProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockHashMessageProto. */
  interface IBlockHashMessageProto {
    /** BlockHashMessageProto hash */
    hash?: Uint8Array | null;

    /** BlockHashMessageProto blockCreator */
    blockCreator?: Uint8Array | null;
  }

  /** Represents a BlockHashMessageProto. */
  class BlockHashMessageProto implements IBlockHashMessageProto {
    /**
     * Constructs a new BlockHashMessageProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockHashMessageProto);

    /** BlockHashMessageProto hash. */
    public hash: Uint8Array;

    /** BlockHashMessageProto blockCreator. */
    public blockCreator: Uint8Array;

    /**
     * Creates a new BlockHashMessageProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockHashMessageProto instance
     */
    public static create(
      properties?: casper.IBlockHashMessageProto
    ): casper.BlockHashMessageProto;

    /**
     * Encodes the specified BlockHashMessageProto message. Does not implicitly {@link casper.BlockHashMessageProto.verify|verify} messages.
     * @param message BlockHashMessageProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockHashMessageProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockHashMessageProto message, length delimited. Does not implicitly {@link casper.BlockHashMessageProto.verify|verify} messages.
     * @param message BlockHashMessageProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockHashMessageProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockHashMessageProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockHashMessageProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockHashMessageProto;

    /**
     * Decodes a BlockHashMessageProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockHashMessageProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockHashMessageProto;

    /**
     * Verifies a BlockHashMessageProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockHashMessageProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockHashMessageProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockHashMessageProto;

    /**
     * Creates a plain object from a BlockHashMessageProto message. Also converts values to other types if specified.
     * @param message BlockHashMessageProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockHashMessageProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockHashMessageProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockMetadataInternal. */
  interface IBlockMetadataInternal {
    /** BlockMetadataInternal blockHash */
    blockHash?: Uint8Array | null;

    /** BlockMetadataInternal parents */
    parents?: Uint8Array[] | null;

    /** BlockMetadataInternal sender */
    sender?: Uint8Array | null;

    /** BlockMetadataInternal justifications */
    justifications?: casper.IJustificationProto[] | null;

    /** BlockMetadataInternal bonds */
    bonds?: casper.IBondProto[] | null;

    /** BlockMetadataInternal blockNum */
    blockNum?: number | Long | null;

    /** BlockMetadataInternal seqNum */
    seqNum?: number | null;

    /** BlockMetadataInternal invalid */
    invalid?: boolean | null;
  }

  /** Represents a BlockMetadataInternal. */
  class BlockMetadataInternal implements IBlockMetadataInternal {
    /**
     * Constructs a new BlockMetadataInternal.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockMetadataInternal);

    /** BlockMetadataInternal blockHash. */
    public blockHash: Uint8Array;

    /** BlockMetadataInternal parents. */
    public parents: Uint8Array[];

    /** BlockMetadataInternal sender. */
    public sender: Uint8Array;

    /** BlockMetadataInternal justifications. */
    public justifications: casper.IJustificationProto[];

    /** BlockMetadataInternal bonds. */
    public bonds: casper.IBondProto[];

    /** BlockMetadataInternal blockNum. */
    public blockNum: number | Long;

    /** BlockMetadataInternal seqNum. */
    public seqNum: number;

    /** BlockMetadataInternal invalid. */
    public invalid: boolean;

    /**
     * Creates a new BlockMetadataInternal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockMetadataInternal instance
     */
    public static create(
      properties?: casper.IBlockMetadataInternal
    ): casper.BlockMetadataInternal;

    /**
     * Encodes the specified BlockMetadataInternal message. Does not implicitly {@link casper.BlockMetadataInternal.verify|verify} messages.
     * @param message BlockMetadataInternal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockMetadataInternal,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockMetadataInternal message, length delimited. Does not implicitly {@link casper.BlockMetadataInternal.verify|verify} messages.
     * @param message BlockMetadataInternal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockMetadataInternal,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockMetadataInternal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockMetadataInternal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockMetadataInternal;

    /**
     * Decodes a BlockMetadataInternal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockMetadataInternal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockMetadataInternal;

    /**
     * Verifies a BlockMetadataInternal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockMetadataInternal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockMetadataInternal
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockMetadataInternal;

    /**
     * Creates a plain object from a BlockMetadataInternal message. Also converts values to other types if specified.
     * @param message BlockMetadataInternal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockMetadataInternal,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockMetadataInternal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a HeaderProto. */
  interface IHeaderProto {
    /** HeaderProto parentsHashList */
    parentsHashList?: Uint8Array[] | null;

    /** HeaderProto timestamp */
    timestamp?: number | Long | null;

    /** HeaderProto version */
    version?: number | Long | null;

    /** HeaderProto extraBytes */
    extraBytes?: Uint8Array | null;
  }

  /** Represents a HeaderProto. */
  class HeaderProto implements IHeaderProto {
    /**
     * Constructs a new HeaderProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IHeaderProto);

    /** HeaderProto parentsHashList. */
    public parentsHashList: Uint8Array[];

    /** HeaderProto timestamp. */
    public timestamp: number | Long;

    /** HeaderProto version. */
    public version: number | Long;

    /** HeaderProto extraBytes. */
    public extraBytes: Uint8Array;

    /**
     * Creates a new HeaderProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeaderProto instance
     */
    public static create(properties?: casper.IHeaderProto): casper.HeaderProto;

    /**
     * Encodes the specified HeaderProto message. Does not implicitly {@link casper.HeaderProto.verify|verify} messages.
     * @param message HeaderProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IHeaderProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HeaderProto message, length delimited. Does not implicitly {@link casper.HeaderProto.verify|verify} messages.
     * @param message HeaderProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IHeaderProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HeaderProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeaderProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.HeaderProto;

    /**
     * Decodes a HeaderProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeaderProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.HeaderProto;

    /**
     * Verifies a HeaderProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HeaderProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeaderProto
     */
    public static fromObject(object: { [k: string]: any }): casper.HeaderProto;

    /**
     * Creates a plain object from a HeaderProto message. Also converts values to other types if specified.
     * @param message HeaderProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.HeaderProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HeaderProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DeployDataProto. */
  interface IDeployDataProto {
    /** DeployDataProto deployer */
    deployer?: Uint8Array | null;

    /** DeployDataProto term */
    term?: string | null;

    /** DeployDataProto timestamp */
    timestamp?: number | Long | null;

    /** DeployDataProto sig */
    sig?: Uint8Array | null;

    /** DeployDataProto sigAlgorithm */
    sigAlgorithm?: string | null;

    /** DeployDataProto phloPrice */
    phloPrice?: number | Long | null;

    /** DeployDataProto phloLimit */
    phloLimit?: number | Long | null;

    /** DeployDataProto validAfterBlockNumber */
    validAfterBlockNumber?: number | Long | null;
  }

  /**
   * Note: deploys are uniquely keyed by `user`, `timestamp`.
   *
   * **TODO**: details of signatures and payment. See RHOL-781
   */
  class DeployDataProto implements IDeployDataProto {
    /**
     * Constructs a new DeployDataProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IDeployDataProto);

    /** DeployDataProto deployer. */
    public deployer: Uint8Array;

    /** DeployDataProto term. */
    public term: string;

    /** DeployDataProto timestamp. */
    public timestamp: number | Long;

    /** DeployDataProto sig. */
    public sig: Uint8Array;

    /** DeployDataProto sigAlgorithm. */
    public sigAlgorithm: string;

    /** DeployDataProto phloPrice. */
    public phloPrice: number | Long;

    /** DeployDataProto phloLimit. */
    public phloLimit: number | Long;

    /** DeployDataProto validAfterBlockNumber. */
    public validAfterBlockNumber: number | Long;

    /**
     * Creates a new DeployDataProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeployDataProto instance
     */
    public static create(
      properties?: casper.IDeployDataProto
    ): casper.DeployDataProto;

    /**
     * Encodes the specified DeployDataProto message. Does not implicitly {@link casper.DeployDataProto.verify|verify} messages.
     * @param message DeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeployDataProto message, length delimited. Does not implicitly {@link casper.DeployDataProto.verify|verify} messages.
     * @param message DeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeployDataProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.DeployDataProto;

    /**
     * Decodes a DeployDataProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.DeployDataProto;

    /**
     * Verifies a DeployDataProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeployDataProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeployDataProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.DeployDataProto;

    /**
     * Creates a plain object from a DeployDataProto message. Also converts values to other types if specified.
     * @param message DeployDataProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.DeployDataProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeployDataProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ProcessedDeployProto. */
  interface IProcessedDeployProto {
    /** ProcessedDeployProto deploy */
    deploy?: casper.IDeployDataProto | null;

    /** ProcessedDeployProto cost */
    cost?: IPCost | null;

    /** ProcessedDeployProto deployLog */
    deployLog?: casper.IEventProto[] | null;

    /** ProcessedDeployProto errored */
    errored?: boolean | null;

    /** ProcessedDeployProto systemDeployError */
    systemDeployError?: string | null;
  }

  /** Represents a ProcessedDeployProto. */
  class ProcessedDeployProto implements IProcessedDeployProto {
    /**
     * Constructs a new ProcessedDeployProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IProcessedDeployProto);

    /** ProcessedDeployProto deploy. */
    public deploy?: casper.IDeployDataProto | null;

    /** ProcessedDeployProto cost. */
    public cost?: IPCost | null;

    /** ProcessedDeployProto deployLog. */
    public deployLog: casper.IEventProto[];

    /** ProcessedDeployProto errored. */
    public errored: boolean;

    /** ProcessedDeployProto systemDeployError. */
    public systemDeployError: string;

    /**
     * Creates a new ProcessedDeployProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessedDeployProto instance
     */
    public static create(
      properties?: casper.IProcessedDeployProto
    ): casper.ProcessedDeployProto;

    /**
     * Encodes the specified ProcessedDeployProto message. Does not implicitly {@link casper.ProcessedDeployProto.verify|verify} messages.
     * @param message ProcessedDeployProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IProcessedDeployProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProcessedDeployProto message, length delimited. Does not implicitly {@link casper.ProcessedDeployProto.verify|verify} messages.
     * @param message ProcessedDeployProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IProcessedDeployProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProcessedDeployProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessedDeployProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ProcessedDeployProto;

    /**
     * Decodes a ProcessedDeployProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessedDeployProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ProcessedDeployProto;

    /**
     * Verifies a ProcessedDeployProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ProcessedDeployProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessedDeployProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ProcessedDeployProto;

    /**
     * Creates a plain object from a ProcessedDeployProto message. Also converts values to other types if specified.
     * @param message ProcessedDeployProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ProcessedDeployProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProcessedDeployProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a SlashSystemDeployDataProto. */
  interface ISlashSystemDeployDataProto {
    /** SlashSystemDeployDataProto invalidBlockHash */
    invalidBlockHash?: Uint8Array | null;

    /** SlashSystemDeployDataProto issuerPublicKey */
    issuerPublicKey?: Uint8Array | null;
  }

  /** Represents a SlashSystemDeployDataProto. */
  class SlashSystemDeployDataProto implements ISlashSystemDeployDataProto {
    /**
     * Constructs a new SlashSystemDeployDataProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ISlashSystemDeployDataProto);

    /** SlashSystemDeployDataProto invalidBlockHash. */
    public invalidBlockHash: Uint8Array;

    /** SlashSystemDeployDataProto issuerPublicKey. */
    public issuerPublicKey: Uint8Array;

    /**
     * Creates a new SlashSystemDeployDataProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SlashSystemDeployDataProto instance
     */
    public static create(
      properties?: casper.ISlashSystemDeployDataProto
    ): casper.SlashSystemDeployDataProto;

    /**
     * Encodes the specified SlashSystemDeployDataProto message. Does not implicitly {@link casper.SlashSystemDeployDataProto.verify|verify} messages.
     * @param message SlashSystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ISlashSystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SlashSystemDeployDataProto message, length delimited. Does not implicitly {@link casper.SlashSystemDeployDataProto.verify|verify} messages.
     * @param message SlashSystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ISlashSystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SlashSystemDeployDataProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SlashSystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.SlashSystemDeployDataProto;

    /**
     * Decodes a SlashSystemDeployDataProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SlashSystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.SlashSystemDeployDataProto;

    /**
     * Verifies a SlashSystemDeployDataProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SlashSystemDeployDataProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SlashSystemDeployDataProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.SlashSystemDeployDataProto;

    /**
     * Creates a plain object from a SlashSystemDeployDataProto message. Also converts values to other types if specified.
     * @param message SlashSystemDeployDataProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.SlashSystemDeployDataProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SlashSystemDeployDataProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a CloseBlockSystemDeployDataProto. */
  interface ICloseBlockSystemDeployDataProto {}

  /** Represents a CloseBlockSystemDeployDataProto. */
  class CloseBlockSystemDeployDataProto
    implements ICloseBlockSystemDeployDataProto
  {
    /**
     * Constructs a new CloseBlockSystemDeployDataProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ICloseBlockSystemDeployDataProto);

    /**
     * Creates a new CloseBlockSystemDeployDataProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseBlockSystemDeployDataProto instance
     */
    public static create(
      properties?: casper.ICloseBlockSystemDeployDataProto
    ): casper.CloseBlockSystemDeployDataProto;

    /**
     * Encodes the specified CloseBlockSystemDeployDataProto message. Does not implicitly {@link casper.CloseBlockSystemDeployDataProto.verify|verify} messages.
     * @param message CloseBlockSystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ICloseBlockSystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CloseBlockSystemDeployDataProto message, length delimited. Does not implicitly {@link casper.CloseBlockSystemDeployDataProto.verify|verify} messages.
     * @param message CloseBlockSystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ICloseBlockSystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CloseBlockSystemDeployDataProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseBlockSystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.CloseBlockSystemDeployDataProto;

    /**
     * Decodes a CloseBlockSystemDeployDataProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseBlockSystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.CloseBlockSystemDeployDataProto;

    /**
     * Verifies a CloseBlockSystemDeployDataProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CloseBlockSystemDeployDataProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseBlockSystemDeployDataProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.CloseBlockSystemDeployDataProto;

    /**
     * Creates a plain object from a CloseBlockSystemDeployDataProto message. Also converts values to other types if specified.
     * @param message CloseBlockSystemDeployDataProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.CloseBlockSystemDeployDataProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CloseBlockSystemDeployDataProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a SystemDeployDataProto. */
  interface ISystemDeployDataProto {
    /** SystemDeployDataProto slashSystemDeploy */
    slashSystemDeploy?: casper.ISlashSystemDeployDataProto | null;

    /** SystemDeployDataProto closeBlockSystemDeploy */
    closeBlockSystemDeploy?: casper.ICloseBlockSystemDeployDataProto | null;
  }

  /** Represents a SystemDeployDataProto. */
  class SystemDeployDataProto implements ISystemDeployDataProto {
    /**
     * Constructs a new SystemDeployDataProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ISystemDeployDataProto);

    /** SystemDeployDataProto slashSystemDeploy. */
    public slashSystemDeploy?: casper.ISlashSystemDeployDataProto | null;

    /** SystemDeployDataProto closeBlockSystemDeploy. */
    public closeBlockSystemDeploy?: casper.ICloseBlockSystemDeployDataProto | null;

    /** SystemDeployDataProto systemDeploy. */
    public systemDeploy?: "slashSystemDeploy" | "closeBlockSystemDeploy";

    /**
     * Creates a new SystemDeployDataProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SystemDeployDataProto instance
     */
    public static create(
      properties?: casper.ISystemDeployDataProto
    ): casper.SystemDeployDataProto;

    /**
     * Encodes the specified SystemDeployDataProto message. Does not implicitly {@link casper.SystemDeployDataProto.verify|verify} messages.
     * @param message SystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ISystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SystemDeployDataProto message, length delimited. Does not implicitly {@link casper.SystemDeployDataProto.verify|verify} messages.
     * @param message SystemDeployDataProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ISystemDeployDataProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SystemDeployDataProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.SystemDeployDataProto;

    /**
     * Decodes a SystemDeployDataProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SystemDeployDataProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.SystemDeployDataProto;

    /**
     * Verifies a SystemDeployDataProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SystemDeployDataProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SystemDeployDataProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.SystemDeployDataProto;

    /**
     * Creates a plain object from a SystemDeployDataProto message. Also converts values to other types if specified.
     * @param message SystemDeployDataProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.SystemDeployDataProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SystemDeployDataProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ProcessedSystemDeployProto. */
  interface IProcessedSystemDeployProto {
    /** ProcessedSystemDeployProto systemDeploy */
    systemDeploy?: casper.ISystemDeployDataProto | null;

    /** ProcessedSystemDeployProto deployLog */
    deployLog?: casper.IEventProto[] | null;

    /** ProcessedSystemDeployProto errorMsg */
    errorMsg?: string | null;
  }

  /** Represents a ProcessedSystemDeployProto. */
  class ProcessedSystemDeployProto implements IProcessedSystemDeployProto {
    /**
     * Constructs a new ProcessedSystemDeployProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IProcessedSystemDeployProto);

    /** ProcessedSystemDeployProto systemDeploy. */
    public systemDeploy?: casper.ISystemDeployDataProto | null;

    /** ProcessedSystemDeployProto deployLog. */
    public deployLog: casper.IEventProto[];

    /** ProcessedSystemDeployProto errorMsg. */
    public errorMsg: string;

    /**
     * Creates a new ProcessedSystemDeployProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessedSystemDeployProto instance
     */
    public static create(
      properties?: casper.IProcessedSystemDeployProto
    ): casper.ProcessedSystemDeployProto;

    /**
     * Encodes the specified ProcessedSystemDeployProto message. Does not implicitly {@link casper.ProcessedSystemDeployProto.verify|verify} messages.
     * @param message ProcessedSystemDeployProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IProcessedSystemDeployProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProcessedSystemDeployProto message, length delimited. Does not implicitly {@link casper.ProcessedSystemDeployProto.verify|verify} messages.
     * @param message ProcessedSystemDeployProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IProcessedSystemDeployProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProcessedSystemDeployProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessedSystemDeployProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ProcessedSystemDeployProto;

    /**
     * Decodes a ProcessedSystemDeployProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessedSystemDeployProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ProcessedSystemDeployProto;

    /**
     * Verifies a ProcessedSystemDeployProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ProcessedSystemDeployProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessedSystemDeployProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ProcessedSystemDeployProto;

    /**
     * Creates a plain object from a ProcessedSystemDeployProto message. Also converts values to other types if specified.
     * @param message ProcessedSystemDeployProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ProcessedSystemDeployProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProcessedSystemDeployProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BodyProto. */
  interface IBodyProto {
    /** BodyProto state */
    state?: casper.IRChainStateProto | null;

    /** BodyProto deploys */
    deploys?: casper.IProcessedDeployProto[] | null;

    /** BodyProto systemDeploys */
    systemDeploys?: casper.IProcessedSystemDeployProto[] | null;

    /** BodyProto extraBytes */
    extraBytes?: Uint8Array | null;
  }

  /** Represents a BodyProto. */
  class BodyProto implements IBodyProto {
    /**
     * Constructs a new BodyProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBodyProto);

    /** BodyProto state. */
    public state?: casper.IRChainStateProto | null;

    /** BodyProto deploys. */
    public deploys: casper.IProcessedDeployProto[];

    /** BodyProto systemDeploys. */
    public systemDeploys: casper.IProcessedSystemDeployProto[];

    /** BodyProto extraBytes. */
    public extraBytes: Uint8Array;

    /**
     * Creates a new BodyProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BodyProto instance
     */
    public static create(properties?: casper.IBodyProto): casper.BodyProto;

    /**
     * Encodes the specified BodyProto message. Does not implicitly {@link casper.BodyProto.verify|verify} messages.
     * @param message BodyProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBodyProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BodyProto message, length delimited. Does not implicitly {@link casper.BodyProto.verify|verify} messages.
     * @param message BodyProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBodyProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BodyProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BodyProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BodyProto;

    /**
     * Decodes a BodyProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BodyProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BodyProto;

    /**
     * Verifies a BodyProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BodyProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BodyProto
     */
    public static fromObject(object: { [k: string]: any }): casper.BodyProto;

    /**
     * Creates a plain object from a BodyProto message. Also converts values to other types if specified.
     * @param message BodyProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BodyProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BodyProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a JustificationProto. */
  interface IJustificationProto {
    /** JustificationProto validator */
    validator?: Uint8Array | null;

    /** JustificationProto latestBlockHash */
    latestBlockHash?: Uint8Array | null;
  }

  /** Represents a JustificationProto. */
  class JustificationProto implements IJustificationProto {
    /**
     * Constructs a new JustificationProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IJustificationProto);

    /** JustificationProto validator. */
    public validator: Uint8Array;

    /** JustificationProto latestBlockHash. */
    public latestBlockHash: Uint8Array;

    /**
     * Creates a new JustificationProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JustificationProto instance
     */
    public static create(
      properties?: casper.IJustificationProto
    ): casper.JustificationProto;

    /**
     * Encodes the specified JustificationProto message. Does not implicitly {@link casper.JustificationProto.verify|verify} messages.
     * @param message JustificationProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IJustificationProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified JustificationProto message, length delimited. Does not implicitly {@link casper.JustificationProto.verify|verify} messages.
     * @param message JustificationProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IJustificationProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a JustificationProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JustificationProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.JustificationProto;

    /**
     * Decodes a JustificationProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JustificationProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.JustificationProto;

    /**
     * Verifies a JustificationProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a JustificationProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JustificationProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.JustificationProto;

    /**
     * Creates a plain object from a JustificationProto message. Also converts values to other types if specified.
     * @param message JustificationProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.JustificationProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this JustificationProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a RChainStateProto. */
  interface IRChainStateProto {
    /** RChainStateProto preStateHash */
    preStateHash?: Uint8Array | null;

    /** RChainStateProto postStateHash */
    postStateHash?: Uint8Array | null;

    /** RChainStateProto bonds */
    bonds?: casper.IBondProto[] | null;

    /** RChainStateProto blockNumber */
    blockNumber?: number | Long | null;
  }

  /** Represents a RChainStateProto. */
  class RChainStateProto implements IRChainStateProto {
    /**
     * Constructs a new RChainStateProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IRChainStateProto);

    /** RChainStateProto preStateHash. */
    public preStateHash: Uint8Array;

    /** RChainStateProto postStateHash. */
    public postStateHash: Uint8Array;

    /** RChainStateProto bonds. */
    public bonds: casper.IBondProto[];

    /** RChainStateProto blockNumber. */
    public blockNumber: number | Long;

    /**
     * Creates a new RChainStateProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RChainStateProto instance
     */
    public static create(
      properties?: casper.IRChainStateProto
    ): casper.RChainStateProto;

    /**
     * Encodes the specified RChainStateProto message. Does not implicitly {@link casper.RChainStateProto.verify|verify} messages.
     * @param message RChainStateProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IRChainStateProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified RChainStateProto message, length delimited. Does not implicitly {@link casper.RChainStateProto.verify|verify} messages.
     * @param message RChainStateProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IRChainStateProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a RChainStateProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RChainStateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.RChainStateProto;

    /**
     * Decodes a RChainStateProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RChainStateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.RChainStateProto;

    /**
     * Verifies a RChainStateProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a RChainStateProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RChainStateProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.RChainStateProto;

    /**
     * Creates a plain object from a RChainStateProto message. Also converts values to other types if specified.
     * @param message RChainStateProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.RChainStateProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this RChainStateProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an EventProto. */
  interface IEventProto {
    /** EventProto produce */
    produce?: casper.IProduceEventProto | null;

    /** EventProto consume */
    consume?: casper.IConsumeEventProto | null;

    /** EventProto comm */
    comm?: casper.ICommEventProto | null;
  }

  /** Represents an EventProto. */
  class EventProto implements IEventProto {
    /**
     * Constructs a new EventProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IEventProto);

    /** EventProto produce. */
    public produce?: casper.IProduceEventProto | null;

    /** EventProto consume. */
    public consume?: casper.IConsumeEventProto | null;

    /** EventProto comm. */
    public comm?: casper.ICommEventProto | null;

    /** EventProto event_instance. */
    public event_instance?: "produce" | "consume" | "comm";

    /**
     * Creates a new EventProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventProto instance
     */
    public static create(properties?: casper.IEventProto): casper.EventProto;

    /**
     * Encodes the specified EventProto message. Does not implicitly {@link casper.EventProto.verify|verify} messages.
     * @param message EventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified EventProto message, length delimited. Does not implicitly {@link casper.EventProto.verify|verify} messages.
     * @param message EventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an EventProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.EventProto;

    /**
     * Decodes an EventProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.EventProto;

    /**
     * Verifies an EventProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EventProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventProto
     */
    public static fromObject(object: { [k: string]: any }): casper.EventProto;

    /**
     * Creates a plain object from an EventProto message. Also converts values to other types if specified.
     * @param message EventProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.EventProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this EventProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ProduceEventProto. */
  interface IProduceEventProto {
    /** ProduceEventProto channelsHash */
    channelsHash?: Uint8Array | null;

    /** ProduceEventProto hash */
    hash?: Uint8Array | null;

    /** ProduceEventProto persistent */
    persistent?: boolean | null;

    /** ProduceEventProto timesRepeated */
    timesRepeated?: number | null;
  }

  /** Represents a ProduceEventProto. */
  class ProduceEventProto implements IProduceEventProto {
    /**
     * Constructs a new ProduceEventProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IProduceEventProto);

    /** ProduceEventProto channelsHash. */
    public channelsHash: Uint8Array;

    /** ProduceEventProto hash. */
    public hash: Uint8Array;

    /** ProduceEventProto persistent. */
    public persistent: boolean;

    /** ProduceEventProto timesRepeated. */
    public timesRepeated: number;

    /**
     * Creates a new ProduceEventProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProduceEventProto instance
     */
    public static create(
      properties?: casper.IProduceEventProto
    ): casper.ProduceEventProto;

    /**
     * Encodes the specified ProduceEventProto message. Does not implicitly {@link casper.ProduceEventProto.verify|verify} messages.
     * @param message ProduceEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IProduceEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProduceEventProto message, length delimited. Does not implicitly {@link casper.ProduceEventProto.verify|verify} messages.
     * @param message ProduceEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IProduceEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProduceEventProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProduceEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ProduceEventProto;

    /**
     * Decodes a ProduceEventProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProduceEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ProduceEventProto;

    /**
     * Verifies a ProduceEventProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ProduceEventProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProduceEventProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ProduceEventProto;

    /**
     * Creates a plain object from a ProduceEventProto message. Also converts values to other types if specified.
     * @param message ProduceEventProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ProduceEventProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProduceEventProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ConsumeEventProto. */
  interface IConsumeEventProto {
    /** ConsumeEventProto channelsHashes */
    channelsHashes?: Uint8Array[] | null;

    /** ConsumeEventProto hash */
    hash?: Uint8Array | null;

    /** ConsumeEventProto persistent */
    persistent?: boolean | null;
  }

  /** Represents a ConsumeEventProto. */
  class ConsumeEventProto implements IConsumeEventProto {
    /**
     * Constructs a new ConsumeEventProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IConsumeEventProto);

    /** ConsumeEventProto channelsHashes. */
    public channelsHashes: Uint8Array[];

    /** ConsumeEventProto hash. */
    public hash: Uint8Array;

    /** ConsumeEventProto persistent. */
    public persistent: boolean;

    /**
     * Creates a new ConsumeEventProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsumeEventProto instance
     */
    public static create(
      properties?: casper.IConsumeEventProto
    ): casper.ConsumeEventProto;

    /**
     * Encodes the specified ConsumeEventProto message. Does not implicitly {@link casper.ConsumeEventProto.verify|verify} messages.
     * @param message ConsumeEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IConsumeEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ConsumeEventProto message, length delimited. Does not implicitly {@link casper.ConsumeEventProto.verify|verify} messages.
     * @param message ConsumeEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IConsumeEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ConsumeEventProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsumeEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ConsumeEventProto;

    /**
     * Decodes a ConsumeEventProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsumeEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ConsumeEventProto;

    /**
     * Verifies a ConsumeEventProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConsumeEventProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsumeEventProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ConsumeEventProto;

    /**
     * Creates a plain object from a ConsumeEventProto message. Also converts values to other types if specified.
     * @param message ConsumeEventProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ConsumeEventProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ConsumeEventProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a CommEventProto. */
  interface ICommEventProto {
    /** CommEventProto consume */
    consume?: casper.IConsumeEventProto | null;

    /** CommEventProto produces */
    produces?: casper.IProduceEventProto[] | null;

    /** CommEventProto peeks */
    peeks?: casper.IPeekProto[] | null;
  }

  /** Represents a CommEventProto. */
  class CommEventProto implements ICommEventProto {
    /**
     * Constructs a new CommEventProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ICommEventProto);

    /** CommEventProto consume. */
    public consume?: casper.IConsumeEventProto | null;

    /** CommEventProto produces. */
    public produces: casper.IProduceEventProto[];

    /** CommEventProto peeks. */
    public peeks: casper.IPeekProto[];

    /**
     * Creates a new CommEventProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommEventProto instance
     */
    public static create(
      properties?: casper.ICommEventProto
    ): casper.CommEventProto;

    /**
     * Encodes the specified CommEventProto message. Does not implicitly {@link casper.CommEventProto.verify|verify} messages.
     * @param message CommEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ICommEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CommEventProto message, length delimited. Does not implicitly {@link casper.CommEventProto.verify|verify} messages.
     * @param message CommEventProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ICommEventProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CommEventProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.CommEventProto;

    /**
     * Decodes a CommEventProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommEventProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.CommEventProto;

    /**
     * Verifies a CommEventProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CommEventProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommEventProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.CommEventProto;

    /**
     * Creates a plain object from a CommEventProto message. Also converts values to other types if specified.
     * @param message CommEventProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.CommEventProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CommEventProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PeekProto. */
  interface IPeekProto {
    /** PeekProto channelIndex */
    channelIndex?: number | null;
  }

  /** Represents a PeekProto. */
  class PeekProto implements IPeekProto {
    /**
     * Constructs a new PeekProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IPeekProto);

    /** PeekProto channelIndex. */
    public channelIndex: number;

    /**
     * Creates a new PeekProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeekProto instance
     */
    public static create(properties?: casper.IPeekProto): casper.PeekProto;

    /**
     * Encodes the specified PeekProto message. Does not implicitly {@link casper.PeekProto.verify|verify} messages.
     * @param message PeekProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IPeekProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PeekProto message, length delimited. Does not implicitly {@link casper.PeekProto.verify|verify} messages.
     * @param message PeekProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IPeekProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PeekProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeekProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.PeekProto;

    /**
     * Decodes a PeekProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeekProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.PeekProto;

    /**
     * Verifies a PeekProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PeekProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeekProto
     */
    public static fromObject(object: { [k: string]: any }): casper.PeekProto;

    /**
     * Creates a plain object from a PeekProto message. Also converts values to other types if specified.
     * @param message PeekProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.PeekProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PeekProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BondProto. */
  interface IBondProto {
    /** BondProto validator */
    validator?: Uint8Array | null;

    /** BondProto stake */
    stake?: number | Long | null;
  }

  /** Represents a BondProto. */
  class BondProto implements IBondProto {
    /**
     * Constructs a new BondProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBondProto);

    /** BondProto validator. */
    public validator: Uint8Array;

    /** BondProto stake. */
    public stake: number | Long;

    /**
     * Creates a new BondProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BondProto instance
     */
    public static create(properties?: casper.IBondProto): casper.BondProto;

    /**
     * Encodes the specified BondProto message. Does not implicitly {@link casper.BondProto.verify|verify} messages.
     * @param message BondProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBondProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BondProto message, length delimited. Does not implicitly {@link casper.BondProto.verify|verify} messages.
     * @param message BondProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBondProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BondProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BondProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BondProto;

    /**
     * Decodes a BondProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BondProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BondProto;

    /**
     * Verifies a BondProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BondProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BondProto
     */
    public static fromObject(object: { [k: string]: any }): casper.BondProto;

    /**
     * Creates a plain object from a BondProto message. Also converts values to other types if specified.
     * @param message BondProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BondProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BondProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a FindDeployQuery. */
  interface IFindDeployQuery {
    /** FindDeployQuery deployId */
    deployId?: Uint8Array | null;
  }

  /** Represents a FindDeployQuery. */
  class FindDeployQuery implements IFindDeployQuery {
    /**
     * Constructs a new FindDeployQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IFindDeployQuery);

    /** FindDeployQuery deployId. */
    public deployId: Uint8Array;

    /**
     * Creates a new FindDeployQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FindDeployQuery instance
     */
    public static create(
      properties?: casper.IFindDeployQuery
    ): casper.FindDeployQuery;

    /**
     * Encodes the specified FindDeployQuery message. Does not implicitly {@link casper.FindDeployQuery.verify|verify} messages.
     * @param message FindDeployQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IFindDeployQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified FindDeployQuery message, length delimited. Does not implicitly {@link casper.FindDeployQuery.verify|verify} messages.
     * @param message FindDeployQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IFindDeployQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a FindDeployQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FindDeployQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.FindDeployQuery;

    /**
     * Decodes a FindDeployQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FindDeployQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.FindDeployQuery;

    /**
     * Verifies a FindDeployQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a FindDeployQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FindDeployQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.FindDeployQuery;

    /**
     * Creates a plain object from a FindDeployQuery message. Also converts values to other types if specified.
     * @param message FindDeployQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.FindDeployQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this FindDeployQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockQuery. */
  interface IBlockQuery {
    /** BlockQuery hash */
    hash?: string | null;
  }

  /** Represents a BlockQuery. */
  class BlockQuery implements IBlockQuery {
    /**
     * Constructs a new BlockQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockQuery);

    /** BlockQuery hash. */
    public hash: string;

    /**
     * Creates a new BlockQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockQuery instance
     */
    public static create(properties?: casper.IBlockQuery): casper.BlockQuery;

    /**
     * Encodes the specified BlockQuery message. Does not implicitly {@link casper.BlockQuery.verify|verify} messages.
     * @param message BlockQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockQuery message, length delimited. Does not implicitly {@link casper.BlockQuery.verify|verify} messages.
     * @param message BlockQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockQuery;

    /**
     * Decodes a BlockQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockQuery;

    /**
     * Verifies a BlockQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockQuery
     */
    public static fromObject(object: { [k: string]: any }): casper.BlockQuery;

    /**
     * Creates a plain object from a BlockQuery message. Also converts values to other types if specified.
     * @param message BlockQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlocksQuery. */
  interface IBlocksQuery {
    /** BlocksQuery depth */
    depth?: number | null;
  }

  /** Represents a BlocksQuery. */
  class BlocksQuery implements IBlocksQuery {
    /**
     * Constructs a new BlocksQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlocksQuery);

    /** BlocksQuery depth. */
    public depth: number;

    /**
     * Creates a new BlocksQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlocksQuery instance
     */
    public static create(properties?: casper.IBlocksQuery): casper.BlocksQuery;

    /**
     * Encodes the specified BlocksQuery message. Does not implicitly {@link casper.BlocksQuery.verify|verify} messages.
     * @param message BlocksQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlocksQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlocksQuery message, length delimited. Does not implicitly {@link casper.BlocksQuery.verify|verify} messages.
     * @param message BlocksQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlocksQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlocksQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlocksQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlocksQuery;

    /**
     * Decodes a BlocksQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlocksQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlocksQuery;

    /**
     * Verifies a BlocksQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlocksQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlocksQuery
     */
    public static fromObject(object: { [k: string]: any }): casper.BlocksQuery;

    /**
     * Creates a plain object from a BlocksQuery message. Also converts values to other types if specified.
     * @param message BlocksQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlocksQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlocksQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlocksQueryByHeight. */
  interface IBlocksQueryByHeight {
    /** BlocksQueryByHeight startBlockNumber */
    startBlockNumber?: number | Long | null;

    /** BlocksQueryByHeight endBlockNumber */
    endBlockNumber?: number | Long | null;
  }

  /** Represents a BlocksQueryByHeight. */
  class BlocksQueryByHeight implements IBlocksQueryByHeight {
    /**
     * Constructs a new BlocksQueryByHeight.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlocksQueryByHeight);

    /** BlocksQueryByHeight startBlockNumber. */
    public startBlockNumber: number | Long;

    /** BlocksQueryByHeight endBlockNumber. */
    public endBlockNumber: number | Long;

    /**
     * Creates a new BlocksQueryByHeight instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlocksQueryByHeight instance
     */
    public static create(
      properties?: casper.IBlocksQueryByHeight
    ): casper.BlocksQueryByHeight;

    /**
     * Encodes the specified BlocksQueryByHeight message. Does not implicitly {@link casper.BlocksQueryByHeight.verify|verify} messages.
     * @param message BlocksQueryByHeight message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlocksQueryByHeight,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlocksQueryByHeight message, length delimited. Does not implicitly {@link casper.BlocksQueryByHeight.verify|verify} messages.
     * @param message BlocksQueryByHeight message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlocksQueryByHeight,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlocksQueryByHeight message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlocksQueryByHeight
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlocksQueryByHeight;

    /**
     * Decodes a BlocksQueryByHeight message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlocksQueryByHeight
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlocksQueryByHeight;

    /**
     * Verifies a BlocksQueryByHeight message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlocksQueryByHeight message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlocksQueryByHeight
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlocksQueryByHeight;

    /**
     * Creates a plain object from a BlocksQueryByHeight message. Also converts values to other types if specified.
     * @param message BlocksQueryByHeight
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlocksQueryByHeight,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlocksQueryByHeight to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DataAtNameQuery. */
  interface IDataAtNameQuery {
    /** DataAtNameQuery depth */
    depth?: number | null;

    /** DataAtNameQuery name */
    name?: IPar | null;
  }

  /** Represents a DataAtNameQuery. */
  class DataAtNameQuery implements IDataAtNameQuery {
    /**
     * Constructs a new DataAtNameQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IDataAtNameQuery);

    /** DataAtNameQuery depth. */
    public depth: number;

    /** DataAtNameQuery name. */
    public name?: IPar | null;

    /**
     * Creates a new DataAtNameQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataAtNameQuery instance
     */
    public static create(
      properties?: casper.IDataAtNameQuery
    ): casper.DataAtNameQuery;

    /**
     * Encodes the specified DataAtNameQuery message. Does not implicitly {@link casper.DataAtNameQuery.verify|verify} messages.
     * @param message DataAtNameQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IDataAtNameQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DataAtNameQuery message, length delimited. Does not implicitly {@link casper.DataAtNameQuery.verify|verify} messages.
     * @param message DataAtNameQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IDataAtNameQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DataAtNameQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataAtNameQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.DataAtNameQuery;

    /**
     * Decodes a DataAtNameQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataAtNameQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.DataAtNameQuery;

    /**
     * Verifies a DataAtNameQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DataAtNameQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataAtNameQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.DataAtNameQuery;

    /**
     * Creates a plain object from a DataAtNameQuery message. Also converts values to other types if specified.
     * @param message DataAtNameQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.DataAtNameQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DataAtNameQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ContinuationAtNameQuery. */
  interface IContinuationAtNameQuery {
    /** ContinuationAtNameQuery depth */
    depth?: number | null;

    /** ContinuationAtNameQuery names */
    names?: IPar[] | null;
  }

  /** Represents a ContinuationAtNameQuery. */
  class ContinuationAtNameQuery implements IContinuationAtNameQuery {
    /**
     * Constructs a new ContinuationAtNameQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IContinuationAtNameQuery);

    /** ContinuationAtNameQuery depth. */
    public depth: number;

    /** ContinuationAtNameQuery names. */
    public names: IPar[];

    /**
     * Creates a new ContinuationAtNameQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContinuationAtNameQuery instance
     */
    public static create(
      properties?: casper.IContinuationAtNameQuery
    ): casper.ContinuationAtNameQuery;

    /**
     * Encodes the specified ContinuationAtNameQuery message. Does not implicitly {@link casper.ContinuationAtNameQuery.verify|verify} messages.
     * @param message ContinuationAtNameQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IContinuationAtNameQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ContinuationAtNameQuery message, length delimited. Does not implicitly {@link casper.ContinuationAtNameQuery.verify|verify} messages.
     * @param message ContinuationAtNameQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IContinuationAtNameQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ContinuationAtNameQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContinuationAtNameQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ContinuationAtNameQuery;

    /**
     * Decodes a ContinuationAtNameQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContinuationAtNameQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ContinuationAtNameQuery;

    /**
     * Verifies a ContinuationAtNameQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ContinuationAtNameQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContinuationAtNameQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ContinuationAtNameQuery;

    /**
     * Creates a plain object from a ContinuationAtNameQuery message. Also converts values to other types if specified.
     * @param message ContinuationAtNameQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ContinuationAtNameQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ContinuationAtNameQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a VisualizeDagQuery. */
  interface IVisualizeDagQuery {
    /** VisualizeDagQuery depth */
    depth?: number | null;

    /** VisualizeDagQuery showJustificationLines */
    showJustificationLines?: boolean | null;

    /** VisualizeDagQuery startBlockNumber */
    startBlockNumber?: number | null;
  }

  /** Represents a VisualizeDagQuery. */
  class VisualizeDagQuery implements IVisualizeDagQuery {
    /**
     * Constructs a new VisualizeDagQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IVisualizeDagQuery);

    /** VisualizeDagQuery depth. */
    public depth: number;

    /** VisualizeDagQuery showJustificationLines. */
    public showJustificationLines: boolean;

    /** VisualizeDagQuery startBlockNumber. */
    public startBlockNumber: number;

    /**
     * Creates a new VisualizeDagQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VisualizeDagQuery instance
     */
    public static create(
      properties?: casper.IVisualizeDagQuery
    ): casper.VisualizeDagQuery;

    /**
     * Encodes the specified VisualizeDagQuery message. Does not implicitly {@link casper.VisualizeDagQuery.verify|verify} messages.
     * @param message VisualizeDagQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IVisualizeDagQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified VisualizeDagQuery message, length delimited. Does not implicitly {@link casper.VisualizeDagQuery.verify|verify} messages.
     * @param message VisualizeDagQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IVisualizeDagQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a VisualizeDagQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VisualizeDagQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.VisualizeDagQuery;

    /**
     * Decodes a VisualizeDagQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VisualizeDagQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.VisualizeDagQuery;

    /**
     * Verifies a VisualizeDagQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a VisualizeDagQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VisualizeDagQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.VisualizeDagQuery;

    /**
     * Creates a plain object from a VisualizeDagQuery message. Also converts values to other types if specified.
     * @param message VisualizeDagQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.VisualizeDagQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this VisualizeDagQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a MachineVerifyQuery. */
  interface IMachineVerifyQuery {}

  /** Represents a MachineVerifyQuery. */
  class MachineVerifyQuery implements IMachineVerifyQuery {
    /**
     * Constructs a new MachineVerifyQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IMachineVerifyQuery);

    /**
     * Creates a new MachineVerifyQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MachineVerifyQuery instance
     */
    public static create(
      properties?: casper.IMachineVerifyQuery
    ): casper.MachineVerifyQuery;

    /**
     * Encodes the specified MachineVerifyQuery message. Does not implicitly {@link casper.MachineVerifyQuery.verify|verify} messages.
     * @param message MachineVerifyQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IMachineVerifyQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MachineVerifyQuery message, length delimited. Does not implicitly {@link casper.MachineVerifyQuery.verify|verify} messages.
     * @param message MachineVerifyQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IMachineVerifyQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MachineVerifyQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MachineVerifyQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.MachineVerifyQuery;

    /**
     * Decodes a MachineVerifyQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MachineVerifyQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.MachineVerifyQuery;

    /**
     * Verifies a MachineVerifyQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MachineVerifyQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MachineVerifyQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.MachineVerifyQuery;

    /**
     * Creates a plain object from a MachineVerifyQuery message. Also converts values to other types if specified.
     * @param message MachineVerifyQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.MachineVerifyQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MachineVerifyQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PrivateNamePreviewQuery. */
  interface IPrivateNamePreviewQuery {
    /** PrivateNamePreviewQuery user */
    user?: Uint8Array | null;

    /** PrivateNamePreviewQuery timestamp */
    timestamp?: number | Long | null;

    /** PrivateNamePreviewQuery nameQty */
    nameQty?: number | null;
  }

  /** Represents a PrivateNamePreviewQuery. */
  class PrivateNamePreviewQuery implements IPrivateNamePreviewQuery {
    /**
     * Constructs a new PrivateNamePreviewQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IPrivateNamePreviewQuery);

    /** PrivateNamePreviewQuery user. */
    public user: Uint8Array;

    /** PrivateNamePreviewQuery timestamp. */
    public timestamp: number | Long;

    /** PrivateNamePreviewQuery nameQty. */
    public nameQty: number;

    /**
     * Creates a new PrivateNamePreviewQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrivateNamePreviewQuery instance
     */
    public static create(
      properties?: casper.IPrivateNamePreviewQuery
    ): casper.PrivateNamePreviewQuery;

    /**
     * Encodes the specified PrivateNamePreviewQuery message. Does not implicitly {@link casper.PrivateNamePreviewQuery.verify|verify} messages.
     * @param message PrivateNamePreviewQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IPrivateNamePreviewQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PrivateNamePreviewQuery message, length delimited. Does not implicitly {@link casper.PrivateNamePreviewQuery.verify|verify} messages.
     * @param message PrivateNamePreviewQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IPrivateNamePreviewQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PrivateNamePreviewQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrivateNamePreviewQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.PrivateNamePreviewQuery;

    /**
     * Decodes a PrivateNamePreviewQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrivateNamePreviewQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.PrivateNamePreviewQuery;

    /**
     * Verifies a PrivateNamePreviewQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PrivateNamePreviewQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrivateNamePreviewQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.PrivateNamePreviewQuery;

    /**
     * Creates a plain object from a PrivateNamePreviewQuery message. Also converts values to other types if specified.
     * @param message PrivateNamePreviewQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.PrivateNamePreviewQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PrivateNamePreviewQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a LastFinalizedBlockQuery. */
  interface ILastFinalizedBlockQuery {}

  /** Represents a LastFinalizedBlockQuery. */
  class LastFinalizedBlockQuery implements ILastFinalizedBlockQuery {
    /**
     * Constructs a new LastFinalizedBlockQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ILastFinalizedBlockQuery);

    /**
     * Creates a new LastFinalizedBlockQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LastFinalizedBlockQuery instance
     */
    public static create(
      properties?: casper.ILastFinalizedBlockQuery
    ): casper.LastFinalizedBlockQuery;

    /**
     * Encodes the specified LastFinalizedBlockQuery message. Does not implicitly {@link casper.LastFinalizedBlockQuery.verify|verify} messages.
     * @param message LastFinalizedBlockQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ILastFinalizedBlockQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LastFinalizedBlockQuery message, length delimited. Does not implicitly {@link casper.LastFinalizedBlockQuery.verify|verify} messages.
     * @param message LastFinalizedBlockQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ILastFinalizedBlockQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LastFinalizedBlockQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LastFinalizedBlockQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.LastFinalizedBlockQuery;

    /**
     * Decodes a LastFinalizedBlockQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LastFinalizedBlockQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.LastFinalizedBlockQuery;

    /**
     * Verifies a LastFinalizedBlockQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LastFinalizedBlockQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LastFinalizedBlockQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.LastFinalizedBlockQuery;

    /**
     * Creates a plain object from a LastFinalizedBlockQuery message. Also converts values to other types if specified.
     * @param message LastFinalizedBlockQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.LastFinalizedBlockQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LastFinalizedBlockQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an IsFinalizedQuery. */
  interface IIsFinalizedQuery {
    /** IsFinalizedQuery hash */
    hash?: string | null;
  }

  /** Represents an IsFinalizedQuery. */
  class IsFinalizedQuery implements IIsFinalizedQuery {
    /**
     * Constructs a new IsFinalizedQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IIsFinalizedQuery);

    /** IsFinalizedQuery hash. */
    public hash: string;

    /**
     * Creates a new IsFinalizedQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IsFinalizedQuery instance
     */
    public static create(
      properties?: casper.IIsFinalizedQuery
    ): casper.IsFinalizedQuery;

    /**
     * Encodes the specified IsFinalizedQuery message. Does not implicitly {@link casper.IsFinalizedQuery.verify|verify} messages.
     * @param message IsFinalizedQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IIsFinalizedQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified IsFinalizedQuery message, length delimited. Does not implicitly {@link casper.IsFinalizedQuery.verify|verify} messages.
     * @param message IsFinalizedQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IIsFinalizedQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an IsFinalizedQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IsFinalizedQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.IsFinalizedQuery;

    /**
     * Decodes an IsFinalizedQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IsFinalizedQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.IsFinalizedQuery;

    /**
     * Verifies an IsFinalizedQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an IsFinalizedQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IsFinalizedQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.IsFinalizedQuery;

    /**
     * Creates a plain object from an IsFinalizedQuery message. Also converts values to other types if specified.
     * @param message IsFinalizedQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.IsFinalizedQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this IsFinalizedQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BondStatusQuery. */
  interface IBondStatusQuery {
    /** BondStatusQuery publicKey */
    publicKey?: Uint8Array | null;
  }

  /** Represents a BondStatusQuery. */
  class BondStatusQuery implements IBondStatusQuery {
    /**
     * Constructs a new BondStatusQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBondStatusQuery);

    /** BondStatusQuery publicKey. */
    public publicKey: Uint8Array;

    /**
     * Creates a new BondStatusQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BondStatusQuery instance
     */
    public static create(
      properties?: casper.IBondStatusQuery
    ): casper.BondStatusQuery;

    /**
     * Encodes the specified BondStatusQuery message. Does not implicitly {@link casper.BondStatusQuery.verify|verify} messages.
     * @param message BondStatusQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBondStatusQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BondStatusQuery message, length delimited. Does not implicitly {@link casper.BondStatusQuery.verify|verify} messages.
     * @param message BondStatusQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBondStatusQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BondStatusQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BondStatusQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BondStatusQuery;

    /**
     * Decodes a BondStatusQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BondStatusQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BondStatusQuery;

    /**
     * Verifies a BondStatusQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BondStatusQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BondStatusQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BondStatusQuery;

    /**
     * Creates a plain object from a BondStatusQuery message. Also converts values to other types if specified.
     * @param message BondStatusQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BondStatusQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BondStatusQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an ExploratoryDeployQuery. */
  interface IExploratoryDeployQuery {
    /** ExploratoryDeployQuery term */
    term?: string | null;

    /** ExploratoryDeployQuery blockHash */
    blockHash?: string | null;

    /** ExploratoryDeployQuery usePreStateHash */
    usePreStateHash?: boolean | null;
  }

  /** Represents an ExploratoryDeployQuery. */
  class ExploratoryDeployQuery implements IExploratoryDeployQuery {
    /**
     * Constructs a new ExploratoryDeployQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IExploratoryDeployQuery);

    /** ExploratoryDeployQuery term. */
    public term: string;

    /** ExploratoryDeployQuery blockHash. */
    public blockHash: string;

    /** ExploratoryDeployQuery usePreStateHash. */
    public usePreStateHash: boolean;

    /**
     * Creates a new ExploratoryDeployQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExploratoryDeployQuery instance
     */
    public static create(
      properties?: casper.IExploratoryDeployQuery
    ): casper.ExploratoryDeployQuery;

    /**
     * Encodes the specified ExploratoryDeployQuery message. Does not implicitly {@link casper.ExploratoryDeployQuery.verify|verify} messages.
     * @param message ExploratoryDeployQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IExploratoryDeployQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ExploratoryDeployQuery message, length delimited. Does not implicitly {@link casper.ExploratoryDeployQuery.verify|verify} messages.
     * @param message ExploratoryDeployQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IExploratoryDeployQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an ExploratoryDeployQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExploratoryDeployQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ExploratoryDeployQuery;

    /**
     * Decodes an ExploratoryDeployQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExploratoryDeployQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ExploratoryDeployQuery;

    /**
     * Verifies an ExploratoryDeployQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an ExploratoryDeployQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExploratoryDeployQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ExploratoryDeployQuery;

    /**
     * Creates a plain object from an ExploratoryDeployQuery message. Also converts values to other types if specified.
     * @param message ExploratoryDeployQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ExploratoryDeployQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ExploratoryDeployQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BondInfo. */
  interface IBondInfo {
    /** BondInfo validator */
    validator?: string | null;

    /** BondInfo stake */
    stake?: number | Long | null;
  }

  /** Represents a BondInfo. */
  class BondInfo implements IBondInfo {
    /**
     * Constructs a new BondInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBondInfo);

    /** BondInfo validator. */
    public validator: string;

    /** BondInfo stake. */
    public stake: number | Long;

    /**
     * Creates a new BondInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BondInfo instance
     */
    public static create(properties?: casper.IBondInfo): casper.BondInfo;

    /**
     * Encodes the specified BondInfo message. Does not implicitly {@link casper.BondInfo.verify|verify} messages.
     * @param message BondInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBondInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BondInfo message, length delimited. Does not implicitly {@link casper.BondInfo.verify|verify} messages.
     * @param message BondInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBondInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BondInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BondInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BondInfo;

    /**
     * Decodes a BondInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BondInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BondInfo;

    /**
     * Verifies a BondInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BondInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BondInfo
     */
    public static fromObject(object: { [k: string]: any }): casper.BondInfo;

    /**
     * Creates a plain object from a BondInfo message. Also converts values to other types if specified.
     * @param message BondInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BondInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BondInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a JustificationInfo. */
  interface IJustificationInfo {
    /** JustificationInfo validator */
    validator?: string | null;

    /** JustificationInfo latestBlockHash */
    latestBlockHash?: string | null;
  }

  /** Represents a JustificationInfo. */
  class JustificationInfo implements IJustificationInfo {
    /**
     * Constructs a new JustificationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IJustificationInfo);

    /** JustificationInfo validator. */
    public validator: string;

    /** JustificationInfo latestBlockHash. */
    public latestBlockHash: string;

    /**
     * Creates a new JustificationInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JustificationInfo instance
     */
    public static create(
      properties?: casper.IJustificationInfo
    ): casper.JustificationInfo;

    /**
     * Encodes the specified JustificationInfo message. Does not implicitly {@link casper.JustificationInfo.verify|verify} messages.
     * @param message JustificationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IJustificationInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified JustificationInfo message, length delimited. Does not implicitly {@link casper.JustificationInfo.verify|verify} messages.
     * @param message JustificationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IJustificationInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a JustificationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JustificationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.JustificationInfo;

    /**
     * Decodes a JustificationInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JustificationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.JustificationInfo;

    /**
     * Verifies a JustificationInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a JustificationInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JustificationInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.JustificationInfo;

    /**
     * Creates a plain object from a JustificationInfo message. Also converts values to other types if specified.
     * @param message JustificationInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.JustificationInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this JustificationInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DeployInfo. */
  interface IDeployInfo {
    /** DeployInfo deployer */
    deployer?: string | null;

    /** DeployInfo term */
    term?: string | null;

    /** DeployInfo timestamp */
    timestamp?: number | Long | null;

    /** DeployInfo sig */
    sig?: string | null;

    /** DeployInfo sigAlgorithm */
    sigAlgorithm?: string | null;

    /** DeployInfo phloPrice */
    phloPrice?: number | Long | null;

    /** DeployInfo phloLimit */
    phloLimit?: number | Long | null;

    /** DeployInfo validAfterBlockNumber */
    validAfterBlockNumber?: number | Long | null;

    /** DeployInfo cost */
    cost?: number | Long | null;

    /** DeployInfo errored */
    errored?: boolean | null;

    /** DeployInfo systemDeployError */
    systemDeployError?: string | null;
  }

  /** Represents a DeployInfo. */
  class DeployInfo implements IDeployInfo {
    /**
     * Constructs a new DeployInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IDeployInfo);

    /** DeployInfo deployer. */
    public deployer: string;

    /** DeployInfo term. */
    public term: string;

    /** DeployInfo timestamp. */
    public timestamp: number | Long;

    /** DeployInfo sig. */
    public sig: string;

    /** DeployInfo sigAlgorithm. */
    public sigAlgorithm: string;

    /** DeployInfo phloPrice. */
    public phloPrice: number | Long;

    /** DeployInfo phloLimit. */
    public phloLimit: number | Long;

    /** DeployInfo validAfterBlockNumber. */
    public validAfterBlockNumber: number | Long;

    /** DeployInfo cost. */
    public cost: number | Long;

    /** DeployInfo errored. */
    public errored: boolean;

    /** DeployInfo systemDeployError. */
    public systemDeployError: string;

    /**
     * Creates a new DeployInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeployInfo instance
     */
    public static create(properties?: casper.IDeployInfo): casper.DeployInfo;

    /**
     * Encodes the specified DeployInfo message. Does not implicitly {@link casper.DeployInfo.verify|verify} messages.
     * @param message DeployInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IDeployInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeployInfo message, length delimited. Does not implicitly {@link casper.DeployInfo.verify|verify} messages.
     * @param message DeployInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IDeployInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeployInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeployInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.DeployInfo;

    /**
     * Decodes a DeployInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeployInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.DeployInfo;

    /**
     * Verifies a DeployInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeployInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeployInfo
     */
    public static fromObject(object: { [k: string]: any }): casper.DeployInfo;

    /**
     * Creates a plain object from a DeployInfo message. Also converts values to other types if specified.
     * @param message DeployInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.DeployInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeployInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a LightBlockInfo. */
  interface ILightBlockInfo {
    /** LightBlockInfo blockHash */
    blockHash?: string | null;

    /** LightBlockInfo sender */
    sender?: string | null;

    /** LightBlockInfo seqNum */
    seqNum?: number | Long | null;

    /** LightBlockInfo sig */
    sig?: string | null;

    /** LightBlockInfo sigAlgorithm */
    sigAlgorithm?: string | null;

    /** LightBlockInfo shardId */
    shardId?: string | null;

    /** LightBlockInfo extraBytes */
    extraBytes?: Uint8Array | null;

    /** LightBlockInfo version */
    version?: number | Long | null;

    /** LightBlockInfo timestamp */
    timestamp?: number | Long | null;

    /** LightBlockInfo headerExtraBytes */
    headerExtraBytes?: Uint8Array | null;

    /** LightBlockInfo parentsHashList */
    parentsHashList?: string[] | null;

    /** LightBlockInfo blockNumber */
    blockNumber?: number | Long | null;

    /** LightBlockInfo preStateHash */
    preStateHash?: string | null;

    /** LightBlockInfo postStateHash */
    postStateHash?: string | null;

    /** LightBlockInfo bodyExtraBytes */
    bodyExtraBytes?: Uint8Array | null;

    /** LightBlockInfo bonds */
    bonds?: casper.IBondInfo[] | null;

    /** LightBlockInfo blockSize */
    blockSize?: string | null;

    /** LightBlockInfo deployCount */
    deployCount?: number | null;

    /** LightBlockInfo faultTolerance */
    faultTolerance?: number | null;

    /** LightBlockInfo justifications */
    justifications?: casper.IJustificationInfo[] | null;
  }

  /** Represents a LightBlockInfo. */
  class LightBlockInfo implements ILightBlockInfo {
    /**
     * Constructs a new LightBlockInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ILightBlockInfo);

    /** LightBlockInfo blockHash. */
    public blockHash: string;

    /** LightBlockInfo sender. */
    public sender: string;

    /** LightBlockInfo seqNum. */
    public seqNum: number | Long;

    /** LightBlockInfo sig. */
    public sig: string;

    /** LightBlockInfo sigAlgorithm. */
    public sigAlgorithm: string;

    /** LightBlockInfo shardId. */
    public shardId: string;

    /** LightBlockInfo extraBytes. */
    public extraBytes: Uint8Array;

    /** LightBlockInfo version. */
    public version: number | Long;

    /** LightBlockInfo timestamp. */
    public timestamp: number | Long;

    /** LightBlockInfo headerExtraBytes. */
    public headerExtraBytes: Uint8Array;

    /** LightBlockInfo parentsHashList. */
    public parentsHashList: string[];

    /** LightBlockInfo blockNumber. */
    public blockNumber: number | Long;

    /** LightBlockInfo preStateHash. */
    public preStateHash: string;

    /** LightBlockInfo postStateHash. */
    public postStateHash: string;

    /** LightBlockInfo bodyExtraBytes. */
    public bodyExtraBytes: Uint8Array;

    /** LightBlockInfo bonds. */
    public bonds: casper.IBondInfo[];

    /** LightBlockInfo blockSize. */
    public blockSize: string;

    /** LightBlockInfo deployCount. */
    public deployCount: number;

    /** LightBlockInfo faultTolerance. */
    public faultTolerance: number;

    /** LightBlockInfo justifications. */
    public justifications: casper.IJustificationInfo[];

    /**
     * Creates a new LightBlockInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LightBlockInfo instance
     */
    public static create(
      properties?: casper.ILightBlockInfo
    ): casper.LightBlockInfo;

    /**
     * Encodes the specified LightBlockInfo message. Does not implicitly {@link casper.LightBlockInfo.verify|verify} messages.
     * @param message LightBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ILightBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LightBlockInfo message, length delimited. Does not implicitly {@link casper.LightBlockInfo.verify|verify} messages.
     * @param message LightBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ILightBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LightBlockInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LightBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.LightBlockInfo;

    /**
     * Decodes a LightBlockInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LightBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.LightBlockInfo;

    /**
     * Verifies a LightBlockInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LightBlockInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LightBlockInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.LightBlockInfo;

    /**
     * Creates a plain object from a LightBlockInfo message. Also converts values to other types if specified.
     * @param message LightBlockInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.LightBlockInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LightBlockInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockInfo. */
  interface IBlockInfo {
    /** BlockInfo blockInfo */
    blockInfo?: casper.ILightBlockInfo | null;

    /** BlockInfo deploys */
    deploys?: casper.IDeployInfo[] | null;
  }

  /** Represents a BlockInfo. */
  class BlockInfo implements IBlockInfo {
    /**
     * Constructs a new BlockInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockInfo);

    /** BlockInfo blockInfo. */
    public blockInfo?: casper.ILightBlockInfo | null;

    /** BlockInfo deploys. */
    public deploys: casper.IDeployInfo[];

    /**
     * Creates a new BlockInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockInfo instance
     */
    public static create(properties?: casper.IBlockInfo): casper.BlockInfo;

    /**
     * Encodes the specified BlockInfo message. Does not implicitly {@link casper.BlockInfo.verify|verify} messages.
     * @param message BlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockInfo message, length delimited. Does not implicitly {@link casper.BlockInfo.verify|verify} messages.
     * @param message BlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockInfo;

    /**
     * Decodes a BlockInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockInfo;

    /**
     * Verifies a BlockInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockInfo
     */
    public static fromObject(object: { [k: string]: any }): casper.BlockInfo;

    /**
     * Creates a plain object from a BlockInfo message. Also converts values to other types if specified.
     * @param message BlockInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DataWithBlockInfo. */
  interface IDataWithBlockInfo {
    /** DataWithBlockInfo postBlockData */
    postBlockData?: IPar[] | null;

    /** DataWithBlockInfo block */
    block?: casper.ILightBlockInfo | null;
  }

  /** Represents a DataWithBlockInfo. */
  class DataWithBlockInfo implements IDataWithBlockInfo {
    /**
     * Constructs a new DataWithBlockInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IDataWithBlockInfo);

    /** DataWithBlockInfo postBlockData. */
    public postBlockData: IPar[];

    /** DataWithBlockInfo block. */
    public block?: casper.ILightBlockInfo | null;

    /**
     * Creates a new DataWithBlockInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataWithBlockInfo instance
     */
    public static create(
      properties?: casper.IDataWithBlockInfo
    ): casper.DataWithBlockInfo;

    /**
     * Encodes the specified DataWithBlockInfo message. Does not implicitly {@link casper.DataWithBlockInfo.verify|verify} messages.
     * @param message DataWithBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IDataWithBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DataWithBlockInfo message, length delimited. Does not implicitly {@link casper.DataWithBlockInfo.verify|verify} messages.
     * @param message DataWithBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IDataWithBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DataWithBlockInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataWithBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.DataWithBlockInfo;

    /**
     * Decodes a DataWithBlockInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataWithBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.DataWithBlockInfo;

    /**
     * Verifies a DataWithBlockInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DataWithBlockInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataWithBlockInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.DataWithBlockInfo;

    /**
     * Creates a plain object from a DataWithBlockInfo message. Also converts values to other types if specified.
     * @param message DataWithBlockInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.DataWithBlockInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DataWithBlockInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ContinuationsWithBlockInfo. */
  interface IContinuationsWithBlockInfo {
    /** ContinuationsWithBlockInfo postBlockContinuations */
    postBlockContinuations?: casper.IWaitingContinuationInfo[] | null;

    /** ContinuationsWithBlockInfo block */
    block?: casper.ILightBlockInfo | null;
  }

  /** Represents a ContinuationsWithBlockInfo. */
  class ContinuationsWithBlockInfo implements IContinuationsWithBlockInfo {
    /**
     * Constructs a new ContinuationsWithBlockInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IContinuationsWithBlockInfo);

    /** ContinuationsWithBlockInfo postBlockContinuations. */
    public postBlockContinuations: casper.IWaitingContinuationInfo[];

    /** ContinuationsWithBlockInfo block. */
    public block?: casper.ILightBlockInfo | null;

    /**
     * Creates a new ContinuationsWithBlockInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContinuationsWithBlockInfo instance
     */
    public static create(
      properties?: casper.IContinuationsWithBlockInfo
    ): casper.ContinuationsWithBlockInfo;

    /**
     * Encodes the specified ContinuationsWithBlockInfo message. Does not implicitly {@link casper.ContinuationsWithBlockInfo.verify|verify} messages.
     * @param message ContinuationsWithBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IContinuationsWithBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ContinuationsWithBlockInfo message, length delimited. Does not implicitly {@link casper.ContinuationsWithBlockInfo.verify|verify} messages.
     * @param message ContinuationsWithBlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IContinuationsWithBlockInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ContinuationsWithBlockInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContinuationsWithBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ContinuationsWithBlockInfo;

    /**
     * Decodes a ContinuationsWithBlockInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContinuationsWithBlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ContinuationsWithBlockInfo;

    /**
     * Verifies a ContinuationsWithBlockInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ContinuationsWithBlockInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContinuationsWithBlockInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ContinuationsWithBlockInfo;

    /**
     * Creates a plain object from a ContinuationsWithBlockInfo message. Also converts values to other types if specified.
     * @param message ContinuationsWithBlockInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ContinuationsWithBlockInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ContinuationsWithBlockInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a WaitingContinuationInfo. */
  interface IWaitingContinuationInfo {
    /** WaitingContinuationInfo postBlockPatterns */
    postBlockPatterns?: IBindPattern[] | null;

    /** WaitingContinuationInfo postBlockContinuation */
    postBlockContinuation?: IPar | null;
  }

  /** Represents a WaitingContinuationInfo. */
  class WaitingContinuationInfo implements IWaitingContinuationInfo {
    /**
     * Constructs a new WaitingContinuationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IWaitingContinuationInfo);

    /** WaitingContinuationInfo postBlockPatterns. */
    public postBlockPatterns: IBindPattern[];

    /** WaitingContinuationInfo postBlockContinuation. */
    public postBlockContinuation?: IPar | null;

    /**
     * Creates a new WaitingContinuationInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WaitingContinuationInfo instance
     */
    public static create(
      properties?: casper.IWaitingContinuationInfo
    ): casper.WaitingContinuationInfo;

    /**
     * Encodes the specified WaitingContinuationInfo message. Does not implicitly {@link casper.WaitingContinuationInfo.verify|verify} messages.
     * @param message WaitingContinuationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IWaitingContinuationInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WaitingContinuationInfo message, length delimited. Does not implicitly {@link casper.WaitingContinuationInfo.verify|verify} messages.
     * @param message WaitingContinuationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IWaitingContinuationInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WaitingContinuationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WaitingContinuationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.WaitingContinuationInfo;

    /**
     * Decodes a WaitingContinuationInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WaitingContinuationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.WaitingContinuationInfo;

    /**
     * Verifies a WaitingContinuationInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a WaitingContinuationInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WaitingContinuationInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.WaitingContinuationInfo;

    /**
     * Creates a plain object from a WaitingContinuationInfo message. Also converts values to other types if specified.
     * @param message WaitingContinuationInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.WaitingContinuationInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WaitingContinuationInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ReportProduceProto. */
  interface IReportProduceProto {
    /** ReportProduceProto channel */
    channel?: IPar | null;

    /** ReportProduceProto data */
    data?: IListParWithRandom | null;
  }

  /** Represents a ReportProduceProto. */
  class ReportProduceProto implements IReportProduceProto {
    /**
     * Constructs a new ReportProduceProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IReportProduceProto);

    /** ReportProduceProto channel. */
    public channel?: IPar | null;

    /** ReportProduceProto data. */
    public data?: IListParWithRandom | null;

    /**
     * Creates a new ReportProduceProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportProduceProto instance
     */
    public static create(
      properties?: casper.IReportProduceProto
    ): casper.ReportProduceProto;

    /**
     * Encodes the specified ReportProduceProto message. Does not implicitly {@link casper.ReportProduceProto.verify|verify} messages.
     * @param message ReportProduceProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IReportProduceProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReportProduceProto message, length delimited. Does not implicitly {@link casper.ReportProduceProto.verify|verify} messages.
     * @param message ReportProduceProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IReportProduceProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReportProduceProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportProduceProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ReportProduceProto;

    /**
     * Decodes a ReportProduceProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportProduceProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ReportProduceProto;

    /**
     * Verifies a ReportProduceProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ReportProduceProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportProduceProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ReportProduceProto;

    /**
     * Creates a plain object from a ReportProduceProto message. Also converts values to other types if specified.
     * @param message ReportProduceProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ReportProduceProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReportProduceProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ReportConsumeProto. */
  interface IReportConsumeProto {
    /** ReportConsumeProto channels */
    channels?: IPar[] | null;

    /** ReportConsumeProto patterns */
    patterns?: IBindPattern[] | null;

    /** ReportConsumeProto peeks */
    peeks?: casper.IPeekProto[] | null;
  }

  /** Represents a ReportConsumeProto. */
  class ReportConsumeProto implements IReportConsumeProto {
    /**
     * Constructs a new ReportConsumeProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IReportConsumeProto);

    /** ReportConsumeProto channels. */
    public channels: IPar[];

    /** ReportConsumeProto patterns. */
    public patterns: IBindPattern[];

    /** ReportConsumeProto peeks. */
    public peeks: casper.IPeekProto[];

    /**
     * Creates a new ReportConsumeProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportConsumeProto instance
     */
    public static create(
      properties?: casper.IReportConsumeProto
    ): casper.ReportConsumeProto;

    /**
     * Encodes the specified ReportConsumeProto message. Does not implicitly {@link casper.ReportConsumeProto.verify|verify} messages.
     * @param message ReportConsumeProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IReportConsumeProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReportConsumeProto message, length delimited. Does not implicitly {@link casper.ReportConsumeProto.verify|verify} messages.
     * @param message ReportConsumeProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IReportConsumeProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReportConsumeProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportConsumeProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ReportConsumeProto;

    /**
     * Decodes a ReportConsumeProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportConsumeProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ReportConsumeProto;

    /**
     * Verifies a ReportConsumeProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ReportConsumeProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportConsumeProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ReportConsumeProto;

    /**
     * Creates a plain object from a ReportConsumeProto message. Also converts values to other types if specified.
     * @param message ReportConsumeProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ReportConsumeProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReportConsumeProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ReportCommProto. */
  interface IReportCommProto {
    /** ReportCommProto consume */
    consume?: casper.IReportConsumeProto | null;

    /** ReportCommProto produces */
    produces?: casper.IReportProduceProto[] | null;
  }

  /** Represents a ReportCommProto. */
  class ReportCommProto implements IReportCommProto {
    /**
     * Constructs a new ReportCommProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IReportCommProto);

    /** ReportCommProto consume. */
    public consume?: casper.IReportConsumeProto | null;

    /** ReportCommProto produces. */
    public produces: casper.IReportProduceProto[];

    /**
     * Creates a new ReportCommProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportCommProto instance
     */
    public static create(
      properties?: casper.IReportCommProto
    ): casper.ReportCommProto;

    /**
     * Encodes the specified ReportCommProto message. Does not implicitly {@link casper.ReportCommProto.verify|verify} messages.
     * @param message ReportCommProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IReportCommProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReportCommProto message, length delimited. Does not implicitly {@link casper.ReportCommProto.verify|verify} messages.
     * @param message ReportCommProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IReportCommProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReportCommProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportCommProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ReportCommProto;

    /**
     * Decodes a ReportCommProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportCommProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ReportCommProto;

    /**
     * Verifies a ReportCommProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ReportCommProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportCommProto
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.ReportCommProto;

    /**
     * Creates a plain object from a ReportCommProto message. Also converts values to other types if specified.
     * @param message ReportCommProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ReportCommProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReportCommProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ReportProto. */
  interface IReportProto {
    /** ReportProto produce */
    produce?: casper.IReportProduceProto | null;

    /** ReportProto consume */
    consume?: casper.IReportConsumeProto | null;

    /** ReportProto comm */
    comm?: casper.IReportCommProto | null;
  }

  /** Represents a ReportProto. */
  class ReportProto implements IReportProto {
    /**
     * Constructs a new ReportProto.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IReportProto);

    /** ReportProto produce. */
    public produce?: casper.IReportProduceProto | null;

    /** ReportProto consume. */
    public consume?: casper.IReportConsumeProto | null;

    /** ReportProto comm. */
    public comm?: casper.IReportCommProto | null;

    /** ReportProto report. */
    public report?: "produce" | "consume" | "comm";

    /**
     * Creates a new ReportProto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportProto instance
     */
    public static create(properties?: casper.IReportProto): casper.ReportProto;

    /**
     * Encodes the specified ReportProto message. Does not implicitly {@link casper.ReportProto.verify|verify} messages.
     * @param message ReportProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IReportProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReportProto message, length delimited. Does not implicitly {@link casper.ReportProto.verify|verify} messages.
     * @param message ReportProto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IReportProto,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ReportProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.ReportProto;

    /**
     * Decodes a ReportProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.ReportProto;

    /**
     * Verifies a ReportProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ReportProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportProto
     */
    public static fromObject(object: { [k: string]: any }): casper.ReportProto;

    /**
     * Creates a plain object from a ReportProto message. Also converts values to other types if specified.
     * @param message ReportProto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.ReportProto,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ReportProto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a SingleReport. */
  interface ISingleReport {
    /** SingleReport events */
    events?: casper.IReportProto[] | null;
  }

  /** Represents a SingleReport. */
  class SingleReport implements ISingleReport {
    /**
     * Constructs a new SingleReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.ISingleReport);

    /** SingleReport events. */
    public events: casper.IReportProto[];

    /**
     * Creates a new SingleReport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleReport instance
     */
    public static create(
      properties?: casper.ISingleReport
    ): casper.SingleReport;

    /**
     * Encodes the specified SingleReport message. Does not implicitly {@link casper.SingleReport.verify|verify} messages.
     * @param message SingleReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.ISingleReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SingleReport message, length delimited. Does not implicitly {@link casper.SingleReport.verify|verify} messages.
     * @param message SingleReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.ISingleReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SingleReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SingleReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.SingleReport;

    /**
     * Decodes a SingleReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SingleReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.SingleReport;

    /**
     * Verifies a SingleReport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SingleReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SingleReport
     */
    public static fromObject(object: { [k: string]: any }): casper.SingleReport;

    /**
     * Creates a plain object from a SingleReport message. Also converts values to other types if specified.
     * @param message SingleReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.SingleReport,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SingleReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DeployInfoWithEventData. */
  interface IDeployInfoWithEventData {
    /** DeployInfoWithEventData deployInfo */
    deployInfo?: casper.IDeployInfo | null;

    /** DeployInfoWithEventData report */
    report?: casper.ISingleReport[] | null;
  }

  /** Represents a DeployInfoWithEventData. */
  class DeployInfoWithEventData implements IDeployInfoWithEventData {
    /**
     * Constructs a new DeployInfoWithEventData.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IDeployInfoWithEventData);

    /** DeployInfoWithEventData deployInfo. */
    public deployInfo?: casper.IDeployInfo | null;

    /** DeployInfoWithEventData report. */
    public report: casper.ISingleReport[];

    /**
     * Creates a new DeployInfoWithEventData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeployInfoWithEventData instance
     */
    public static create(
      properties?: casper.IDeployInfoWithEventData
    ): casper.DeployInfoWithEventData;

    /**
     * Encodes the specified DeployInfoWithEventData message. Does not implicitly {@link casper.DeployInfoWithEventData.verify|verify} messages.
     * @param message DeployInfoWithEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IDeployInfoWithEventData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeployInfoWithEventData message, length delimited. Does not implicitly {@link casper.DeployInfoWithEventData.verify|verify} messages.
     * @param message DeployInfoWithEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IDeployInfoWithEventData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeployInfoWithEventData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeployInfoWithEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.DeployInfoWithEventData;

    /**
     * Decodes a DeployInfoWithEventData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeployInfoWithEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.DeployInfoWithEventData;

    /**
     * Verifies a DeployInfoWithEventData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeployInfoWithEventData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeployInfoWithEventData
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.DeployInfoWithEventData;

    /**
     * Creates a plain object from a DeployInfoWithEventData message. Also converts values to other types if specified.
     * @param message DeployInfoWithEventData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.DeployInfoWithEventData,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeployInfoWithEventData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BlockEventInfo. */
  interface IBlockEventInfo {
    /** BlockEventInfo blockInfo */
    blockInfo?: casper.ILightBlockInfo | null;

    /** BlockEventInfo deploys */
    deploys?: casper.IDeployInfoWithEventData[] | null;
  }

  /** Represents a BlockEventInfo. */
  class BlockEventInfo implements IBlockEventInfo {
    /**
     * Constructs a new BlockEventInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IBlockEventInfo);

    /** BlockEventInfo blockInfo. */
    public blockInfo?: casper.ILightBlockInfo | null;

    /** BlockEventInfo deploys. */
    public deploys: casper.IDeployInfoWithEventData[];

    /**
     * Creates a new BlockEventInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockEventInfo instance
     */
    public static create(
      properties?: casper.IBlockEventInfo
    ): casper.BlockEventInfo;

    /**
     * Encodes the specified BlockEventInfo message. Does not implicitly {@link casper.BlockEventInfo.verify|verify} messages.
     * @param message BlockEventInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IBlockEventInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BlockEventInfo message, length delimited. Does not implicitly {@link casper.BlockEventInfo.verify|verify} messages.
     * @param message BlockEventInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IBlockEventInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BlockEventInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockEventInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.BlockEventInfo;

    /**
     * Decodes a BlockEventInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockEventInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.BlockEventInfo;

    /**
     * Verifies a BlockEventInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BlockEventInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockEventInfo
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.BlockEventInfo;

    /**
     * Creates a plain object from a BlockEventInfo message. Also converts values to other types if specified.
     * @param message BlockEventInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.BlockEventInfo,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BlockEventInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Namespace v1. */
  namespace v1 {
    /** Represents a DeployService */
    class DeployService extends $protobuf.rpc.Service {
      /**
       * Constructs a new DeployService service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      );

      /**
       * Creates new DeployService service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      ): DeployService;

      /**
       * Calls doDeploy.
       * @param request DeployDataProto message or plain object
       * @param callback Node-style callback called with the error, if any, and DeployResponse
       */
      public doDeploy(
        request: casper.IDeployDataProto,
        callback: casper.v1.DeployService.doDeployCallback
      ): void;

      /**
       * Calls doDeploy.
       * @param request DeployDataProto message or plain object
       * @returns Promise
       */
      public doDeploy(
        request: casper.IDeployDataProto
      ): Promise<casper.v1.DeployResponse>;

      /**
       * Calls getBlock.
       * @param request BlockQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and BlockResponse
       */
      public getBlock(
        request: casper.IBlockQuery,
        callback: casper.v1.DeployService.getBlockCallback
      ): void;

      /**
       * Calls getBlock.
       * @param request BlockQuery message or plain object
       * @returns Promise
       */
      public getBlock(
        request: casper.IBlockQuery
      ): Promise<casper.v1.BlockResponse>;

      /**
       * Calls visualizeDag.
       * @param request VisualizeDagQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and VisualizeBlocksResponse
       */
      public visualizeDag(
        request: casper.IVisualizeDagQuery,
        callback: casper.v1.DeployService.visualizeDagCallback
      ): void;

      /**
       * Calls visualizeDag.
       * @param request VisualizeDagQuery message or plain object
       * @returns Promise
       */
      public visualizeDag(
        request: casper.IVisualizeDagQuery
      ): Promise<casper.v1.VisualizeBlocksResponse>;

      /**
       * Calls machineVerifiableDag.
       * @param request MachineVerifyQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and MachineVerifyResponse
       */
      public machineVerifiableDag(
        request: casper.IMachineVerifyQuery,
        callback: casper.v1.DeployService.machineVerifiableDagCallback
      ): void;

      /**
       * Calls machineVerifiableDag.
       * @param request MachineVerifyQuery message or plain object
       * @returns Promise
       */
      public machineVerifiableDag(
        request: casper.IMachineVerifyQuery
      ): Promise<casper.v1.MachineVerifyResponse>;

      /**
       * Calls showMainChain.
       * @param request BlocksQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and BlockInfoResponse
       */
      public showMainChain(
        request: casper.IBlocksQuery,
        callback: casper.v1.DeployService.showMainChainCallback
      ): void;

      /**
       * Calls showMainChain.
       * @param request BlocksQuery message or plain object
       * @returns Promise
       */
      public showMainChain(
        request: casper.IBlocksQuery
      ): Promise<casper.v1.BlockInfoResponse>;

      /**
       * Calls getBlocks.
       * @param request BlocksQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and BlockInfoResponse
       */
      public getBlocks(
        request: casper.IBlocksQuery,
        callback: casper.v1.DeployService.getBlocksCallback
      ): void;

      /**
       * Calls getBlocks.
       * @param request BlocksQuery message or plain object
       * @returns Promise
       */
      public getBlocks(
        request: casper.IBlocksQuery
      ): Promise<casper.v1.BlockInfoResponse>;

      /**
       * Calls listenForDataAtName.
       * @param request DataAtNameQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and ListeningNameDataResponse
       */
      public listenForDataAtName(
        request: casper.IDataAtNameQuery,
        callback: casper.v1.DeployService.listenForDataAtNameCallback
      ): void;

      /**
       * Calls listenForDataAtName.
       * @param request DataAtNameQuery message or plain object
       * @returns Promise
       */
      public listenForDataAtName(
        request: casper.IDataAtNameQuery
      ): Promise<casper.v1.ListeningNameDataResponse>;

      /**
       * Calls listenForContinuationAtName.
       * @param request ContinuationAtNameQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and ContinuationAtNameResponse
       */
      public listenForContinuationAtName(
        request: casper.IContinuationAtNameQuery,
        callback: casper.v1.DeployService.listenForContinuationAtNameCallback
      ): void;

      /**
       * Calls listenForContinuationAtName.
       * @param request ContinuationAtNameQuery message or plain object
       * @returns Promise
       */
      public listenForContinuationAtName(
        request: casper.IContinuationAtNameQuery
      ): Promise<casper.v1.ContinuationAtNameResponse>;

      /**
       * Calls findDeploy.
       * @param request FindDeployQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and FindDeployResponse
       */
      public findDeploy(
        request: casper.IFindDeployQuery,
        callback: casper.v1.DeployService.findDeployCallback
      ): void;

      /**
       * Calls findDeploy.
       * @param request FindDeployQuery message or plain object
       * @returns Promise
       */
      public findDeploy(
        request: casper.IFindDeployQuery
      ): Promise<casper.v1.FindDeployResponse>;

      /**
       * Calls previewPrivateNames.
       * @param request PrivateNamePreviewQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and PrivateNamePreviewResponse
       */
      public previewPrivateNames(
        request: casper.IPrivateNamePreviewQuery,
        callback: casper.v1.DeployService.previewPrivateNamesCallback
      ): void;

      /**
       * Calls previewPrivateNames.
       * @param request PrivateNamePreviewQuery message or plain object
       * @returns Promise
       */
      public previewPrivateNames(
        request: casper.IPrivateNamePreviewQuery
      ): Promise<casper.v1.PrivateNamePreviewResponse>;

      /**
       * Calls lastFinalizedBlock.
       * @param request LastFinalizedBlockQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and LastFinalizedBlockResponse
       */
      public lastFinalizedBlock(
        request: casper.ILastFinalizedBlockQuery,
        callback: casper.v1.DeployService.lastFinalizedBlockCallback
      ): void;

      /**
       * Calls lastFinalizedBlock.
       * @param request LastFinalizedBlockQuery message or plain object
       * @returns Promise
       */
      public lastFinalizedBlock(
        request: casper.ILastFinalizedBlockQuery
      ): Promise<casper.v1.LastFinalizedBlockResponse>;

      /**
       * Calls isFinalized.
       * @param request IsFinalizedQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and IsFinalizedResponse
       */
      public isFinalized(
        request: casper.IIsFinalizedQuery,
        callback: casper.v1.DeployService.isFinalizedCallback
      ): void;

      /**
       * Calls isFinalized.
       * @param request IsFinalizedQuery message or plain object
       * @returns Promise
       */
      public isFinalized(
        request: casper.IIsFinalizedQuery
      ): Promise<casper.v1.IsFinalizedResponse>;

      /**
       * Calls bondStatus.
       * @param request BondStatusQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and BondStatusResponse
       */
      public bondStatus(
        request: casper.IBondStatusQuery,
        callback: casper.v1.DeployService.bondStatusCallback
      ): void;

      /**
       * Calls bondStatus.
       * @param request BondStatusQuery message or plain object
       * @returns Promise
       */
      public bondStatus(
        request: casper.IBondStatusQuery
      ): Promise<casper.v1.BondStatusResponse>;

      /**
       * Calls exploratoryDeploy.
       * @param request ExploratoryDeployQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and ExploratoryDeployResponse
       */
      public exploratoryDeploy(
        request: casper.IExploratoryDeployQuery,
        callback: casper.v1.DeployService.exploratoryDeployCallback
      ): void;

      /**
       * Calls exploratoryDeploy.
       * @param request ExploratoryDeployQuery message or plain object
       * @returns Promise
       */
      public exploratoryDeploy(
        request: casper.IExploratoryDeployQuery
      ): Promise<casper.v1.ExploratoryDeployResponse>;

      /**
       * Calls getBlocksByHeights.
       * @param request BlocksQueryByHeight message or plain object
       * @param callback Node-style callback called with the error, if any, and BlockInfoResponse
       */
      public getBlocksByHeights(
        request: casper.IBlocksQueryByHeight,
        callback: casper.v1.DeployService.getBlocksByHeightsCallback
      ): void;

      /**
       * Calls getBlocksByHeights.
       * @param request BlocksQueryByHeight message or plain object
       * @returns Promise
       */
      public getBlocksByHeights(
        request: casper.IBlocksQueryByHeight
      ): Promise<casper.v1.BlockInfoResponse>;

      /**
       * Calls getEventByHash.
       * @param request BlockQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and EventInfoResponse
       */
      public getEventByHash(
        request: casper.IBlockQuery,
        callback: casper.v1.DeployService.getEventByHashCallback
      ): void;

      /**
       * Calls getEventByHash.
       * @param request BlockQuery message or plain object
       * @returns Promise
       */
      public getEventByHash(
        request: casper.IBlockQuery
      ): Promise<casper.v1.EventInfoResponse>;
    }

    namespace DeployService {
      /**
       * Callback as used by {@link casper.v1.DeployService#doDeploy}.
       * @param error Error, if any
       * @param [response] DeployResponse
       */
      type doDeployCallback = (
        error: Error | null,
        response?: casper.v1.DeployResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#getBlock}.
       * @param error Error, if any
       * @param [response] BlockResponse
       */
      type getBlockCallback = (
        error: Error | null,
        response?: casper.v1.BlockResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#visualizeDag}.
       * @param error Error, if any
       * @param [response] VisualizeBlocksResponse
       */
      type visualizeDagCallback = (
        error: Error | null,
        response?: casper.v1.VisualizeBlocksResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#machineVerifiableDag}.
       * @param error Error, if any
       * @param [response] MachineVerifyResponse
       */
      type machineVerifiableDagCallback = (
        error: Error | null,
        response?: casper.v1.MachineVerifyResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#showMainChain}.
       * @param error Error, if any
       * @param [response] BlockInfoResponse
       */
      type showMainChainCallback = (
        error: Error | null,
        response?: casper.v1.BlockInfoResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#getBlocks}.
       * @param error Error, if any
       * @param [response] BlockInfoResponse
       */
      type getBlocksCallback = (
        error: Error | null,
        response?: casper.v1.BlockInfoResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#listenForDataAtName}.
       * @param error Error, if any
       * @param [response] ListeningNameDataResponse
       */
      type listenForDataAtNameCallback = (
        error: Error | null,
        response?: casper.v1.ListeningNameDataResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#listenForContinuationAtName}.
       * @param error Error, if any
       * @param [response] ContinuationAtNameResponse
       */
      type listenForContinuationAtNameCallback = (
        error: Error | null,
        response?: casper.v1.ContinuationAtNameResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#findDeploy}.
       * @param error Error, if any
       * @param [response] FindDeployResponse
       */
      type findDeployCallback = (
        error: Error | null,
        response?: casper.v1.FindDeployResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#previewPrivateNames}.
       * @param error Error, if any
       * @param [response] PrivateNamePreviewResponse
       */
      type previewPrivateNamesCallback = (
        error: Error | null,
        response?: casper.v1.PrivateNamePreviewResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#lastFinalizedBlock}.
       * @param error Error, if any
       * @param [response] LastFinalizedBlockResponse
       */
      type lastFinalizedBlockCallback = (
        error: Error | null,
        response?: casper.v1.LastFinalizedBlockResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#isFinalized}.
       * @param error Error, if any
       * @param [response] IsFinalizedResponse
       */
      type isFinalizedCallback = (
        error: Error | null,
        response?: casper.v1.IsFinalizedResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#bondStatus}.
       * @param error Error, if any
       * @param [response] BondStatusResponse
       */
      type bondStatusCallback = (
        error: Error | null,
        response?: casper.v1.BondStatusResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#exploratoryDeploy}.
       * @param error Error, if any
       * @param [response] ExploratoryDeployResponse
       */
      type exploratoryDeployCallback = (
        error: Error | null,
        response?: casper.v1.ExploratoryDeployResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#getBlocksByHeights}.
       * @param error Error, if any
       * @param [response] BlockInfoResponse
       */
      type getBlocksByHeightsCallback = (
        error: Error | null,
        response?: casper.v1.BlockInfoResponse
      ) => void;

      /**
       * Callback as used by {@link casper.v1.DeployService#getEventByHash}.
       * @param error Error, if any
       * @param [response] EventInfoResponse
       */
      type getEventByHashCallback = (
        error: Error | null,
        response?: casper.v1.EventInfoResponse
      ) => void;
    }

    /** Properties of an EventInfoResponse. */
    interface IEventInfoResponse {
      /** EventInfoResponse error */
      error?: IServiceError | null;

      /** EventInfoResponse result */
      result?: casper.IBlockEventInfo | null;
    }

    /** Represents an EventInfoResponse. */
    class EventInfoResponse implements IEventInfoResponse {
      /**
       * Constructs a new EventInfoResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IEventInfoResponse);

      /** EventInfoResponse error. */
      public error?: IServiceError | null;

      /** EventInfoResponse result. */
      public result?: casper.IBlockEventInfo | null;

      /** EventInfoResponse message. */
      public message?: "error" | "result";

      /**
       * Creates a new EventInfoResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EventInfoResponse instance
       */
      public static create(
        properties?: casper.v1.IEventInfoResponse
      ): casper.v1.EventInfoResponse;

      /**
       * Encodes the specified EventInfoResponse message. Does not implicitly {@link casper.v1.EventInfoResponse.verify|verify} messages.
       * @param message EventInfoResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IEventInfoResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EventInfoResponse message, length delimited. Does not implicitly {@link casper.v1.EventInfoResponse.verify|verify} messages.
       * @param message EventInfoResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IEventInfoResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EventInfoResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EventInfoResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.EventInfoResponse;

      /**
       * Decodes an EventInfoResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EventInfoResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.EventInfoResponse;

      /**
       * Verifies an EventInfoResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EventInfoResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EventInfoResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.EventInfoResponse;

      /**
       * Creates a plain object from an EventInfoResponse message. Also converts values to other types if specified.
       * @param message EventInfoResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.EventInfoResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EventInfoResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExploratoryDeployResponse. */
    interface IExploratoryDeployResponse {
      /** ExploratoryDeployResponse error */
      error?: IServiceError | null;

      /** ExploratoryDeployResponse result */
      result?: casper.IDataWithBlockInfo | null;
    }

    /** Represents an ExploratoryDeployResponse. */
    class ExploratoryDeployResponse implements IExploratoryDeployResponse {
      /**
       * Constructs a new ExploratoryDeployResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IExploratoryDeployResponse);

      /** ExploratoryDeployResponse error. */
      public error?: IServiceError | null;

      /** ExploratoryDeployResponse result. */
      public result?: casper.IDataWithBlockInfo | null;

      /** ExploratoryDeployResponse message. */
      public message?: "error" | "result";

      /**
       * Creates a new ExploratoryDeployResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ExploratoryDeployResponse instance
       */
      public static create(
        properties?: casper.v1.IExploratoryDeployResponse
      ): casper.v1.ExploratoryDeployResponse;

      /**
       * Encodes the specified ExploratoryDeployResponse message. Does not implicitly {@link casper.v1.ExploratoryDeployResponse.verify|verify} messages.
       * @param message ExploratoryDeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IExploratoryDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ExploratoryDeployResponse message, length delimited. Does not implicitly {@link casper.v1.ExploratoryDeployResponse.verify|verify} messages.
       * @param message ExploratoryDeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IExploratoryDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an ExploratoryDeployResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ExploratoryDeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ExploratoryDeployResponse;

      /**
       * Decodes an ExploratoryDeployResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ExploratoryDeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ExploratoryDeployResponse;

      /**
       * Verifies an ExploratoryDeployResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an ExploratoryDeployResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ExploratoryDeployResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ExploratoryDeployResponse;

      /**
       * Creates a plain object from an ExploratoryDeployResponse message. Also converts values to other types if specified.
       * @param message ExploratoryDeployResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ExploratoryDeployResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ExploratoryDeployResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeployResponse. */
    interface IDeployResponse {
      /** DeployResponse error */
      error?: IServiceError | null;

      /** DeployResponse result */
      result?: string | null;
    }

    /** Represents a DeployResponse. */
    class DeployResponse implements IDeployResponse {
      /**
       * Constructs a new DeployResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IDeployResponse);

      /** DeployResponse error. */
      public error?: IServiceError | null;

      /** DeployResponse result. */
      public result: string;

      /** DeployResponse message. */
      public message?: "error" | "result";

      /**
       * Creates a new DeployResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DeployResponse instance
       */
      public static create(
        properties?: casper.v1.IDeployResponse
      ): casper.v1.DeployResponse;

      /**
       * Encodes the specified DeployResponse message. Does not implicitly {@link casper.v1.DeployResponse.verify|verify} messages.
       * @param message DeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified DeployResponse message, length delimited. Does not implicitly {@link casper.v1.DeployResponse.verify|verify} messages.
       * @param message DeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a DeployResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.DeployResponse;

      /**
       * Decodes a DeployResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.DeployResponse;

      /**
       * Verifies a DeployResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DeployResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DeployResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.DeployResponse;

      /**
       * Creates a plain object from a DeployResponse message. Also converts values to other types if specified.
       * @param message DeployResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.DeployResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this DeployResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockResponse. */
    interface IBlockResponse {
      /** BlockResponse error */
      error?: IServiceError | null;

      /** BlockResponse blockInfo */
      blockInfo?: casper.IBlockInfo | null;
    }

    /** Represents a BlockResponse. */
    class BlockResponse implements IBlockResponse {
      /**
       * Constructs a new BlockResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IBlockResponse);

      /** BlockResponse error. */
      public error?: IServiceError | null;

      /** BlockResponse blockInfo. */
      public blockInfo?: casper.IBlockInfo | null;

      /** BlockResponse message. */
      public message?: "error" | "blockInfo";

      /**
       * Creates a new BlockResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockResponse instance
       */
      public static create(
        properties?: casper.v1.IBlockResponse
      ): casper.v1.BlockResponse;

      /**
       * Encodes the specified BlockResponse message. Does not implicitly {@link casper.v1.BlockResponse.verify|verify} messages.
       * @param message BlockResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IBlockResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified BlockResponse message, length delimited. Does not implicitly {@link casper.v1.BlockResponse.verify|verify} messages.
       * @param message BlockResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IBlockResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a BlockResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns BlockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.BlockResponse;

      /**
       * Decodes a BlockResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns BlockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.BlockResponse;

      /**
       * Verifies a BlockResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a BlockResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns BlockResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.BlockResponse;

      /**
       * Creates a plain object from a BlockResponse message. Also converts values to other types if specified.
       * @param message BlockResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.BlockResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this BlockResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a VisualizeBlocksResponse. */
    interface IVisualizeBlocksResponse {
      /** VisualizeBlocksResponse error */
      error?: IServiceError | null;

      /** VisualizeBlocksResponse content */
      content?: string | null;
    }

    /** Represents a VisualizeBlocksResponse. */
    class VisualizeBlocksResponse implements IVisualizeBlocksResponse {
      /**
       * Constructs a new VisualizeBlocksResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IVisualizeBlocksResponse);

      /** VisualizeBlocksResponse error. */
      public error?: IServiceError | null;

      /** VisualizeBlocksResponse content. */
      public content: string;

      /** VisualizeBlocksResponse message. */
      public message?: "error" | "content";

      /**
       * Creates a new VisualizeBlocksResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VisualizeBlocksResponse instance
       */
      public static create(
        properties?: casper.v1.IVisualizeBlocksResponse
      ): casper.v1.VisualizeBlocksResponse;

      /**
       * Encodes the specified VisualizeBlocksResponse message. Does not implicitly {@link casper.v1.VisualizeBlocksResponse.verify|verify} messages.
       * @param message VisualizeBlocksResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IVisualizeBlocksResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified VisualizeBlocksResponse message, length delimited. Does not implicitly {@link casper.v1.VisualizeBlocksResponse.verify|verify} messages.
       * @param message VisualizeBlocksResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IVisualizeBlocksResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a VisualizeBlocksResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns VisualizeBlocksResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.VisualizeBlocksResponse;

      /**
       * Decodes a VisualizeBlocksResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns VisualizeBlocksResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.VisualizeBlocksResponse;

      /**
       * Verifies a VisualizeBlocksResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a VisualizeBlocksResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns VisualizeBlocksResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.VisualizeBlocksResponse;

      /**
       * Creates a plain object from a VisualizeBlocksResponse message. Also converts values to other types if specified.
       * @param message VisualizeBlocksResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.VisualizeBlocksResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this VisualizeBlocksResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MachineVerifyResponse. */
    interface IMachineVerifyResponse {
      /** MachineVerifyResponse error */
      error?: IServiceError | null;

      /** MachineVerifyResponse content */
      content?: string | null;
    }

    /** Represents a MachineVerifyResponse. */
    class MachineVerifyResponse implements IMachineVerifyResponse {
      /**
       * Constructs a new MachineVerifyResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IMachineVerifyResponse);

      /** MachineVerifyResponse error. */
      public error?: IServiceError | null;

      /** MachineVerifyResponse content. */
      public content: string;

      /** MachineVerifyResponse message. */
      public message?: "error" | "content";

      /**
       * Creates a new MachineVerifyResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MachineVerifyResponse instance
       */
      public static create(
        properties?: casper.v1.IMachineVerifyResponse
      ): casper.v1.MachineVerifyResponse;

      /**
       * Encodes the specified MachineVerifyResponse message. Does not implicitly {@link casper.v1.MachineVerifyResponse.verify|verify} messages.
       * @param message MachineVerifyResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IMachineVerifyResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MachineVerifyResponse message, length delimited. Does not implicitly {@link casper.v1.MachineVerifyResponse.verify|verify} messages.
       * @param message MachineVerifyResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IMachineVerifyResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MachineVerifyResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MachineVerifyResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.MachineVerifyResponse;

      /**
       * Decodes a MachineVerifyResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MachineVerifyResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.MachineVerifyResponse;

      /**
       * Verifies a MachineVerifyResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MachineVerifyResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MachineVerifyResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.MachineVerifyResponse;

      /**
       * Creates a plain object from a MachineVerifyResponse message. Also converts values to other types if specified.
       * @param message MachineVerifyResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.MachineVerifyResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MachineVerifyResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockInfoResponse. */
    interface IBlockInfoResponse {
      /** BlockInfoResponse error */
      error?: IServiceError | null;

      /** BlockInfoResponse blockInfo */
      blockInfo?: casper.ILightBlockInfo | null;
    }

    /** Represents a BlockInfoResponse. */
    class BlockInfoResponse implements IBlockInfoResponse {
      /**
       * Constructs a new BlockInfoResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IBlockInfoResponse);

      /** BlockInfoResponse error. */
      public error?: IServiceError | null;

      /** BlockInfoResponse blockInfo. */
      public blockInfo?: casper.ILightBlockInfo | null;

      /** BlockInfoResponse message. */
      public message?: "error" | "blockInfo";

      /**
       * Creates a new BlockInfoResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BlockInfoResponse instance
       */
      public static create(
        properties?: casper.v1.IBlockInfoResponse
      ): casper.v1.BlockInfoResponse;

      /**
       * Encodes the specified BlockInfoResponse message. Does not implicitly {@link casper.v1.BlockInfoResponse.verify|verify} messages.
       * @param message BlockInfoResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IBlockInfoResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified BlockInfoResponse message, length delimited. Does not implicitly {@link casper.v1.BlockInfoResponse.verify|verify} messages.
       * @param message BlockInfoResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IBlockInfoResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a BlockInfoResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns BlockInfoResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.BlockInfoResponse;

      /**
       * Decodes a BlockInfoResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns BlockInfoResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.BlockInfoResponse;

      /**
       * Verifies a BlockInfoResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a BlockInfoResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns BlockInfoResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.BlockInfoResponse;

      /**
       * Creates a plain object from a BlockInfoResponse message. Also converts values to other types if specified.
       * @param message BlockInfoResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.BlockInfoResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this BlockInfoResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListeningNameDataResponse. */
    interface IListeningNameDataResponse {
      /** ListeningNameDataResponse error */
      error?: IServiceError | null;

      /** ListeningNameDataResponse payload */
      payload?: casper.v1.IListeningNameDataPayload | null;
    }

    /** Represents a ListeningNameDataResponse. */
    class ListeningNameDataResponse implements IListeningNameDataResponse {
      /**
       * Constructs a new ListeningNameDataResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IListeningNameDataResponse);

      /** ListeningNameDataResponse error. */
      public error?: IServiceError | null;

      /** ListeningNameDataResponse payload. */
      public payload?: casper.v1.IListeningNameDataPayload | null;

      /** ListeningNameDataResponse message. */
      public message?: "error" | "payload";

      /**
       * Creates a new ListeningNameDataResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ListeningNameDataResponse instance
       */
      public static create(
        properties?: casper.v1.IListeningNameDataResponse
      ): casper.v1.ListeningNameDataResponse;

      /**
       * Encodes the specified ListeningNameDataResponse message. Does not implicitly {@link casper.v1.ListeningNameDataResponse.verify|verify} messages.
       * @param message ListeningNameDataResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IListeningNameDataResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ListeningNameDataResponse message, length delimited. Does not implicitly {@link casper.v1.ListeningNameDataResponse.verify|verify} messages.
       * @param message ListeningNameDataResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IListeningNameDataResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ListeningNameDataResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ListeningNameDataResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ListeningNameDataResponse;

      /**
       * Decodes a ListeningNameDataResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ListeningNameDataResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ListeningNameDataResponse;

      /**
       * Verifies a ListeningNameDataResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ListeningNameDataResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ListeningNameDataResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ListeningNameDataResponse;

      /**
       * Creates a plain object from a ListeningNameDataResponse message. Also converts values to other types if specified.
       * @param message ListeningNameDataResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ListeningNameDataResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ListeningNameDataResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListeningNameDataPayload. */
    interface IListeningNameDataPayload {
      /** ListeningNameDataPayload blockInfo */
      blockInfo?: casper.IDataWithBlockInfo[] | null;

      /** ListeningNameDataPayload length */
      length?: number | null;
    }

    /** Represents a ListeningNameDataPayload. */
    class ListeningNameDataPayload implements IListeningNameDataPayload {
      /**
       * Constructs a new ListeningNameDataPayload.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IListeningNameDataPayload);

      /** ListeningNameDataPayload blockInfo. */
      public blockInfo: casper.IDataWithBlockInfo[];

      /** ListeningNameDataPayload length. */
      public length: number;

      /**
       * Creates a new ListeningNameDataPayload instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ListeningNameDataPayload instance
       */
      public static create(
        properties?: casper.v1.IListeningNameDataPayload
      ): casper.v1.ListeningNameDataPayload;

      /**
       * Encodes the specified ListeningNameDataPayload message. Does not implicitly {@link casper.v1.ListeningNameDataPayload.verify|verify} messages.
       * @param message ListeningNameDataPayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IListeningNameDataPayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ListeningNameDataPayload message, length delimited. Does not implicitly {@link casper.v1.ListeningNameDataPayload.verify|verify} messages.
       * @param message ListeningNameDataPayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IListeningNameDataPayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ListeningNameDataPayload message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ListeningNameDataPayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ListeningNameDataPayload;

      /**
       * Decodes a ListeningNameDataPayload message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ListeningNameDataPayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ListeningNameDataPayload;

      /**
       * Verifies a ListeningNameDataPayload message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ListeningNameDataPayload message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ListeningNameDataPayload
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ListeningNameDataPayload;

      /**
       * Creates a plain object from a ListeningNameDataPayload message. Also converts values to other types if specified.
       * @param message ListeningNameDataPayload
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ListeningNameDataPayload,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ListeningNameDataPayload to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContinuationAtNameResponse. */
    interface IContinuationAtNameResponse {
      /** ContinuationAtNameResponse error */
      error?: IServiceError | null;

      /** ContinuationAtNameResponse payload */
      payload?: casper.v1.IContinuationAtNamePayload | null;
    }

    /** Represents a ContinuationAtNameResponse. */
    class ContinuationAtNameResponse implements IContinuationAtNameResponse {
      /**
       * Constructs a new ContinuationAtNameResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IContinuationAtNameResponse);

      /** ContinuationAtNameResponse error. */
      public error?: IServiceError | null;

      /** ContinuationAtNameResponse payload. */
      public payload?: casper.v1.IContinuationAtNamePayload | null;

      /** ContinuationAtNameResponse message. */
      public message?: "error" | "payload";

      /**
       * Creates a new ContinuationAtNameResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ContinuationAtNameResponse instance
       */
      public static create(
        properties?: casper.v1.IContinuationAtNameResponse
      ): casper.v1.ContinuationAtNameResponse;

      /**
       * Encodes the specified ContinuationAtNameResponse message. Does not implicitly {@link casper.v1.ContinuationAtNameResponse.verify|verify} messages.
       * @param message ContinuationAtNameResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IContinuationAtNameResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ContinuationAtNameResponse message, length delimited. Does not implicitly {@link casper.v1.ContinuationAtNameResponse.verify|verify} messages.
       * @param message ContinuationAtNameResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IContinuationAtNameResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ContinuationAtNameResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ContinuationAtNameResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ContinuationAtNameResponse;

      /**
       * Decodes a ContinuationAtNameResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ContinuationAtNameResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ContinuationAtNameResponse;

      /**
       * Verifies a ContinuationAtNameResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ContinuationAtNameResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ContinuationAtNameResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ContinuationAtNameResponse;

      /**
       * Creates a plain object from a ContinuationAtNameResponse message. Also converts values to other types if specified.
       * @param message ContinuationAtNameResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ContinuationAtNameResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ContinuationAtNameResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContinuationAtNamePayload. */
    interface IContinuationAtNamePayload {
      /** ContinuationAtNamePayload blockResults */
      blockResults?: casper.IContinuationsWithBlockInfo[] | null;

      /** ContinuationAtNamePayload length */
      length?: number | null;
    }

    /** Represents a ContinuationAtNamePayload. */
    class ContinuationAtNamePayload implements IContinuationAtNamePayload {
      /**
       * Constructs a new ContinuationAtNamePayload.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IContinuationAtNamePayload);

      /** ContinuationAtNamePayload blockResults. */
      public blockResults: casper.IContinuationsWithBlockInfo[];

      /** ContinuationAtNamePayload length. */
      public length: number;

      /**
       * Creates a new ContinuationAtNamePayload instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ContinuationAtNamePayload instance
       */
      public static create(
        properties?: casper.v1.IContinuationAtNamePayload
      ): casper.v1.ContinuationAtNamePayload;

      /**
       * Encodes the specified ContinuationAtNamePayload message. Does not implicitly {@link casper.v1.ContinuationAtNamePayload.verify|verify} messages.
       * @param message ContinuationAtNamePayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IContinuationAtNamePayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ContinuationAtNamePayload message, length delimited. Does not implicitly {@link casper.v1.ContinuationAtNamePayload.verify|verify} messages.
       * @param message ContinuationAtNamePayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IContinuationAtNamePayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ContinuationAtNamePayload message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ContinuationAtNamePayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ContinuationAtNamePayload;

      /**
       * Decodes a ContinuationAtNamePayload message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ContinuationAtNamePayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ContinuationAtNamePayload;

      /**
       * Verifies a ContinuationAtNamePayload message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ContinuationAtNamePayload message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ContinuationAtNamePayload
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ContinuationAtNamePayload;

      /**
       * Creates a plain object from a ContinuationAtNamePayload message. Also converts values to other types if specified.
       * @param message ContinuationAtNamePayload
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ContinuationAtNamePayload,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ContinuationAtNamePayload to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FindDeployResponse. */
    interface IFindDeployResponse {
      /** FindDeployResponse error */
      error?: IServiceError | null;

      /** FindDeployResponse blockInfo */
      blockInfo?: casper.ILightBlockInfo | null;
    }

    /** Represents a FindDeployResponse. */
    class FindDeployResponse implements IFindDeployResponse {
      /**
       * Constructs a new FindDeployResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IFindDeployResponse);

      /** FindDeployResponse error. */
      public error?: IServiceError | null;

      /** FindDeployResponse blockInfo. */
      public blockInfo?: casper.ILightBlockInfo | null;

      /** FindDeployResponse message. */
      public message?: "error" | "blockInfo";

      /**
       * Creates a new FindDeployResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FindDeployResponse instance
       */
      public static create(
        properties?: casper.v1.IFindDeployResponse
      ): casper.v1.FindDeployResponse;

      /**
       * Encodes the specified FindDeployResponse message. Does not implicitly {@link casper.v1.FindDeployResponse.verify|verify} messages.
       * @param message FindDeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IFindDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FindDeployResponse message, length delimited. Does not implicitly {@link casper.v1.FindDeployResponse.verify|verify} messages.
       * @param message FindDeployResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IFindDeployResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FindDeployResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FindDeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.FindDeployResponse;

      /**
       * Decodes a FindDeployResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FindDeployResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.FindDeployResponse;

      /**
       * Verifies a FindDeployResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FindDeployResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FindDeployResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.FindDeployResponse;

      /**
       * Creates a plain object from a FindDeployResponse message. Also converts values to other types if specified.
       * @param message FindDeployResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.FindDeployResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FindDeployResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateNamePreviewResponse. */
    interface IPrivateNamePreviewResponse {
      /** PrivateNamePreviewResponse error */
      error?: IServiceError | null;

      /** PrivateNamePreviewResponse payload */
      payload?: casper.v1.IPrivateNamePreviewPayload | null;
    }

    /** Represents a PrivateNamePreviewResponse. */
    class PrivateNamePreviewResponse implements IPrivateNamePreviewResponse {
      /**
       * Constructs a new PrivateNamePreviewResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IPrivateNamePreviewResponse);

      /** PrivateNamePreviewResponse error. */
      public error?: IServiceError | null;

      /** PrivateNamePreviewResponse payload. */
      public payload?: casper.v1.IPrivateNamePreviewPayload | null;

      /** PrivateNamePreviewResponse message. */
      public message?: "error" | "payload";

      /**
       * Creates a new PrivateNamePreviewResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PrivateNamePreviewResponse instance
       */
      public static create(
        properties?: casper.v1.IPrivateNamePreviewResponse
      ): casper.v1.PrivateNamePreviewResponse;

      /**
       * Encodes the specified PrivateNamePreviewResponse message. Does not implicitly {@link casper.v1.PrivateNamePreviewResponse.verify|verify} messages.
       * @param message PrivateNamePreviewResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IPrivateNamePreviewResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PrivateNamePreviewResponse message, length delimited. Does not implicitly {@link casper.v1.PrivateNamePreviewResponse.verify|verify} messages.
       * @param message PrivateNamePreviewResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IPrivateNamePreviewResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PrivateNamePreviewResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PrivateNamePreviewResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.PrivateNamePreviewResponse;

      /**
       * Decodes a PrivateNamePreviewResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PrivateNamePreviewResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.PrivateNamePreviewResponse;

      /**
       * Verifies a PrivateNamePreviewResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a PrivateNamePreviewResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PrivateNamePreviewResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.PrivateNamePreviewResponse;

      /**
       * Creates a plain object from a PrivateNamePreviewResponse message. Also converts values to other types if specified.
       * @param message PrivateNamePreviewResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.PrivateNamePreviewResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PrivateNamePreviewResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateNamePreviewPayload. */
    interface IPrivateNamePreviewPayload {
      /** PrivateNamePreviewPayload ids */
      ids?: Uint8Array[] | null;
    }

    /** Represents a PrivateNamePreviewPayload. */
    class PrivateNamePreviewPayload implements IPrivateNamePreviewPayload {
      /**
       * Constructs a new PrivateNamePreviewPayload.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IPrivateNamePreviewPayload);

      /** PrivateNamePreviewPayload ids. */
      public ids: Uint8Array[];

      /**
       * Creates a new PrivateNamePreviewPayload instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PrivateNamePreviewPayload instance
       */
      public static create(
        properties?: casper.v1.IPrivateNamePreviewPayload
      ): casper.v1.PrivateNamePreviewPayload;

      /**
       * Encodes the specified PrivateNamePreviewPayload message. Does not implicitly {@link casper.v1.PrivateNamePreviewPayload.verify|verify} messages.
       * @param message PrivateNamePreviewPayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IPrivateNamePreviewPayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified PrivateNamePreviewPayload message, length delimited. Does not implicitly {@link casper.v1.PrivateNamePreviewPayload.verify|verify} messages.
       * @param message PrivateNamePreviewPayload message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IPrivateNamePreviewPayload,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PrivateNamePreviewPayload message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns PrivateNamePreviewPayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.PrivateNamePreviewPayload;

      /**
       * Decodes a PrivateNamePreviewPayload message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns PrivateNamePreviewPayload
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.PrivateNamePreviewPayload;

      /**
       * Verifies a PrivateNamePreviewPayload message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a PrivateNamePreviewPayload message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PrivateNamePreviewPayload
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.PrivateNamePreviewPayload;

      /**
       * Creates a plain object from a PrivateNamePreviewPayload message. Also converts values to other types if specified.
       * @param message PrivateNamePreviewPayload
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.PrivateNamePreviewPayload,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PrivateNamePreviewPayload to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a LastFinalizedBlockResponse. */
    interface ILastFinalizedBlockResponse {
      /** LastFinalizedBlockResponse error */
      error?: IServiceError | null;

      /** LastFinalizedBlockResponse blockInfo */
      blockInfo?: casper.IBlockInfo | null;
    }

    /** Represents a LastFinalizedBlockResponse. */
    class LastFinalizedBlockResponse implements ILastFinalizedBlockResponse {
      /**
       * Constructs a new LastFinalizedBlockResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.ILastFinalizedBlockResponse);

      /** LastFinalizedBlockResponse error. */
      public error?: IServiceError | null;

      /** LastFinalizedBlockResponse blockInfo. */
      public blockInfo?: casper.IBlockInfo | null;

      /** LastFinalizedBlockResponse message. */
      public message?: "error" | "blockInfo";

      /**
       * Creates a new LastFinalizedBlockResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LastFinalizedBlockResponse instance
       */
      public static create(
        properties?: casper.v1.ILastFinalizedBlockResponse
      ): casper.v1.LastFinalizedBlockResponse;

      /**
       * Encodes the specified LastFinalizedBlockResponse message. Does not implicitly {@link casper.v1.LastFinalizedBlockResponse.verify|verify} messages.
       * @param message LastFinalizedBlockResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.ILastFinalizedBlockResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified LastFinalizedBlockResponse message, length delimited. Does not implicitly {@link casper.v1.LastFinalizedBlockResponse.verify|verify} messages.
       * @param message LastFinalizedBlockResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.ILastFinalizedBlockResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a LastFinalizedBlockResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns LastFinalizedBlockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.LastFinalizedBlockResponse;

      /**
       * Decodes a LastFinalizedBlockResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns LastFinalizedBlockResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.LastFinalizedBlockResponse;

      /**
       * Verifies a LastFinalizedBlockResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a LastFinalizedBlockResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns LastFinalizedBlockResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.LastFinalizedBlockResponse;

      /**
       * Creates a plain object from a LastFinalizedBlockResponse message. Also converts values to other types if specified.
       * @param message LastFinalizedBlockResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.LastFinalizedBlockResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this LastFinalizedBlockResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an IsFinalizedResponse. */
    interface IIsFinalizedResponse {
      /** IsFinalizedResponse error */
      error?: IServiceError | null;

      /** IsFinalizedResponse isFinalized */
      isFinalized?: boolean | null;
    }

    /** Represents an IsFinalizedResponse. */
    class IsFinalizedResponse implements IIsFinalizedResponse {
      /**
       * Constructs a new IsFinalizedResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IIsFinalizedResponse);

      /** IsFinalizedResponse error. */
      public error?: IServiceError | null;

      /** IsFinalizedResponse isFinalized. */
      public isFinalized: boolean;

      /** IsFinalizedResponse message. */
      public message?: "error" | "isFinalized";

      /**
       * Creates a new IsFinalizedResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns IsFinalizedResponse instance
       */
      public static create(
        properties?: casper.v1.IIsFinalizedResponse
      ): casper.v1.IsFinalizedResponse;

      /**
       * Encodes the specified IsFinalizedResponse message. Does not implicitly {@link casper.v1.IsFinalizedResponse.verify|verify} messages.
       * @param message IsFinalizedResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IIsFinalizedResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified IsFinalizedResponse message, length delimited. Does not implicitly {@link casper.v1.IsFinalizedResponse.verify|verify} messages.
       * @param message IsFinalizedResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IIsFinalizedResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an IsFinalizedResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns IsFinalizedResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.IsFinalizedResponse;

      /**
       * Decodes an IsFinalizedResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns IsFinalizedResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.IsFinalizedResponse;

      /**
       * Verifies an IsFinalizedResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an IsFinalizedResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns IsFinalizedResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.IsFinalizedResponse;

      /**
       * Creates a plain object from an IsFinalizedResponse message. Also converts values to other types if specified.
       * @param message IsFinalizedResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.IsFinalizedResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this IsFinalizedResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a BondStatusResponse. */
    interface IBondStatusResponse {
      /** BondStatusResponse error */
      error?: IServiceError | null;

      /** BondStatusResponse isBonded */
      isBonded?: boolean | null;
    }

    /** Represents a BondStatusResponse. */
    class BondStatusResponse implements IBondStatusResponse {
      /**
       * Constructs a new BondStatusResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IBondStatusResponse);

      /** BondStatusResponse error. */
      public error?: IServiceError | null;

      /** BondStatusResponse isBonded. */
      public isBonded: boolean;

      /** BondStatusResponse message. */
      public message?: "error" | "isBonded";

      /**
       * Creates a new BondStatusResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns BondStatusResponse instance
       */
      public static create(
        properties?: casper.v1.IBondStatusResponse
      ): casper.v1.BondStatusResponse;

      /**
       * Encodes the specified BondStatusResponse message. Does not implicitly {@link casper.v1.BondStatusResponse.verify|verify} messages.
       * @param message BondStatusResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IBondStatusResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified BondStatusResponse message, length delimited. Does not implicitly {@link casper.v1.BondStatusResponse.verify|verify} messages.
       * @param message BondStatusResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IBondStatusResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a BondStatusResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns BondStatusResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.BondStatusResponse;

      /**
       * Decodes a BondStatusResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns BondStatusResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.BondStatusResponse;

      /**
       * Verifies a BondStatusResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a BondStatusResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns BondStatusResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.BondStatusResponse;

      /**
       * Creates a plain object from a BondStatusResponse message. Also converts values to other types if specified.
       * @param message BondStatusResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.BondStatusResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this BondStatusResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Represents a ProposeService */
    class ProposeService extends $protobuf.rpc.Service {
      /**
       * Constructs a new ProposeService service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      );

      /**
       * Creates new ProposeService service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      ): ProposeService;

      /**
       * Calls propose.
       * @param request PrintUnmatchedSendsQuery message or plain object
       * @param callback Node-style callback called with the error, if any, and ProposeResponse
       */
      public propose(
        request: casper.IPrintUnmatchedSendsQuery,
        callback: casper.v1.ProposeService.proposeCallback
      ): void;

      /**
       * Calls propose.
       * @param request PrintUnmatchedSendsQuery message or plain object
       * @returns Promise
       */
      public propose(
        request: casper.IPrintUnmatchedSendsQuery
      ): Promise<casper.v1.ProposeResponse>;
    }

    namespace ProposeService {
      /**
       * Callback as used by {@link casper.v1.ProposeService#propose}.
       * @param error Error, if any
       * @param [response] ProposeResponse
       */
      type proposeCallback = (
        error: Error | null,
        response?: casper.v1.ProposeResponse
      ) => void;
    }

    /** Properties of a ProposeResponse. */
    interface IProposeResponse {
      /** ProposeResponse error */
      error?: IServiceError | null;

      /** ProposeResponse result */
      result?: string | null;
    }

    /** Represents a ProposeResponse. */
    class ProposeResponse implements IProposeResponse {
      /**
       * Constructs a new ProposeResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: casper.v1.IProposeResponse);

      /** ProposeResponse error. */
      public error?: IServiceError | null;

      /** ProposeResponse result. */
      public result: string;

      /** ProposeResponse message. */
      public message?: "error" | "result";

      /**
       * Creates a new ProposeResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ProposeResponse instance
       */
      public static create(
        properties?: casper.v1.IProposeResponse
      ): casper.v1.ProposeResponse;

      /**
       * Encodes the specified ProposeResponse message. Does not implicitly {@link casper.v1.ProposeResponse.verify|verify} messages.
       * @param message ProposeResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: casper.v1.IProposeResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ProposeResponse message, length delimited. Does not implicitly {@link casper.v1.ProposeResponse.verify|verify} messages.
       * @param message ProposeResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: casper.v1.IProposeResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ProposeResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ProposeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): casper.v1.ProposeResponse;

      /**
       * Decodes a ProposeResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ProposeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): casper.v1.ProposeResponse;

      /**
       * Verifies a ProposeResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ProposeResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ProposeResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): casper.v1.ProposeResponse;

      /**
       * Creates a plain object from a ProposeResponse message. Also converts values to other types if specified.
       * @param message ProposeResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: casper.v1.ProposeResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ProposeResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a PrintUnmatchedSendsQuery. */
  interface IPrintUnmatchedSendsQuery {
    /** PrintUnmatchedSendsQuery printUnmatchedSends */
    printUnmatchedSends?: boolean | null;
  }

  /** Represents a PrintUnmatchedSendsQuery. */
  class PrintUnmatchedSendsQuery implements IPrintUnmatchedSendsQuery {
    /**
     * Constructs a new PrintUnmatchedSendsQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: casper.IPrintUnmatchedSendsQuery);

    /** PrintUnmatchedSendsQuery printUnmatchedSends. */
    public printUnmatchedSends: boolean;

    /**
     * Creates a new PrintUnmatchedSendsQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrintUnmatchedSendsQuery instance
     */
    public static create(
      properties?: casper.IPrintUnmatchedSendsQuery
    ): casper.PrintUnmatchedSendsQuery;

    /**
     * Encodes the specified PrintUnmatchedSendsQuery message. Does not implicitly {@link casper.PrintUnmatchedSendsQuery.verify|verify} messages.
     * @param message PrintUnmatchedSendsQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: casper.IPrintUnmatchedSendsQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PrintUnmatchedSendsQuery message, length delimited. Does not implicitly {@link casper.PrintUnmatchedSendsQuery.verify|verify} messages.
     * @param message PrintUnmatchedSendsQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: casper.IPrintUnmatchedSendsQuery,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PrintUnmatchedSendsQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrintUnmatchedSendsQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): casper.PrintUnmatchedSendsQuery;

    /**
     * Decodes a PrintUnmatchedSendsQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrintUnmatchedSendsQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): casper.PrintUnmatchedSendsQuery;

    /**
     * Verifies a PrintUnmatchedSendsQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PrintUnmatchedSendsQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrintUnmatchedSendsQuery
     */
    public static fromObject(object: {
      [k: string]: any;
    }): casper.PrintUnmatchedSendsQuery;

    /**
     * Creates a plain object from a PrintUnmatchedSendsQuery message. Also converts values to other types if specified.
     * @param message PrintUnmatchedSendsQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: casper.PrintUnmatchedSendsQuery,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PrintUnmatchedSendsQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Namespace scalapb. */
export namespace scalapb {
  /** Properties of a ScalaPbOptions. */
  interface IScalaPbOptions {
    /** ScalaPbOptions package_name */
    package_name?: string | null;

    /** ScalaPbOptions flat_package */
    flat_package?: boolean | null;

    /** ScalaPbOptions import */
    import?: string[] | null;

    /** ScalaPbOptions preamble */
    preamble?: string[] | null;

    /** ScalaPbOptions single_file */
    single_file?: boolean | null;

    /** ScalaPbOptions no_primitive_wrappers */
    no_primitive_wrappers?: boolean | null;

    /** ScalaPbOptions primitive_wrappers */
    primitive_wrappers?: boolean | null;

    /** ScalaPbOptions collection_type */
    collection_type?: string | null;

    /** ScalaPbOptions preserve_unknown_fields */
    preserve_unknown_fields?: boolean | null;

    /** ScalaPbOptions object_name */
    object_name?: string | null;

    /** ScalaPbOptions scope */
    scope?: scalapb.ScalaPbOptions.OptionsScope | null;

    /** ScalaPbOptions lenses */
    lenses?: boolean | null;

    /** ScalaPbOptions retain_source_code_info */
    retain_source_code_info?: boolean | null;

    /** ScalaPbOptions map_type */
    map_type?: string | null;

    /** ScalaPbOptions no_default_values_in_constructor */
    no_default_values_in_constructor?: boolean | null;

    /** ScalaPbOptions enum_value_naming */
    enum_value_naming?: scalapb.ScalaPbOptions.EnumValueNaming | null;

    /** ScalaPbOptions enum_strip_prefix */
    enum_strip_prefix?: boolean | null;

    /** ScalaPbOptions bytes_type */
    bytes_type?: string | null;

    /** ScalaPbOptions java_conversions */
    java_conversions?: boolean | null;

    /** ScalaPbOptions aux_message_options */
    aux_message_options?: scalapb.ScalaPbOptions.IAuxMessageOptions[] | null;

    /** ScalaPbOptions aux_field_options */
    aux_field_options?: scalapb.ScalaPbOptions.IAuxFieldOptions[] | null;

    /** ScalaPbOptions aux_enum_options */
    aux_enum_options?: scalapb.ScalaPbOptions.IAuxEnumOptions[] | null;

    /** ScalaPbOptions aux_enum_value_options */
    aux_enum_value_options?:
      | scalapb.ScalaPbOptions.IAuxEnumValueOptions[]
      | null;

    /** ScalaPbOptions test_only_no_java_conversions */
    test_only_no_java_conversions?: boolean | null;
  }

  /** Represents a ScalaPbOptions. */
  class ScalaPbOptions implements IScalaPbOptions {
    /**
     * Constructs a new ScalaPbOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IScalaPbOptions);

    /** ScalaPbOptions package_name. */
    public package_name: string;

    /** ScalaPbOptions flat_package. */
    public flat_package: boolean;

    /** ScalaPbOptions import. */
    public import: string[];

    /** ScalaPbOptions preamble. */
    public preamble: string[];

    /** ScalaPbOptions single_file. */
    public single_file: boolean;

    /** ScalaPbOptions no_primitive_wrappers. */
    public no_primitive_wrappers: boolean;

    /** ScalaPbOptions primitive_wrappers. */
    public primitive_wrappers: boolean;

    /** ScalaPbOptions collection_type. */
    public collection_type: string;

    /** ScalaPbOptions preserve_unknown_fields. */
    public preserve_unknown_fields: boolean;

    /** ScalaPbOptions object_name. */
    public object_name: string;

    /** ScalaPbOptions scope. */
    public scope: scalapb.ScalaPbOptions.OptionsScope;

    /** ScalaPbOptions lenses. */
    public lenses: boolean;

    /** ScalaPbOptions retain_source_code_info. */
    public retain_source_code_info: boolean;

    /** ScalaPbOptions map_type. */
    public map_type: string;

    /** ScalaPbOptions no_default_values_in_constructor. */
    public no_default_values_in_constructor: boolean;

    /** ScalaPbOptions enum_value_naming. */
    public enum_value_naming: scalapb.ScalaPbOptions.EnumValueNaming;

    /** ScalaPbOptions enum_strip_prefix. */
    public enum_strip_prefix: boolean;

    /** ScalaPbOptions bytes_type. */
    public bytes_type: string;

    /** ScalaPbOptions java_conversions. */
    public java_conversions: boolean;

    /** ScalaPbOptions aux_message_options. */
    public aux_message_options: scalapb.ScalaPbOptions.IAuxMessageOptions[];

    /** ScalaPbOptions aux_field_options. */
    public aux_field_options: scalapb.ScalaPbOptions.IAuxFieldOptions[];

    /** ScalaPbOptions aux_enum_options. */
    public aux_enum_options: scalapb.ScalaPbOptions.IAuxEnumOptions[];

    /** ScalaPbOptions aux_enum_value_options. */
    public aux_enum_value_options: scalapb.ScalaPbOptions.IAuxEnumValueOptions[];

    /** ScalaPbOptions test_only_no_java_conversions. */
    public test_only_no_java_conversions: boolean;

    /**
     * Creates a new ScalaPbOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ScalaPbOptions instance
     */
    public static create(
      properties?: scalapb.IScalaPbOptions
    ): scalapb.ScalaPbOptions;

    /**
     * Encodes the specified ScalaPbOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
     * @param message ScalaPbOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IScalaPbOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ScalaPbOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
     * @param message ScalaPbOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IScalaPbOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ScalaPbOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ScalaPbOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.ScalaPbOptions;

    /**
     * Decodes a ScalaPbOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ScalaPbOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.ScalaPbOptions;

    /**
     * Verifies a ScalaPbOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ScalaPbOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ScalaPbOptions
     */
    public static fromObject(object: {
      [k: string]: any;
    }): scalapb.ScalaPbOptions;

    /**
     * Creates a plain object from a ScalaPbOptions message. Also converts values to other types if specified.
     * @param message ScalaPbOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.ScalaPbOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ScalaPbOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace ScalaPbOptions {
    /** OptionsScope enum. */
    enum OptionsScope {
      FILE = 0,
      PACKAGE = 1,
    }

    /** EnumValueNaming enum. */
    enum EnumValueNaming {
      AS_IN_PROTO = 0,
      CAMEL_CASE = 1,
    }

    /** Properties of an AuxMessageOptions. */
    interface IAuxMessageOptions {
      /** AuxMessageOptions target */
      target?: string | null;

      /** AuxMessageOptions options */
      options?: scalapb.IMessageOptions | null;
    }

    /** Represents an AuxMessageOptions. */
    class AuxMessageOptions implements IAuxMessageOptions {
      /**
       * Constructs a new AuxMessageOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: scalapb.ScalaPbOptions.IAuxMessageOptions);

      /** AuxMessageOptions target. */
      public target: string;

      /** AuxMessageOptions options. */
      public options?: scalapb.IMessageOptions | null;

      /**
       * Creates a new AuxMessageOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AuxMessageOptions instance
       */
      public static create(
        properties?: scalapb.ScalaPbOptions.IAuxMessageOptions
      ): scalapb.ScalaPbOptions.AuxMessageOptions;

      /**
       * Encodes the specified AuxMessageOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.AuxMessageOptions.verify|verify} messages.
       * @param message AuxMessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: scalapb.ScalaPbOptions.IAuxMessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified AuxMessageOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.AuxMessageOptions.verify|verify} messages.
       * @param message AuxMessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: scalapb.ScalaPbOptions.IAuxMessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an AuxMessageOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AuxMessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): scalapb.ScalaPbOptions.AuxMessageOptions;

      /**
       * Decodes an AuxMessageOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AuxMessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): scalapb.ScalaPbOptions.AuxMessageOptions;

      /**
       * Verifies an AuxMessageOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AuxMessageOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AuxMessageOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): scalapb.ScalaPbOptions.AuxMessageOptions;

      /**
       * Creates a plain object from an AuxMessageOptions message. Also converts values to other types if specified.
       * @param message AuxMessageOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: scalapb.ScalaPbOptions.AuxMessageOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this AuxMessageOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuxFieldOptions. */
    interface IAuxFieldOptions {
      /** AuxFieldOptions target */
      target?: string | null;

      /** AuxFieldOptions options */
      options?: scalapb.IFieldOptions | null;
    }

    /** Represents an AuxFieldOptions. */
    class AuxFieldOptions implements IAuxFieldOptions {
      /**
       * Constructs a new AuxFieldOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: scalapb.ScalaPbOptions.IAuxFieldOptions);

      /** AuxFieldOptions target. */
      public target: string;

      /** AuxFieldOptions options. */
      public options?: scalapb.IFieldOptions | null;

      /**
       * Creates a new AuxFieldOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AuxFieldOptions instance
       */
      public static create(
        properties?: scalapb.ScalaPbOptions.IAuxFieldOptions
      ): scalapb.ScalaPbOptions.AuxFieldOptions;

      /**
       * Encodes the specified AuxFieldOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.AuxFieldOptions.verify|verify} messages.
       * @param message AuxFieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: scalapb.ScalaPbOptions.IAuxFieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified AuxFieldOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.AuxFieldOptions.verify|verify} messages.
       * @param message AuxFieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: scalapb.ScalaPbOptions.IAuxFieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an AuxFieldOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AuxFieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): scalapb.ScalaPbOptions.AuxFieldOptions;

      /**
       * Decodes an AuxFieldOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AuxFieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): scalapb.ScalaPbOptions.AuxFieldOptions;

      /**
       * Verifies an AuxFieldOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AuxFieldOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AuxFieldOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): scalapb.ScalaPbOptions.AuxFieldOptions;

      /**
       * Creates a plain object from an AuxFieldOptions message. Also converts values to other types if specified.
       * @param message AuxFieldOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: scalapb.ScalaPbOptions.AuxFieldOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this AuxFieldOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuxEnumOptions. */
    interface IAuxEnumOptions {
      /** AuxEnumOptions target */
      target?: string | null;

      /** AuxEnumOptions options */
      options?: scalapb.IEnumOptions | null;
    }

    /** Represents an AuxEnumOptions. */
    class AuxEnumOptions implements IAuxEnumOptions {
      /**
       * Constructs a new AuxEnumOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: scalapb.ScalaPbOptions.IAuxEnumOptions);

      /** AuxEnumOptions target. */
      public target: string;

      /** AuxEnumOptions options. */
      public options?: scalapb.IEnumOptions | null;

      /**
       * Creates a new AuxEnumOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AuxEnumOptions instance
       */
      public static create(
        properties?: scalapb.ScalaPbOptions.IAuxEnumOptions
      ): scalapb.ScalaPbOptions.AuxEnumOptions;

      /**
       * Encodes the specified AuxEnumOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.AuxEnumOptions.verify|verify} messages.
       * @param message AuxEnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: scalapb.ScalaPbOptions.IAuxEnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified AuxEnumOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.AuxEnumOptions.verify|verify} messages.
       * @param message AuxEnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: scalapb.ScalaPbOptions.IAuxEnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an AuxEnumOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AuxEnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): scalapb.ScalaPbOptions.AuxEnumOptions;

      /**
       * Decodes an AuxEnumOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AuxEnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): scalapb.ScalaPbOptions.AuxEnumOptions;

      /**
       * Verifies an AuxEnumOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AuxEnumOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AuxEnumOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): scalapb.ScalaPbOptions.AuxEnumOptions;

      /**
       * Creates a plain object from an AuxEnumOptions message. Also converts values to other types if specified.
       * @param message AuxEnumOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: scalapb.ScalaPbOptions.AuxEnumOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this AuxEnumOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuxEnumValueOptions. */
    interface IAuxEnumValueOptions {
      /** AuxEnumValueOptions target */
      target?: string | null;

      /** AuxEnumValueOptions options */
      options?: scalapb.IEnumValueOptions | null;
    }

    /** Represents an AuxEnumValueOptions. */
    class AuxEnumValueOptions implements IAuxEnumValueOptions {
      /**
       * Constructs a new AuxEnumValueOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: scalapb.ScalaPbOptions.IAuxEnumValueOptions);

      /** AuxEnumValueOptions target. */
      public target: string;

      /** AuxEnumValueOptions options. */
      public options?: scalapb.IEnumValueOptions | null;

      /**
       * Creates a new AuxEnumValueOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AuxEnumValueOptions instance
       */
      public static create(
        properties?: scalapb.ScalaPbOptions.IAuxEnumValueOptions
      ): scalapb.ScalaPbOptions.AuxEnumValueOptions;

      /**
       * Encodes the specified AuxEnumValueOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.AuxEnumValueOptions.verify|verify} messages.
       * @param message AuxEnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: scalapb.ScalaPbOptions.IAuxEnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified AuxEnumValueOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.AuxEnumValueOptions.verify|verify} messages.
       * @param message AuxEnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: scalapb.ScalaPbOptions.IAuxEnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an AuxEnumValueOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AuxEnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): scalapb.ScalaPbOptions.AuxEnumValueOptions;

      /**
       * Decodes an AuxEnumValueOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AuxEnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): scalapb.ScalaPbOptions.AuxEnumValueOptions;

      /**
       * Verifies an AuxEnumValueOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AuxEnumValueOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AuxEnumValueOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): scalapb.ScalaPbOptions.AuxEnumValueOptions;

      /**
       * Creates a plain object from an AuxEnumValueOptions message. Also converts values to other types if specified.
       * @param message AuxEnumValueOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: scalapb.ScalaPbOptions.AuxEnumValueOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this AuxEnumValueOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a MessageOptions. */
  interface IMessageOptions {
    /** MessageOptions extends */
    extends?: string[] | null;

    /** MessageOptions companion_extends */
    companion_extends?: string[] | null;

    /** MessageOptions annotations */
    annotations?: string[] | null;

    /** MessageOptions type */
    type?: string | null;

    /** MessageOptions companion_annotations */
    companion_annotations?: string[] | null;

    /** MessageOptions sealed_oneof_extends */
    sealed_oneof_extends?: string[] | null;

    /** MessageOptions no_box */
    no_box?: boolean | null;

    /** MessageOptions unknown_fields_annotations */
    unknown_fields_annotations?: string[] | null;
  }

  /** Represents a MessageOptions. */
  class MessageOptions implements IMessageOptions {
    /**
     * Constructs a new MessageOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IMessageOptions);

    /** MessageOptions extends. */
    public extends: string[];

    /** MessageOptions companion_extends. */
    public companion_extends: string[];

    /** MessageOptions annotations. */
    public annotations: string[];

    /** MessageOptions type. */
    public type: string;

    /** MessageOptions companion_annotations. */
    public companion_annotations: string[];

    /** MessageOptions sealed_oneof_extends. */
    public sealed_oneof_extends: string[];

    /** MessageOptions no_box. */
    public no_box: boolean;

    /** MessageOptions unknown_fields_annotations. */
    public unknown_fields_annotations: string[];

    /**
     * Creates a new MessageOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageOptions instance
     */
    public static create(
      properties?: scalapb.IMessageOptions
    ): scalapb.MessageOptions;

    /**
     * Encodes the specified MessageOptions message. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
     * @param message MessageOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IMessageOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
     * @param message MessageOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IMessageOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MessageOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.MessageOptions;

    /**
     * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.MessageOptions;

    /**
     * Verifies a MessageOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageOptions
     */
    public static fromObject(object: {
      [k: string]: any;
    }): scalapb.MessageOptions;

    /**
     * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
     * @param message MessageOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.MessageOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MessageOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a FieldOptions. */
  interface IFieldOptions {
    /** FieldOptions type */
    type?: string | null;

    /** FieldOptions scala_name */
    scala_name?: string | null;

    /** FieldOptions collection_type */
    collection_type?: string | null;

    /** FieldOptions key_type */
    key_type?: string | null;

    /** FieldOptions value_type */
    value_type?: string | null;

    /** FieldOptions annotations */
    annotations?: string[] | null;

    /** FieldOptions map_type */
    map_type?: string | null;

    /** FieldOptions no_box */
    no_box?: boolean | null;
  }

  /** Represents a FieldOptions. */
  class FieldOptions implements IFieldOptions {
    /**
     * Constructs a new FieldOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IFieldOptions);

    /** FieldOptions type. */
    public type: string;

    /** FieldOptions scala_name. */
    public scala_name: string;

    /** FieldOptions collection_type. */
    public collection_type: string;

    /** FieldOptions key_type. */
    public key_type: string;

    /** FieldOptions value_type. */
    public value_type: string;

    /** FieldOptions annotations. */
    public annotations: string[];

    /** FieldOptions map_type. */
    public map_type: string;

    /** FieldOptions no_box. */
    public no_box: boolean;

    /**
     * Creates a new FieldOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FieldOptions instance
     */
    public static create(
      properties?: scalapb.IFieldOptions
    ): scalapb.FieldOptions;

    /**
     * Encodes the specified FieldOptions message. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
     * @param message FieldOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IFieldOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
     * @param message FieldOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IFieldOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a FieldOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FieldOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.FieldOptions;

    /**
     * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FieldOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.FieldOptions;

    /**
     * Verifies a FieldOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FieldOptions
     */
    public static fromObject(object: {
      [k: string]: any;
    }): scalapb.FieldOptions;

    /**
     * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
     * @param message FieldOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.FieldOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this FieldOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an EnumOptions. */
  interface IEnumOptions {
    /** EnumOptions extends */
    extends?: string[] | null;

    /** EnumOptions companion_extends */
    companion_extends?: string[] | null;

    /** EnumOptions type */
    type?: string | null;
  }

  /** Represents an EnumOptions. */
  class EnumOptions implements IEnumOptions {
    /**
     * Constructs a new EnumOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IEnumOptions);

    /** EnumOptions extends. */
    public extends: string[];

    /** EnumOptions companion_extends. */
    public companion_extends: string[];

    /** EnumOptions type. */
    public type: string;

    /**
     * Creates a new EnumOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnumOptions instance
     */
    public static create(
      properties?: scalapb.IEnumOptions
    ): scalapb.EnumOptions;

    /**
     * Encodes the specified EnumOptions message. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
     * @param message EnumOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IEnumOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
     * @param message EnumOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IEnumOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an EnumOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnumOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.EnumOptions;

    /**
     * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnumOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.EnumOptions;

    /**
     * Verifies an EnumOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnumOptions
     */
    public static fromObject(object: { [k: string]: any }): scalapb.EnumOptions;

    /**
     * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
     * @param message EnumOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.EnumOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this EnumOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an EnumValueOptions. */
  interface IEnumValueOptions {
    /** EnumValueOptions extends */
    extends?: string[] | null;

    /** EnumValueOptions scala_name */
    scala_name?: string | null;
  }

  /** Represents an EnumValueOptions. */
  class EnumValueOptions implements IEnumValueOptions {
    /**
     * Constructs a new EnumValueOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IEnumValueOptions);

    /** EnumValueOptions extends. */
    public extends: string[];

    /** EnumValueOptions scala_name. */
    public scala_name: string;

    /**
     * Creates a new EnumValueOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnumValueOptions instance
     */
    public static create(
      properties?: scalapb.IEnumValueOptions
    ): scalapb.EnumValueOptions;

    /**
     * Encodes the specified EnumValueOptions message. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
     * @param message EnumValueOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IEnumValueOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
     * @param message EnumValueOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IEnumValueOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an EnumValueOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnumValueOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.EnumValueOptions;

    /**
     * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnumValueOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.EnumValueOptions;

    /**
     * Verifies an EnumValueOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnumValueOptions
     */
    public static fromObject(object: {
      [k: string]: any;
    }): scalapb.EnumValueOptions;

    /**
     * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
     * @param message EnumValueOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.EnumValueOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this EnumValueOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an OneofOptions. */
  interface IOneofOptions {
    /** OneofOptions extends */
    extends?: string[] | null;

    /** OneofOptions scala_name */
    scala_name?: string | null;
  }

  /** Represents an OneofOptions. */
  class OneofOptions implements IOneofOptions {
    /**
     * Constructs a new OneofOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: scalapb.IOneofOptions);

    /** OneofOptions extends. */
    public extends: string[];

    /** OneofOptions scala_name. */
    public scala_name: string;

    /**
     * Creates a new OneofOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OneofOptions instance
     */
    public static create(
      properties?: scalapb.IOneofOptions
    ): scalapb.OneofOptions;

    /**
     * Encodes the specified OneofOptions message. Does not implicitly {@link scalapb.OneofOptions.verify|verify} messages.
     * @param message OneofOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: scalapb.IOneofOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link scalapb.OneofOptions.verify|verify} messages.
     * @param message OneofOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: scalapb.IOneofOptions,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an OneofOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OneofOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): scalapb.OneofOptions;

    /**
     * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OneofOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): scalapb.OneofOptions;

    /**
     * Verifies an OneofOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OneofOptions
     */
    public static fromObject(object: {
      [k: string]: any;
    }): scalapb.OneofOptions;

    /**
     * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
     * @param message OneofOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: scalapb.OneofOptions,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this OneofOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a FileDescriptorSet. */
    interface IFileDescriptorSet {
      /** FileDescriptorSet file */
      file?: google.protobuf.IFileDescriptorProto[] | null;
    }

    /** Represents a FileDescriptorSet. */
    class FileDescriptorSet implements IFileDescriptorSet {
      /**
       * Constructs a new FileDescriptorSet.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorSet);

      /** FileDescriptorSet file. */
      public file: google.protobuf.IFileDescriptorProto[];

      /**
       * Creates a new FileDescriptorSet instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorSet instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorSet
      ): google.protobuf.FileDescriptorSet;

      /**
       * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param message FileDescriptorSet message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileDescriptorSet,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param message FileDescriptorSet message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IFileDescriptorSet,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorSet;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileDescriptorSet;

      /**
       * Verifies a FileDescriptorSet message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorSet
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorSet;

      /**
       * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
       * @param message FileDescriptorSet
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorSet,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorSet to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileDescriptorProto. */
    interface IFileDescriptorProto {
      /** FileDescriptorProto name */
      name?: string | null;

      /** FileDescriptorProto package */
      package?: string | null;

      /** FileDescriptorProto dependency */
      dependency?: string[] | null;

      /** FileDescriptorProto public_dependency */
      public_dependency?: number[] | null;

      /** FileDescriptorProto weak_dependency */
      weak_dependency?: number[] | null;

      /** FileDescriptorProto message_type */
      message_type?: google.protobuf.IDescriptorProto[] | null;

      /** FileDescriptorProto enum_type */
      enum_type?: google.protobuf.IEnumDescriptorProto[] | null;

      /** FileDescriptorProto service */
      service?: google.protobuf.IServiceDescriptorProto[] | null;

      /** FileDescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** FileDescriptorProto options */
      options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto source_code_info */
      source_code_info?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax */
      syntax?: string | null;
    }

    /** Represents a FileDescriptorProto. */
    class FileDescriptorProto implements IFileDescriptorProto {
      /**
       * Constructs a new FileDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorProto);

      /** FileDescriptorProto name. */
      public name: string;

      /** FileDescriptorProto package. */
      public package: string;

      /** FileDescriptorProto dependency. */
      public dependency: string[];

      /** FileDescriptorProto public_dependency. */
      public public_dependency: number[];

      /** FileDescriptorProto weak_dependency. */
      public weak_dependency: number[];

      /** FileDescriptorProto message_type. */
      public message_type: google.protobuf.IDescriptorProto[];

      /** FileDescriptorProto enum_type. */
      public enum_type: google.protobuf.IEnumDescriptorProto[];

      /** FileDescriptorProto service. */
      public service: google.protobuf.IServiceDescriptorProto[];

      /** FileDescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** FileDescriptorProto options. */
      public options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto source_code_info. */
      public source_code_info?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax. */
      public syntax: string;

      /**
       * Creates a new FileDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorProto
      ): google.protobuf.FileDescriptorProto;

      /**
       * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param message FileDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param message FileDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IFileDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorProto;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileDescriptorProto;

      /**
       * Verifies a FileDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorProto;

      /**
       * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
       * @param message FileDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a DescriptorProto. */
    interface IDescriptorProto {
      /** DescriptorProto name */
      name?: string | null;

      /** DescriptorProto field */
      field?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto nested_type */
      nested_type?: google.protobuf.IDescriptorProto[] | null;

      /** DescriptorProto enum_type */
      enum_type?: google.protobuf.IEnumDescriptorProto[] | null;

      /** DescriptorProto extension_range */
      extension_range?:
        | google.protobuf.DescriptorProto.IExtensionRange[]
        | null;

      /** DescriptorProto oneof_decl */
      oneof_decl?: google.protobuf.IOneofDescriptorProto[] | null;

      /** DescriptorProto options */
      options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reserved_range */
      reserved_range?: google.protobuf.DescriptorProto.IReservedRange[] | null;

      /** DescriptorProto reserved_name */
      reserved_name?: string[] | null;
    }

    /** Represents a DescriptorProto. */
    class DescriptorProto implements IDescriptorProto {
      /**
       * Constructs a new DescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IDescriptorProto);

      /** DescriptorProto name. */
      public name: string;

      /** DescriptorProto field. */
      public field: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto nested_type. */
      public nested_type: google.protobuf.IDescriptorProto[];

      /** DescriptorProto enum_type. */
      public enum_type: google.protobuf.IEnumDescriptorProto[];

      /** DescriptorProto extension_range. */
      public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

      /** DescriptorProto oneof_decl. */
      public oneof_decl: google.protobuf.IOneofDescriptorProto[];

      /** DescriptorProto options. */
      public options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reserved_range. */
      public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

      /** DescriptorProto reserved_name. */
      public reserved_name: string[];

      /**
       * Creates a new DescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IDescriptorProto
      ): google.protobuf.DescriptorProto;

      /**
       * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param message DescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param message DescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.DescriptorProto;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.DescriptorProto;

      /**
       * Verifies a DescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.DescriptorProto;

      /**
       * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
       * @param message DescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.DescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this DescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace DescriptorProto {
      /** Properties of an ExtensionRange. */
      interface IExtensionRange {
        /** ExtensionRange start */
        start?: number | null;

        /** ExtensionRange end */
        end?: number | null;
      }

      /** Represents an ExtensionRange. */
      class ExtensionRange implements IExtensionRange {
        /**
         * Constructs a new ExtensionRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IExtensionRange
        );

        /** ExtensionRange start. */
        public start: number;

        /** ExtensionRange end. */
        public end: number;

        /**
         * Creates a new ExtensionRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtensionRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IExtensionRange
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param message ExtensionRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.IExtensionRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param message ExtensionRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.DescriptorProto.IExtensionRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Verifies an ExtensionRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtensionRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
         * @param message ExtensionRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ExtensionRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ExtensionRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ReservedRange. */
      interface IReservedRange {
        /** ReservedRange start */
        start?: number | null;

        /** ReservedRange end */
        end?: number | null;
      }

      /** Represents a ReservedRange. */
      class ReservedRange implements IReservedRange {
        /**
         * Constructs a new ReservedRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IReservedRange
        );

        /** ReservedRange start. */
        public start: number;

        /** ReservedRange end. */
        public end: number;

        /**
         * Creates a new ReservedRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReservedRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IReservedRange
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param message ReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.IReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param message ReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.DescriptorProto.IReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Verifies a ReservedRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReservedRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
         * @param message ReservedRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ReservedRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ReservedRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a FieldDescriptorProto. */
    interface IFieldDescriptorProto {
      /** FieldDescriptorProto name */
      name?: string | null;

      /** FieldDescriptorProto number */
      number?: number | null;

      /** FieldDescriptorProto label */
      label?: google.protobuf.FieldDescriptorProto.Label | null;

      /** FieldDescriptorProto type */
      type?: google.protobuf.FieldDescriptorProto.Type | null;

      /** FieldDescriptorProto type_name */
      type_name?: string | null;

      /** FieldDescriptorProto extendee */
      extendee?: string | null;

      /** FieldDescriptorProto default_value */
      default_value?: string | null;

      /** FieldDescriptorProto oneof_index */
      oneof_index?: number | null;

      /** FieldDescriptorProto json_name */
      json_name?: string | null;

      /** FieldDescriptorProto options */
      options?: google.protobuf.IFieldOptions | null;
    }

    /** Represents a FieldDescriptorProto. */
    class FieldDescriptorProto implements IFieldDescriptorProto {
      /**
       * Constructs a new FieldDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldDescriptorProto);

      /** FieldDescriptorProto name. */
      public name: string;

      /** FieldDescriptorProto number. */
      public number: number;

      /** FieldDescriptorProto label. */
      public label: google.protobuf.FieldDescriptorProto.Label;

      /** FieldDescriptorProto type. */
      public type: google.protobuf.FieldDescriptorProto.Type;

      /** FieldDescriptorProto type_name. */
      public type_name: string;

      /** FieldDescriptorProto extendee. */
      public extendee: string;

      /** FieldDescriptorProto default_value. */
      public default_value: string;

      /** FieldDescriptorProto oneof_index. */
      public oneof_index: number;

      /** FieldDescriptorProto json_name. */
      public json_name: string;

      /** FieldDescriptorProto options. */
      public options?: google.protobuf.IFieldOptions | null;

      /**
       * Creates a new FieldDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFieldDescriptorProto
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param message FieldDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFieldDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param message FieldDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IFieldDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Verifies a FieldDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldDescriptorProto;

      /**
       * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
       * @param message FieldDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldDescriptorProto {
      /** Type enum. */
      enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
      }

      /** Label enum. */
      enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
      }
    }

    /** Properties of an OneofDescriptorProto. */
    interface IOneofDescriptorProto {
      /** OneofDescriptorProto name */
      name?: string | null;

      /** OneofDescriptorProto options */
      options?: google.protobuf.IOneofOptions | null;
    }

    /** Represents an OneofDescriptorProto. */
    class OneofDescriptorProto implements IOneofDescriptorProto {
      /**
       * Constructs a new OneofDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofDescriptorProto);

      /** OneofDescriptorProto name. */
      public name: string;

      /** OneofDescriptorProto options. */
      public options?: google.protobuf.IOneofOptions | null;

      /**
       * Creates a new OneofDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IOneofDescriptorProto
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param message OneofDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IOneofDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param message OneofDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IOneofDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Verifies an OneofDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofDescriptorProto;

      /**
       * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
       * @param message OneofDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumDescriptorProto. */
    interface IEnumDescriptorProto {
      /** EnumDescriptorProto name */
      name?: string | null;

      /** EnumDescriptorProto value */
      value?: google.protobuf.IEnumValueDescriptorProto[] | null;

      /** EnumDescriptorProto options */
      options?: google.protobuf.IEnumOptions | null;
    }

    /** Represents an EnumDescriptorProto. */
    class EnumDescriptorProto implements IEnumDescriptorProto {
      /**
       * Constructs a new EnumDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumDescriptorProto);

      /** EnumDescriptorProto name. */
      public name: string;

      /** EnumDescriptorProto value. */
      public value: google.protobuf.IEnumValueDescriptorProto[];

      /** EnumDescriptorProto options. */
      public options?: google.protobuf.IEnumOptions | null;

      /**
       * Creates a new EnumDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumDescriptorProto
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param message EnumDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param message EnumDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IEnumDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Verifies an EnumDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumDescriptorProto;

      /**
       * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumValueDescriptorProto. */
    interface IEnumValueDescriptorProto {
      /** EnumValueDescriptorProto name */
      name?: string | null;

      /** EnumValueDescriptorProto number */
      number?: number | null;

      /** EnumValueDescriptorProto options */
      options?: google.protobuf.IEnumValueOptions | null;
    }

    /** Represents an EnumValueDescriptorProto. */
    class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
      /**
       * Constructs a new EnumValueDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

      /** EnumValueDescriptorProto name. */
      public name: string;

      /** EnumValueDescriptorProto number. */
      public number: number;

      /** EnumValueDescriptorProto options. */
      public options?: google.protobuf.IEnumValueOptions | null;

      /**
       * Creates a new EnumValueDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumValueDescriptorProto
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param message EnumValueDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumValueDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param message EnumValueDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IEnumValueDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Verifies an EnumValueDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueDescriptorProto;

      /**
       * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumValueDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceDescriptorProto. */
    interface IServiceDescriptorProto {
      /** ServiceDescriptorProto name */
      name?: string | null;

      /** ServiceDescriptorProto method */
      method?: google.protobuf.IMethodDescriptorProto[] | null;

      /** ServiceDescriptorProto options */
      options?: google.protobuf.IServiceOptions | null;
    }

    /** Represents a ServiceDescriptorProto. */
    class ServiceDescriptorProto implements IServiceDescriptorProto {
      /**
       * Constructs a new ServiceDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceDescriptorProto);

      /** ServiceDescriptorProto name. */
      public name: string;

      /** ServiceDescriptorProto method. */
      public method: google.protobuf.IMethodDescriptorProto[];

      /** ServiceDescriptorProto options. */
      public options?: google.protobuf.IServiceOptions | null;

      /**
       * Creates a new ServiceDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IServiceDescriptorProto
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param message ServiceDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IServiceDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param message ServiceDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IServiceDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Verifies a ServiceDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceDescriptorProto;

      /**
       * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
       * @param message ServiceDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodDescriptorProto. */
    interface IMethodDescriptorProto {
      /** MethodDescriptorProto name */
      name?: string | null;

      /** MethodDescriptorProto input_type */
      input_type?: string | null;

      /** MethodDescriptorProto output_type */
      output_type?: string | null;

      /** MethodDescriptorProto options */
      options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto client_streaming */
      client_streaming?: boolean | null;

      /** MethodDescriptorProto server_streaming */
      server_streaming?: boolean | null;
    }

    /** Represents a MethodDescriptorProto. */
    class MethodDescriptorProto implements IMethodDescriptorProto {
      /**
       * Constructs a new MethodDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodDescriptorProto);

      /** MethodDescriptorProto name. */
      public name: string;

      /** MethodDescriptorProto input_type. */
      public input_type: string;

      /** MethodDescriptorProto output_type. */
      public output_type: string;

      /** MethodDescriptorProto options. */
      public options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto client_streaming. */
      public client_streaming: boolean;

      /** MethodDescriptorProto server_streaming. */
      public server_streaming: boolean;

      /**
       * Creates a new MethodDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IMethodDescriptorProto
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param message MethodDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMethodDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param message MethodDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IMethodDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Verifies a MethodDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodDescriptorProto;

      /**
       * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
       * @param message MethodDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileOptions. */
    interface IFileOptions {
      /** FileOptions java_package */
      java_package?: string | null;

      /** FileOptions java_outer_classname */
      java_outer_classname?: string | null;

      /** FileOptions java_multiple_files */
      java_multiple_files?: boolean | null;

      /** FileOptions java_generate_equals_and_hash */
      java_generate_equals_and_hash?: boolean | null;

      /** FileOptions java_string_check_utf8 */
      java_string_check_utf8?: boolean | null;

      /** FileOptions optimize_for */
      optimize_for?: google.protobuf.FileOptions.OptimizeMode | null;

      /** FileOptions go_package */
      go_package?: string | null;

      /** FileOptions cc_generic_services */
      cc_generic_services?: boolean | null;

      /** FileOptions java_generic_services */
      java_generic_services?: boolean | null;

      /** FileOptions py_generic_services */
      py_generic_services?: boolean | null;

      /** FileOptions deprecated */
      deprecated?: boolean | null;

      /** FileOptions cc_enable_arenas */
      cc_enable_arenas?: boolean | null;

      /** FileOptions objc_class_prefix */
      objc_class_prefix?: string | null;

      /** FileOptions csharp_namespace */
      csharp_namespace?: string | null;

      /** FileOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** FileOptions .scalapb.options */
      ".scalapb.options"?: scalapb.IScalaPbOptions | null;
    }

    /** Represents a FileOptions. */
    class FileOptions implements IFileOptions {
      /**
       * Constructs a new FileOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileOptions);

      /** FileOptions java_package. */
      public java_package: string;

      /** FileOptions java_outer_classname. */
      public java_outer_classname: string;

      /** FileOptions java_multiple_files. */
      public java_multiple_files: boolean;

      /** FileOptions java_generate_equals_and_hash. */
      public java_generate_equals_and_hash: boolean;

      /** FileOptions java_string_check_utf8. */
      public java_string_check_utf8: boolean;

      /** FileOptions optimize_for. */
      public optimize_for: google.protobuf.FileOptions.OptimizeMode;

      /** FileOptions go_package. */
      public go_package: string;

      /** FileOptions cc_generic_services. */
      public cc_generic_services: boolean;

      /** FileOptions java_generic_services. */
      public java_generic_services: boolean;

      /** FileOptions py_generic_services. */
      public py_generic_services: boolean;

      /** FileOptions deprecated. */
      public deprecated: boolean;

      /** FileOptions cc_enable_arenas. */
      public cc_enable_arenas: boolean;

      /** FileOptions objc_class_prefix. */
      public objc_class_prefix: string;

      /** FileOptions csharp_namespace. */
      public csharp_namespace: string;

      /** FileOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new FileOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileOptions instance
       */
      public static create(
        properties?: google.protobuf.IFileOptions
      ): google.protobuf.FileOptions;

      /**
       * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param message FileOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param message FileOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IFileOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileOptions;

      /**
       * Decodes a FileOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileOptions;

      /**
       * Verifies a FileOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileOptions;

      /**
       * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
       * @param message FileOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FileOptions {
      /** OptimizeMode enum. */
      enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
      }
    }

    /** Properties of a MessageOptions. */
    interface IMessageOptions {
      /** MessageOptions message_set_wire_format */
      message_set_wire_format?: boolean | null;

      /** MessageOptions no_standard_descriptor_accessor */
      no_standard_descriptor_accessor?: boolean | null;

      /** MessageOptions deprecated */
      deprecated?: boolean | null;

      /** MessageOptions map_entry */
      map_entry?: boolean | null;

      /** MessageOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** MessageOptions .scalapb.message */
      ".scalapb.message"?: scalapb.IMessageOptions | null;
    }

    /** Represents a MessageOptions. */
    class MessageOptions implements IMessageOptions {
      /**
       * Constructs a new MessageOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMessageOptions);

      /** MessageOptions message_set_wire_format. */
      public message_set_wire_format: boolean;

      /** MessageOptions no_standard_descriptor_accessor. */
      public no_standard_descriptor_accessor: boolean;

      /** MessageOptions deprecated. */
      public deprecated: boolean;

      /** MessageOptions map_entry. */
      public map_entry: boolean;

      /** MessageOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new MessageOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MessageOptions instance
       */
      public static create(
        properties?: google.protobuf.IMessageOptions
      ): google.protobuf.MessageOptions;

      /**
       * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param message MessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param message MessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IMessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MessageOptions;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MessageOptions;

      /**
       * Verifies a MessageOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MessageOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MessageOptions;

      /**
       * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
       * @param message MessageOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MessageOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MessageOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FieldOptions. */
    interface IFieldOptions {
      /** FieldOptions ctype */
      ctype?: google.protobuf.FieldOptions.CType | null;

      /** FieldOptions packed */
      packed?: boolean | null;

      /** FieldOptions jstype */
      jstype?: google.protobuf.FieldOptions.JSType | null;

      /** FieldOptions lazy */
      lazy?: boolean | null;

      /** FieldOptions deprecated */
      deprecated?: boolean | null;

      /** FieldOptions weak */
      weak?: boolean | null;

      /** FieldOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** FieldOptions .scalapb.field */
      ".scalapb.field"?: scalapb.IFieldOptions | null;
    }

    /** Represents a FieldOptions. */
    class FieldOptions implements IFieldOptions {
      /**
       * Constructs a new FieldOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldOptions);

      /** FieldOptions ctype. */
      public ctype: google.protobuf.FieldOptions.CType;

      /** FieldOptions packed. */
      public packed: boolean;

      /** FieldOptions jstype. */
      public jstype: google.protobuf.FieldOptions.JSType;

      /** FieldOptions lazy. */
      public lazy: boolean;

      /** FieldOptions deprecated. */
      public deprecated: boolean;

      /** FieldOptions weak. */
      public weak: boolean;

      /** FieldOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new FieldOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldOptions instance
       */
      public static create(
        properties?: google.protobuf.IFieldOptions
      ): google.protobuf.FieldOptions;

      /**
       * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param message FieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param message FieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IFieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldOptions;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FieldOptions;

      /**
       * Verifies a FieldOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldOptions;

      /**
       * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
       * @param message FieldOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldOptions {
      /** CType enum. */
      enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
      }

      /** JSType enum. */
      enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
      }
    }

    /** Properties of an OneofOptions. */
    interface IOneofOptions {
      /** OneofOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** OneofOptions .scalapb.oneof */
      ".scalapb.oneof"?: scalapb.IOneofOptions | null;
    }

    /** Represents an OneofOptions. */
    class OneofOptions implements IOneofOptions {
      /**
       * Constructs a new OneofOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofOptions);

      /** OneofOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new OneofOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofOptions instance
       */
      public static create(
        properties?: google.protobuf.IOneofOptions
      ): google.protobuf.OneofOptions;

      /**
       * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param message OneofOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IOneofOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param message OneofOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IOneofOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofOptions;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.OneofOptions;

      /**
       * Verifies an OneofOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofOptions;

      /**
       * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
       * @param message OneofOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumOptions. */
    interface IEnumOptions {
      /** EnumOptions allow_alias */
      allow_alias?: boolean | null;

      /** EnumOptions deprecated */
      deprecated?: boolean | null;

      /** EnumOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** EnumOptions .scalapb.enum_options */
      ".scalapb.enum_options"?: scalapb.IEnumOptions | null;
    }

    /** Represents an EnumOptions. */
    class EnumOptions implements IEnumOptions {
      /**
       * Constructs a new EnumOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumOptions);

      /** EnumOptions allow_alias. */
      public allow_alias: boolean;

      /** EnumOptions deprecated. */
      public deprecated: boolean;

      /** EnumOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new EnumOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumOptions instance
       */
      public static create(
        properties?: google.protobuf.IEnumOptions
      ): google.protobuf.EnumOptions;

      /**
       * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param message EnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param message EnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IEnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumOptions;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumOptions;

      /**
       * Verifies an EnumOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumOptions;

      /**
       * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
       * @param message EnumOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumValueOptions. */
    interface IEnumValueOptions {
      /** EnumValueOptions deprecated */
      deprecated?: boolean | null;

      /** EnumValueOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;

      /** EnumValueOptions .scalapb.enum_value */
      ".scalapb.enum_value"?: scalapb.IEnumValueOptions | null;
    }

    /** Represents an EnumValueOptions. */
    class EnumValueOptions implements IEnumValueOptions {
      /**
       * Constructs a new EnumValueOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueOptions);

      /** EnumValueOptions deprecated. */
      public deprecated: boolean;

      /** EnumValueOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new EnumValueOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueOptions instance
       */
      public static create(
        properties?: google.protobuf.IEnumValueOptions
      ): google.protobuf.EnumValueOptions;

      /**
       * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param message EnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param message EnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IEnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueOptions;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumValueOptions;

      /**
       * Verifies an EnumValueOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueOptions;

      /**
       * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
       * @param message EnumValueOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceOptions. */
    interface IServiceOptions {
      /** ServiceOptions deprecated */
      deprecated?: boolean | null;

      /** ServiceOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a ServiceOptions. */
    class ServiceOptions implements IServiceOptions {
      /**
       * Constructs a new ServiceOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceOptions);

      /** ServiceOptions deprecated. */
      public deprecated: boolean;

      /** ServiceOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new ServiceOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceOptions instance
       */
      public static create(
        properties?: google.protobuf.IServiceOptions
      ): google.protobuf.ServiceOptions;

      /**
       * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param message ServiceOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IServiceOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param message ServiceOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IServiceOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceOptions;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.ServiceOptions;

      /**
       * Verifies a ServiceOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceOptions;

      /**
       * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
       * @param message ServiceOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodOptions. */
    interface IMethodOptions {
      /** MethodOptions deprecated */
      deprecated?: boolean | null;

      /** MethodOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a MethodOptions. */
    class MethodOptions implements IMethodOptions {
      /**
       * Constructs a new MethodOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodOptions);

      /** MethodOptions deprecated. */
      public deprecated: boolean;

      /** MethodOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.IUninterpretedOption[];

      /**
       * Creates a new MethodOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodOptions instance
       */
      public static create(
        properties?: google.protobuf.IMethodOptions
      ): google.protobuf.MethodOptions;

      /**
       * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param message MethodOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMethodOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param message MethodOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IMethodOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodOptions;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MethodOptions;

      /**
       * Verifies a MethodOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodOptions;

      /**
       * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
       * @param message MethodOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an UninterpretedOption. */
    interface IUninterpretedOption {
      /** UninterpretedOption name */
      name?: google.protobuf.UninterpretedOption.INamePart[] | null;

      /** UninterpretedOption identifier_value */
      identifier_value?: string | null;

      /** UninterpretedOption positive_int_value */
      positive_int_value?: number | Long | null;

      /** UninterpretedOption negative_int_value */
      negative_int_value?: number | Long | null;

      /** UninterpretedOption double_value */
      double_value?: number | null;

      /** UninterpretedOption string_value */
      string_value?: Uint8Array | null;

      /** UninterpretedOption aggregate_value */
      aggregate_value?: string | null;
    }

    /** Represents an UninterpretedOption. */
    class UninterpretedOption implements IUninterpretedOption {
      /**
       * Constructs a new UninterpretedOption.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IUninterpretedOption);

      /** UninterpretedOption name. */
      public name: google.protobuf.UninterpretedOption.INamePart[];

      /** UninterpretedOption identifier_value. */
      public identifier_value: string;

      /** UninterpretedOption positive_int_value. */
      public positive_int_value: number | Long;

      /** UninterpretedOption negative_int_value. */
      public negative_int_value: number | Long;

      /** UninterpretedOption double_value. */
      public double_value: number;

      /** UninterpretedOption string_value. */
      public string_value: Uint8Array;

      /** UninterpretedOption aggregate_value. */
      public aggregate_value: string;

      /**
       * Creates a new UninterpretedOption instance using the specified properties.
       * @param [properties] Properties to set
       * @returns UninterpretedOption instance
       */
      public static create(
        properties?: google.protobuf.IUninterpretedOption
      ): google.protobuf.UninterpretedOption;

      /**
       * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param message UninterpretedOption message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IUninterpretedOption,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param message UninterpretedOption message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IUninterpretedOption,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.UninterpretedOption;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.UninterpretedOption;

      /**
       * Verifies an UninterpretedOption message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns UninterpretedOption
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.UninterpretedOption;

      /**
       * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
       * @param message UninterpretedOption
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.UninterpretedOption,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this UninterpretedOption to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace UninterpretedOption {
      /** Properties of a NamePart. */
      interface INamePart {
        /** NamePart name_part */
        name_part: string;

        /** NamePart is_extension */
        is_extension: boolean;
      }

      /** Represents a NamePart. */
      class NamePart implements INamePart {
        /**
         * Constructs a new NamePart.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

        /** NamePart name_part. */
        public name_part: string;

        /** NamePart is_extension. */
        public is_extension: boolean;

        /**
         * Creates a new NamePart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NamePart instance
         */
        public static create(
          properties?: google.protobuf.UninterpretedOption.INamePart
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param message NamePart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.UninterpretedOption.INamePart,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param message NamePart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.UninterpretedOption.INamePart,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a NamePart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Decodes a NamePart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Verifies a NamePart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NamePart
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Creates a plain object from a NamePart message. Also converts values to other types if specified.
         * @param message NamePart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.UninterpretedOption.NamePart,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this NamePart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a SourceCodeInfo. */
    interface ISourceCodeInfo {
      /** SourceCodeInfo location */
      location?: google.protobuf.SourceCodeInfo.ILocation[] | null;
    }

    /** Represents a SourceCodeInfo. */
    class SourceCodeInfo implements ISourceCodeInfo {
      /**
       * Constructs a new SourceCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ISourceCodeInfo);

      /** SourceCodeInfo location. */
      public location: google.protobuf.SourceCodeInfo.ILocation[];

      /**
       * Creates a new SourceCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SourceCodeInfo instance
       */
      public static create(
        properties?: google.protobuf.ISourceCodeInfo
      ): google.protobuf.SourceCodeInfo;

      /**
       * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param message SourceCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ISourceCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param message SourceCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ISourceCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.SourceCodeInfo;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.SourceCodeInfo;

      /**
       * Verifies a SourceCodeInfo message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SourceCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.SourceCodeInfo;

      /**
       * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
       * @param message SourceCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.SourceCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SourceCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace SourceCodeInfo {
      /** Properties of a Location. */
      interface ILocation {
        /** Location path */
        path?: number[] | null;

        /** Location span */
        span?: number[] | null;

        /** Location leading_comments */
        leading_comments?: string | null;

        /** Location trailing_comments */
        trailing_comments?: string | null;

        /** Location leading_detached_comments */
        leading_detached_comments?: string[] | null;
      }

      /** Represents a Location. */
      class Location implements ILocation {
        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

        /** Location path. */
        public path: number[];

        /** Location span. */
        public span: number[];

        /** Location leading_comments. */
        public leading_comments: string;

        /** Location trailing_comments. */
        public trailing_comments: string;

        /** Location leading_detached_comments. */
        public leading_detached_comments: string[];

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(
          properties?: google.protobuf.SourceCodeInfo.ILocation
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.SourceCodeInfo.ILocation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.SourceCodeInfo.ILocation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.SourceCodeInfo.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.SourceCodeInfo.Location,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a GeneratedCodeInfo. */
    interface IGeneratedCodeInfo {
      /** GeneratedCodeInfo annotation */
      annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[] | null;
    }

    /** Represents a GeneratedCodeInfo. */
    class GeneratedCodeInfo implements IGeneratedCodeInfo {
      /**
       * Constructs a new GeneratedCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IGeneratedCodeInfo);

      /** GeneratedCodeInfo annotation. */
      public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

      /**
       * Creates a new GeneratedCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns GeneratedCodeInfo instance
       */
      public static create(
        properties?: google.protobuf.IGeneratedCodeInfo
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param message GeneratedCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IGeneratedCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param message GeneratedCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.IGeneratedCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Verifies a GeneratedCodeInfo message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GeneratedCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.GeneratedCodeInfo;

      /**
       * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
       * @param message GeneratedCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.GeneratedCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GeneratedCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace GeneratedCodeInfo {
      /** Properties of an Annotation. */
      interface IAnnotation {
        /** Annotation path */
        path?: number[] | null;

        /** Annotation source_file */
        source_file?: string | null;

        /** Annotation begin */
        begin?: number | null;

        /** Annotation end */
        end?: number | null;
      }

      /** Represents an Annotation. */
      class Annotation implements IAnnotation {
        /**
         * Constructs a new Annotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

        /** Annotation path. */
        public path: number[];

        /** Annotation source_file. */
        public source_file: string;

        /** Annotation begin. */
        public begin: number;

        /** Annotation end. */
        public end: number;

        /**
         * Creates a new Annotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Annotation instance
         */
        public static create(
          properties?: google.protobuf.GeneratedCodeInfo.IAnnotation
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param message Annotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.GeneratedCodeInfo.IAnnotation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param message Annotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.GeneratedCodeInfo.IAnnotation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Annotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Decodes an Annotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Verifies an Annotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Annotation
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Creates a plain object from an Annotation message. Also converts values to other types if specified.
         * @param message Annotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.GeneratedCodeInfo.Annotation,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Annotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}

/** Properties of a Par. */
export interface IPar {
  /** Par sends */
  sends?: ISend[] | null;

  /** Par receives */
  receives?: IReceive[] | null;

  /** Par news */
  news?: INew[] | null;

  /** Par exprs */
  exprs?: IExpr[] | null;

  /** Par matches */
  matches?: IMatch[] | null;

  /** Par unforgeables */
  unforgeables?: IGUnforgeable[] | null;

  /** Par bundles */
  bundles?: IBundle[] | null;

  /** Par connectives */
  connectives?: IConnective[] | null;

  /** Par locallyFree */
  locallyFree?: Uint8Array | null;

  /** Par connective_used */
  connective_used?: boolean | null;
}

/**
 * Rholang process
 *
 * For example, `@0!(1) | @2!(3) | for(x <- @0) { Nil }` has two sends
 * and one receive.
 *
 * The Nil process is a `Par` with no sends, receives, etc.
 */
export class Par implements IPar {
  /**
   * Constructs a new Par.
   * @param [properties] Properties to set
   */
  constructor(properties?: IPar);

  /** Par sends. */
  public sends: ISend[];

  /** Par receives. */
  public receives: IReceive[];

  /** Par news. */
  public news: INew[];

  /** Par exprs. */
  public exprs: IExpr[];

  /** Par matches. */
  public matches: IMatch[];

  /** Par unforgeables. */
  public unforgeables: IGUnforgeable[];

  /** Par bundles. */
  public bundles: IBundle[];

  /** Par connectives. */
  public connectives: IConnective[];

  /** Par locallyFree. */
  public locallyFree: Uint8Array;

  /** Par connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new Par instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Par instance
   */
  public static create(properties?: IPar): Par;

  /**
   * Encodes the specified Par message. Does not implicitly {@link Par.verify|verify} messages.
   * @param message Par message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IPar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Par message, length delimited. Does not implicitly {@link Par.verify|verify} messages.
   * @param message Par message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IPar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Par message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Par
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Par;

  /**
   * Decodes a Par message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Par
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Par;

  /**
   * Verifies a Par message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Par message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Par
   */
  public static fromObject(object: { [k: string]: any }): Par;

  /**
   * Creates a plain object from a Par message. Also converts values to other types if specified.
   * @param message Par
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Par,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Par to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a TaggedContinuation. */
export interface ITaggedContinuation {
  /** TaggedContinuation par_body */
  par_body?: IParWithRandom | null;

  /** TaggedContinuation scala_body_ref */
  scala_body_ref?: number | Long | null;
}

/** Either rholang code or code built in to the interpreter. */
export class TaggedContinuation implements ITaggedContinuation {
  /**
   * Constructs a new TaggedContinuation.
   * @param [properties] Properties to set
   */
  constructor(properties?: ITaggedContinuation);

  /** TaggedContinuation par_body. */
  public par_body?: IParWithRandom | null;

  /** TaggedContinuation scala_body_ref. */
  public scala_body_ref: number | Long;

  /** TaggedContinuation tagged_cont. */
  public tagged_cont?: "par_body" | "scala_body_ref";

  /**
   * Creates a new TaggedContinuation instance using the specified properties.
   * @param [properties] Properties to set
   * @returns TaggedContinuation instance
   */
  public static create(properties?: ITaggedContinuation): TaggedContinuation;

  /**
   * Encodes the specified TaggedContinuation message. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
   * @param message TaggedContinuation message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ITaggedContinuation,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified TaggedContinuation message, length delimited. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
   * @param message TaggedContinuation message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ITaggedContinuation,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a TaggedContinuation message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns TaggedContinuation
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): TaggedContinuation;

  /**
   * Decodes a TaggedContinuation message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns TaggedContinuation
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): TaggedContinuation;

  /**
   * Verifies a TaggedContinuation message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a TaggedContinuation message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns TaggedContinuation
   */
  public static fromObject(object: { [k: string]: any }): TaggedContinuation;

  /**
   * Creates a plain object from a TaggedContinuation message. Also converts values to other types if specified.
   * @param message TaggedContinuation
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: TaggedContinuation,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this TaggedContinuation to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ParWithRandom. */
export interface IParWithRandom {
  /** ParWithRandom body */
  body?: IPar | null;

  /** ParWithRandom randomState */
  randomState?: Uint8Array | null;
}

/**
 * Rholang code along with the state of a split random number
 * generator for generating new unforgeable names.
 */
export class ParWithRandom implements IParWithRandom {
  /**
   * Constructs a new ParWithRandom.
   * @param [properties] Properties to set
   */
  constructor(properties?: IParWithRandom);

  /** ParWithRandom body. */
  public body?: IPar | null;

  /** ParWithRandom randomState. */
  public randomState: Uint8Array;

  /**
   * Creates a new ParWithRandom instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ParWithRandom instance
   */
  public static create(properties?: IParWithRandom): ParWithRandom;

  /**
   * Encodes the specified ParWithRandom message. Does not implicitly {@link ParWithRandom.verify|verify} messages.
   * @param message ParWithRandom message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IParWithRandom,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ParWithRandom message, length delimited. Does not implicitly {@link ParWithRandom.verify|verify} messages.
   * @param message ParWithRandom message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IParWithRandom,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ParWithRandom message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ParWithRandom
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ParWithRandom;

  /**
   * Decodes a ParWithRandom message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ParWithRandom
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ParWithRandom;

  /**
   * Verifies a ParWithRandom message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ParWithRandom message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ParWithRandom
   */
  public static fromObject(object: { [k: string]: any }): ParWithRandom;

  /**
   * Creates a plain object from a ParWithRandom message. Also converts values to other types if specified.
   * @param message ParWithRandom
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ParWithRandom,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ParWithRandom to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a PCost. */
export interface IPCost {
  /** PCost cost */
  cost?: number | Long | null;
}

/** Cost of the performed operations. */
export class PCost implements IPCost {
  /**
   * Constructs a new PCost.
   * @param [properties] Properties to set
   */
  constructor(properties?: IPCost);

  /** PCost cost. */
  public cost: number | Long;

  /**
   * Creates a new PCost instance using the specified properties.
   * @param [properties] Properties to set
   * @returns PCost instance
   */
  public static create(properties?: IPCost): PCost;

  /**
   * Encodes the specified PCost message. Does not implicitly {@link PCost.verify|verify} messages.
   * @param message PCost message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IPCost,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified PCost message, length delimited. Does not implicitly {@link PCost.verify|verify} messages.
   * @param message PCost message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IPCost,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a PCost message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns PCost
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): PCost;

  /**
   * Decodes a PCost message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns PCost
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PCost;

  /**
   * Verifies a PCost message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a PCost message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns PCost
   */
  public static fromObject(object: { [k: string]: any }): PCost;

  /**
   * Creates a plain object from a PCost message. Also converts values to other types if specified.
   * @param message PCost
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: PCost,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this PCost to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ListParWithRandom. */
export interface IListParWithRandom {
  /** ListParWithRandom pars */
  pars?: IPar[] | null;

  /** ListParWithRandom randomState */
  randomState?: Uint8Array | null;
}

/** Represents a ListParWithRandom. */
export class ListParWithRandom implements IListParWithRandom {
  /**
   * Constructs a new ListParWithRandom.
   * @param [properties] Properties to set
   */
  constructor(properties?: IListParWithRandom);

  /** ListParWithRandom pars. */
  public pars: IPar[];

  /** ListParWithRandom randomState. */
  public randomState: Uint8Array;

  /**
   * Creates a new ListParWithRandom instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ListParWithRandom instance
   */
  public static create(properties?: IListParWithRandom): ListParWithRandom;

  /**
   * Encodes the specified ListParWithRandom message. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
   * @param message ListParWithRandom message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IListParWithRandom,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ListParWithRandom message, length delimited. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
   * @param message ListParWithRandom message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IListParWithRandom,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ListParWithRandom message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ListParWithRandom
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ListParWithRandom;

  /**
   * Decodes a ListParWithRandom message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ListParWithRandom
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ListParWithRandom;

  /**
   * Verifies a ListParWithRandom message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ListParWithRandom message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ListParWithRandom
   */
  public static fromObject(object: { [k: string]: any }): ListParWithRandom;

  /**
   * Creates a plain object from a ListParWithRandom message. Also converts values to other types if specified.
   * @param message ListParWithRandom
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ListParWithRandom,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ListParWithRandom to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Var. */
export interface IVar {
  /** Var bound_var */
  bound_var?: number | null;

  /** Var free_var */
  free_var?: number | null;

  /** Var wildcard */
  wildcard?: Var.IWildcardMsg | null;
}

/** Represents a Var. */
export class Var implements IVar {
  /**
   * Constructs a new Var.
   * @param [properties] Properties to set
   */
  constructor(properties?: IVar);

  /** Var bound_var. */
  public bound_var: number;

  /** Var free_var. */
  public free_var: number;

  /** Var wildcard. */
  public wildcard?: Var.IWildcardMsg | null;

  /** Var var_instance. */
  public var_instance?: "bound_var" | "free_var" | "wildcard";

  /**
   * Creates a new Var instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Var instance
   */
  public static create(properties?: IVar): Var;

  /**
   * Encodes the specified Var message. Does not implicitly {@link Var.verify|verify} messages.
   * @param message Var message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IVar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Var message, length delimited. Does not implicitly {@link Var.verify|verify} messages.
   * @param message Var message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IVar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Var message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Var
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Var;

  /**
   * Decodes a Var message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Var
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Var;

  /**
   * Verifies a Var message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Var message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Var
   */
  public static fromObject(object: { [k: string]: any }): Var;

  /**
   * Creates a plain object from a Var message. Also converts values to other types if specified.
   * @param message Var
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Var,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Var to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace Var {
  /** Properties of a WildcardMsg. */
  interface IWildcardMsg {}

  /** Represents a WildcardMsg. */
  class WildcardMsg implements IWildcardMsg {
    /**
     * Constructs a new WildcardMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: Var.IWildcardMsg);

    /**
     * Creates a new WildcardMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WildcardMsg instance
     */
    public static create(properties?: Var.IWildcardMsg): Var.WildcardMsg;

    /**
     * Encodes the specified WildcardMsg message. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
     * @param message WildcardMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Var.IWildcardMsg,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WildcardMsg message, length delimited. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
     * @param message WildcardMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Var.IWildcardMsg,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WildcardMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WildcardMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): Var.WildcardMsg;

    /**
     * Decodes a WildcardMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WildcardMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): Var.WildcardMsg;

    /**
     * Verifies a WildcardMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a WildcardMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WildcardMsg
     */
    public static fromObject(object: { [k: string]: any }): Var.WildcardMsg;

    /**
     * Creates a plain object from a WildcardMsg message. Also converts values to other types if specified.
     * @param message WildcardMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Var.WildcardMsg,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WildcardMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Properties of a Bundle. */
export interface IBundle {
  /** Bundle body */
  body?: IPar | null;

  /** Bundle writeFlag */
  writeFlag?: boolean | null;

  /** Bundle readFlag */
  readFlag?: boolean | null;
}

/**
 * Nothing can be received from a (quoted) bundle with `readFlag = false`.
 * Likeise nothing can be sent to a (quoted) bundle with `writeFlag = false`.
 *
 * If both flags are set to false, bundle allows only for equivalance check.
 */
export class Bundle implements IBundle {
  /**
   * Constructs a new Bundle.
   * @param [properties] Properties to set
   */
  constructor(properties?: IBundle);

  /** Bundle body. */
  public body?: IPar | null;

  /** Bundle writeFlag. */
  public writeFlag: boolean;

  /** Bundle readFlag. */
  public readFlag: boolean;

  /**
   * Creates a new Bundle instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Bundle instance
   */
  public static create(properties?: IBundle): Bundle;

  /**
   * Encodes the specified Bundle message. Does not implicitly {@link Bundle.verify|verify} messages.
   * @param message Bundle message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IBundle,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Bundle message, length delimited. Does not implicitly {@link Bundle.verify|verify} messages.
   * @param message Bundle message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IBundle,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Bundle message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Bundle
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Bundle;

  /**
   * Decodes a Bundle message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Bundle
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Bundle;

  /**
   * Verifies a Bundle message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Bundle message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Bundle
   */
  public static fromObject(object: { [k: string]: any }): Bundle;

  /**
   * Creates a plain object from a Bundle message. Also converts values to other types if specified.
   * @param message Bundle
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Bundle,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Bundle to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Send. */
export interface ISend {
  /** Send chan */
  chan?: IPar | null;

  /** Send data */
  data?: IPar[] | null;

  /** Send persistent */
  persistent?: boolean | null;

  /** Send locallyFree */
  locallyFree?: Uint8Array | null;

  /** Send connective_used */
  connective_used?: boolean | null;
}

/**
 * A send is written `chan!(data)` or `chan!!(data)` for a persistent send.
 *
 * Upon send, all free variables in data are substituted with their values.
 */
export class Send implements ISend {
  /**
   * Constructs a new Send.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISend);

  /** Send chan. */
  public chan?: IPar | null;

  /** Send data. */
  public data: IPar[];

  /** Send persistent. */
  public persistent: boolean;

  /** Send locallyFree. */
  public locallyFree: Uint8Array;

  /** Send connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new Send instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Send instance
   */
  public static create(properties?: ISend): Send;

  /**
   * Encodes the specified Send message. Does not implicitly {@link Send.verify|verify} messages.
   * @param message Send message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ISend,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Send message, length delimited. Does not implicitly {@link Send.verify|verify} messages.
   * @param message Send message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ISend,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Send message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Send
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Send;

  /**
   * Decodes a Send message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Send
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Send;

  /**
   * Verifies a Send message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Send message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Send
   */
  public static fromObject(object: { [k: string]: any }): Send;

  /**
   * Creates a plain object from a Send message. Also converts values to other types if specified.
   * @param message Send
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Send,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Send to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ReceiveBind. */
export interface IReceiveBind {
  /** ReceiveBind patterns */
  patterns?: IPar[] | null;

  /** ReceiveBind source */
  source?: IPar | null;

  /** ReceiveBind remainder */
  remainder?: IVar | null;

  /** ReceiveBind freeCount */
  freeCount?: number | null;
}

/** Represents a ReceiveBind. */
export class ReceiveBind implements IReceiveBind {
  /**
   * Constructs a new ReceiveBind.
   * @param [properties] Properties to set
   */
  constructor(properties?: IReceiveBind);

  /** ReceiveBind patterns. */
  public patterns: IPar[];

  /** ReceiveBind source. */
  public source?: IPar | null;

  /** ReceiveBind remainder. */
  public remainder?: IVar | null;

  /** ReceiveBind freeCount. */
  public freeCount: number;

  /**
   * Creates a new ReceiveBind instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ReceiveBind instance
   */
  public static create(properties?: IReceiveBind): ReceiveBind;

  /**
   * Encodes the specified ReceiveBind message. Does not implicitly {@link ReceiveBind.verify|verify} messages.
   * @param message ReceiveBind message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IReceiveBind,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ReceiveBind message, length delimited. Does not implicitly {@link ReceiveBind.verify|verify} messages.
   * @param message ReceiveBind message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IReceiveBind,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ReceiveBind message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ReceiveBind
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ReceiveBind;

  /**
   * Decodes a ReceiveBind message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ReceiveBind
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ReceiveBind;

  /**
   * Verifies a ReceiveBind message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ReceiveBind message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ReceiveBind
   */
  public static fromObject(object: { [k: string]: any }): ReceiveBind;

  /**
   * Creates a plain object from a ReceiveBind message. Also converts values to other types if specified.
   * @param message ReceiveBind
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ReceiveBind,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ReceiveBind to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a BindPattern. */
export interface IBindPattern {
  /** BindPattern patterns */
  patterns?: IPar[] | null;

  /** BindPattern remainder */
  remainder?: IVar | null;

  /** BindPattern freeCount */
  freeCount?: number | null;
}

/** Represents a BindPattern. */
export class BindPattern implements IBindPattern {
  /**
   * Constructs a new BindPattern.
   * @param [properties] Properties to set
   */
  constructor(properties?: IBindPattern);

  /** BindPattern patterns. */
  public patterns: IPar[];

  /** BindPattern remainder. */
  public remainder?: IVar | null;

  /** BindPattern freeCount. */
  public freeCount: number;

  /**
   * Creates a new BindPattern instance using the specified properties.
   * @param [properties] Properties to set
   * @returns BindPattern instance
   */
  public static create(properties?: IBindPattern): BindPattern;

  /**
   * Encodes the specified BindPattern message. Does not implicitly {@link BindPattern.verify|verify} messages.
   * @param message BindPattern message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IBindPattern,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified BindPattern message, length delimited. Does not implicitly {@link BindPattern.verify|verify} messages.
   * @param message BindPattern message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IBindPattern,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a BindPattern message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns BindPattern
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): BindPattern;

  /**
   * Decodes a BindPattern message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns BindPattern
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): BindPattern;

  /**
   * Verifies a BindPattern message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a BindPattern message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns BindPattern
   */
  public static fromObject(object: { [k: string]: any }): BindPattern;

  /**
   * Creates a plain object from a BindPattern message. Also converts values to other types if specified.
   * @param message BindPattern
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: BindPattern,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this BindPattern to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ListBindPatterns. */
export interface IListBindPatterns {
  /** ListBindPatterns patterns */
  patterns?: IBindPattern[] | null;
}

/** Represents a ListBindPatterns. */
export class ListBindPatterns implements IListBindPatterns {
  /**
   * Constructs a new ListBindPatterns.
   * @param [properties] Properties to set
   */
  constructor(properties?: IListBindPatterns);

  /** ListBindPatterns patterns. */
  public patterns: IBindPattern[];

  /**
   * Creates a new ListBindPatterns instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ListBindPatterns instance
   */
  public static create(properties?: IListBindPatterns): ListBindPatterns;

  /**
   * Encodes the specified ListBindPatterns message. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
   * @param message ListBindPatterns message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IListBindPatterns,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ListBindPatterns message, length delimited. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
   * @param message ListBindPatterns message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IListBindPatterns,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ListBindPatterns message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ListBindPatterns
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ListBindPatterns;

  /**
   * Decodes a ListBindPatterns message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ListBindPatterns
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ListBindPatterns;

  /**
   * Verifies a ListBindPatterns message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ListBindPatterns message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ListBindPatterns
   */
  public static fromObject(object: { [k: string]: any }): ListBindPatterns;

  /**
   * Creates a plain object from a ListBindPatterns message. Also converts values to other types if specified.
   * @param message ListBindPatterns
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ListBindPatterns,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ListBindPatterns to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Receive. */
export interface IReceive {
  /** Receive binds */
  binds?: IReceiveBind[] | null;

  /** Receive body */
  body?: IPar | null;

  /** Receive persistent */
  persistent?: boolean | null;

  /** Receive peek */
  peek?: boolean | null;

  /** Receive bindCount */
  bindCount?: number | null;

  /** Receive locallyFree */
  locallyFree?: Uint8Array | null;

  /** Receive connective_used */
  connective_used?: boolean | null;
}

/**
 * A receive is written `for(binds) { body }`
 * i.e. `for(patterns <- source) { body }`
 * or for a persistent recieve: `for(patterns <= source) { body }`.
 *
 * It's an error for free Variable to occur more than once in a pattern.
 */
export class Receive implements IReceive {
  /**
   * Constructs a new Receive.
   * @param [properties] Properties to set
   */
  constructor(properties?: IReceive);

  /** Receive binds. */
  public binds: IReceiveBind[];

  /** Receive body. */
  public body?: IPar | null;

  /** Receive persistent. */
  public persistent: boolean;

  /** Receive peek. */
  public peek: boolean;

  /** Receive bindCount. */
  public bindCount: number;

  /** Receive locallyFree. */
  public locallyFree: Uint8Array;

  /** Receive connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new Receive instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Receive instance
   */
  public static create(properties?: IReceive): Receive;

  /**
   * Encodes the specified Receive message. Does not implicitly {@link Receive.verify|verify} messages.
   * @param message Receive message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IReceive,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Receive message, length delimited. Does not implicitly {@link Receive.verify|verify} messages.
   * @param message Receive message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IReceive,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Receive message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Receive
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Receive;

  /**
   * Decodes a Receive message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Receive
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Receive;

  /**
   * Verifies a Receive message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Receive message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Receive
   */
  public static fromObject(object: { [k: string]: any }): Receive;

  /**
   * Creates a plain object from a Receive message. Also converts values to other types if specified.
   * @param message Receive
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Receive,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Receive to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a New. */
export interface INew {
  /** New bindCount */
  bindCount?: number | null;

  /** New p */
  p?: IPar | null;

  /** New uri */
  uri?: string[] | null;

  /** New injections */
  injections?: { [k: string]: IPar } | null;

  /** New locallyFree */
  locallyFree?: Uint8Array | null;
}

/** Represents a New. */
export class New implements INew {
  /**
   * Constructs a new New.
   * @param [properties] Properties to set
   */
  constructor(properties?: INew);

  /** New bindCount. */
  public bindCount: number;

  /** New p. */
  public p?: IPar | null;

  /** New uri. */
  public uri: string[];

  /** New injections. */
  public injections: { [k: string]: IPar };

  /** New locallyFree. */
  public locallyFree: Uint8Array;

  /**
   * Creates a new New instance using the specified properties.
   * @param [properties] Properties to set
   * @returns New instance
   */
  public static create(properties?: INew): New;

  /**
   * Encodes the specified New message. Does not implicitly {@link New.verify|verify} messages.
   * @param message New message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: INew,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified New message, length delimited. Does not implicitly {@link New.verify|verify} messages.
   * @param message New message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: INew,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a New message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns New
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): New;

  /**
   * Decodes a New message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns New
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): New;

  /**
   * Verifies a New message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a New message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns New
   */
  public static fromObject(object: { [k: string]: any }): New;

  /**
   * Creates a plain object from a New message. Also converts values to other types if specified.
   * @param message New
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: New,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this New to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a MatchCase. */
export interface IMatchCase {
  /** MatchCase pattern */
  pattern?: IPar | null;

  /** MatchCase source */
  source?: IPar | null;

  /** MatchCase freeCount */
  freeCount?: number | null;
}

/** Represents a MatchCase. */
export class MatchCase implements IMatchCase {
  /**
   * Constructs a new MatchCase.
   * @param [properties] Properties to set
   */
  constructor(properties?: IMatchCase);

  /** MatchCase pattern. */
  public pattern?: IPar | null;

  /** MatchCase source. */
  public source?: IPar | null;

  /** MatchCase freeCount. */
  public freeCount: number;

  /**
   * Creates a new MatchCase instance using the specified properties.
   * @param [properties] Properties to set
   * @returns MatchCase instance
   */
  public static create(properties?: IMatchCase): MatchCase;

  /**
   * Encodes the specified MatchCase message. Does not implicitly {@link MatchCase.verify|verify} messages.
   * @param message MatchCase message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IMatchCase,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified MatchCase message, length delimited. Does not implicitly {@link MatchCase.verify|verify} messages.
   * @param message MatchCase message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IMatchCase,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a MatchCase message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns MatchCase
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): MatchCase;

  /**
   * Decodes a MatchCase message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns MatchCase
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): MatchCase;

  /**
   * Verifies a MatchCase message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a MatchCase message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns MatchCase
   */
  public static fromObject(object: { [k: string]: any }): MatchCase;

  /**
   * Creates a plain object from a MatchCase message. Also converts values to other types if specified.
   * @param message MatchCase
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: MatchCase,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this MatchCase to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Match. */
export interface IMatch {
  /** Match target */
  target?: IPar | null;

  /** Match cases */
  cases?: IMatchCase[] | null;

  /** Match locallyFree */
  locallyFree?: Uint8Array | null;

  /** Match connective_used */
  connective_used?: boolean | null;
}

/** Represents a Match. */
export class Match implements IMatch {
  /**
   * Constructs a new Match.
   * @param [properties] Properties to set
   */
  constructor(properties?: IMatch);

  /** Match target. */
  public target?: IPar | null;

  /** Match cases. */
  public cases: IMatchCase[];

  /** Match locallyFree. */
  public locallyFree: Uint8Array;

  /** Match connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new Match instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Match instance
   */
  public static create(properties?: IMatch): Match;

  /**
   * Encodes the specified Match message. Does not implicitly {@link Match.verify|verify} messages.
   * @param message Match message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IMatch,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Match message, length delimited. Does not implicitly {@link Match.verify|verify} messages.
   * @param message Match message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IMatch,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Match message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Match
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Match;

  /**
   * Decodes a Match message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Match
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Match;

  /**
   * Verifies a Match message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Match message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Match
   */
  public static fromObject(object: { [k: string]: any }): Match;

  /**
   * Creates a plain object from a Match message. Also converts values to other types if specified.
   * @param message Match
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Match,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Match to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of an Expr. */
export interface IExpr {
  /** Expr g_bool */
  g_bool?: boolean | null;

  /** Expr g_int */
  g_int?: number | Long | null;

  /** Expr g_string */
  g_string?: string | null;

  /** Expr g_uri */
  g_uri?: string | null;

  /** Expr g_byte_array */
  g_byte_array?: Uint8Array | null;

  /** Expr e_not_body */
  e_not_body?: IENot | null;

  /** Expr e_neg_body */
  e_neg_body?: IENeg | null;

  /** Expr e_mult_body */
  e_mult_body?: IEMult | null;

  /** Expr e_div_body */
  e_div_body?: IEDiv | null;

  /** Expr e_plus_body */
  e_plus_body?: IEPlus | null;

  /** Expr e_minus_body */
  e_minus_body?: IEMinus | null;

  /** Expr e_lt_body */
  e_lt_body?: IELt | null;

  /** Expr e_lte_body */
  e_lte_body?: IELte | null;

  /** Expr e_gt_body */
  e_gt_body?: IEGt | null;

  /** Expr e_gte_body */
  e_gte_body?: IEGte | null;

  /** Expr e_eq_body */
  e_eq_body?: IEEq | null;

  /** Expr e_neq_body */
  e_neq_body?: IENeq | null;

  /** Expr e_and_body */
  e_and_body?: IEAnd | null;

  /** Expr e_or_body */
  e_or_body?: IEOr | null;

  /** Expr e_var_body */
  e_var_body?: IEVar | null;

  /** Expr e_list_body */
  e_list_body?: IEList | null;

  /** Expr e_tuple_body */
  e_tuple_body?: IETuple | null;

  /** Expr e_set_body */
  e_set_body?: IESet | null;

  /** Expr e_map_body */
  e_map_body?: IEMap | null;

  /** Expr e_method_body */
  e_method_body?: IEMethod | null;

  /** Expr e_matches_body */
  e_matches_body?: IEMatches | null;

  /** Expr e_percent_percent_body */
  e_percent_percent_body?: IEPercentPercent | null;

  /** Expr e_plus_plus_body */
  e_plus_plus_body?: IEPlusPlus | null;

  /** Expr e_minus_minus_body */
  e_minus_minus_body?: IEMinusMinus | null;

  /** Expr e_mod_body */
  e_mod_body?: IEMod | null;
}

/** Represents an Expr. */
export class Expr implements IExpr {
  /**
   * Constructs a new Expr.
   * @param [properties] Properties to set
   */
  constructor(properties?: IExpr);

  /** Expr g_bool. */
  public g_bool: boolean;

  /** Expr g_int. */
  public g_int: number | Long;

  /** Expr g_string. */
  public g_string: string;

  /** Expr g_uri. */
  public g_uri: string;

  /** Expr g_byte_array. */
  public g_byte_array: Uint8Array;

  /** Expr e_not_body. */
  public e_not_body?: IENot | null;

  /** Expr e_neg_body. */
  public e_neg_body?: IENeg | null;

  /** Expr e_mult_body. */
  public e_mult_body?: IEMult | null;

  /** Expr e_div_body. */
  public e_div_body?: IEDiv | null;

  /** Expr e_plus_body. */
  public e_plus_body?: IEPlus | null;

  /** Expr e_minus_body. */
  public e_minus_body?: IEMinus | null;

  /** Expr e_lt_body. */
  public e_lt_body?: IELt | null;

  /** Expr e_lte_body. */
  public e_lte_body?: IELte | null;

  /** Expr e_gt_body. */
  public e_gt_body?: IEGt | null;

  /** Expr e_gte_body. */
  public e_gte_body?: IEGte | null;

  /** Expr e_eq_body. */
  public e_eq_body?: IEEq | null;

  /** Expr e_neq_body. */
  public e_neq_body?: IENeq | null;

  /** Expr e_and_body. */
  public e_and_body?: IEAnd | null;

  /** Expr e_or_body. */
  public e_or_body?: IEOr | null;

  /** Expr e_var_body. */
  public e_var_body?: IEVar | null;

  /** Expr e_list_body. */
  public e_list_body?: IEList | null;

  /** Expr e_tuple_body. */
  public e_tuple_body?: IETuple | null;

  /** Expr e_set_body. */
  public e_set_body?: IESet | null;

  /** Expr e_map_body. */
  public e_map_body?: IEMap | null;

  /** Expr e_method_body. */
  public e_method_body?: IEMethod | null;

  /** Expr e_matches_body. */
  public e_matches_body?: IEMatches | null;

  /** Expr e_percent_percent_body. */
  public e_percent_percent_body?: IEPercentPercent | null;

  /** Expr e_plus_plus_body. */
  public e_plus_plus_body?: IEPlusPlus | null;

  /** Expr e_minus_minus_body. */
  public e_minus_minus_body?: IEMinusMinus | null;

  /** Expr e_mod_body. */
  public e_mod_body?: IEMod | null;

  /** Expr expr_instance. */
  public expr_instance?:
    | "g_bool"
    | "g_int"
    | "g_string"
    | "g_uri"
    | "g_byte_array"
    | "e_not_body"
    | "e_neg_body"
    | "e_mult_body"
    | "e_div_body"
    | "e_plus_body"
    | "e_minus_body"
    | "e_lt_body"
    | "e_lte_body"
    | "e_gt_body"
    | "e_gte_body"
    | "e_eq_body"
    | "e_neq_body"
    | "e_and_body"
    | "e_or_body"
    | "e_var_body"
    | "e_list_body"
    | "e_tuple_body"
    | "e_set_body"
    | "e_map_body"
    | "e_method_body"
    | "e_matches_body"
    | "e_percent_percent_body"
    | "e_plus_plus_body"
    | "e_minus_minus_body"
    | "e_mod_body";

  /**
   * Creates a new Expr instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Expr instance
   */
  public static create(properties?: IExpr): Expr;

  /**
   * Encodes the specified Expr message. Does not implicitly {@link Expr.verify|verify} messages.
   * @param message Expr message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IExpr,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Expr message, length delimited. Does not implicitly {@link Expr.verify|verify} messages.
   * @param message Expr message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IExpr,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes an Expr message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Expr
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Expr;

  /**
   * Decodes an Expr message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Expr
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Expr;

  /**
   * Verifies an Expr message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates an Expr message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Expr
   */
  public static fromObject(object: { [k: string]: any }): Expr;

  /**
   * Creates a plain object from an Expr message. Also converts values to other types if specified.
   * @param message Expr
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Expr,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Expr to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EList. */
export interface IEList {
  /** EList ps */
  ps?: IPar[] | null;

  /** EList locallyFree */
  locallyFree?: Uint8Array | null;

  /** EList connective_used */
  connective_used?: boolean | null;

  /** EList remainder */
  remainder?: IVar | null;
}

/** Represents a EList. */
export class EList implements IEList {
  /**
   * Constructs a new EList.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEList);

  /** EList ps. */
  public ps: IPar[];

  /** EList locallyFree. */
  public locallyFree: Uint8Array;

  /** EList connective_used. */
  public connective_used: boolean;

  /** EList remainder. */
  public remainder?: IVar | null;

  /**
   * Creates a new EList instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EList instance
   */
  public static create(properties?: IEList): EList;

  /**
   * Encodes the specified EList message. Does not implicitly {@link EList.verify|verify} messages.
   * @param message EList message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEList,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EList message, length delimited. Does not implicitly {@link EList.verify|verify} messages.
   * @param message EList message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEList,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EList message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EList
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EList;

  /**
   * Decodes a EList message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EList
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EList;

  /**
   * Verifies a EList message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EList message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EList
   */
  public static fromObject(object: { [k: string]: any }): EList;

  /**
   * Creates a plain object from a EList message. Also converts values to other types if specified.
   * @param message EList
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EList,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EList to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ETuple. */
export interface IETuple {
  /** ETuple ps */
  ps?: IPar[] | null;

  /** ETuple locallyFree */
  locallyFree?: Uint8Array | null;

  /** ETuple connective_used */
  connective_used?: boolean | null;
}

/** Represents a ETuple. */
export class ETuple implements IETuple {
  /**
   * Constructs a new ETuple.
   * @param [properties] Properties to set
   */
  constructor(properties?: IETuple);

  /** ETuple ps. */
  public ps: IPar[];

  /** ETuple locallyFree. */
  public locallyFree: Uint8Array;

  /** ETuple connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new ETuple instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ETuple instance
   */
  public static create(properties?: IETuple): ETuple;

  /**
   * Encodes the specified ETuple message. Does not implicitly {@link ETuple.verify|verify} messages.
   * @param message ETuple message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IETuple,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ETuple message, length delimited. Does not implicitly {@link ETuple.verify|verify} messages.
   * @param message ETuple message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IETuple,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ETuple message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ETuple
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ETuple;

  /**
   * Decodes a ETuple message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ETuple
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ETuple;

  /**
   * Verifies a ETuple message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ETuple message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ETuple
   */
  public static fromObject(object: { [k: string]: any }): ETuple;

  /**
   * Creates a plain object from a ETuple message. Also converts values to other types if specified.
   * @param message ETuple
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ETuple,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ETuple to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ESet. */
export interface IESet {
  /** ESet ps */
  ps?: IPar[] | null;

  /** ESet locallyFree */
  locallyFree?: Uint8Array | null;

  /** ESet connective_used */
  connective_used?: boolean | null;

  /** ESet remainder */
  remainder?: IVar | null;
}

/** Represents a ESet. */
export class ESet implements IESet {
  /**
   * Constructs a new ESet.
   * @param [properties] Properties to set
   */
  constructor(properties?: IESet);

  /** ESet ps. */
  public ps: IPar[];

  /** ESet locallyFree. */
  public locallyFree: Uint8Array;

  /** ESet connective_used. */
  public connective_used: boolean;

  /** ESet remainder. */
  public remainder?: IVar | null;

  /**
   * Creates a new ESet instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ESet instance
   */
  public static create(properties?: IESet): ESet;

  /**
   * Encodes the specified ESet message. Does not implicitly {@link ESet.verify|verify} messages.
   * @param message ESet message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IESet,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ESet message, length delimited. Does not implicitly {@link ESet.verify|verify} messages.
   * @param message ESet message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IESet,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ESet message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ESet
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ESet;

  /**
   * Decodes a ESet message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ESet
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ESet;

  /**
   * Verifies a ESet message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ESet message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ESet
   */
  public static fromObject(object: { [k: string]: any }): ESet;

  /**
   * Creates a plain object from a ESet message. Also converts values to other types if specified.
   * @param message ESet
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ESet,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ESet to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMap. */
export interface IEMap {
  /** EMap kvs */
  kvs?: IKeyValuePair[] | null;

  /** EMap locallyFree */
  locallyFree?: Uint8Array | null;

  /** EMap connective_used */
  connective_used?: boolean | null;

  /** EMap remainder */
  remainder?: IVar | null;
}

/** Represents a EMap. */
export class EMap implements IEMap {
  /**
   * Constructs a new EMap.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMap);

  /** EMap kvs. */
  public kvs: IKeyValuePair[];

  /** EMap locallyFree. */
  public locallyFree: Uint8Array;

  /** EMap connective_used. */
  public connective_used: boolean;

  /** EMap remainder. */
  public remainder?: IVar | null;

  /**
   * Creates a new EMap instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMap instance
   */
  public static create(properties?: IEMap): EMap;

  /**
   * Encodes the specified EMap message. Does not implicitly {@link EMap.verify|verify} messages.
   * @param message EMap message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMap,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMap message, length delimited. Does not implicitly {@link EMap.verify|verify} messages.
   * @param message EMap message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMap,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMap message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMap
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMap;

  /**
   * Decodes a EMap message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMap
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EMap;

  /**
   * Verifies a EMap message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMap message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMap
   */
  public static fromObject(object: { [k: string]: any }): EMap;

  /**
   * Creates a plain object from a EMap message. Also converts values to other types if specified.
   * @param message EMap
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMap,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMap to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMethod. */
export interface IEMethod {
  /** EMethod methodName */
  methodName?: string | null;

  /** EMethod target */
  target?: IPar | null;

  /** EMethod arguments */
  arguments?: IPar[] | null;

  /** EMethod locallyFree */
  locallyFree?: Uint8Array | null;

  /** EMethod connective_used */
  connective_used?: boolean | null;
}

/** `target.method(arguments)` */
export class EMethod implements IEMethod {
  /**
   * Constructs a new EMethod.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMethod);

  /** EMethod methodName. */
  public methodName: string;

  /** EMethod target. */
  public target?: IPar | null;

  /** EMethod arguments. */
  public arguments: IPar[];

  /** EMethod locallyFree. */
  public locallyFree: Uint8Array;

  /** EMethod connective_used. */
  public connective_used: boolean;

  /**
   * Creates a new EMethod instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMethod instance
   */
  public static create(properties?: IEMethod): EMethod;

  /**
   * Encodes the specified EMethod message. Does not implicitly {@link EMethod.verify|verify} messages.
   * @param message EMethod message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMethod,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMethod message, length delimited. Does not implicitly {@link EMethod.verify|verify} messages.
   * @param message EMethod message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMethod,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMethod message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMethod
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMethod;

  /**
   * Decodes a EMethod message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMethod
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EMethod;

  /**
   * Verifies a EMethod message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMethod message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMethod
   */
  public static fromObject(object: { [k: string]: any }): EMethod;

  /**
   * Creates a plain object from a EMethod message. Also converts values to other types if specified.
   * @param message EMethod
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMethod,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMethod to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a KeyValuePair. */
export interface IKeyValuePair {
  /** KeyValuePair key */
  key?: IPar | null;

  /** KeyValuePair value */
  value?: IPar | null;
}

/** Represents a KeyValuePair. */
export class KeyValuePair implements IKeyValuePair {
  /**
   * Constructs a new KeyValuePair.
   * @param [properties] Properties to set
   */
  constructor(properties?: IKeyValuePair);

  /** KeyValuePair key. */
  public key?: IPar | null;

  /** KeyValuePair value. */
  public value?: IPar | null;

  /**
   * Creates a new KeyValuePair instance using the specified properties.
   * @param [properties] Properties to set
   * @returns KeyValuePair instance
   */
  public static create(properties?: IKeyValuePair): KeyValuePair;

  /**
   * Encodes the specified KeyValuePair message. Does not implicitly {@link KeyValuePair.verify|verify} messages.
   * @param message KeyValuePair message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IKeyValuePair,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link KeyValuePair.verify|verify} messages.
   * @param message KeyValuePair message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IKeyValuePair,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a KeyValuePair message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns KeyValuePair
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): KeyValuePair;

  /**
   * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns KeyValuePair
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): KeyValuePair;

  /**
   * Verifies a KeyValuePair message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns KeyValuePair
   */
  public static fromObject(object: { [k: string]: any }): KeyValuePair;

  /**
   * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
   * @param message KeyValuePair
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: KeyValuePair,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this KeyValuePair to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EVar. */
export interface IEVar {
  /** EVar v */
  v?: IVar | null;
}

/** Represents a EVar. */
export class EVar implements IEVar {
  /**
   * Constructs a new EVar.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEVar);

  /** EVar v. */
  public v?: IVar | null;

  /**
   * Creates a new EVar instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EVar instance
   */
  public static create(properties?: IEVar): EVar;

  /**
   * Encodes the specified EVar message. Does not implicitly {@link EVar.verify|verify} messages.
   * @param message EVar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEVar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EVar message, length delimited. Does not implicitly {@link EVar.verify|verify} messages.
   * @param message EVar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEVar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EVar message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EVar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EVar;

  /**
   * Decodes a EVar message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EVar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EVar;

  /**
   * Verifies a EVar message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EVar message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EVar
   */
  public static fromObject(object: { [k: string]: any }): EVar;

  /**
   * Creates a plain object from a EVar message. Also converts values to other types if specified.
   * @param message EVar
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EVar,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EVar to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ENot. */
export interface IENot {
  /** ENot p */
  p?: IPar | null;
}

/** Represents a ENot. */
export class ENot implements IENot {
  /**
   * Constructs a new ENot.
   * @param [properties] Properties to set
   */
  constructor(properties?: IENot);

  /** ENot p. */
  public p?: IPar | null;

  /**
   * Creates a new ENot instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ENot instance
   */
  public static create(properties?: IENot): ENot;

  /**
   * Encodes the specified ENot message. Does not implicitly {@link ENot.verify|verify} messages.
   * @param message ENot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IENot,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ENot message, length delimited. Does not implicitly {@link ENot.verify|verify} messages.
   * @param message ENot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IENot,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ENot message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ENot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ENot;

  /**
   * Decodes a ENot message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ENot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ENot;

  /**
   * Verifies a ENot message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ENot message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ENot
   */
  public static fromObject(object: { [k: string]: any }): ENot;

  /**
   * Creates a plain object from a ENot message. Also converts values to other types if specified.
   * @param message ENot
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ENot,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ENot to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ENeg. */
export interface IENeg {
  /** ENeg p */
  p?: IPar | null;
}

/** Represents a ENeg. */
export class ENeg implements IENeg {
  /**
   * Constructs a new ENeg.
   * @param [properties] Properties to set
   */
  constructor(properties?: IENeg);

  /** ENeg p. */
  public p?: IPar | null;

  /**
   * Creates a new ENeg instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ENeg instance
   */
  public static create(properties?: IENeg): ENeg;

  /**
   * Encodes the specified ENeg message. Does not implicitly {@link ENeg.verify|verify} messages.
   * @param message ENeg message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IENeg,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ENeg message, length delimited. Does not implicitly {@link ENeg.verify|verify} messages.
   * @param message ENeg message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IENeg,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ENeg message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ENeg
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ENeg;

  /**
   * Decodes a ENeg message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ENeg
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ENeg;

  /**
   * Verifies a ENeg message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ENeg message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ENeg
   */
  public static fromObject(object: { [k: string]: any }): ENeg;

  /**
   * Creates a plain object from a ENeg message. Also converts values to other types if specified.
   * @param message ENeg
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ENeg,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ENeg to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMult. */
export interface IEMult {
  /** EMult p1 */
  p1?: IPar | null;

  /** EMult p2 */
  p2?: IPar | null;
}

/** Represents a EMult. */
export class EMult implements IEMult {
  /**
   * Constructs a new EMult.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMult);

  /** EMult p1. */
  public p1?: IPar | null;

  /** EMult p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EMult instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMult instance
   */
  public static create(properties?: IEMult): EMult;

  /**
   * Encodes the specified EMult message. Does not implicitly {@link EMult.verify|verify} messages.
   * @param message EMult message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMult,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMult message, length delimited. Does not implicitly {@link EMult.verify|verify} messages.
   * @param message EMult message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMult,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMult message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMult;

  /**
   * Decodes a EMult message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EMult;

  /**
   * Verifies a EMult message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMult message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMult
   */
  public static fromObject(object: { [k: string]: any }): EMult;

  /**
   * Creates a plain object from a EMult message. Also converts values to other types if specified.
   * @param message EMult
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMult,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMult to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EDiv. */
export interface IEDiv {
  /** EDiv p1 */
  p1?: IPar | null;

  /** EDiv p2 */
  p2?: IPar | null;
}

/** Represents a EDiv. */
export class EDiv implements IEDiv {
  /**
   * Constructs a new EDiv.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEDiv);

  /** EDiv p1. */
  public p1?: IPar | null;

  /** EDiv p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EDiv instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EDiv instance
   */
  public static create(properties?: IEDiv): EDiv;

  /**
   * Encodes the specified EDiv message. Does not implicitly {@link EDiv.verify|verify} messages.
   * @param message EDiv message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEDiv,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EDiv message, length delimited. Does not implicitly {@link EDiv.verify|verify} messages.
   * @param message EDiv message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEDiv,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EDiv message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EDiv
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EDiv;

  /**
   * Decodes a EDiv message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EDiv
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EDiv;

  /**
   * Verifies a EDiv message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EDiv message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EDiv
   */
  public static fromObject(object: { [k: string]: any }): EDiv;

  /**
   * Creates a plain object from a EDiv message. Also converts values to other types if specified.
   * @param message EDiv
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EDiv,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EDiv to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMod. */
export interface IEMod {
  /** EMod p1 */
  p1?: IPar | null;

  /** EMod p2 */
  p2?: IPar | null;
}

/** Represents a EMod. */
export class EMod implements IEMod {
  /**
   * Constructs a new EMod.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMod);

  /** EMod p1. */
  public p1?: IPar | null;

  /** EMod p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EMod instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMod instance
   */
  public static create(properties?: IEMod): EMod;

  /**
   * Encodes the specified EMod message. Does not implicitly {@link EMod.verify|verify} messages.
   * @param message EMod message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMod,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMod message, length delimited. Does not implicitly {@link EMod.verify|verify} messages.
   * @param message EMod message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMod,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMod message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMod
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMod;

  /**
   * Decodes a EMod message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMod
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EMod;

  /**
   * Verifies a EMod message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMod message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMod
   */
  public static fromObject(object: { [k: string]: any }): EMod;

  /**
   * Creates a plain object from a EMod message. Also converts values to other types if specified.
   * @param message EMod
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMod,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMod to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EPlus. */
export interface IEPlus {
  /** EPlus p1 */
  p1?: IPar | null;

  /** EPlus p2 */
  p2?: IPar | null;
}

/** Represents a EPlus. */
export class EPlus implements IEPlus {
  /**
   * Constructs a new EPlus.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEPlus);

  /** EPlus p1. */
  public p1?: IPar | null;

  /** EPlus p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EPlus instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EPlus instance
   */
  public static create(properties?: IEPlus): EPlus;

  /**
   * Encodes the specified EPlus message. Does not implicitly {@link EPlus.verify|verify} messages.
   * @param message EPlus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEPlus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EPlus message, length delimited. Does not implicitly {@link EPlus.verify|verify} messages.
   * @param message EPlus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEPlus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EPlus message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EPlus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EPlus;

  /**
   * Decodes a EPlus message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EPlus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EPlus;

  /**
   * Verifies a EPlus message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EPlus message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EPlus
   */
  public static fromObject(object: { [k: string]: any }): EPlus;

  /**
   * Creates a plain object from a EPlus message. Also converts values to other types if specified.
   * @param message EPlus
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EPlus,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EPlus to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMinus. */
export interface IEMinus {
  /** EMinus p1 */
  p1?: IPar | null;

  /** EMinus p2 */
  p2?: IPar | null;
}

/** Represents a EMinus. */
export class EMinus implements IEMinus {
  /**
   * Constructs a new EMinus.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMinus);

  /** EMinus p1. */
  public p1?: IPar | null;

  /** EMinus p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EMinus instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMinus instance
   */
  public static create(properties?: IEMinus): EMinus;

  /**
   * Encodes the specified EMinus message. Does not implicitly {@link EMinus.verify|verify} messages.
   * @param message EMinus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMinus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMinus message, length delimited. Does not implicitly {@link EMinus.verify|verify} messages.
   * @param message EMinus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMinus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMinus message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMinus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMinus;

  /**
   * Decodes a EMinus message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMinus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EMinus;

  /**
   * Verifies a EMinus message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMinus message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMinus
   */
  public static fromObject(object: { [k: string]: any }): EMinus;

  /**
   * Creates a plain object from a EMinus message. Also converts values to other types if specified.
   * @param message EMinus
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMinus,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMinus to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ELt. */
export interface IELt {
  /** ELt p1 */
  p1?: IPar | null;

  /** ELt p2 */
  p2?: IPar | null;
}

/** Represents a ELt. */
export class ELt implements IELt {
  /**
   * Constructs a new ELt.
   * @param [properties] Properties to set
   */
  constructor(properties?: IELt);

  /** ELt p1. */
  public p1?: IPar | null;

  /** ELt p2. */
  public p2?: IPar | null;

  /**
   * Creates a new ELt instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ELt instance
   */
  public static create(properties?: IELt): ELt;

  /**
   * Encodes the specified ELt message. Does not implicitly {@link ELt.verify|verify} messages.
   * @param message ELt message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IELt,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ELt message, length delimited. Does not implicitly {@link ELt.verify|verify} messages.
   * @param message ELt message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IELt,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ELt message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ELt
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ELt;

  /**
   * Decodes a ELt message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ELt
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ELt;

  /**
   * Verifies a ELt message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ELt message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ELt
   */
  public static fromObject(object: { [k: string]: any }): ELt;

  /**
   * Creates a plain object from a ELt message. Also converts values to other types if specified.
   * @param message ELt
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ELt,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ELt to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ELte. */
export interface IELte {
  /** ELte p1 */
  p1?: IPar | null;

  /** ELte p2 */
  p2?: IPar | null;
}

/** Represents a ELte. */
export class ELte implements IELte {
  /**
   * Constructs a new ELte.
   * @param [properties] Properties to set
   */
  constructor(properties?: IELte);

  /** ELte p1. */
  public p1?: IPar | null;

  /** ELte p2. */
  public p2?: IPar | null;

  /**
   * Creates a new ELte instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ELte instance
   */
  public static create(properties?: IELte): ELte;

  /**
   * Encodes the specified ELte message. Does not implicitly {@link ELte.verify|verify} messages.
   * @param message ELte message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IELte,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ELte message, length delimited. Does not implicitly {@link ELte.verify|verify} messages.
   * @param message ELte message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IELte,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ELte message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ELte
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ELte;

  /**
   * Decodes a ELte message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ELte
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ELte;

  /**
   * Verifies a ELte message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ELte message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ELte
   */
  public static fromObject(object: { [k: string]: any }): ELte;

  /**
   * Creates a plain object from a ELte message. Also converts values to other types if specified.
   * @param message ELte
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ELte,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ELte to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EGt. */
export interface IEGt {
  /** EGt p1 */
  p1?: IPar | null;

  /** EGt p2 */
  p2?: IPar | null;
}

/** Represents a EGt. */
export class EGt implements IEGt {
  /**
   * Constructs a new EGt.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEGt);

  /** EGt p1. */
  public p1?: IPar | null;

  /** EGt p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EGt instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EGt instance
   */
  public static create(properties?: IEGt): EGt;

  /**
   * Encodes the specified EGt message. Does not implicitly {@link EGt.verify|verify} messages.
   * @param message EGt message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEGt,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EGt message, length delimited. Does not implicitly {@link EGt.verify|verify} messages.
   * @param message EGt message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEGt,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EGt message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EGt
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EGt;

  /**
   * Decodes a EGt message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EGt
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EGt;

  /**
   * Verifies a EGt message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EGt message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EGt
   */
  public static fromObject(object: { [k: string]: any }): EGt;

  /**
   * Creates a plain object from a EGt message. Also converts values to other types if specified.
   * @param message EGt
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EGt,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EGt to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EGte. */
export interface IEGte {
  /** EGte p1 */
  p1?: IPar | null;

  /** EGte p2 */
  p2?: IPar | null;
}

/** Represents a EGte. */
export class EGte implements IEGte {
  /**
   * Constructs a new EGte.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEGte);

  /** EGte p1. */
  public p1?: IPar | null;

  /** EGte p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EGte instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EGte instance
   */
  public static create(properties?: IEGte): EGte;

  /**
   * Encodes the specified EGte message. Does not implicitly {@link EGte.verify|verify} messages.
   * @param message EGte message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEGte,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EGte message, length delimited. Does not implicitly {@link EGte.verify|verify} messages.
   * @param message EGte message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEGte,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EGte message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EGte
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EGte;

  /**
   * Decodes a EGte message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EGte
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EGte;

  /**
   * Verifies a EGte message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EGte message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EGte
   */
  public static fromObject(object: { [k: string]: any }): EGte;

  /**
   * Creates a plain object from a EGte message. Also converts values to other types if specified.
   * @param message EGte
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EGte,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EGte to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EEq. */
export interface IEEq {
  /** EEq p1 */
  p1?: IPar | null;

  /** EEq p2 */
  p2?: IPar | null;
}

/** Represents a EEq. */
export class EEq implements IEEq {
  /**
   * Constructs a new EEq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEEq);

  /** EEq p1. */
  public p1?: IPar | null;

  /** EEq p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EEq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EEq instance
   */
  public static create(properties?: IEEq): EEq;

  /**
   * Encodes the specified EEq message. Does not implicitly {@link EEq.verify|verify} messages.
   * @param message EEq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEEq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EEq message, length delimited. Does not implicitly {@link EEq.verify|verify} messages.
   * @param message EEq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEEq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EEq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EEq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EEq;

  /**
   * Decodes a EEq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EEq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EEq;

  /**
   * Verifies a EEq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EEq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EEq
   */
  public static fromObject(object: { [k: string]: any }): EEq;

  /**
   * Creates a plain object from a EEq message. Also converts values to other types if specified.
   * @param message EEq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EEq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EEq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ENeq. */
export interface IENeq {
  /** ENeq p1 */
  p1?: IPar | null;

  /** ENeq p2 */
  p2?: IPar | null;
}

/** Represents a ENeq. */
export class ENeq implements IENeq {
  /**
   * Constructs a new ENeq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IENeq);

  /** ENeq p1. */
  public p1?: IPar | null;

  /** ENeq p2. */
  public p2?: IPar | null;

  /**
   * Creates a new ENeq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ENeq instance
   */
  public static create(properties?: IENeq): ENeq;

  /**
   * Encodes the specified ENeq message. Does not implicitly {@link ENeq.verify|verify} messages.
   * @param message ENeq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IENeq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ENeq message, length delimited. Does not implicitly {@link ENeq.verify|verify} messages.
   * @param message ENeq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IENeq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ENeq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ENeq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ENeq;

  /**
   * Decodes a ENeq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ENeq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ENeq;

  /**
   * Verifies a ENeq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ENeq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ENeq
   */
  public static fromObject(object: { [k: string]: any }): ENeq;

  /**
   * Creates a plain object from a ENeq message. Also converts values to other types if specified.
   * @param message ENeq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ENeq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ENeq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EAnd. */
export interface IEAnd {
  /** EAnd p1 */
  p1?: IPar | null;

  /** EAnd p2 */
  p2?: IPar | null;
}

/** Represents a EAnd. */
export class EAnd implements IEAnd {
  /**
   * Constructs a new EAnd.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEAnd);

  /** EAnd p1. */
  public p1?: IPar | null;

  /** EAnd p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EAnd instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EAnd instance
   */
  public static create(properties?: IEAnd): EAnd;

  /**
   * Encodes the specified EAnd message. Does not implicitly {@link EAnd.verify|verify} messages.
   * @param message EAnd message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEAnd,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EAnd message, length delimited. Does not implicitly {@link EAnd.verify|verify} messages.
   * @param message EAnd message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEAnd,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EAnd message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EAnd
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EAnd;

  /**
   * Decodes a EAnd message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EAnd
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EAnd;

  /**
   * Verifies a EAnd message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EAnd message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EAnd
   */
  public static fromObject(object: { [k: string]: any }): EAnd;

  /**
   * Creates a plain object from a EAnd message. Also converts values to other types if specified.
   * @param message EAnd
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EAnd,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EAnd to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EOr. */
export interface IEOr {
  /** EOr p1 */
  p1?: IPar | null;

  /** EOr p2 */
  p2?: IPar | null;
}

/** Represents a EOr. */
export class EOr implements IEOr {
  /**
   * Constructs a new EOr.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEOr);

  /** EOr p1. */
  public p1?: IPar | null;

  /** EOr p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EOr instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EOr instance
   */
  public static create(properties?: IEOr): EOr;

  /**
   * Encodes the specified EOr message. Does not implicitly {@link EOr.verify|verify} messages.
   * @param message EOr message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEOr,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EOr message, length delimited. Does not implicitly {@link EOr.verify|verify} messages.
   * @param message EOr message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEOr,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EOr message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EOr
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EOr;

  /**
   * Decodes a EOr message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EOr
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EOr;

  /**
   * Verifies a EOr message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EOr message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EOr
   */
  public static fromObject(object: { [k: string]: any }): EOr;

  /**
   * Creates a plain object from a EOr message. Also converts values to other types if specified.
   * @param message EOr
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EOr,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EOr to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMatches. */
export interface IEMatches {
  /** EMatches target */
  target?: IPar | null;

  /** EMatches pattern */
  pattern?: IPar | null;
}

/** Represents a EMatches. */
export class EMatches implements IEMatches {
  /**
   * Constructs a new EMatches.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMatches);

  /** EMatches target. */
  public target?: IPar | null;

  /** EMatches pattern. */
  public pattern?: IPar | null;

  /**
   * Creates a new EMatches instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMatches instance
   */
  public static create(properties?: IEMatches): EMatches;

  /**
   * Encodes the specified EMatches message. Does not implicitly {@link EMatches.verify|verify} messages.
   * @param message EMatches message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMatches,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMatches message, length delimited. Does not implicitly {@link EMatches.verify|verify} messages.
   * @param message EMatches message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMatches,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMatches message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMatches
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMatches;

  /**
   * Decodes a EMatches message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMatches
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): EMatches;

  /**
   * Verifies a EMatches message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMatches message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMatches
   */
  public static fromObject(object: { [k: string]: any }): EMatches;

  /**
   * Creates a plain object from a EMatches message. Also converts values to other types if specified.
   * @param message EMatches
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMatches,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMatches to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EPercentPercent. */
export interface IEPercentPercent {
  /** EPercentPercent p1 */
  p1?: IPar | null;

  /** EPercentPercent p2 */
  p2?: IPar | null;
}

/**
 * String interpolation
 *
 * `"Hello, {name}" %% {"name": "Bob"}` denotes `"Hello, Bob"`
 */
export class EPercentPercent implements IEPercentPercent {
  /**
   * Constructs a new EPercentPercent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEPercentPercent);

  /** EPercentPercent p1. */
  public p1?: IPar | null;

  /** EPercentPercent p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EPercentPercent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EPercentPercent instance
   */
  public static create(properties?: IEPercentPercent): EPercentPercent;

  /**
   * Encodes the specified EPercentPercent message. Does not implicitly {@link EPercentPercent.verify|verify} messages.
   * @param message EPercentPercent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEPercentPercent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EPercentPercent message, length delimited. Does not implicitly {@link EPercentPercent.verify|verify} messages.
   * @param message EPercentPercent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEPercentPercent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EPercentPercent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EPercentPercent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EPercentPercent;

  /**
   * Decodes a EPercentPercent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EPercentPercent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): EPercentPercent;

  /**
   * Verifies a EPercentPercent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EPercentPercent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EPercentPercent
   */
  public static fromObject(object: { [k: string]: any }): EPercentPercent;

  /**
   * Creates a plain object from a EPercentPercent message. Also converts values to other types if specified.
   * @param message EPercentPercent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EPercentPercent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EPercentPercent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EPlusPlus. */
export interface IEPlusPlus {
  /** EPlusPlus p1 */
  p1?: IPar | null;

  /** EPlusPlus p2 */
  p2?: IPar | null;
}

/** Represents a EPlusPlus. */
export class EPlusPlus implements IEPlusPlus {
  /**
   * Constructs a new EPlusPlus.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEPlusPlus);

  /** EPlusPlus p1. */
  public p1?: IPar | null;

  /** EPlusPlus p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EPlusPlus instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EPlusPlus instance
   */
  public static create(properties?: IEPlusPlus): EPlusPlus;

  /**
   * Encodes the specified EPlusPlus message. Does not implicitly {@link EPlusPlus.verify|verify} messages.
   * @param message EPlusPlus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEPlusPlus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EPlusPlus message, length delimited. Does not implicitly {@link EPlusPlus.verify|verify} messages.
   * @param message EPlusPlus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEPlusPlus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EPlusPlus message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EPlusPlus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EPlusPlus;

  /**
   * Decodes a EPlusPlus message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EPlusPlus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): EPlusPlus;

  /**
   * Verifies a EPlusPlus message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EPlusPlus message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EPlusPlus
   */
  public static fromObject(object: { [k: string]: any }): EPlusPlus;

  /**
   * Creates a plain object from a EPlusPlus message. Also converts values to other types if specified.
   * @param message EPlusPlus
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EPlusPlus,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EPlusPlus to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a EMinusMinus. */
export interface IEMinusMinus {
  /** EMinusMinus p1 */
  p1?: IPar | null;

  /** EMinusMinus p2 */
  p2?: IPar | null;
}

/** Represents a EMinusMinus. */
export class EMinusMinus implements IEMinusMinus {
  /**
   * Constructs a new EMinusMinus.
   * @param [properties] Properties to set
   */
  constructor(properties?: IEMinusMinus);

  /** EMinusMinus p1. */
  public p1?: IPar | null;

  /** EMinusMinus p2. */
  public p2?: IPar | null;

  /**
   * Creates a new EMinusMinus instance using the specified properties.
   * @param [properties] Properties to set
   * @returns EMinusMinus instance
   */
  public static create(properties?: IEMinusMinus): EMinusMinus;

  /**
   * Encodes the specified EMinusMinus message. Does not implicitly {@link EMinusMinus.verify|verify} messages.
   * @param message EMinusMinus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IEMinusMinus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified EMinusMinus message, length delimited. Does not implicitly {@link EMinusMinus.verify|verify} messages.
   * @param message EMinusMinus message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IEMinusMinus,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a EMinusMinus message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns EMinusMinus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): EMinusMinus;

  /**
   * Decodes a EMinusMinus message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns EMinusMinus
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): EMinusMinus;

  /**
   * Verifies a EMinusMinus message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a EMinusMinus message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns EMinusMinus
   */
  public static fromObject(object: { [k: string]: any }): EMinusMinus;

  /**
   * Creates a plain object from a EMinusMinus message. Also converts values to other types if specified.
   * @param message EMinusMinus
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: EMinusMinus,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this EMinusMinus to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Connective. */
export interface IConnective {
  /** Connective conn_and_body */
  conn_and_body?: IConnectiveBody | null;

  /** Connective conn_or_body */
  conn_or_body?: IConnectiveBody | null;

  /** Connective conn_not_body */
  conn_not_body?: IPar | null;

  /** Connective var_ref_body */
  var_ref_body?: IVarRef | null;

  /** Connective conn_bool */
  conn_bool?: boolean | null;

  /** Connective conn_int */
  conn_int?: boolean | null;

  /** Connective conn_string */
  conn_string?: boolean | null;

  /** Connective conn_uri */
  conn_uri?: boolean | null;

  /** Connective conn_byte_array */
  conn_byte_array?: boolean | null;
}

/** Represents a Connective. */
export class Connective implements IConnective {
  /**
   * Constructs a new Connective.
   * @param [properties] Properties to set
   */
  constructor(properties?: IConnective);

  /** Connective conn_and_body. */
  public conn_and_body?: IConnectiveBody | null;

  /** Connective conn_or_body. */
  public conn_or_body?: IConnectiveBody | null;

  /** Connective conn_not_body. */
  public conn_not_body?: IPar | null;

  /** Connective var_ref_body. */
  public var_ref_body?: IVarRef | null;

  /** Connective conn_bool. */
  public conn_bool: boolean;

  /** Connective conn_int. */
  public conn_int: boolean;

  /** Connective conn_string. */
  public conn_string: boolean;

  /** Connective conn_uri. */
  public conn_uri: boolean;

  /** Connective conn_byte_array. */
  public conn_byte_array: boolean;

  /** Connective connective_instance. */
  public connective_instance?:
    | "conn_and_body"
    | "conn_or_body"
    | "conn_not_body"
    | "var_ref_body"
    | "conn_bool"
    | "conn_int"
    | "conn_string"
    | "conn_uri"
    | "conn_byte_array";

  /**
   * Creates a new Connective instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Connective instance
   */
  public static create(properties?: IConnective): Connective;

  /**
   * Encodes the specified Connective message. Does not implicitly {@link Connective.verify|verify} messages.
   * @param message Connective message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IConnective,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified Connective message, length delimited. Does not implicitly {@link Connective.verify|verify} messages.
   * @param message Connective message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IConnective,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a Connective message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Connective
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): Connective;

  /**
   * Decodes a Connective message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Connective
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): Connective;

  /**
   * Verifies a Connective message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Connective message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Connective
   */
  public static fromObject(object: { [k: string]: any }): Connective;

  /**
   * Creates a plain object from a Connective message. Also converts values to other types if specified.
   * @param message Connective
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Connective,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this Connective to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a VarRef. */
export interface IVarRef {
  /** VarRef index */
  index?: number | null;

  /** VarRef depth */
  depth?: number | null;
}

/** Represents a VarRef. */
export class VarRef implements IVarRef {
  /**
   * Constructs a new VarRef.
   * @param [properties] Properties to set
   */
  constructor(properties?: IVarRef);

  /** VarRef index. */
  public index: number;

  /** VarRef depth. */
  public depth: number;

  /**
   * Creates a new VarRef instance using the specified properties.
   * @param [properties] Properties to set
   * @returns VarRef instance
   */
  public static create(properties?: IVarRef): VarRef;

  /**
   * Encodes the specified VarRef message. Does not implicitly {@link VarRef.verify|verify} messages.
   * @param message VarRef message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IVarRef,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified VarRef message, length delimited. Does not implicitly {@link VarRef.verify|verify} messages.
   * @param message VarRef message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IVarRef,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a VarRef message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns VarRef
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): VarRef;

  /**
   * Decodes a VarRef message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns VarRef
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): VarRef;

  /**
   * Verifies a VarRef message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a VarRef message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns VarRef
   */
  public static fromObject(object: { [k: string]: any }): VarRef;

  /**
   * Creates a plain object from a VarRef message. Also converts values to other types if specified.
   * @param message VarRef
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: VarRef,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this VarRef to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectiveBody. */
export interface IConnectiveBody {
  /** ConnectiveBody ps */
  ps?: IPar[] | null;
}

/** Represents a ConnectiveBody. */
export class ConnectiveBody implements IConnectiveBody {
  /**
   * Constructs a new ConnectiveBody.
   * @param [properties] Properties to set
   */
  constructor(properties?: IConnectiveBody);

  /** ConnectiveBody ps. */
  public ps: IPar[];

  /**
   * Creates a new ConnectiveBody instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ConnectiveBody instance
   */
  public static create(properties?: IConnectiveBody): ConnectiveBody;

  /**
   * Encodes the specified ConnectiveBody message. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
   * @param message ConnectiveBody message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IConnectiveBody,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ConnectiveBody message, length delimited. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
   * @param message ConnectiveBody message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IConnectiveBody,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ConnectiveBody message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ConnectiveBody
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ConnectiveBody;

  /**
   * Decodes a ConnectiveBody message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ConnectiveBody
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ConnectiveBody;

  /**
   * Verifies a ConnectiveBody message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ConnectiveBody message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ConnectiveBody
   */
  public static fromObject(object: { [k: string]: any }): ConnectiveBody;

  /**
   * Creates a plain object from a ConnectiveBody message. Also converts values to other types if specified.
   * @param message ConnectiveBody
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ConnectiveBody,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ConnectiveBody to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DeployId. */
export interface IDeployId {
  /** DeployId sig */
  sig?: Uint8Array | null;
}

/** Represents a DeployId. */
export class DeployId implements IDeployId {
  /**
   * Constructs a new DeployId.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDeployId);

  /** DeployId sig. */
  public sig: Uint8Array;

  /**
   * Creates a new DeployId instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DeployId instance
   */
  public static create(properties?: IDeployId): DeployId;

  /**
   * Encodes the specified DeployId message. Does not implicitly {@link DeployId.verify|verify} messages.
   * @param message DeployId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDeployId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DeployId message, length delimited. Does not implicitly {@link DeployId.verify|verify} messages.
   * @param message DeployId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDeployId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DeployId message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DeployId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DeployId;

  /**
   * Decodes a DeployId message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DeployId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DeployId;

  /**
   * Verifies a DeployId message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DeployId message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DeployId
   */
  public static fromObject(object: { [k: string]: any }): DeployId;

  /**
   * Creates a plain object from a DeployId message. Also converts values to other types if specified.
   * @param message DeployId
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DeployId,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DeployId to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a DeployerId. */
export interface IDeployerId {
  /** DeployerId publicKey */
  publicKey?: Uint8Array | null;
}

/** Represents a DeployerId. */
export class DeployerId implements IDeployerId {
  /**
   * Constructs a new DeployerId.
   * @param [properties] Properties to set
   */
  constructor(properties?: IDeployerId);

  /** DeployerId publicKey. */
  public publicKey: Uint8Array;

  /**
   * Creates a new DeployerId instance using the specified properties.
   * @param [properties] Properties to set
   * @returns DeployerId instance
   */
  public static create(properties?: IDeployerId): DeployerId;

  /**
   * Encodes the specified DeployerId message. Does not implicitly {@link DeployerId.verify|verify} messages.
   * @param message DeployerId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IDeployerId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified DeployerId message, length delimited. Does not implicitly {@link DeployerId.verify|verify} messages.
   * @param message DeployerId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IDeployerId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a DeployerId message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns DeployerId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): DeployerId;

  /**
   * Decodes a DeployerId message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns DeployerId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): DeployerId;

  /**
   * Verifies a DeployerId message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a DeployerId message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns DeployerId
   */
  public static fromObject(object: { [k: string]: any }): DeployerId;

  /**
   * Creates a plain object from a DeployerId message. Also converts values to other types if specified.
   * @param message DeployerId
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: DeployerId,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this DeployerId to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GUnforgeable. */
export interface IGUnforgeable {
  /** GUnforgeable g_private_body */
  g_private_body?: IGPrivate | null;

  /** GUnforgeable g_deploy_id_body */
  g_deploy_id_body?: IGDeployId | null;

  /** GUnforgeable g_deployer_id_body */
  g_deployer_id_body?: IGDeployerId | null;

  /** GUnforgeable g_sys_auth_token_body */
  g_sys_auth_token_body?: IGSysAuthToken | null;
}

/** Represents a GUnforgeable. */
export class GUnforgeable implements IGUnforgeable {
  /**
   * Constructs a new GUnforgeable.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGUnforgeable);

  /** GUnforgeable g_private_body. */
  public g_private_body?: IGPrivate | null;

  /** GUnforgeable g_deploy_id_body. */
  public g_deploy_id_body?: IGDeployId | null;

  /** GUnforgeable g_deployer_id_body. */
  public g_deployer_id_body?: IGDeployerId | null;

  /** GUnforgeable g_sys_auth_token_body. */
  public g_sys_auth_token_body?: IGSysAuthToken | null;

  /** GUnforgeable unf_instance. */
  public unf_instance?:
    | "g_private_body"
    | "g_deploy_id_body"
    | "g_deployer_id_body"
    | "g_sys_auth_token_body";

  /**
   * Creates a new GUnforgeable instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GUnforgeable instance
   */
  public static create(properties?: IGUnforgeable): GUnforgeable;

  /**
   * Encodes the specified GUnforgeable message. Does not implicitly {@link GUnforgeable.verify|verify} messages.
   * @param message GUnforgeable message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGUnforgeable,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified GUnforgeable message, length delimited. Does not implicitly {@link GUnforgeable.verify|verify} messages.
   * @param message GUnforgeable message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGUnforgeable,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a GUnforgeable message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GUnforgeable
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): GUnforgeable;

  /**
   * Decodes a GUnforgeable message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GUnforgeable
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): GUnforgeable;

  /**
   * Verifies a GUnforgeable message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a GUnforgeable message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GUnforgeable
   */
  public static fromObject(object: { [k: string]: any }): GUnforgeable;

  /**
   * Creates a plain object from a GUnforgeable message. Also converts values to other types if specified.
   * @param message GUnforgeable
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: GUnforgeable,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this GUnforgeable to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GPrivate. */
export interface IGPrivate {
  /** GPrivate id */
  id?: Uint8Array | null;
}

/** Represents a GPrivate. */
export class GPrivate implements IGPrivate {
  /**
   * Constructs a new GPrivate.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGPrivate);

  /** GPrivate id. */
  public id: Uint8Array;

  /**
   * Creates a new GPrivate instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GPrivate instance
   */
  public static create(properties?: IGPrivate): GPrivate;

  /**
   * Encodes the specified GPrivate message. Does not implicitly {@link GPrivate.verify|verify} messages.
   * @param message GPrivate message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGPrivate,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified GPrivate message, length delimited. Does not implicitly {@link GPrivate.verify|verify} messages.
   * @param message GPrivate message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGPrivate,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a GPrivate message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GPrivate
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): GPrivate;

  /**
   * Decodes a GPrivate message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GPrivate
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): GPrivate;

  /**
   * Verifies a GPrivate message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a GPrivate message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GPrivate
   */
  public static fromObject(object: { [k: string]: any }): GPrivate;

  /**
   * Creates a plain object from a GPrivate message. Also converts values to other types if specified.
   * @param message GPrivate
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: GPrivate,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this GPrivate to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GDeployId. */
export interface IGDeployId {
  /** GDeployId sig */
  sig?: Uint8Array | null;
}

/** Represents a GDeployId. */
export class GDeployId implements IGDeployId {
  /**
   * Constructs a new GDeployId.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGDeployId);

  /** GDeployId sig. */
  public sig: Uint8Array;

  /**
   * Creates a new GDeployId instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GDeployId instance
   */
  public static create(properties?: IGDeployId): GDeployId;

  /**
   * Encodes the specified GDeployId message. Does not implicitly {@link GDeployId.verify|verify} messages.
   * @param message GDeployId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGDeployId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified GDeployId message, length delimited. Does not implicitly {@link GDeployId.verify|verify} messages.
   * @param message GDeployId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGDeployId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a GDeployId message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GDeployId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): GDeployId;

  /**
   * Decodes a GDeployId message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GDeployId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): GDeployId;

  /**
   * Verifies a GDeployId message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a GDeployId message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GDeployId
   */
  public static fromObject(object: { [k: string]: any }): GDeployId;

  /**
   * Creates a plain object from a GDeployId message. Also converts values to other types if specified.
   * @param message GDeployId
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: GDeployId,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this GDeployId to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GDeployerId. */
export interface IGDeployerId {
  /** GDeployerId publicKey */
  publicKey?: Uint8Array | null;
}

/** Represents a GDeployerId. */
export class GDeployerId implements IGDeployerId {
  /**
   * Constructs a new GDeployerId.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGDeployerId);

  /** GDeployerId publicKey. */
  public publicKey: Uint8Array;

  /**
   * Creates a new GDeployerId instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GDeployerId instance
   */
  public static create(properties?: IGDeployerId): GDeployerId;

  /**
   * Encodes the specified GDeployerId message. Does not implicitly {@link GDeployerId.verify|verify} messages.
   * @param message GDeployerId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGDeployerId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified GDeployerId message, length delimited. Does not implicitly {@link GDeployerId.verify|verify} messages.
   * @param message GDeployerId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGDeployerId,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a GDeployerId message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GDeployerId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): GDeployerId;

  /**
   * Decodes a GDeployerId message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GDeployerId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): GDeployerId;

  /**
   * Verifies a GDeployerId message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a GDeployerId message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GDeployerId
   */
  public static fromObject(object: { [k: string]: any }): GDeployerId;

  /**
   * Creates a plain object from a GDeployerId message. Also converts values to other types if specified.
   * @param message GDeployerId
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: GDeployerId,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this GDeployerId to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GSysAuthToken. */
export interface IGSysAuthToken {}

/** Represents a GSysAuthToken. */
export class GSysAuthToken implements IGSysAuthToken {
  /**
   * Constructs a new GSysAuthToken.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGSysAuthToken);

  /**
   * Creates a new GSysAuthToken instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GSysAuthToken instance
   */
  public static create(properties?: IGSysAuthToken): GSysAuthToken;

  /**
   * Encodes the specified GSysAuthToken message. Does not implicitly {@link GSysAuthToken.verify|verify} messages.
   * @param message GSysAuthToken message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGSysAuthToken,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified GSysAuthToken message, length delimited. Does not implicitly {@link GSysAuthToken.verify|verify} messages.
   * @param message GSysAuthToken message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGSysAuthToken,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a GSysAuthToken message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GSysAuthToken
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): GSysAuthToken;

  /**
   * Decodes a GSysAuthToken message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GSysAuthToken
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): GSysAuthToken;

  /**
   * Verifies a GSysAuthToken message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a GSysAuthToken message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GSysAuthToken
   */
  public static fromObject(object: { [k: string]: any }): GSysAuthToken;

  /**
   * Creates a plain object from a GSysAuthToken message. Also converts values to other types if specified.
   * @param message GSysAuthToken
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: GSysAuthToken,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this GSysAuthToken to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ServiceError. */
export interface IServiceError {
  /** ServiceError messages */
  messages?: string[] | null;
}

/** Represents a ServiceError. */
export class ServiceError implements IServiceError {
  /**
   * Constructs a new ServiceError.
   * @param [properties] Properties to set
   */
  constructor(properties?: IServiceError);

  /** ServiceError messages. */
  public messages: string[];

  /**
   * Creates a new ServiceError instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ServiceError instance
   */
  public static create(properties?: IServiceError): ServiceError;

  /**
   * Encodes the specified ServiceError message. Does not implicitly {@link ServiceError.verify|verify} messages.
   * @param message ServiceError message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IServiceError,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ServiceError message, length delimited. Does not implicitly {@link ServiceError.verify|verify} messages.
   * @param message ServiceError message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IServiceError,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ServiceError message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ServiceError
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ServiceError;

  /**
   * Decodes a ServiceError message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ServiceError
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ServiceError;

  /**
   * Verifies a ServiceError message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ServiceError message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ServiceError
   */
  public static fromObject(object: { [k: string]: any }): ServiceError;

  /**
   * Creates a plain object from a ServiceError message. Also converts values to other types if specified.
   * @param message ServiceError
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ServiceError,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ServiceError to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Namespace routing. */
export namespace routing {
  /** Properties of a Node. */
  interface INode {
    /** Node id */
    id?: Uint8Array | null;

    /** Node host */
    host?: Uint8Array | null;

    /** Node tcp_port */
    tcp_port?: number | null;

    /** Node udp_port */
    udp_port?: number | null;
  }

  /** Represents a Node. */
  class Node implements INode {
    /**
     * Constructs a new Node.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.INode);

    /** Node id. */
    public id: Uint8Array;

    /** Node host. */
    public host: Uint8Array;

    /** Node tcp_port. */
    public tcp_port: number;

    /** Node udp_port. */
    public udp_port: number;

    /**
     * Creates a new Node instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Node instance
     */
    public static create(properties?: routing.INode): routing.Node;

    /**
     * Encodes the specified Node message. Does not implicitly {@link routing.Node.verify|verify} messages.
     * @param message Node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.INode,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Node message, length delimited. Does not implicitly {@link routing.Node.verify|verify} messages.
     * @param message Node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.INode,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Node message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Node;

    /**
     * Decodes a Node message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Node;

    /**
     * Verifies a Node message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Node message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Node
     */
    public static fromObject(object: { [k: string]: any }): routing.Node;

    /**
     * Creates a plain object from a Node message. Also converts values to other types if specified.
     * @param message Node
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Node,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Node to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Header. */
  interface IHeader {
    /** Header sender */
    sender?: routing.INode | null;

    /** Header networkId */
    networkId?: string | null;
  }

  /** Represents a Header. */
  class Header implements IHeader {
    /**
     * Constructs a new Header.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IHeader);

    /** Header sender. */
    public sender?: routing.INode | null;

    /** Header networkId. */
    public networkId: string;

    /**
     * Creates a new Header instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Header instance
     */
    public static create(properties?: routing.IHeader): routing.Header;

    /**
     * Encodes the specified Header message. Does not implicitly {@link routing.Header.verify|verify} messages.
     * @param message Header message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IHeader,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Header message, length delimited. Does not implicitly {@link routing.Header.verify|verify} messages.
     * @param message Header message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IHeader,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Header message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Header;

    /**
     * Decodes a Header message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Header;

    /**
     * Verifies a Header message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Header message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Header
     */
    public static fromObject(object: { [k: string]: any }): routing.Header;

    /**
     * Creates a plain object from a Header message. Also converts values to other types if specified.
     * @param message Header
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Header,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Header to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Heartbeat. */
  interface IHeartbeat {}

  /** Represents a Heartbeat. */
  class Heartbeat implements IHeartbeat {
    /**
     * Constructs a new Heartbeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IHeartbeat);

    /**
     * Creates a new Heartbeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Heartbeat instance
     */
    public static create(properties?: routing.IHeartbeat): routing.Heartbeat;

    /**
     * Encodes the specified Heartbeat message. Does not implicitly {@link routing.Heartbeat.verify|verify} messages.
     * @param message Heartbeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IHeartbeat,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link routing.Heartbeat.verify|verify} messages.
     * @param message Heartbeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IHeartbeat,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Heartbeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Heartbeat;

    /**
     * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Heartbeat;

    /**
     * Verifies a Heartbeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Heartbeat
     */
    public static fromObject(object: { [k: string]: any }): routing.Heartbeat;

    /**
     * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
     * @param message Heartbeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Heartbeat,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Heartbeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a HeartbeatResponse. */
  interface IHeartbeatResponse {}

  /** Represents a HeartbeatResponse. */
  class HeartbeatResponse implements IHeartbeatResponse {
    /**
     * Constructs a new HeartbeatResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IHeartbeatResponse);

    /**
     * Creates a new HeartbeatResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartbeatResponse instance
     */
    public static create(
      properties?: routing.IHeartbeatResponse
    ): routing.HeartbeatResponse;

    /**
     * Encodes the specified HeartbeatResponse message. Does not implicitly {@link routing.HeartbeatResponse.verify|verify} messages.
     * @param message HeartbeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IHeartbeatResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link routing.HeartbeatResponse.verify|verify} messages.
     * @param message HeartbeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IHeartbeatResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.HeartbeatResponse;

    /**
     * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartbeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.HeartbeatResponse;

    /**
     * Verifies a HeartbeatResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartbeatResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): routing.HeartbeatResponse;

    /**
     * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
     * @param message HeartbeatResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.HeartbeatResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HeartbeatResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ProtocolHandshake. */
  interface IProtocolHandshake {
    /** ProtocolHandshake nonce */
    nonce?: Uint8Array | null;
  }

  /** Represents a ProtocolHandshake. */
  class ProtocolHandshake implements IProtocolHandshake {
    /**
     * Constructs a new ProtocolHandshake.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IProtocolHandshake);

    /** ProtocolHandshake nonce. */
    public nonce: Uint8Array;

    /**
     * Creates a new ProtocolHandshake instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtocolHandshake instance
     */
    public static create(
      properties?: routing.IProtocolHandshake
    ): routing.ProtocolHandshake;

    /**
     * Encodes the specified ProtocolHandshake message. Does not implicitly {@link routing.ProtocolHandshake.verify|verify} messages.
     * @param message ProtocolHandshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IProtocolHandshake,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProtocolHandshake message, length delimited. Does not implicitly {@link routing.ProtocolHandshake.verify|verify} messages.
     * @param message ProtocolHandshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IProtocolHandshake,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProtocolHandshake message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtocolHandshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.ProtocolHandshake;

    /**
     * Decodes a ProtocolHandshake message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtocolHandshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.ProtocolHandshake;

    /**
     * Verifies a ProtocolHandshake message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ProtocolHandshake message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtocolHandshake
     */
    public static fromObject(object: {
      [k: string]: any;
    }): routing.ProtocolHandshake;

    /**
     * Creates a plain object from a ProtocolHandshake message. Also converts values to other types if specified.
     * @param message ProtocolHandshake
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.ProtocolHandshake,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProtocolHandshake to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ProtocolHandshakeResponse. */
  interface IProtocolHandshakeResponse {
    /** ProtocolHandshakeResponse nonce */
    nonce?: Uint8Array | null;
  }

  /** Represents a ProtocolHandshakeResponse. */
  class ProtocolHandshakeResponse implements IProtocolHandshakeResponse {
    /**
     * Constructs a new ProtocolHandshakeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IProtocolHandshakeResponse);

    /** ProtocolHandshakeResponse nonce. */
    public nonce: Uint8Array;

    /**
     * Creates a new ProtocolHandshakeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtocolHandshakeResponse instance
     */
    public static create(
      properties?: routing.IProtocolHandshakeResponse
    ): routing.ProtocolHandshakeResponse;

    /**
     * Encodes the specified ProtocolHandshakeResponse message. Does not implicitly {@link routing.ProtocolHandshakeResponse.verify|verify} messages.
     * @param message ProtocolHandshakeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IProtocolHandshakeResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ProtocolHandshakeResponse message, length delimited. Does not implicitly {@link routing.ProtocolHandshakeResponse.verify|verify} messages.
     * @param message ProtocolHandshakeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IProtocolHandshakeResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ProtocolHandshakeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtocolHandshakeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.ProtocolHandshakeResponse;

    /**
     * Decodes a ProtocolHandshakeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtocolHandshakeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.ProtocolHandshakeResponse;

    /**
     * Verifies a ProtocolHandshakeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ProtocolHandshakeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtocolHandshakeResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): routing.ProtocolHandshakeResponse;

    /**
     * Creates a plain object from a ProtocolHandshakeResponse message. Also converts values to other types if specified.
     * @param message ProtocolHandshakeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.ProtocolHandshakeResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ProtocolHandshakeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Packet. */
  interface IPacket {
    /** Packet typeId */
    typeId?: string | null;

    /** Packet content */
    content?: Uint8Array | null;
  }

  /** Represents a Packet. */
  class Packet implements IPacket {
    /**
     * Constructs a new Packet.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IPacket);

    /** Packet typeId. */
    public typeId: string;

    /** Packet content. */
    public content: Uint8Array;

    /**
     * Creates a new Packet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Packet instance
     */
    public static create(properties?: routing.IPacket): routing.Packet;

    /**
     * Encodes the specified Packet message. Does not implicitly {@link routing.Packet.verify|verify} messages.
     * @param message Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IPacket,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Packet message, length delimited. Does not implicitly {@link routing.Packet.verify|verify} messages.
     * @param message Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IPacket,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Packet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Packet;

    /**
     * Decodes a Packet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Packet;

    /**
     * Verifies a Packet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Packet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Packet
     */
    public static fromObject(object: { [k: string]: any }): routing.Packet;

    /**
     * Creates a plain object from a Packet message. Also converts values to other types if specified.
     * @param message Packet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Packet,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Packet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Disconnect. */
  interface IDisconnect {}

  /** Represents a Disconnect. */
  class Disconnect implements IDisconnect {
    /**
     * Constructs a new Disconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IDisconnect);

    /**
     * Creates a new Disconnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Disconnect instance
     */
    public static create(properties?: routing.IDisconnect): routing.Disconnect;

    /**
     * Encodes the specified Disconnect message. Does not implicitly {@link routing.Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IDisconnect,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link routing.Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IDisconnect,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Disconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Disconnect;

    /**
     * Decodes a Disconnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Disconnect;

    /**
     * Verifies a Disconnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Disconnect
     */
    public static fromObject(object: { [k: string]: any }): routing.Disconnect;

    /**
     * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
     * @param message Disconnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Disconnect,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Disconnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Protocol. */
  interface IProtocol {
    /** Protocol header */
    header?: routing.IHeader | null;

    /** Protocol heartbeat */
    heartbeat?: routing.IHeartbeat | null;

    /** Protocol protocol_handshake */
    protocol_handshake?: routing.IProtocolHandshake | null;

    /** Protocol protocol_handshake_response */
    protocol_handshake_response?: routing.IProtocolHandshakeResponse | null;

    /** Protocol packet */
    packet?: routing.IPacket | null;

    /** Protocol disconnect */
    disconnect?: routing.IDisconnect | null;
  }

  /** Represents a Protocol. */
  class Protocol implements IProtocol {
    /**
     * Constructs a new Protocol.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IProtocol);

    /** Protocol header. */
    public header?: routing.IHeader | null;

    /** Protocol heartbeat. */
    public heartbeat?: routing.IHeartbeat | null;

    /** Protocol protocol_handshake. */
    public protocol_handshake?: routing.IProtocolHandshake | null;

    /** Protocol protocol_handshake_response. */
    public protocol_handshake_response?: routing.IProtocolHandshakeResponse | null;

    /** Protocol packet. */
    public packet?: routing.IPacket | null;

    /** Protocol disconnect. */
    public disconnect?: routing.IDisconnect | null;

    /** Protocol message. */
    public message?:
      | "heartbeat"
      | "protocol_handshake"
      | "protocol_handshake_response"
      | "packet"
      | "disconnect";

    /**
     * Creates a new Protocol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Protocol instance
     */
    public static create(properties?: routing.IProtocol): routing.Protocol;

    /**
     * Encodes the specified Protocol message. Does not implicitly {@link routing.Protocol.verify|verify} messages.
     * @param message Protocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IProtocol,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Protocol message, length delimited. Does not implicitly {@link routing.Protocol.verify|verify} messages.
     * @param message Protocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IProtocol,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Protocol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Protocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Protocol;

    /**
     * Decodes a Protocol message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Protocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Protocol;

    /**
     * Verifies a Protocol message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Protocol
     */
    public static fromObject(object: { [k: string]: any }): routing.Protocol;

    /**
     * Creates a plain object from a Protocol message. Also converts values to other types if specified.
     * @param message Protocol
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Protocol,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Protocol to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Represents a TransportLayer */
  class TransportLayer extends $protobuf.rpc.Service {
    /**
     * Constructs a new TransportLayer service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new TransportLayer service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): TransportLayer;

    /**
     * Calls Send.
     * @param request TLRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and TLResponse
     */
    public send(
      request: routing.ITLRequest,
      callback: routing.TransportLayer.SendCallback
    ): void;

    /**
     * Calls Send.
     * @param request TLRequest message or plain object
     * @returns Promise
     */
    public send(request: routing.ITLRequest): Promise<routing.TLResponse>;

    /**
     * Calls Stream.
     * @param request Chunk message or plain object
     * @param callback Node-style callback called with the error, if any, and TLResponse
     */
    public stream(
      request: routing.IChunk,
      callback: routing.TransportLayer.StreamCallback
    ): void;

    /**
     * Calls Stream.
     * @param request Chunk message or plain object
     * @returns Promise
     */
    public stream(request: routing.IChunk): Promise<routing.TLResponse>;
  }

  namespace TransportLayer {
    /**
     * Callback as used by {@link routing.TransportLayer#send}.
     * @param error Error, if any
     * @param [response] TLResponse
     */
    type SendCallback = (
      error: Error | null,
      response?: routing.TLResponse
    ) => void;

    /**
     * Callback as used by {@link routing.TransportLayer#stream}.
     * @param error Error, if any
     * @param [response] TLResponse
     */
    type StreamCallback = (
      error: Error | null,
      response?: routing.TLResponse
    ) => void;
  }

  /** Properties of a TLRequest. */
  interface ITLRequest {
    /** TLRequest protocol */
    protocol?: routing.IProtocol | null;
  }

  /** Represents a TLRequest. */
  class TLRequest implements ITLRequest {
    /**
     * Constructs a new TLRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.ITLRequest);

    /** TLRequest protocol. */
    public protocol?: routing.IProtocol | null;

    /**
     * Creates a new TLRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TLRequest instance
     */
    public static create(properties?: routing.ITLRequest): routing.TLRequest;

    /**
     * Encodes the specified TLRequest message. Does not implicitly {@link routing.TLRequest.verify|verify} messages.
     * @param message TLRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.ITLRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TLRequest message, length delimited. Does not implicitly {@link routing.TLRequest.verify|verify} messages.
     * @param message TLRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.ITLRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TLRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TLRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.TLRequest;

    /**
     * Decodes a TLRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TLRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.TLRequest;

    /**
     * Verifies a TLRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TLRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TLRequest
     */
    public static fromObject(object: { [k: string]: any }): routing.TLRequest;

    /**
     * Creates a plain object from a TLRequest message. Also converts values to other types if specified.
     * @param message TLRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.TLRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TLRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an InternalServerError. */
  interface IInternalServerError {
    /** InternalServerError error */
    error?: Uint8Array | null;
  }

  /** Represents an InternalServerError. */
  class InternalServerError implements IInternalServerError {
    /**
     * Constructs a new InternalServerError.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IInternalServerError);

    /** InternalServerError error. */
    public error: Uint8Array;

    /**
     * Creates a new InternalServerError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InternalServerError instance
     */
    public static create(
      properties?: routing.IInternalServerError
    ): routing.InternalServerError;

    /**
     * Encodes the specified InternalServerError message. Does not implicitly {@link routing.InternalServerError.verify|verify} messages.
     * @param message InternalServerError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IInternalServerError,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified InternalServerError message, length delimited. Does not implicitly {@link routing.InternalServerError.verify|verify} messages.
     * @param message InternalServerError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IInternalServerError,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an InternalServerError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InternalServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.InternalServerError;

    /**
     * Decodes an InternalServerError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InternalServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.InternalServerError;

    /**
     * Verifies an InternalServerError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an InternalServerError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InternalServerError
     */
    public static fromObject(object: {
      [k: string]: any;
    }): routing.InternalServerError;

    /**
     * Creates a plain object from an InternalServerError message. Also converts values to other types if specified.
     * @param message InternalServerError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.InternalServerError,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this InternalServerError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an Ack. */
  interface IAck {
    /** Ack header */
    header?: routing.IHeader | null;
  }

  /** Represents an Ack. */
  class Ack implements IAck {
    /**
     * Constructs a new Ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IAck);

    /** Ack header. */
    public header?: routing.IHeader | null;

    /**
     * Creates a new Ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ack instance
     */
    public static create(properties?: routing.IAck): routing.Ack;

    /**
     * Encodes the specified Ack message. Does not implicitly {@link routing.Ack.verify|verify} messages.
     * @param message Ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IAck,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Ack message, length delimited. Does not implicitly {@link routing.Ack.verify|verify} messages.
     * @param message Ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IAck,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an Ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Ack;

    /**
     * Decodes an Ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Ack;

    /**
     * Verifies an Ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ack
     */
    public static fromObject(object: { [k: string]: any }): routing.Ack;

    /**
     * Creates a plain object from an Ack message. Also converts values to other types if specified.
     * @param message Ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Ack,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a TLResponse. */
  interface ITLResponse {
    /** TLResponse ack */
    ack?: routing.IAck | null;

    /** TLResponse internalServerError */
    internalServerError?: routing.IInternalServerError | null;
  }

  /** Represents a TLResponse. */
  class TLResponse implements ITLResponse {
    /**
     * Constructs a new TLResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.ITLResponse);

    /** TLResponse ack. */
    public ack?: routing.IAck | null;

    /** TLResponse internalServerError. */
    public internalServerError?: routing.IInternalServerError | null;

    /** TLResponse payload. */
    public payload?: "ack" | "internalServerError";

    /**
     * Creates a new TLResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TLResponse instance
     */
    public static create(properties?: routing.ITLResponse): routing.TLResponse;

    /**
     * Encodes the specified TLResponse message. Does not implicitly {@link routing.TLResponse.verify|verify} messages.
     * @param message TLResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.ITLResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TLResponse message, length delimited. Does not implicitly {@link routing.TLResponse.verify|verify} messages.
     * @param message TLResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.ITLResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TLResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TLResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.TLResponse;

    /**
     * Decodes a TLResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TLResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.TLResponse;

    /**
     * Verifies a TLResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TLResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TLResponse
     */
    public static fromObject(object: { [k: string]: any }): routing.TLResponse;

    /**
     * Creates a plain object from a TLResponse message. Also converts values to other types if specified.
     * @param message TLResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.TLResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TLResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ChunkHeader. */
  interface IChunkHeader {
    /** ChunkHeader sender */
    sender?: routing.INode | null;

    /** ChunkHeader typeId */
    typeId?: string | null;

    /** ChunkHeader compressed */
    compressed?: boolean | null;

    /** ChunkHeader contentLength */
    contentLength?: number | null;

    /** ChunkHeader networkId */
    networkId?: string | null;
  }

  /** Represents a ChunkHeader. */
  class ChunkHeader implements IChunkHeader {
    /**
     * Constructs a new ChunkHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IChunkHeader);

    /** ChunkHeader sender. */
    public sender?: routing.INode | null;

    /** ChunkHeader typeId. */
    public typeId: string;

    /** ChunkHeader compressed. */
    public compressed: boolean;

    /** ChunkHeader contentLength. */
    public contentLength: number;

    /** ChunkHeader networkId. */
    public networkId: string;

    /**
     * Creates a new ChunkHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChunkHeader instance
     */
    public static create(
      properties?: routing.IChunkHeader
    ): routing.ChunkHeader;

    /**
     * Encodes the specified ChunkHeader message. Does not implicitly {@link routing.ChunkHeader.verify|verify} messages.
     * @param message ChunkHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IChunkHeader,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChunkHeader message, length delimited. Does not implicitly {@link routing.ChunkHeader.verify|verify} messages.
     * @param message ChunkHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IChunkHeader,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChunkHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChunkHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.ChunkHeader;

    /**
     * Decodes a ChunkHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChunkHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.ChunkHeader;

    /**
     * Verifies a ChunkHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChunkHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChunkHeader
     */
    public static fromObject(object: { [k: string]: any }): routing.ChunkHeader;

    /**
     * Creates a plain object from a ChunkHeader message. Also converts values to other types if specified.
     * @param message ChunkHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.ChunkHeader,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChunkHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ChunkData. */
  interface IChunkData {
    /** ChunkData contentData */
    contentData?: Uint8Array | null;
  }

  /** Represents a ChunkData. */
  class ChunkData implements IChunkData {
    /**
     * Constructs a new ChunkData.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IChunkData);

    /** ChunkData contentData. */
    public contentData: Uint8Array;

    /**
     * Creates a new ChunkData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChunkData instance
     */
    public static create(properties?: routing.IChunkData): routing.ChunkData;

    /**
     * Encodes the specified ChunkData message. Does not implicitly {@link routing.ChunkData.verify|verify} messages.
     * @param message ChunkData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IChunkData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChunkData message, length delimited. Does not implicitly {@link routing.ChunkData.verify|verify} messages.
     * @param message ChunkData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IChunkData,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ChunkData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChunkData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.ChunkData;

    /**
     * Decodes a ChunkData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChunkData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.ChunkData;

    /**
     * Verifies a ChunkData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChunkData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChunkData
     */
    public static fromObject(object: { [k: string]: any }): routing.ChunkData;

    /**
     * Creates a plain object from a ChunkData message. Also converts values to other types if specified.
     * @param message ChunkData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.ChunkData,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ChunkData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Chunk. */
  interface IChunk {
    /** Chunk header */
    header?: routing.IChunkHeader | null;

    /** Chunk data */
    data?: routing.IChunkData | null;
  }

  /** Represents a Chunk. */
  class Chunk implements IChunk {
    /**
     * Constructs a new Chunk.
     * @param [properties] Properties to set
     */
    constructor(properties?: routing.IChunk);

    /** Chunk header. */
    public header?: routing.IChunkHeader | null;

    /** Chunk data. */
    public data?: routing.IChunkData | null;

    /** Chunk content. */
    public content?: "header" | "data";

    /**
     * Creates a new Chunk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Chunk instance
     */
    public static create(properties?: routing.IChunk): routing.Chunk;

    /**
     * Encodes the specified Chunk message. Does not implicitly {@link routing.Chunk.verify|verify} messages.
     * @param message Chunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: routing.IChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Chunk message, length delimited. Does not implicitly {@link routing.Chunk.verify|verify} messages.
     * @param message Chunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: routing.IChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Chunk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Chunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): routing.Chunk;

    /**
     * Decodes a Chunk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Chunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): routing.Chunk;

    /**
     * Verifies a Chunk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Chunk
     */
    public static fromObject(object: { [k: string]: any }): routing.Chunk;

    /**
     * Creates a plain object from a Chunk message. Also converts values to other types if specified.
     * @param message Chunk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: routing.Chunk,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Chunk to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
