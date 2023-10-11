export interface KiboOrder {
  orderNumber?:                                 number;
  locationCode?:                                string;
  version?:                                     string;
  parentOrderId?:                               string;
  parentOrderNumber?:                           number;
  parentCheckoutId?:                            string;
  parentCheckoutNumber?:                        number;
  partialOrderNumber?:                          number;
  partialOrderCount?:                           number;
  isPartialOrder?:                              boolean;
  parentReturnId?:                              string;
  parentReturnNumber?:                          number;
  originalCartId?:                              string;
  originalQuoteId?:                             string;
  originalQuoteNumber?:                         number;
  priceListCode?:                               string;
  availableActions?:                            string[];
  shopperNotes?:                                ShopperNotes;
  customerAccountId?:                           number;
  customerTaxId?:                               string;
  isTaxExempt?:                                 boolean;
  email?:                                       string;
  alternateContact?:                            AlternateContact;
  ipAddress?:                                   string;
  sourceDevice?:                                string;
  acceptsMarketing?:                            boolean;
  status?:                                      string;
  type?:                                        string;
  paymentStatus?:                               string;
  returnStatus?:                                string;
  isEligibleForReturns?:                        boolean;
  totalCollected?:                              number;
  attributes?:                                  Attribute[];
  adjustment?:                                  Adjustment;
  shippingAdjustment?:                          Adjustment;
  handlingAdjustment?:                          Adjustment;
  shippingDiscounts?:                           KiboOrderShippingDiscount[];
  handlingDiscounts?:                           HandlingDiscountElement[];
  handlingAmount?:                              number;
  handlingSubTotal?:                            number;
  handlingTotal?:                               number;
  dutyAmount?:                                  number;
  dutyTotal?:                                   number;
  fulfillmentStatus?:                           string;
  isFulfillable?:                               boolean;
  submittedDate?:                               Date;
  shipmentCreationOffset?:                      number;
  releaseShipmentDate?:                         Date;
  cancelledDate?:                               Date;
  closedDate?:                                  Date;
  acceptedDate?:                                Date;
  notes?:                                       Note[];
  items?:                                       KiboOrderItem[];
  validationResults?:                           ValidationResult[];
  billingInfo?:                                 BillingInfo;
  payments?:                                    Payment[];
  refunds?:                                     Refund[];
  credits?:                                     Credit[];
  packages?:                                    Package[];
  pickups?:                                     DigitalPackage[];
  digitalPackages?:                             DigitalPackage[];
  shipments?:                                   Shipment[];
  isDraft?:                                     boolean;
  hasDraft?:                                    boolean;
  isImport?:                                    boolean;
  isHistoricalImport?:                          boolean;
  importDate?:                                  Date;
  isUnified?:                                   boolean;
  externalId?:                                  string;
  couponCodes?:                                 string[];
  invalidCoupons?:                              InvalidCoupon[];
  amountAvailableForRefund?:                    number;
  amountRemainingForPayment?:                   number;
  amountRefunded?:                              number;
  readyToCapture?:                              boolean;
  isOptInForSms?:                               boolean;
  subscriptionIds?:                             string[];
  continuityOrderOrdinal?:                      number;
  reservationId?:                               string;
  restrictEdit?:                                boolean;
  restrictCancellation?:                        boolean;
  userId?:                                      string;
  id?:                                          string;
  tenantId?:                                    number;
  siteId?:                                      number;
  channelCode?:                                 string;
  currencyCode?:                                string;
  visitId?:                                     string;
  webSessionId?:                                string;
  customerInteractionType?:                     string;
  fulfillmentInfo?:                             FulfillmentInfo;
  orderDiscounts?:                              HandlingDiscountElement[];
  suggestedDiscounts?:                          TedDiscount[];
  rejectedDiscounts?:                           TedDiscount[];
  subtotal?:                                    number;
  discountedSubtotal?:                          number;
  discountTotal?:                               number;
  discountedTotal?:                             number;
  shippingTotal?:                               number;
  shippingSubTotal?:                            number;
  shippingTaxTotal?:                            number;
  handlingTaxTotal?:                            number;
  itemTaxTotal?:                                number;
  taxTotal?:                                    number;
  feeTotal?:                                    number;
  total?:                                       number;
  lineItemSubtotalWithOrderAdjustments?:        number;
  shippingAmountBeforeDiscountsAndAdjustments?: number;
  lastValidationDate?:                          Date;
  expirationDate?:                              Date;
  changeMessages?:                              ChangeMessage[];
  extendedProperties?:                          ExtendedProperty[];
  discountThresholdMessages?:                   DiscountThresholdMessage[];
  auditInfo?:                                   AuditInfo;
}

