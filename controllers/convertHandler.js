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
