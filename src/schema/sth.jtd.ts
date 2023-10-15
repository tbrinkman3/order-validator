const ShipToHomeOrderSchema = {
  "properties": {
    "amountAvailableForRefund": {
      "type": "float32"
    },
    "amountRefunded": {
      "type": "float32"
    },
    "amountRemainingForPayment": {
      "type": "float32"
    },
    "billingInfo": {
      "properties": {
        "billingContact": {
          "properties": {
            "address": {
              "properties": {
                "address1": {
                  "type": "string"
                },
                "addressType": {
                  "type": "string"
                },
                "cityOrTown": {
                  "type": "string"
                },
                "countryCode": {
                  "type": "string"
                },
                "isValidated": {
                  "type": "boolean"
                },
                "postalOrZipCode": {
                  "type": "string"
                },
                "stateOrProvince": {
                  "type": "string"
                }
              }
            },
            "email": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastNameOrSurname": {
              "type": "string"
            },
            "middleNameOrInitial": {
              "type": "string"
            },
            "phoneNumbers": {
              "properties": {
                "home": {
                  "type": "string"
                },
                "mobile": {
                  "type": "string"
                },
                "work": {
                  "type": "string"
                }
              }
            }
          }
        },
        "paymentType": {
          "type": "string"
        }
      }
    },
    "channelCode": {
      "type": "string"
    },
    "currencyCode": {
      "type": "string"
    },
    "customerAccountId": {
      "type": "uint16"
    },
    "email": {
      "type": "string"
    },
    "externalId": {
      "type": "string"
    },
    "fulfillmentInfo": {
      "properties": {
        "fulfillmentContact": {
          "properties": {
            "address": {
              "properties": {
                "address1": {
                  "type": "string"
                },
                "address2": {
                  "type": "string"
                },
                "addressType": {
                  "type": "string"
                },
                "cityOrTown": {
                  "type": "string"
                },
                "countryCode": {
                  "type": "string"
                },
                "isValidated": {
                  "type": "boolean"
                },
                "postalOrZipCode": {
                  "type": "string"
                },
                "stateOrProvince": {
                  "type": "string"
                }
              }
            },
            "email": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastNameOrSurname": {
              "type": "string"
            },
            "middleNameOrInitial": {
              "type": "string"
            },
            "phoneNumbers": {
              "properties": {
                "home": {
                  "type": "string"
                },
                "mobile": {
                  "type": "string"
                },
                "work": {
                  "type": "string"
                }
              }
            }
          }
        },
        "shippingMethodCode": {
          "type": "string"
        },
        "shippingMethodName": {
          "type": "string"
        }
      }
    },
    "isImport": {
      "type": "boolean"
    },
    "isTaxExempt": {
      "type": "boolean"
    },
    "itemTaxTotal": {
      "type": "float32"
    },
    "items": {
      "elements": {
        "properties": {
          "fulfillmentMethod": {
            "type": "string"
          },
          "itemTaxTotal": {
            "type": "float32"
          },
          "lineId": {
            "type": "uint8"
          },
          "product": {
            "properties": {
              "description": {
                "type": "string"
              },
              "goodsType": {
                "type": "string"
              },
              "imageUrl": {
                "type": "string"
              },
              "isPackagedStandAlone": {
                "type": "boolean"
              },
              "name": {
                "type": "string"
              },
              "price": {
                "properties": {
                  "price": {
                    "type": "float32"
                  }
                }
              },
              "productCode": {
                "type": "string"
              }
            }
          },
          "quantity": {
            "type": "uint8"
          },
          "shippingTotal": {
            "type": "float32"
          },
          "subtotal": {
            "type": "float32"
          },
          "total": {
            "type": "float32"
          }
        }
      }
    },
    "originalCartId": {
      "type": "string"
    },
    "payments": {
      "elements": {
        "properties": {
          "amountCollected": {
            "type": "float32"
          },
          "amountCredited": {
            "type": "float32"
          },
          "amountRequested": {
            "type": "float32"
          },
          "billingInfo": {
            "properties": {
              "billingContact": {
                "properties": {
                  "address": {
                    "properties": {
                      "address1": {
                        "type": "string"
                      },
                      "address2": {
                        "type": "string"
                      },
                      "addressType": {
                        "type": "string"
                      },
                      "cityOrTown": {
                        "type": "string"
                      },
                      "countryCode": {
                        "type": "string"
                      },
                      "isValidated": {
                        "type": "boolean"
                      },
                      "postalOrZipCode": {
                        "type": "string"
                      },
                      "stateOrProvince": {
                        "type": "string"
                      }
                    }
                  },
                  "email": {
                    "type": "string"
                  },
                  "firstName": {
                    "type": "string"
                  },
                  "lastNameOrSurname": {
                    "type": "string"
                  },
                  "middleNameOrInitial": {
                    "type": "string"
                  }
                }
              },
              "card": {
                "properties": {
                  "cardNumberPartOrMask": {
                    "type": "string"
                  },
                  "expireMonth": {
                    "type": "uint8"
                  },
                  "expireYear": {
                    "type": "uint16"
                  },
                  "isCardInfoSaved": {
                    "type": "boolean"
                  },
                  "isTokenized": {
                    "type": "boolean"
                  },
                  "isUsedRecurring": {
                    "type": "boolean"
                  },
                  "nameOnCard": {
                    "type": "string"
                  },
                  "paymentOrCardType": {
                    "type": "string"
                  },
                  "paymentServiceCardId": {
                    "type": "string"
                  }
                }
              },
              "isSameBillingShippingAddress": {
                "type": "boolean"
              },
              "paymentType": {
                "type": "string"
              }
            }
          },
          "changeMessages": {
            "elements": {}
          },
          "interactions": {
            "elements": {
              "properties": {
                "amount": {
                  "type": "float32"
                },
                "currencyCode": {
                  "type": "string"
                },
                "gatewayAVSCodes": {
                  "type": "string"
                },
                "gatewayAuthCode": {
                  "type": "string"
                },
                "gatewayCVV2Codes": {
                  "type": "string"
                },
                "gatewayResponseCode": {
                  "type": "string"
                },
                "gatewayResponseData": {
                  "elements": {}
                },
                "gatewayResponseText": {
                  "type": "string"
                },
                "gatewayTransactionId": {
                  "type": "string"
                },
                "id": {
                  "type": "string"
                },
                "interactionDate": {
                  "type": "timestamp"
                },
                "interactionType": {
                  "type": "string"
                },
                "isManual": {
                  "type": "boolean"
                },
                "isRecurring": {
                  "type": "boolean"
                },
                "paymentEntryStatus": {
                  "type": "string"
                },
                "paymentId": {
                  "type": "string"
                },
                "status": {
                  "type": "string"
                }
              }
            }
          },
          "isRecurring": {
            "type": "boolean"
          },
          "paymentType": {
            "type": "string"
          },
          "paymentWorkflow": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        }
      }
    },
    "shippingTotal": {
      "type": "float32"
    },
    "status": {
      "type": "string"
    },
    "subtotal": {
      "type": "float32"
    },
    "taxTotal": {
      "type": "float32"
    },
    "total": {
      "type": "float32"
    },
    "type": {
      "type": "string"
    }
  }
} as const

export default ShipToHomeOrderSchema