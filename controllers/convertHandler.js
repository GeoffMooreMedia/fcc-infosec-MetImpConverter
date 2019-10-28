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
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
