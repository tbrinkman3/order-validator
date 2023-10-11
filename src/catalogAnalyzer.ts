import winston from "winston";
import * as fs from "node:fs";
import csv from "csv-parser";
import { AttributeValue, Attributes, DataType, DataTypeValue } from "./types";

class CatalogAnalyzer {
  path: string;
  logger: winston.Logger;

  constructor(path: string, logger: winston.Logger) {
    this.path = path;
    this.logger = logger;
  }
  //TODO: message or object
  log(message: any) {
    this.logger.info(message);
  }
  fomatJSON(json: any, format: string | undefined) {
    if (format == "attributes") {
      //TODO: declate this?
      const store: { [key: string]: string } = {};

      //TODO: how to dynamically assing then?
      json.forEach((attr: any) => {
        const key: string = attr.AttributeCode;
        if (key) {
          store[key] = attr;
        }
      });

      return store;
    } else {
      return json;
    }
  }

  matchDataType(
    attrValDataType: DataType,
    attrDataType: DataType,
    row: number,
  ) {
    if (attrValDataType !== attrDataType) {
      //TODO: figure out logger here
      this.log({
        row: row,
        message: `invalid data type ${attrValDataType} - ${attrDataType}. ROW - ${row}`,
      });
    }
  }

  matchNameSpace(
    attrValNamespace: string,
    attrNamespace: string,
    row: number,
  ) {
    if (attrValNamespace !== attrNamespace) {
      this.log({ row: row, message: "namespace mismatch. ROW - " + row });
    }
  }

  scrubValue(value: string, row: number) {
    const onlyValidChars = /[^a-zA-Z0-9\\.\\/-]/g;
    //TODO: check for valid return characters, check windows vs mac carriage returns
    if (onlyValidChars.test(value)) {
      this.log({
        row: row,
        message: `remove invalid characters, no space of special characters - ${value}. ROW -${row}`,
      });
    }
  }

  validateValueDataType(
    attrValDataType: DataType,
    attrValValue: DataTypeValue,
    row: number,
  ) {
    if (attrValDataType == "String" && typeof attrValValue !== "string") {
      this.log({
        row: row,
        message: `data type string does not match the input: ${attrValDataType} - ${typeof attrValValue}. ROW ${row}`,
      });
    }
    if (attrValDataType == "Number" && typeof attrValValue !== "number") {
      if (/[^0-9]/.test(attrValValue)) {
        this.log({
          row: row,
          message: `data type number does not match the input - [${attrValDataType},${attrValValue}, ${typeof attrValValue}]. ROW - ${row}`,
        });
      }
    }
    if (attrValDataType == "Bool" && typeof attrValValue !== "boolean") {
      this.log({
        row: row,
        message: "data type boolean does not match the input. ROW - " + row,
      });
    }
  }

  async parseFile(filePath: string, validationFunc?: any, writeFile?: boolean) {
    const name = filePath.split("/").pop()?.replace(".csv", "") || "UHOH";

    //TODO: need config fo this, not always this type
    const results: Attributes[] = [];

    return new Promise((resolve, reject) => {
      let row = 1;
      fs.createReadStream(filePath)
        .on("error", () => {
          //TODO: better messageing
          console.log("Error streaming csv");
          reject("Error streaming file");
        })
        .pipe(csv())
        .on("data", (data) => {
          //TODO: how do we pass dynamic funcs to this
          row++;
          if (validationFunc) validationFunc(data, name, row);
          if (writeFile) results.push(data);
        })
        .on("end", () => {
          if (writeFile) {
            //TODO: error handling func
            fs.writeFileSync(
              `./tmp/${name}.json`,
              JSON.stringify(this.fomatJSON(results, name), null, 2),
            );
          }
          resolve("Done");
        });
    });
  }

  async csvToJSON(filePath: string) {
    //TODO: enforce all? how do we handle not including all headers?
    //TODO: while we parse we can check for empty fields or invalid characters... some fields can be empty... how do we diferentiate which ones are and which are not
    //TODO: check for dupes.... how
    //TODO: need dynamic type here match the file name

    //TODO: if contains the name values.... ignore? seems like not the greatest idea

    console.log("writing file");
    await this.parseFile(filePath, null, true);
  }

  validationBuilder(jsonFileType: string) {
    //TODO: data will need a different type
    return (data: AttributeValue, fileName: string, row: number) => {
      winston.loggers.add(fileName, {
        level: process.env.LOG_LEVEL || "info",
        defaultMeta: {
          file: fileName,
        },
        format: winston.format.json(),
        transports: [
          new winston.transports.File({
            filename: "./output/output.log",
          }),
        ],
      });

      const instanceLogger = winston.loggers.get(fileName);
      const attributes = JSON.parse(
        fs.readFileSync(`./tmp/${jsonFileType}.json`, { encoding: "utf-8" }),
      );
      try {
        //TODO: type

        const code = data.AttributeCode;
        const match = attributes[code];

        if (match) {
          //match data type
          this.matchDataType(
            data.DataType,
            match.DataType,
            row,
          );
          //match namespace
          this.matchNameSpace(
            data.Namespace,
            match.Namespace,
            row,
          );
          //make sure value has no spaces or crazy characters
          this.scrubValue(data.Value, row);
          //match datatype to value
          this.validateValueDataType(
            data.DataType,
            data.Value,
            row,
          );
        } else {
          instanceLogger.info({
            row: row,
            message: `no match, attribute not created, log data for this attribute ${code}.`,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
  }

  async analyze() {
    const files = fs.readdirSync(this.path as fs.PathLike);
    const dir = "./tmp";

    this.log(`Reading from ${this.path}`);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    for (const file of files) {
      //TODO: error handling, fail to write
      this.log(`Converting ${file} to JSON`);

      //TODO: really only need to do this for attribute files
      await this.csvToJSON(this.path + file);
    }

    this.log(`Scrubbing files`);

    await this.parseFile(
      `${this.path}/attributevalues.csv`,
      this.validationBuilder("attributes"),
      false,
    );

    //TODO: same as above for product type attribute and their values

    fs.rmSync(dir, { recursive: true, force: true });
  }
}

export default CatalogAnalyzer;
