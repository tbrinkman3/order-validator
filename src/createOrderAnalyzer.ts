import winston from "winston";
import * as fs from "node:fs";
import csv from "csv-parser";
import { AttributeValue, Attributes, DataType, DataTypeValue } from "./types";


class CreateOrderAnalyzer {
  orderJSON: CreateOrderJSON
  logger: winston.Logger;

  constructor(orderJSON: string, logger: winston.Logger) {
    this.orderJSON = orderJSON
    this.logger = logger
  }
  //TODO: message or object
  log(message: any) {
    this.logger.info(message);
  }

  async analyze(){

  }


}

export default CreateOrderAnalyzer;