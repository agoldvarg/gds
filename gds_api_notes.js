// SABRE _______________________________________________________________
// Seatmap lookup by flight
// Works cross carrier
// https://api.test.sabre.com/v4.0.0/book/flights/seatmaps?mode=seatmaps
exampleRequestBody = {
  "EnhancedSeatMapRQ": {
    "SeatMapQueryEnhanced": {
      "RequestType": "Payload",
        "Flight": {
        "destination": "BNE",
          "origin": "LAX",
            "DepartureDate": {
          "content": "2017-08-01"
        },
        "ArrivalDate": {
          "content": "2017-08-01"
        },
        "Operating": {
          "carrier": "QF",
            "content": "16"
        },
        "Marketing": [{
          "carrier": "AA",
          "content": "7409"
        }]
      },
      "CabinDefinition": {
        "RBD": "Y"
      }
    }
  }
};

exampleResponseBody = {
  "EnhancedSeatMapRS": {
    "ApplicationResults": {
      "status": "Complete"
    },
    "SeatMap": [{
      "changeOfGaugeInd": false,
      "Equipment": "744",
      "Flight": {
        "destination": "BNE",
        "origin": "LAX",
        "DepartureDate": {
          "content": "2017-08-01"
        },
        "Operating": {
          "carrier": "AA",
          "content": "7409"
        },
        "Marketing": [{
          "carrier": "AA",
          "content": "7409"
        }]
      },
      "Cabin": [{
        "firstRow": 43,
        "lastRow": 56,
        "classLocation": "Maindeck",
        "seatOccupationDefault": "Free",
        "CabinClass": {
          "RBD": "Y"
        },
        "Row": [{
          "RowNumber": 43,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatWithBassinetFacility"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatWithBassinetFacility"
              }
            }]
          }, {
            "occupiedInd": true,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Occupation": [{
              "Detail": {
                "content": "SeatIsOccupied"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }]
        }, {
          "RowNumber": 44,
          "RowFacility": [{
            "Facility": [{
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }]
          }],
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "D",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "E",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "F",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "G",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }]
        }, {
          "RowNumber": 45,
          "Type": [{
            "content": "RowDoesNotExist"
          }]
        }, {
          "RowNumber": 46,
          "Type": [{
            "content": "ExitRow"
          }, {
            "content": "OverwingRow"
          }],
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }]
          }, {
            "occupiedInd": true,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Occupation": [{
              "Detail": {
                "content": "SeatIsOccupied"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }]
        }],
        "Wing": {
          "firstRow": 46,
          "lastRow": 50
        },
        "Column": [{
          "Column": "A",
          "Characteristics": ["Window"]
        }, {
          "Column": "B",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "C",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "D",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "E",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "F",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "G",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "H",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "J",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "K",
          "Characteristics": ["Window"]
        }],
        "CabinFacility": [{
          "Location": "Front",
          "Facility": [{
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "LeftSideSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "LeftSideSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "LeftSideSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "CenterSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "CenterSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "CenterSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "CenterSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "RightSideSection"
            }
          }, {
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "RightSideSection"
            }
          }]
        }, {
          "Location": "Front",
          "Facility": [{
            "Characteristics": {
              "content": "Bulkhead"
            },
            "Location": {
              "content": "RightSideSection"
            }
          }]
        }]
      }, {
        "firstRow": 58,
        "lastRow": 75,
        "classLocation": "Maindeck",
        "seatOccupationDefault": "Free",
        "CabinClass": {
          "RBD": "Y"
        },
        "Row": [{
          "RowNumber": 58,
          "Type": [{
            "content": "ExitRow"
          }],
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": true,
            "exitRowInd": true,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Location": [{
              "Detail": {
                "content": "ExitRowSeat"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "LegSpaceSeat"
              }
            }, {
              "Detail": {
                "content": "ChargeableSeat"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 59,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 60,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatWithBassinetFacility"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Occupation": [{
              "Detail": {
                "content": "SeatBlockedForOtherReason"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatWithBassinetFacility"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }]
        }, {
          "RowNumber": 61,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }]
        }, {
          "RowNumber": 62,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }]
        }, {
          "RowNumber": 63,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }],
            "Facilities": [{
              "Detail": {
                "content": "SeatSuitableForUnaccompaniedMinors"
              }
            }]
          }]
        }, {
          "RowNumber": 64,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }]
        }, {
          "RowNumber": 65,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Occupation": [{
              "Detail": {
                "content": "SeatForGroupPre-Allocation"
              }
            }]
          }]
        }, {
          "RowNumber": 66,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }]
        }, {
          "RowNumber": 67,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }]
        }, {
          "RowNumber": 68,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }]
        }, {
          "RowNumber": 69,
          "Seat": [{
            "occupiedInd": true,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatIsOccupied"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 70,
          "Seat": [{
            "occupiedInd": true,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Occupation": [{
              "Detail": {
                "content": "SeatIsOccupied"
              }
            }]
          }, {
            "occupiedInd": true,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Occupation": [{
              "Detail": {
                "content": "SeatIsOccupied"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 71,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D"
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 72,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }]
        }, {
          "RowNumber": 73,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "A",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "K",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "SeatToBeLeftVacant/OfferedLast"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }]
        }, {
          "RowNumber": 74,
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "D",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "E",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "F",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "G",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }, {
          "RowNumber": 75,
          "Type": [{
            "content": "ExitRow"
          }],
          "RowFacility": [{
            "Facility": [{
              "Characteristics": {
                "content": "Bulkhead"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Bulkhead"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Bulkhead"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Bulkhead"
              },
              "Location": {
                "content": "CenterSection"
              }
            }]
          }, {
            "Facility": [{
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }]
          }, {
            "Facility": [{
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "LeftSideSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }, {
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "CenterSection"
              }
            }]
          }, {
            "Facility": [{
              "Characteristics": {
                "content": "Lavatory"
              },
              "Location": {
                "content": "RightSideSection"
              }
            }]
          }],
          "Seat": [{
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "A",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "B",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "C",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "D",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "E",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "F",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": false,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": true,
            "noInfantInd": false,
            "Number": "G",
            "Limitations": [{
              "Detail": {
                "content": "RestrictedRecline"
              }
            }, {
              "Detail": {
                "content": "RestrictedGeneral"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "H",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "J",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }, {
            "occupiedInd": false,
            "inoperativeInd": true,
            "premiumInd": false,
            "chargeableInd": false,
            "exitRowInd": false,
            "restrictedReclineInd": false,
            "noInfantInd": false,
            "Number": "K",
            "Location": [{
              "Detail": {
                "content": "NoSeatAtThisLocation"
              }
            }]
          }]
        }],
        "Column": [{
          "Column": "A",
          "Characteristics": ["Window"]
        }, {
          "Column": "B",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "C",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "D",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "E",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "F",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "G",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "H",
          "Characteristics": ["Aisle"]
        }, {
          "Column": "J",
          "Characteristics": ["CenterSeat"]
        }, {
          "Column": "K",
          "Characteristics": ["Window"]
        }]
      }]
    }]
  },
  "Links": [{
    "rel": "self",
    "href": "https://api.test.sabre.com/v4.0.0/book/flights/seatmaps?mode=seatmaps"
  }, {
    "rel": "linkTemplate",
    "href": "https://api.test.sabre.com/<version>/book/flights/seatmaps?mode=<mode>"
  }]
}
