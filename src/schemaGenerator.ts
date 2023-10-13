import { KiboOrder } from "./types";


//TODO: what would these types look like
type SchemaItem = {
  type: string;
  additionalProperties: boolean;
  required: string[];
  properties: any;
  items?: any;
}

//TODO: how to define this type?
function generateSchema(json:any, key?:string){

  if(typeof json == 'object' && !Array.isArray(json)) {
    const schema:SchemaItem = {
      type: 'object',
      properties: {},
      required: Object.keys(json),
      additionalProperties: true,
    }

    for(const key in json){
      schema.properties[key] = generateSchema(json[key], key)
    }
    return schema
  } else {
    if(Array.isArray(json)){
      const schema:any = {
        type: 'array',
        items: {}
      }
      //TODO: multiple items with different elements?
      //TODO: which are required
      //TODO: they have to all follow the same structure

      //Need to know what is if the array

      //TODO: how do we check arrays that might have complex objects with varying fields that are all valid??

      if(typeof json[0] == 'object'){
        schema.items.type = 'object'
        schema.items.properties = {}
        schema.items.required = Object.keys(json[0])
      }
      for(const key in json[0]){
        schema.items.properties[key] = generateSchema(json[0][key], key)
      }

      return schema
    } else {
      const dataType = typeof json
      if(key){
        return {type: dataType}
      }

    }

  }
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