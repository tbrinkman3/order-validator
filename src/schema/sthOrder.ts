import {JSONSchemaType} from "ajv"

const STHOrderSchema= {
  "type": "object",
  "properties": {
    "channelCode": {
      "type": "string"
    },
    "customerAccountId": {
      "type": "number"
    },
    "externalId": {
      "type": "string"
    },
    "isTaxExempt": {
      "type": "boolean"
    },
    "email": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "fulfillmentMethod": {
            "type": "string"
          },
          "lineId": {
            "type": "number"
          },
          "quantity": {
            "type": "number"
          },
          "subtotal": {
            "type": "number"
          },
          "itemTaxTotal": {
            "type": "number"
          },
          "shippingTotal": {
            "type": "number"
          },
          "total": {
            "type": "number"
          },
          "product": {
            "type": "object",
            "properties": {
              "imageUrl": {
                "type": "string"
              },
              "price": {
                "type": "object",
                "properties": {
                  "price": {
                    "type": "number"
                  }
                },
                "required": [
                  "price"
                ],
                "additionalProperties": true
              },
              "productCode": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "goodsType": {
                "type": "string"
              },
              "isPackagedStandAlone": {
                "type": "boolean"
              }
            },
            "required": [
              "imageUrl",
              "price",
              "productCode",
              "name",
              "description",
              "goodsType",
              "isPackagedStandAlone"
            ],
            "additionalProperties": true
          }
        },
        "required": [
          "fulfillmentMethod",
          "lineId",
          "quantity",
          "subtotal",
          "itemTaxTotal",
          "shippingTotal",
          "total",
          "product"
        ]
      }
    },
    "billingInfo": {
      "type": "object",
      "properties": {
        "paymentType": {
          "type": "string"
        },
        "billingContact": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "middleNameOrInitial": {
              "type": "string"
            },
            "lastNameOrSurname": {
              "type": "string"
            },
            "phoneNumbers": {
              "type": "object",
              "properties": {
                "home": {
                  "type": "string"
                },
                "mobile": {
                  "type": "string"
                },
                "work": {
                  "type": "string"
                }
              },
              "required": [
                "home",
                "mobile",
                "work"
              ],
              "additionalProperties": true
            },
            "address": {
              "type": "object",
              "properties": {
                "address1": {
                  "type": "string"
                },
                "cityOrTown": {
                  "type": "string"
                },
                "stateOrProvince": {
                  "type": "string"
                },
                "postalOrZipCode": {
                  "type": "string"
                },
                "countryCode": {
                  "type": "string"
                },
                "addressType": {
                  "type": "string"
                },
                "isValidated": {
                  "type": "boolean"
                }
              },
              "required": [
                "address1",
                "cityOrTown",
                "stateOrProvince",
                "postalOrZipCode",
                "countryCode",
                "addressType",
                "isValidated"
              ],
              "additionalProperties": true
            }
          },
          "required": [
            "email",
            "firstName",
            "middleNameOrInitial",
            "lastNameOrSurname",
            "phoneNumbers",
            "address"
          ],
          "additionalProperties": true
        }
      },
      "required": [
        "paymentType",
        "billingContact"
      ],
      "additionalProperties": true
    },
    "payments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "paymentType": {
            "type": "string"
          },
          "paymentWorkflow": {
            "type": "string"
          },
          "billingInfo": {
            "type": "object",
            "properties": {
              "paymentType": {
                "type": "string"
              },
              "billingContact": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string"
                  },
                  "firstName": {
                    "type": "string"
                  },
                  "middleNameOrInitial": {
                    "type": "string"
                  },
                  "lastNameOrSurname": {
                    "type": "string"
                  },
                  "address": {
                    "type": "object",
                    "properties": {
                      "address1": {
                        "type": "string"
                      },
                      "address2": {
                        "type": "string"
                      },
                      "cityOrTown": {
                        "type": "string"
                      },
                      "stateOrProvince": {
                        "type": "string"
                      },
                      "postalOrZipCode": {
                        "type": "string"
                      },
                      "countryCode": {
                        "type": "string"
                      },
                      "addressType": {
                        "type": "string"
                      },
                      "isValidated": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "address1",
                      "address2",
                      "cityOrTown",
                      "stateOrProvince",
                      "postalOrZipCode",
                      "countryCode",
                      "addressType",
                      "isValidated"
                    ],
                    "additionalProperties": true
                  }
                },
                "required": [
                  "email",
                  "firstName",
                  "middleNameOrInitial",
                  "lastNameOrSurname",
                  "address"
                ],
                "additionalProperties": true
              },
              "isSameBillingShippingAddress": {
                "type": "boolean"
              },
              "card": {
                "type": "object",
                "properties": {
                  "paymentServiceCardId": {
                    "type": "string"
                  },
                  "isUsedRecurring": {
                    "type": "boolean"
                  },
                  "nameOnCard": {
                    "type": "string"
                  },
                  "isCardInfoSaved": {
                    "type": "boolean"
                  },
                  "paymentOrCardType": {
                    "type": "string"
                  },
                  "cardNumberPartOrMask": {
                    "type": "string"
                  },
                  "isTokenized": {
                    "type": "boolean"
                  },
                  "expireMonth": {
                    "type": "number"
                  },
                  "expireYear": {
                    "type": "number"
                  }
                },
                "required": [
                  "paymentServiceCardId",
                  "isUsedRecurring",
                  "nameOnCard",
                  "isCardInfoSaved",
                  "paymentOrCardType",
                  "cardNumberPartOrMask",
                  "isTokenized",
                  "expireMonth",
                  "expireYear"
                ],
                "additionalProperties": true
              }
            },
            "required": [
              "paymentType",
              "billingContact",
              "isSameBillingShippingAddress",
              "card"
            ],
            "additionalProperties": true
          },
          "status": {
            "type": "string"
          },
          "interactions": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "paymentId": {
                  "type": "string"
                },
                "currencyCode": {
                  "type": "string"
                },
                "interactionType": {
                  "type": "string"
                },
                "status": {
                  "type": "string"
                },
                "paymentEntryStatus": {
                  "type": "string"
                },
                "isRecurring": {
                  "type": "boolean"
                },
                "isManual": {
                  "type": "boolean"
                },
                "gatewayTransactionId": {
                  "type": "string"
                },
                "gatewayAuthCode": {
                  "type": "string"
                },
                "gatewayAVSCodes": {
                  "type": "string"
                },
                "gatewayCVV2Codes": {
                  "type": "string"
                },
                "gatewayResponseCode": {
                  "type": "string"
                },
                "gatewayResponseText": {
                  "type": "string"
                },
                "gatewayResponseData": {
                  "type": "array",
                  "items": {}
                },
                "amount": {
                  "type": "number"
                },
                "interactionDate": {
                  "type": "object",
                  "properties": {},
                  "required": [],
                  "additionalProperties": true
                }
              },
              "required": [
                "id",
                "paymentId",
                "currencyCode",
                "interactionType",
                "status",
                "paymentEntryStatus",
                "isRecurring",
                "isManual",
                "gatewayTransactionId",
                "gatewayAuthCode",
                "gatewayAVSCodes",
                "gatewayCVV2Codes",
                "gatewayResponseCode",
                "gatewayResponseText",
                "gatewayResponseData",
                "amount",
                "interactionDate"
              ]
            }
          },
          "isRecurring": {
            "type": "boolean"
          },
          "amountCollected": {
            "type": "number"
          },
          "amountCredited": {
            "type": "number"
          },
          "amountRequested": {
            "type": "number"
          },
          "changeMessages": {
            "type": "array",
            "items": {}
          }
        },
        "required": [
          "paymentType",
          "paymentWorkflow",
          "billingInfo",
          "status",
          "interactions",
          "isRecurring",
          "amountCollected",
          "amountCredited",
          "amountRequested",
          "changeMessages"
        ]
      }
    },
    "isImport": {
      "type": "boolean"
    },
    "amountAvailableForRefund": {
      "type": "number"
    },
    "amountRemainingForPayment": {
      "type": "number"
    },
    "amountRefunded": {
      "type": "number"
    },
    "currencyCode": {
      "type": "string"
    },
    "fulfillmentInfo": {
      "type": "object",
      "properties": {
        "fulfillmentContact": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "middleNameOrInitial": {
              "type": "string"
            },
            "lastNameOrSurname": {
              "type": "string"
            },
            "phoneNumbers": {
              "type": "object",
              "properties": {
                "home": {
                  "type": "string"
                },
                "mobile": {
                  "type": "string"
                },
                "work": {
                  "type": "string"
                }
              },
              "required": [
                "home",
                "mobile",
                "work"
              ],
              "additionalProperties": true
            },
            "address": {
              "type": "object",
              "properties": {
                "address1": {
                  "type": "string"
                },
                "address2": {
                  "type": "string"
                },
                "cityOrTown": {
                  "type": "string"
                },
                "stateOrProvince": {
                  "type": "string"
                },
                "postalOrZipCode": {
                  "type": "string"
                },
                "countryCode": {
                  "type": "string"
                },
                "addressType": {
                  "type": "string"
                },
                "isValidated": {
                  "type": "boolean"
                }
              },
              "required": [
                "address1",
                "address2",
                "cityOrTown",
                "stateOrProvince",
                "postalOrZipCode",
                "countryCode",
                "addressType",
                "isValidated"
              ],
              "additionalProperties": true
            }
          },
          "required": [
            "email",
            "firstName",
            "middleNameOrInitial",
            "lastNameOrSurname",
            "phoneNumbers",
            "address"
          ],
          "additionalProperties": true
        },
        "shippingMethodCode": {
          "type": "string"
        },
        "shippingMethodName": {
          "type": "string"
        }
      },
      "required": [
        "fulfillmentContact",
        "shippingMethodCode",
        "shippingMethodName"
      ],
      "additionalProperties": true
    },
    "subtotal": {
      "type": "number"
    },
    "shippingTotal": {
      "type": "number"
    },
    "itemTaxTotal": {
      "type": "number"
    },
    "taxTotal": {
      "type": "number"
    },
    "total": {
      "type": "number"
    }
  },
  "required": [
    "channelCode",
    "customerAccountId",
    "externalId",
    "isTaxExempt",
    "email",
    "status",
    "type",
    "items",
    "billingInfo",
    "payments",
    "isImport",
    "amountAvailableForRefund",
    "amountRemainingForPayment",
    "amountRefunded",
    "currencyCode",
    "fulfillmentInfo",
    "subtotal",
    "shippingTotal",
    "itemTaxTotal",
    "taxTotal",
    "total"
  ],
  "additionalProperties": true
}

