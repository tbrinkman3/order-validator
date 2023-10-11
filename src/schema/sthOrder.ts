import {JSONSchemaType} from "ajv"

const STHOrderSchema: JSONSchemaType<STHOrder> = {
  type: "object",
  properties: {
    channelCode: "string"
  },
  required: ["channelCode"],
  additionalProperties: false
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
  phoneNumbers?:       PhoneNumbers;
  address:             Address;
}

export interface Address {
  address1:        string;
  address2:        null | string;
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
  isSameBillingShippinBCddress: boolean;
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
