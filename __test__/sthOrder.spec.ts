import { mockOrders } from "../__mocks__/mockOrders";
import * as Schemas from "../src/schema"
import CreateOrderAnalyzer from "../src/createOrderAnalyzer"

describe('Ship to Home Order Tests', () => {
  it('validates STH order payload',  () => {
    const analyzer = new CreateOrderAnalyzer(mockOrders.sthOrder)

    expect(analyzer.analyze(Schemas.STHOrderSchema)).toBeFalsy()

  })
})