export interface Adjustment {
  amount?:          number;
  description?:     string;
  internalComment?: string;
}

export interface AlternateContact {
  firstName?:         string;
  lastNameOrSurname?: string;
  emailAddress?:      string;
  phoneNumber?:       string;
  email?:             string;
}

export interface Attribute {
  auditInfo?:             AuditInfo;
  fullyQualifiedName?:    string;
  attributeDefinitionId?: number;
}

export interface AuditInfo {
  updateDate?: Date;
  createDate?: Date;
  updateBy?:   string;
  createBy?:   string;
}

export interface BillingInfo {
  paymentType?:                  string;
  paymentWorkflow?:              string;
  billingContact?:               BillingContact;
  isSameBillingShippingAddress?: boolean;
  card?:                         Card;
  token?:                        Token;
  purchaseOrder?:                PurchaseOrder;
  check?:                        Check;
  auditInfo?:                    AuditInfo;
  storeCreditCode?:              string;
  storeCreditType?:              string;
  customCreditType?:             string;
  externalTransactionId?:        string;
  isRecurring?:                  boolean;
  recurringTransactionId?:       string;
}

export interface BillingContact {
  id?:                    number;
  email?:                 string;
  firstName?:             string;
  middleNameOrInitial?:   string;
  lastNameOrSurname?:     string;
  companyOrOrganization?: string;
  phoneNumbers?:          PhoneNumbers;
  address?:               Address;
}

export interface Address {
  address1?:        string;
  address2?:        string;
  address3?:        string;
  address4?:        string;
  cityOrTown?:      string;
  stateOrProvince?: string;
  postalOrZipCode?: string;
  countryCode?:     string;
  addressType?:     string;
  isValidated?:     boolean;
}

export interface PhoneNumbers {
  home?:   string;
  mobile?: string;
  work?:   string;
}

export interface Card {
  paymentServiceCardId?: string;
  isUsedRecurring?:      boolean;
  nameOnCard?:           string;
  isCardInfoSaved?:      boolean;
  isTokenized?:          boolean;
  ccLastFour?:           string;
  paymentOrCardType?:    string;
  cardNumberPartOrMask?: string;
  expireMonth?:          number;
  expireYear?:           number;
  bin?:                  string;
}

export interface Check {
  checkNumber?: string;
}

export interface PurchaseOrder {
  purchaseOrderNumber?: string;
  paymentTerm?:         PaymentTerm;
  customFields?:        CustomField[];
}

export interface CustomField {
  code?:  string;
  label?: string;
  value?: string;
}

export interface PaymentTerm {
  code?:        string;
  description?: string;
}

export interface Token {
  paymentServiceTokenId?: string;
  type?:                  string;
}

export interface ChangeMessage {
  id?:            string;
  correlationId?: string;
  userId?:        string;
  userFirstName?: string;
  userLastName?:  string;
  userScopeType?: string;
  appId?:         string;
  appKey?:        string;
  appName?:       string;
  subjectType?:   string;
  success?:       boolean;
  identifier?:    string;
  subject?:       string;
  verb?:          string;
  message?:       string;
  createDate?:    Date;
}

export interface Credit {
  id?:                         string;
  parentPaymentId?:            string;
  parentPaymentInteractionId?: string;
  amount?:                     number;
  giftCard?:                   GiftCard;
  auditInfo?:                  AuditInfo;
}

export interface GiftCard {
  id?:           string;
  cardNumber?:   string;
  cardPin?:      string;
  amount?:       number;
  currencyCode?: string;
}

export interface DigitalPackage {
  id?:                      string;
  code?:                    string;
  status?:                  string;
  items?:                   DigitalPackageItem[];
  fulfillmentDate?:         Date;
  fulfillmentLocationCode?: string;
  auditInfo?:               AuditInfo;
  availableActions?:        string[];
  changeMessages?:          ChangeMessage[];
}

