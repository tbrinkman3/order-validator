
import {JSONSchemaType} from "ajv"

const BasicOrderSchema: JSONSchemaType<BasicOrder> = {
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
          additionalProperties: false
        }
      },
      required: ["quantity", "product"],
    }},
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
    billingInfo: {
      type: "object",
      properties: {
        billingContact: {
          type: "object",
          properties: {
            email: {type: "string"}
          },
          required: ["email"],
          additionalProperties: false
        }
      },
      required: ["billingContact"]
    }
  },
  required: [ "isImport", "items", "billingInfo", "fulfillmentInfo"],
  additionalProperties: false
}

export default BasicOrderSchema



export interface BasicOrder {
  items:           Item[];
  billingInfo:     BillingInfo;
  isImport:        boolean;
  fulfillmentInfo: FulfillmentInfo;
}

export interface BillingInfo {
  billingContact: BillingContact;
}

export interface BillingContact {
  email: string;
}

export interface FulfillmentInfo {
  fulfillmentContact: FulfillmentContact;
  shippingMethodCode: string;
}

export interface FulfillmentContact {
  firstName:         string;
  lastNameOrSurname: string;
  phoneNumbers:      PhoneNumbers;
  address:           Address;
}

export interface Address {
  address1:        string;
  cityOrTown:      string;
  stateOrProvince: string;
  postalOrZipCode: string;
  countryCode:     string;
}

export interface PhoneNumbers {
  home: string;
}

export interface Item {
  quantity: number;
  product:  Product;
}

export interface Product {
  productCode: string;
}