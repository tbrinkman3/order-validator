import SchemaGenerator from '../src/schemaGenerator'
import { mockOrders } from '../__mocks__/mockOrders'

const mockSchema = {
  type: "object",
  properties: {
    items: {type: "array", items: {
      type: "object",
      properties: {
        quantity: {type: "number"},
        product: {
          type: "object",
          properties: {
            productCode: {type: "string"}
          },
          required: ["productCode"],
          additionalProperties: true
        }
      },
      required: ["quantity", "product"],
    }},
    billingInfo: {
      type: "object",
      properties: {
        billingContact: {
          type: "object",
          properties: {
            email: {type: "string"}
          },
          required: ["email"],
          additionalProperties: true
        }
      },
      required: ["billingContact"],
      additionalProperties: true
    },
    isImport: {type: "boolean"},
    fulfillmentInfo: {
      type: "object",
      properties: {
        fulfillmentContact: {
          type: "object",
          properties: {
            firstName: {type: "string"},
            lastNameOrSurname: {type: "string"},
            phoneNumbers: {
              type: "object",
              properties: {
                home: {type: "string"}
              },
              required: ["home"],
              additionalProperties: true
            },
            address: {
              type: "object",
              properties: {
                address1: {type: "string"},
                cityOrTown: {type: "string"},
                stateOrProvince: {type: "string"},
                postalOrZipCode: {type: "string"},
                countryCode: {type: "string"},
              },
              required: ["address1", "cityOrTown", "stateOrProvince", "postalOrZipCode", "countryCode"],
              additionalProperties: true
            }
          },
          required: ["firstName", "lastNameOrSurname", "phoneNumbers", "address"],
          additionalProperties: true
        },
        shippingMethodCode: {type: "string"}
      },
      required: ["fulfillmentContact", "shippingMethodCode"],
      additionalProperties: true
    },

  },
  required: [ "items", "billingInfo", "isImport", "fulfillmentInfo"],
  additionalProperties: true
}
describe('SchemaGenerator Tests', () => {
  it('Generates accurate schema', () => {
    const generator = new SchemaGenerator(mockOrders.basicOrder);

    const generatedSchema = generator.generateSchema()

    expect(JSON.stringify(generatedSchema, null, 2)).toEqual(JSON.stringify(mockSchema, null, 2))
  })
})