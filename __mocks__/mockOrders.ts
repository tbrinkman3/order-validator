export const mockOrders = {
  basicOrder: {
    "items": [
        {
            "quantity": 1,
            "product": {
                "productCode": "UPC99"
            }
        }
    ],
    "billingInfo": {
        "billingContact": {
            "email": "6767-9947@yopmail.com"
        }
    },
    "isImport": true,
    "fulfillmentInfo": {
        "fulfillmentContact": {
            "firstName": "Bob",
            "lastNameOrSurname": "Ross",
            "phoneNumbers": {
                "home": "7707707700"
            },
            "address": {
                "address1": "111 Paintbrush Ln",
                "cityOrTown": "Atlanta",
                "stateOrProvince": "GA",
                "postalOrZipCode": "30534",
                "countryCode": "US"
            }
        },
        "shippingMethodCode": "fedex_FEDEX_GROUND"
    }
  },
  sthOrder: {
    "channelCode": "Online",
    "customerAccountId": 1000,
    "externalId": "{{$timestamp}}",
    "isTaxExempt": false,
    "originalCartId": "test",
    "email": "loulemouhejoi-9947@yopmail.com",
    "status": "Accepted",
    "type": "Online",
    "items": [
        {
            "fulfillmentMethod": "Ship",
            "lineId": 1,
            "quantity": 1,
            "subtotal": 10,
            "itemTaxTotal": 2,
            "shippingTotal": 3,
            "total": 15,
            "product": {
                "imageUrl": "//cdn-sb.mozu.com/30248-50433/cms/50433/files/cf9cfdae-3df3-4bc8-a1c8-4a7272481729",
                "price": {
                    "price": 10.00
                },
                "productCode": "UPC1",
                "name": "Cool Headphones",
                "description": "Wireless Headphones",
                "goodsType": "Physical",
                "isPackagedStandAlone": false
            }
        }
    ],
    "billingInfo": {
        "paymentType": "CreditCard",
        "billingContact": {
            "email": "loulemouhejoi-9947@yopmail.com",
            "firstName": "Bob",
            "middleNameOrInitial": "",
            "lastNameOrSurname": "Ross",
            "phoneNumbers": {
                "home": "7704012014",
                "mobile": "7704012014",
                "work": "7704012014"
            },
            "address": {
                "address1": "111 Paintrbush Ln",
                "cityOrTown": "Atlanta",
                "stateOrProvince": "GA",
                "postalOrZipCode": "30534",
                "countryCode": "US",
                "addressType": "Residential",
                "isValidated": false
            }
        }
    },
    "payments": [
        {
            "paymentType": "CreditCard",
            "paymentWorkflow": "Mozu",
            "billingInfo": {
                "paymentType": "CreditCard",
                "billingContact": {
                    "email": "loulemouhejoi-9947@yopmail.com",
                    "firstName": "Bob",
                    "middleNameOrInitial": "",
                    "lastNameOrSurname": "Ross",
                    "address": {
                        "address1": "111 Paintbrush Ln",
                        "address2": "",
                        "cityOrTown": "Atlanta",
                        "stateOrProvince": "GA",
                        "postalOrZipCode": "30534",
                        "countryCode": "US",
                        "addressType": "Residential",
                        "isValidated": false
                    }
                },
                "isSameBillingShippingAddress": false,
                "card": {
                    "paymentServiceCardId": "111111111111111111111111",
                    "isUsedRecurring": false,
                    "nameOnCard": "Bob Ross",
                    "isCardInfoSaved": false,
                    "paymentOrCardType": "MC",
                    "cardNumberPartOrMask": "************1111",
                    "isTokenized": true,
                    "expireMonth": 12,
                    "expireYear": 2030
                }
            },
            "status": "Authorized",
            "interactions": [
                {
                    "id": "6bd4038ee13f467388b1acca013b1655",
                    "paymentId": "660106470015320210",
                    "currencyCode": "CAD",
                    "interactionType": "Authorization",
                    "status": "New",
                    "paymentEntryStatus": "New",
                    "isRecurring": false,
                    "isManual": false,
                    "gatewayTransactionId": "660106470015320210",
                    "gatewayAuthCode": "104353",
                    "gatewayAVSCodes": "null",
                    "gatewayCVV2Codes": "",
                    "gatewayResponseCode": "025",
                    "gatewayResponseText": "APPROVED",
                    "gatewayResponseData": [],
                    "amount": 15.00,
                    "interactionDate": new Date('2021-02-09T14:07:09.000Z')
                }
            ],
            "isRecurring": false,
            "amountCollected": 0,
            "amountCredited": 0,
            "amountRequested": 15.00,
            "changeMessages": []
        }
    ],
    "isImport": true,
    "amountAvailableForRefund": 15.00,
    "amountRemainingForPayment": 0.00,
    "amountRefunded": 0,
    "currencyCode": "CAD",
    "fulfillmentInfo": {
        "fulfillmentContact": {
            "email": "loulemouhejoi-9947@yopmail.com",
            "firstName": "Bob",
            "middleNameOrInitial": "",
            "lastNameOrSurname": "Ross",
            "phoneNumbers": {
                "home": "7704012014",
                "mobile": "7704012014",
                "work": "7704012014"
            },
            "address": {
                "address1": "111 Paintbrush Ln",
                "address2": "",
                "cityOrTown": "Atlanta",
                "stateOrProvince": "GA",
                "postalOrZipCode": "30534",
                "countryCode": "US",
                "addressType": "Residential",
                "isValidated": false
            }
        },
        "shippingMethodCode": "fedex_FEDEX_GROUND",
        "shippingMethodName": "STANDARD"
    },
    "subtotal": 10.00,
    "shippingTotal": 3.00,
    "itemTaxTotal": 2.00,
    "taxTotal": 2.00,
    "total": 15.00
  }
}