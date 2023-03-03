
sap.ui.define([], function () {
	"use strict";
	return {
    persentCalculate: function(value,value2){
      let persantage = 0;
      try{
        persantage = (value2/value)*100;
      }
      catch{
        persantage = 100;
      }
      return Math.round(persantage)
    },
    progressState: function(value,value2){
      let persantage = 0;
      try{
        persantage = (value2/value)*100;
      }
      catch{
        persantage = 100;
      }
      persantage = Math.round(persantage);
      if(persantage === 100){
        return "Success"
      }
      else return "None"
    },
	};
});