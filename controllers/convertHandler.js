/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let index = null; //index of the unit
    //get the unit
    const unit = this.getUnit(input);
    //if the unit is invalid
    if(unit === 'invalid unit'){
      //search backwards from the end to find the last number
      for(let i = input.length-1; i >= 0; i++){
        //if the character is a number
        if(!isNaN(input[i])){
          index = i + 1;
          break;
        }
      }
      //if no number was found
      if(!index)return 'invalid number';
    }
    else{
      //get the index of the unit
      index = input.indexOf(unit);
      //if no number was provided
      if(index === 0){
        return 1;//default to 1
      }
      //split off the number portion
      return input.slice(0,index);
    }
  };
  
  this.getUnit = function(input) {
    const units = ['gal','lbs','L','kg','km','mi'];
    //look for each unit in the string
    units.forEach(unit=>{
      //if the unit exists in the string
      if(input.indexOf(unit) >= 0){
        //return the unit
        return unit;
      }
    });
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    //switch for init unit
    switch(initUnit){
      case 'invalid unit':
        return initUnit;
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'L':
        return 'gal';
      case 'kg':
        return 'lbs';
      case 'km':
        return 'mi';
      case 'mi':
        return 'km';
    }
  };

  this.spellOutUnit = function(unit) {
    //switch for unit
    switch(unit){
      case 'invalid unit':
        return initUnit;
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'L':
        return 'liters';
      case 'kg':
        return 'kilograms';
      case 'km':
        return 'kilometers';
      case 'mi':
        return 'miles';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    //switch based on unit
    switch(initUnit){
      
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //check for invalid values
    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      return 'invalid unit and number';
    }
    else if(initUnit === 'invalid unit'){
      return 'invalid unit';
    }
    else if(initNum === 'invalid number'){
      return 'invalid number';
    }

    //convert the values
    return {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`};
  };
  
}

module.exports = ConvertHandler;