export interface DigitalPackageItem {
  giftCardCode?:        string;
  productCode?:         string;
  quantity?:            number;
  fulfillmentItemType?: string;
  lineId?:              number;
  optionAttributeFQN?:  string;
}

export interface DiscountThresholdMessage {
  discountId?:         number;
  message?:            string;
  thresholdValue?:     number;
  showOnCheckout?:     boolean;
  showInCart?:         boolean;
  requiresCouponCode?: boolean;
}

export interface ExtendedProperty {
  key?:   string;
  value?: string;
}

export interface FulfillmentInfo {
  fulfillmentContact?:      BillingContact;
  isDestinationCommercial?: boolean;
  shippingMethodCode?:      string;
  shippingMethodName?:      string;
  auditInfo?:               AuditInfo;
}

export interface HandlingDiscountElement {
  impact?:     number;
  discount?:   HandlingDiscountDiscount;
  couponCode?: string;
  excluded?:   boolean;
}

export interface HandlingDiscountDiscount {
  id?:                        number;
  name?:                      string;
  itemIds?:                   string[];
  expirationDate?:            Date;
  hasMultipleTargetProducts?: boolean;
}

export interface InvalidCoupon {
  couponCode?: string;
  reasonCode?: number;
  reason?:     string;
  createDate?: Date;
  discountId?: number;
}

export interface KiboOrderItem {
  id?:                                          string;
  destinationId?:                               string;
  originalCartItemId?:                          string;
  fulfillmentLocationCode?:                     string;
  fulfillmentMethod?:                           string;
  dutyAmount?:                                  number;
  expectedDeliveryDate?:                        Date;
  subscription?:                                Subscription;
  isReservationEnabled?:                        boolean;
  localeCode?:                                  string;
  purchaseLocation?:                            string;
  lineId?:                                      number;
  product?:                                     Product;
  quantity?:                                    number;
  isRecurring?:                                 boolean;
  isTaxable?:                                   boolean;
  subtotal?:                                    number;
  extendedTotal?:                               number;
  taxableTotal?:                                number;
  discountTotal?:                               number;
  discountedTotal?:                             number;
  itemTaxTotal?:                                number;
  shippingTaxTotal?:                            number;
  shippingTotal?:                               number;
  handlingAmount?:                              number;
  feeTotal?:                                    number;
  total?:                                       number;
  unitPrice?:                                   UnitPrice;
  productDiscount?:                             ProductDiscount;
  productDiscounts?:                            ProductDiscount[];
  shippingDiscounts?:                           ItemShippingDiscount[];
  auditInfo?:                                   AuditInfo;
  shippingAmountBeforeDiscountsAndAdjustments?: number;
  weightedOrderAdjustment?:                     number;
  weightedOrderDiscount?:                       number;
  adjustedLineItemSubtotal?:                    number;
  totalWithoutWeightedShippingAndHandling?:     number;
  weightedOrderTax?:                            number;
  weightedOrderShipping?:                       number;
  weightedOrderShippingDiscount?:               number;
  weightedOrderShippingManualAdjustment?:       number;
  weightedOrderShippingTax?:                    number;
  weightedOrderHandlingFee?:                    number;
  weightedOrderHandlingFeeTax?:                 number;
  weightedOrderHandlingFeeDiscount?:            number;
  weightedOrderDuty?:                           number;
  totalWithWeightedShippingAndHandling?:        number;
  weightedOrderHandlingAdjustment?:             number;
  autoAddDiscountId?:                           number;
  isAssemblyRequired?:                          boolean;
  childItemIds?:                                string[];
  parentItemId?:                                string;
  inventoryTags?:                               InventoryTag[];
  lineItemAdjustment?:                          number;
}

export interface InventoryTag {
  name?:  string;
  value?: string;
}

export interface Product {
  mfgPartNumber?:                string;
  upc?:                          string;
  sku?:                          string;
  fulfillmentTypesSupported?:    string[];
  imageAlternateText?:           string;
  imageUrl?:                     string;
  variationProductCode?:         string;
  options?:                      Option[];
  properties?:                   Property[];
  categories?:                   Category[];
  price?:                        Price;
  discountsRestricted?:          boolean;
  discountsRestrictedStartDate?: Date;
  discountsRestrictedEndDate?:   Date;
  isRecurring?:                  boolean;
  isTaxable?:                    boolean;
  productType?:                  string;
  productUsage?:                 string;
  bundledProducts?:              BundledProduct[];
  fulfillmentFields?:            FulfillmentField[];
  productCode?:                  string;
  name?:                         string;
  description?:                  string;
  goodsType?:                    string;
  isPackagedStandAlone?:         boolean;
  stock?:                        Stock;
  productReservationId?:         number;
  allocationId?:                 number;
  allocationExpiration?:         Date;
  measurements?:                 Measurements;
  fulfillmentStatus?:            string;
}

