/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    let index; //index of the unit
    //get the unit
    const unit = this.getUnit(input);
    //if the unit is invalid
    if(unit === 'invalid number'){
      //search backwards from the end to find the last number
      for(let i = input.length-1; i >= 0; i++){
        //if the character is a number
        if(!isNaN(input[i])){
          index = i + 1;
        }
      }
    }
    
    return result;
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
    return 'invalid number';
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
