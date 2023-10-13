import CreateOrderAnalyzer from "./createOrderAnalyzer"
import { KiboOrder } from "./types"

import * as Schemas from './schema'

const orderJSON:KiboOrder = {
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
}
const analyzer = new CreateOrderAnalyzer(orderJSON)

analyzer.analyze(Schemas.BasicOrderSchema)