export interface BundledProduct {
  quantity?:             number;
  optionAttributeFQN?:   string;
  creditValue?:          number;
  deltaPrice?:           number;
  imageUrl?:             string;
  productCode?:          string;
  name?:                 string;
  description?:          string;
  goodsType?:            string;
  isPackagedStandAlone?: boolean;
  stock?:                Stock;
  productReservationId?: number;
  allocationId?:         number;
  allocationExpiration?: Date;
  measurements?:         Measurements;
  fulfillmentStatus?:    string;
}

export interface Measurements {
  height?: Frequency;
  width?:  Frequency;
  length?: Frequency;
  weight?: Frequency;
}

export interface Frequency {
  unit?:  string;
  value?: number;
}

export interface Stock {
  manageStock?:        boolean;
  isOnBackOrder?:      boolean;
  availableDate?:      Date;
  stockAvailable?:     number;
  aggregateInventory?: number;
  futureInventories?:  FutureInventory[];
  isSubstitutable?:    boolean;
}

export interface FutureInventory {
  futureInventoryID?: number;
  onhand?:            number;
  available?:         number;
  allocated?:         number;
  pending?:           number;
  deliveryDate?:      Date;
  createDate?:        Date;
}

export interface Category {
  id?: number;
}

export interface FulfillmentField {
  name?:     string;
  required?: boolean;
}

export interface Option {
  name?:         string;
  attributeFQN?: string;
  dataType?:     string;
  stringValue?:  string;
}

export interface Price {
  price?:               number;
  salePrice?:           number;
  tenantOverridePrice?: number;
  msrp?:                number;
  creditValue?:         number;
  priceListCode?:       string;
  priceListEntryMode?:  string;
}

export interface Property {
  attributeFQN?: string;
  name?:         string;
  dataType?:     string;
  isMultiValue?: boolean;
  values?:       Value[];
}

export interface Value {
  stringValue?: string;
}

export interface ProductDiscount {
  appliesToSalePrice?: boolean;
  discountQuantity?:   number;
  impact?:             number;
  discount?:           HandlingDiscountDiscount;
  couponCode?:         string;
  excluded?:           boolean;
}

export interface ItemShippingDiscount {
  methodCode?:       string;
  discount?:         HandlingDiscountElement;
  discountQuantity?: number;
  impactPerUnit?:    number;
}

export interface Subscription {
  required?:  boolean;
  frequency?: Frequency;
  trial?:     Trial;
}

export interface Trial {
  enabled?:                        boolean;
  duration?:                       number;
  substituteProductCode?:          string;
  substituteProductQuantity?:      number;
  substituteVariationProductCode?: string;
  substituteProductOptions?:       Option[];
}

export interface UnitPrice {
  extendedAmount?: number;
  listAmount?:     number;
  saleAmount?:     number;
  overrideAmount?: number;
}

export interface Note {
  id?:        string;
  text?:      string;
  auditInfo?: AuditInfo;
}

export interface Package {
  shippingMethodCode?:      string;
  shippingMethodName?:      string;
  shipmentId?:              string;
  trackingNumber?:          string;
  trackingNumbers?:         string[];
  packagingType?:           string;
  hasLabel?:                boolean;
  measurements?:            Measurements;
  carrier?:                 string;
  signatureRequired?:       boolean;
  trackings?:               Tracking[];
  packingSlipItemDetails?:  PackingSlipItemDetail[];
  packingSlipNumber?:       number;
  returnTrackings?:         Tracking[];
  returnTrackingNumbers?:   string[];
  returnCarrier?:           string;
  packageId?:               string;
  manifestId?:              string;
  labelFormat?:             string;
  integratorId?:            string;
  fxcbPackNotificationId?:  string;
  fxcbDocumentsUrl?:        string;
  id?:                      string;
  code?:                    string;
  status?:                  string;
  items?:                   DigitalPackageItem[];
  fulfillmentDate?:         Date;
  fulfillmentLocationCode?: string;
  auditInfo?:               AuditInfo;
  availableActions?:        string[];
  changeMessages?:          ChangeMessage[];
}

