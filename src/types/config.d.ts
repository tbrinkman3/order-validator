export interface ValidatorConfiguration {
  orderType: OrderType
}

export type OrderType = "BASIC" | "SHIP_TO_HOME"