export default STHOrderSchema

export interface STHOrder {
  channelCode:               string;
  customerAccountId:         number;
  externalId:                string;
  isTaxExempt:               boolean;
  email:                     string;
  status:                    string;
  type:                      string;
  items:                     Item[];
  billingInfo:               STHOrderBillingInfo;
  payments:                  Payment[];
  isImport:                  boolean;
  amountAvailableForRefund:  number;
  amountRemainingForPayment: number;
  amountRefunded:            number;
  currencyCode:              string;
  fulfillmentInfo:           FulfillmentInfo;
  subtotal:                  number;
  shippingTotal:             number;
  itemTaxTotal:              number;
  taxTotal:                  number;
  total:                     number;
}

export interface STHOrderBillingInfo {
  paymentType:    string;
  billingContact: Contact;
}

export interface Contact {
  email:               string;
  firstName:           string;
  middleNameOrInitial: string;
  lastNameOrSurname:   string;
  phoneNumbers:       PhoneNumbers;
  address:             Address;
}

export interface Address {
  address1:        string;
  cityOrTown:      string;
  stateOrProvince: string;
  postalOrZipCode: string;
  countryCode:     string;
  addressType:     string;
  isValidated:     boolean;
}

export interface PhoneNumbers {
  home:   string;
  mobile: string;
  work:   string;
}