export interface PackingSlipItemDetail {
  lineId?:              number;
  originalOrderItemId?: string;
  quantity?:            number;
}

export interface Tracking {
  number?: string;
  url?:    string;
}

export interface Payment {
  id?:                          string;
  groupId?:                     GroupID;
  paymentServiceTransactionId?: string;
  availableActions?:            string[];
  orderId?:                     string;
  paymentType?:                 string;
  paymentWorkflow?:             string;
  externalTransactionId?:       string;
  billingInfo?:                 BillingInfo;
  status?:                      string;
  subPayments?:                 SubPayment[];
  interactions?:                Interaction[];
  isRecurring?:                 boolean;
  amountCollected?:             number;
  amountCredited?:              number;
  amountRequested?:             number;
  changeMessages?:              ChangeMessage[];
  auditInfo?:                   AuditInfo;
  gatewayGiftCard?:             GiftCard;
  installmentPlanCode?:         string;
}

export interface GroupID {
  targetType?:   string;
  targetId?:     string;
  targetNumber?: number;
}

export interface Interaction {
  id?:                                       string;
  gatewayInteractionId?:                     number;
  paymentId?:                                string;
  orderId?:                                  string;
  target?:                                   GroupID;
  currencyCode?:                             string;
  interactionType?:                          string;
  checkNumber?:                              string;
  status?:                                   string;
  paymentEntryStatus?:                       string;
  isRecurring?:                              boolean;
  isManual?:                                 boolean;
  gatewayTransactionId?:                     string;
  gatewayAuthCode?:                          string;
  gatewayAVSCodes?:                          string;
  gatewayCVV2Codes?:                         string;
  gatewayResponseCode?:                      string;
  gatewayResponseText?:                      string;
  gatewayResponseData?:                      ExtendedProperty[];
  paymentTransactionInteractionIdReference?: number;
  amount?:                                   number;
  note?:                                     string;
  interactionDate?:                          Date;
  auditInfo?:                                AuditInfo;
  returnId?:                                 string;
  refundId?:                                 string;
  capturableShipmentsSummary?:               CapturableShipmentsSummary[];
}

export interface CapturableShipmentsSummary {
  shipmentNumber?: number;
  shipmentTotal?:  number;
  amountApplied?:  number;
}

export interface SubPayment {
  status?:          string;
  amountCollected?: number;
  amountCredited?:  number;
  amountRequested?: number;
  amountRefunded?:  number;
  target?:          GroupID;
}

export interface Refund {
  id?:           string;
  orderId?:      string;
  reason?:       string;
  reasonCode?:   string;
  payment?:      Payment;
  amount?:       number;
  refundMethod?: string;
  auditInfo?:    AuditInfo;
}

export interface TedDiscount {
  productCode?:         string;
  autoAdd?:             boolean;
  discountId?:          number;
  hasMultipleProducts?: boolean;
  hasOptions?:          boolean;
}

