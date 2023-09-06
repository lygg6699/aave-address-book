// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
export const IPayloadsControllerCore_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'enum PayloadsControllerUtils.AccessControl',
        name: 'accessLevel',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'executor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'delay',
        type: 'uint40',
      },
    ],
    name: 'ExecutorSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'PayloadCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'withDelegateCall',
            type: 'bool',
          },
          {
            internalType: 'enum PayloadsControllerUtils.AccessControl',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'signature',
            type: 'string',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        indexed: false,
        internalType: 'struct IPayloadsControllerCore.ExecutionAction[]',
        name: 'actions',
        type: 'tuple[]',
      },
      {
        indexed: true,
        internalType: 'enum PayloadsControllerUtils.AccessControl',
        name: 'maximumAccessLevelRequired',
        type: 'uint8',
      },
    ],
    name: 'PayloadCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'PayloadExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'originSender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'originChainId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'delivered',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'message',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'reason',
        type: 'bytes',
      },
    ],
    name: 'PayloadExecutionMessageReceived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'PayloadQueued',
    type: 'event',
  },
  {
    inputs: [],
    name: 'EXPIRATION_DELAY',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GRACE_PERIOD',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_EXECUTION_DELAY',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MIN_EXECUTION_DELAY',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'cancelPayload',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'withDelegateCall',
            type: 'bool',
          },
          {
            internalType: 'enum PayloadsControllerUtils.AccessControl',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'signature',
            type: 'string',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
        ],
        internalType: 'struct IPayloadsControllerCore.ExecutionAction[]',
        name: 'actions',
        type: 'tuple[]',
      },
    ],
    name: 'createPayload',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'executePayload',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum PayloadsControllerUtils.AccessControl',
        name: 'accessControl',
        type: 'uint8',
      },
    ],
    name: 'getExecutorSettingsByAccessControl',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'executor',
            type: 'address',
          },
          {
            internalType: 'uint40',
            name: 'delay',
            type: 'uint40',
          },
        ],
        internalType: 'struct IPayloadsControllerCore.ExecutorConfig',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'getPayloadById',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'enum PayloadsControllerUtils.AccessControl',
            name: 'maximumAccessLevelRequired',
            type: 'uint8',
          },
          {
            internalType: 'enum IPayloadsControllerCore.PayloadState',
            name: 'state',
            type: 'uint8',
          },
          {
            internalType: 'uint40',
            name: 'createdAt',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'queuedAt',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'executedAt',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'cancelledAt',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'expirationTime',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'delay',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'gracePeriod',
            type: 'uint40',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'withDelegateCall',
                type: 'bool',
              },
              {
                internalType: 'enum PayloadsControllerUtils.AccessControl',
                name: 'accessLevel',
                type: 'uint8',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'string',
                name: 'signature',
                type: 'string',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct IPayloadsControllerCore.ExecutionAction[]',
            name: 'actions',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IPayloadsControllerCore.Payload',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint40',
        name: 'payloadId',
        type: 'uint40',
      },
    ],
    name: 'getPayloadState',
    outputs: [
      {
        internalType: 'enum IPayloadsControllerCore.PayloadState',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPayloadsCount',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum PayloadsControllerUtils.AccessControl',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'executor',
                type: 'address',
              },
              {
                internalType: 'uint40',
                name: 'delay',
                type: 'uint40',
              },
            ],
            internalType: 'struct IPayloadsControllerCore.ExecutorConfig',
            name: 'executorConfig',
            type: 'tuple',
          },
        ],
        internalType: 'struct IPayloadsControllerCore.UpdateExecutorInput[]',
        name: 'executors',
        type: 'tuple[]',
      },
    ],
    name: 'updateExecutors',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;