export interface FulfillmentInfo {
  fulfillmentContact: Contact;
  shippingMethodCode: string;
  shippingMethodName: string;
}

export interface Item {
  fulfillmentMethod: string;
  lineId:            number;
  quantity:          number;
  subtotal:          number;
  itemTaxTotal:      number;
  shippingTotal:     number;
  total:             number;
  product:           Product;
}

export interface Product {
  imageUrl:             string;
  price:                Price;
  productCode:          string;
  name:                 string;
  description:          string;
  goodsType:            string;
  isPackagedStandAlone: boolean;
}

export interface Price {
  price: number;
}

export interface Payment {
  paymentType:     string;
  paymentWorkflow: string;
  billingInfo:     PaymentBillingInfo;
  status:          string;
  interactions:    Interaction[];
  isRecurring:     boolean;
  amountCollected: number;
  amountCredited:  number;
  amountRequested: number;
  changeMessages:  any[];
}

export interface PaymentBillingInfo {
  paymentType:                  string;
  billingContact:               Contact;
  isSameBillingShippingAddress: boolean;
  card:                         Card;
}

export interface Card {
  paymentServiceCardId: string;
  isUsedRecurring:      boolean;
  nameOnCard:           string;
  isCardInfoSaved:      boolean;
  paymentOrCardType:    string;
  cardNumberPartOrMask: string;
  isTokenized:          boolean;
  expireMonth:          number;
  expireYear:           number;
}

export interface Interaction {
  id:                   string;
  paymentId:            string;
  currencyCode:         string;
  interactionType:      string;
  status:               string;
  paymentEntryStatus:   string;
  isRecurring:          boolean;
  isManual:             boolean;
  gatewayTransactionId: string;
  gatewayAuthCode:      string;
  gatewayAVSCodes:      string;
  gatewayCVV2Codes:     string;
  gatewayResponseCode:  string;
  gatewayResponseText:  string;
  gatewayResponseData:  any[];
  amount:               number;
  interactionDate:      Date;
}
