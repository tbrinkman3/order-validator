import { mockOrders } from "../__mocks__/mockOrders";
import * as Schemas from "../src/schema"
import CreateOrderAnalyzer from "../src/createOrderAnalyzer"

describe('Basic Order Tests', () => {
  it('validates basic order payload',  () => {
    const analyzer = new CreateOrderAnalyzer(mockOrders.basicOrder)

    expect(analyzer.analyze(Schemas.BasicOrderSchema)).toBeFalsy()

  })
})
