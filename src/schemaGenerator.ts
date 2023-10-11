import { KiboOrder } from "./types";

function generateSchema(json:KiboOrder){
  console.log(json)
}

class SchemaGenerator {
  orderJSON: KiboOrder

  constructor(orderJSON: KiboOrder) {
    this.orderJSON = orderJSON
  }

  generateSchema() {
    return generateSchema(this.orderJSON)
  }



}

export default SchemaGenerator;