const BasicOrderSchema = {
  "properties": {
    "billingInfo": {
      "properties": {
        "billingContact": {
          "properties": {
            "email": {
              "type": "string"
            }
          }
        }
      }
    },
    "fulfillmentInfo": {
      "properties": {
        "fulfillmentContact": {
          "properties": {
            "address": {
              "properties": {
                "address1": {
                  "type": "string"
                },
                "cityOrTown": {
                  "type": "string"
                },
                "countryCode": {
                  "type": "string"
                },
                "postalOrZipCode": {
                  "type": "string"
                },
                "stateOrProvince": {
                  "type": "string"
                }
              }
            },
            "firstName": {
              "type": "string"
            },
            "lastNameOrSurname": {
              "type": "string"
            },
            "phoneNumbers": {
              "properties": {
                "home": {
                  "type": "string"
                }
              }
            }
          }
        },
        "shippingMethodCode": {
          "type": "string"
        }
      }
    },
    "isImport": {
      "type": "boolean"
    },
    "items": {
      "elements": {
        "properties": {
          "product": {
            "properties": {
              "productCode": {
                "type": "string"
              }
            }
          },
          "quantity": {
            "type": "uint8"
          }
        }
      }
    }
  }
} as const

export default BasicOrderSchema