export interface Shipment {
  id?:                         string;
  externalShipmentId?:         string;
  number?:                     number;
  orderId?:                    string;
  orderNumber?:                number;
  email?:                      string;
  currencyCode?:               string;
  customerAccountId?:          number;
  shipmentType?:               string;
  shippingMethodCode?:         string;
  shippingMethodName?:         string;
  fulfillmentLocationCode?:    string;
  origin?:                     BillingContact;
  destination?:                Destination;
  shipmentStatus?:             string;
  shipmentStatusReason?:       Reason;
  transferShipmentNumbers?:    number[];
  isTransfer?:                 boolean;
  originalShipmentNumber?:     number;
  parentCheckoutNumber?:       number;
  parentShipmentNumber?:       number;
  fulfillmentStatus?:          string;
  workflowProcessId?:          string;
  workflowProcessContainerId?: string;
  workflowState?:              WorkflowState;
  backorderCreatedDate?:       number;
  fulfillmentDate?:            Date;
  futureDate?:                 Date;
  orderSubmitDate?:            Date;
  pickStatus?:                 string;
  pickType?:                   string;
  changeMessages?:             ChangeMessage[];
  packages?:                   Package[];
  items?:                      CanceledItemElement[];
  canceledItems?:              CanceledItemElement[];
  auditInfo?:                  AuditInfo;
  shipmentAdjustment?:         number;
  lineItemSubtotal?:           number;
  lineItemTaxAdjustment?:      number;
  lineItemTaxTotal?:           number;
  lineItemTotal?:              number;
  shippingAdjustment?:         number;
  shippingSubtotal?:           number;
  shippingTaxAdjustment?:      number;
  shippingTaxTotal?:           number;
  shippingTotal?:              number;
  handlingAdjustment?:         number;
  handlingSubtotal?:           number;
  handlingTaxAdjustment?:      number;
  handlingTaxTotal?:           number;
  handlingTotal?:              number;
  dutyAdjustment?:             number;
  dutyTotal?:                  number;
  total?:                      number;
  cost?:                       number;
  externalOrderId?:            string;
  isExpress?:                  boolean;
  readyToCapture?:             boolean;
  shopperNotes?:               ShopperNotes;
  customer?:                   Customer;
  shipmentNotes?:              ShipmentNote[];
  alternateContact?:           AlternateContact;
  substitutedItems?:           SubstitutedItem[];
}

export interface CanceledItemElement {
  originalQuantity?:              number;
  canceledReason?:                CanceledReason;
  auditInfo?:                     AuditInfo;
  lineId?:                        number;
  originalOrderItemId?:           string;
  parentId?:                      string;
  productCode?:                   string;
  variationProductCode?:          string;
  optionAttributeFQN?:            string;
  name?:                          string;
  fulfillmentLocationCode?:       string;
  imageUrl?:                      string;
  isTaxable?:                     boolean;
  quantity?:                      number;
  unitPrice?:                     number;
  actualPrice?:                   number;
  overridePrice?:                 number;
  itemDiscount?:                  number;
  lineItemCost?:                  number;
  itemTax?:                       number;
  shipping?:                      number;
  shippingDiscount?:              number;
  shippingTax?:                   number;
  handling?:                      number;
  handlingDiscount?:              number;
  handlingTax?:                   number;
  duty?:                          number;
  isPackagedStandAlone?:          boolean;
  readyForPickupQuantity?:        number;
  backorderReleaseDate?:          Date;
  measurements?:                  Measurements;
  options?:                       Option[];
  weightedShipmentAdjustment?:    number;
  weightedLineItemTaxAdjustment?: number;
  weightedShippingAdjustment?:    number;
  weightedShippingTaxAdjustment?: number;
  weightedHandlingAdjustment?:    number;
  weightedHandlingTaxAdjustment?: number;
  weightedDutyAdjustment?:        number;
  taxableShipping?:               number;
  taxableLineItemCost?:           number;
  taxableHandling?:               number;
  fulfillmentFields?:             FulfillmentField[];
  isAssemblyRequired?:            boolean;
  parentItemId?:                  string;
  childItemIds?:                  string[];
  giftCards?:                     GiftCardElement[];
  locatorName?:                   string;
  inventoryTags?:                 InventoryTag[];
  lineItemAdjustment?:            number;
  isReservedInventory?:           boolean;
  cartItemId?:                    string;
  sku?:                           string;
  partNumber?:                    string;
  upc?:                           string;
  isSubstitutable?:               boolean;
  originalLineId?:                number;
  substituteQuantity?:            number;
}

export interface CanceledReason {
  reasonCode?:  string;
  description?: string;
  moreInfo?:    string;
}

export interface GiftCardElement {
  activationDate?: Date;
  cardNumber?:     string;
  code?:           string;
  creditType?:     string;
  creditValue?:    number;
  currencyCode?:   string;
  currentBalance?: number;
  customerId?:     number;
  expirationDate?: Date;
  initialBalance?: number;
}

export interface Customer {
  customerContact?:         BillingContact;
  isDestinationCommercial?: boolean;
}

export interface Destination {
  id?:                      string;
  destinationContact?:      BillingContact;
  isDestinationCommercial?: boolean;
}

export interface ShipmentNote {
  auditInfo?: AuditInfo;
  noteId?:    string;
  noteText?:  string;
  role?:      string;
  username?:  string;
}

