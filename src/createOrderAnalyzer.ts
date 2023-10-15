import Ajv from "ajv/dist/jtd"
import { KiboOrder } from "./types"
import { JTDDataType } from "ajv/dist/jtd";
import * as Schema from './schema'
import { OrderType, ValidatorConfiguration } from "./types/config";

type OrderValidationSchema =
JTDDataType<typeof Schema.BasicOrderSchema> |
JTDDataType<typeof Schema.ShipToHomeOrderSchema>;

type AnalyzeOptions = {
  orderType?: OrderType
}

class CreateOrderAnalyzer {
  orderJSON: KiboOrder
  config: ValidatorConfiguration

  constructor(orderJSON: KiboOrder, config:ValidatorConfiguration) {
    this.orderJSON = orderJSON
    this.config = config
  }

  getSchema(orderType:OrderType){
    if(orderType == "SHIP_TO_HOME"){
      return Schema.ShipToHomeOrderSchema
    } else {
      return Schema.BasicOrderSchema
    }
  }

  //TODO: figure out how to type this
  analyze(options?:AnalyzeOptions){
    // validate is a type guard for MyData - type is inferred from schema type
    const ajv = new Ajv()
    //TODO: figure out mapping for selecting the import file

    const orderType = options?.orderType ? options.orderType : this.config.orderType

    const schema = this.getSchema(orderType)
    const validate = ajv.compile<OrderValidationSchema>(schema)

    if (validate(this.orderJSON)) {
      // data is MyData here
      console.log('ALL GOOD');
      return this.orderJSON
    } else {
      if(validate.errors){
        console.log(validate.errors)
        return validate.errors
      }
    }
  }



}

export default CreateOrderAnalyzer;