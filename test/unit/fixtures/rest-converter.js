var _         = require('lodash');
var addresses = require('./../../fixtures').addresses;

module.exports.paymentRest = {
  "source_account": addresses.VALID,
  "destination_account": addresses.COUNTERPARTY,
  "destination_amount": {
    "value": "0.001",
    "currency": "USD",
    "counterparty": addresses.COUNTERPARTY
  }
};

module.exports.paymentRestXRP = {
  "source_account": addresses.VALID,
  "destination_account": addresses.COUNTERPARTY,
  "destination_amount": {
    "value": "1",
    "currency": "XRP",
    "counterparty": ""
  }
};

module.exports.paymentRestComplex = {
  "source_account": addresses.VALID,
  "source_tag": "",
  "source_amount": {
    "value": "10",
    "currency": "USD",
    "counterparty": addresses.VALID
  },
  "source_slippage": "0",
  "destination_account": addresses.COUNTERPARTY,
  "destination_tag": "",
  "destination_amount": {
    "value": "10",
    "currency": "USD",
    "counterparty": addresses.VALID
  },
  "invoice_id": "",
  "paths": "[]",
  "partial_payment": false,
  "no_direct_ripple": false
};

module.exports.paymentTx = {
  tx_json: {
    Flags: 0,
    TransactionType: 'Payment',
    Account: addresses.VALID,
    Amount: {
      value: '0.001',
      currency: 'USD',
      issuer: addresses.COUNTERPARTY
    },
    Destination: addresses.COUNTERPARTY
  },
  clientID: undefined,
  submittedIDs: [ ],
  submissionAttempts: 0,
  submitIndex: undefined,
  initialSubmitIndex: undefined,
  lastLedgerSequence: undefined,
  state: 'unsubmitted',
  server: undefined,
  finalized: false
};

module.exports.paymentTxXRP = {
  tx_json: {
    Flags: 0,
    TransactionType: 'Payment',
    Account: addresses.VALID,
    Amount: '1000000',
    Destination: addresses.COUNTERPARTY
  },
  clientID: undefined,
  submittedIDs: [ ],
  submissionAttempts: 0,
  submitIndex: undefined,
  initialSubmitIndex: undefined,
  lastLedgerSequence: undefined,
  state: 'unsubmitted',
  server: undefined,
  finalized: false
};

module.exports.paymentTxComplex = {
  tx_json: {
    Flags: 0,
    TransactionType: 'Payment',
    Account: addresses.VALID,
    Amount: {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID
    },
    Destination: addresses.COUNTERPARTY
  },
  clientID: undefined,
  submittedIDs: [ ],
  submissionAttempts: 0,
  submitIndex: undefined,
  initialSubmitIndex: undefined,
  lastLedgerSequence: undefined,
  state: 'unsubmitted',
  server: undefined,
  finalized: false
};

module.exports.exportsPaymentRestIssuers = function(options) {

  options = options || {};
  _.defaults(options, {
    sourceAccount: addresses.VALID,
    destinationAccount: addresses.COUNTERPARTY,
    sourceIssuer: addresses.VALID,
    destinationIssuer: addresses.COUNTERPARTY,
    sourceSlippage: '0',
    sourceValue: '10'
  });

  return {
    source_account: options.sourceAccount,
    source_tag: '',
    source_amount: {
      value: options.sourceValue,
      currency: 'USD',
      counterparty: options.sourceIssuer
    },
    source_slippage: options.sourceSlippage,
    destination_account: options.destinationAccount,
    destination_tag: '',
    destination_amount: {
      value: '10',
      currency: 'USD',
      counterparty: options.destinationIssuer
    },
    invoice_id: '',
    paths: '[]',
    partial_payment: false,
    no_direct_ripple: false
  }

};