export interface Reason {
  reasonCode?: string;
  moreInfo?:   string;
}

export interface ShopperNotes {
  comments?:             string;
  deliveryInstructions?: string;
  giftMessage?:          string;
}

export interface SubstitutedItem {
  actualPrice?:                   number;
  allocatedQuantity?:             number;
  allowsBackOrder?:               boolean;
  allowsFutureAllocate?:          boolean;
  allowsSubstitution?:            boolean;
  appeasementReason?:             Reason;
  auditInfo?:                     AuditInfo;
  backorderReleaseDate?:          Date;
  cartItemId?:                    string;
  childItemIds?:                  string[];
  creditCurrencyCode?:            string;
  creditValue?:                   number;
  duty?:                          number;
  expectedDeliveryDate?:          Date;
  fulfillmentFields?:             FulfillmentField[];
  giftCards?:                     GiftCardElement[];
  goodsType?:                     string;
  handling?:                      number;
  handlingDiscount?:              number;
  handlingTax?:                   number;
  height?:                        number;
  imageUrl?:                      string;
  inventoryTags?:                 InventoryTag[];
  isAssemblyRequired?:            boolean;
  isPackagedStandAlone?:          boolean;
  isReservedInventory?:           boolean;
  isTaxable?:                     boolean;
  itemDiscount?:                  number;
  itemTax?:                       number;
  length?:                        number;
  lineId?:                        number;
  lineItemAdjustment?:            number;
  lineItemCost?:                  number;
  locatorName?:                   string;
  manageStock?:                   boolean;
  name?:                          string;
  optionAttributeFQN?:            string;
  options?:                       Option[];
  originalLineId?:                number;
  originalOrderItemId?:           string;
  originalQuantity?:              number;
  overridePrice?:                 number;
  parentItemId?:                  string;
  partNumber?:                    string;
  productCode?:                   string;
  quantity?:                      number;
  readyForPickupQuantity?:        number;
  shipping?:                      number;
  shippingDiscount?:              number;
  shippingTax?:                   number;
  sku?:                           string;
  substituteItemLineIds?:         number[];
  substituteQuantity?:            number;
  substituteReason?:              Reason;
  taxableHandling?:               number;
  taxableLineItemCost?:           number;
  taxableShipping?:               number;
  transferQuantity?:              number;
  trueTransferQuantity?:          number;
  unitPrice?:                     number;
  upc?:                           string;
  variationProductCode?:          string;
  weight?:                        number;
  weightUnit?:                    string;
  weightedDutyAdjustment?:        number;
  weightedHandlingAdjustment?:    number;
  weightedHandlingTaxAdjustment?: number;
  weightedLineItemTaxAdjustment?: number;
  weightedShipmentAdjustment?:    number;
  weightedShippingAdjustment?:    number;
  weightedShippingTaxAdjustment?: number;
  width?:                         number;
}

export interface WorkflowState {
  auditInfo?:         AuditInfo;
  completedDate?:     Date;
  processInstanceId?: string;
  shipmentState?:     string;
  taskList?:          TaskList[];
}

export interface TaskList {
  links?:         Links;
  active?:        boolean;
  completed?:     boolean;
  completedDate?: Date;
  description?:   string;
  inputs?:        Input[];
  name?:          string;
  skippable?:     boolean;
  subject?:       string;
  taskId?:        string;
}

export interface Input {
  helpMessage?: string;
  label?:       string;
  maxLength?:   number;
  maximum?:     number;
  minLength?:   number;
  minimum?:     number;
  name?:        string;
  pattern?:     string;
  required?:    boolean;
  type?:        string;
}

export interface Links {
  additionalProp?: AdditionalProp;
}

export interface AdditionalProp {
  deprecation?: string;
  href?:        string;
  hreflang?:    string;
  media?:       string;
  rel?:         string;
  templated?:   boolean;
  title?:       string;
  type?:        string;
}

export interface KiboOrderShippingDiscount {
  methodCode?: string;
  discount?:   HandlingDiscountElement;
}

export interface ValidationResult {
  validationId?:  string;
  validatorName?: string;
  validatorType?: string;
  status?:        string;
  createdDate?:   Date;
  messages?:      Message[];
}

export interface Message {
  orderItemId?: string;
  messageType?: string;
  message?:     string;
}
