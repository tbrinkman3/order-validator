import Ajv, { JSONSchemaType } from "ajv"
import { KiboOrder } from "./types"

class CreateOrderAnalyzer {
  orderJSON: KiboOrder

  constructor(orderJSON: KiboOrder) {
    this.orderJSON = orderJSON
  }

  analyze(schema:any){
    // validate is a type guard for MyData - type is inferred from schema type
    const ajv = new Ajv()
    const validate = ajv.compile(schema)

    if (validate(this.orderJSON)) {
      // data is MyData here
      return
    } else {
      if(validate.errors){
        return validate.errors
      }
    }
  }



}

export default CreateOrderAnalyzer;