import Ajv from "ajv"
import * as Schemas from "./schema"
import { KiboOrder } from "./types"
import SchemaGenerator from "./schemaGenerator"
const ajv = new Ajv()

// validate is a type guard for MyData - type is inferred from schema type
//const validate = ajv.compile(Schemas.BasicOrderSchema)

const data:KiboOrder = {
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

const generator = new SchemaGenerator(data)

generator.generateSchema()

// if (validate(data)) {
//   // data is MyData here
//   console.log('ALL GOOD')
// } else {
//   console.log(validate.errors)
// }


