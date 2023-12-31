import CreateOrderAnalyzer from "./createOrderAnalyzer"
import { KiboOrder } from "./types"
import { ValidatorConfiguration } from "./types/config"

const orderJSON:KiboOrder = {
  "items": [
      {
          "quantity": 1,
          "product": {
              "productCode": "UPC99",
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

function createConfig(): ValidatorConfiguration {
  return {
    orderType: "BASIC"
  }
}

function main() {
  const analyzer = new CreateOrderAnalyzer(orderJSON, createConfig())

  analyzer.analyze()

}

main()



