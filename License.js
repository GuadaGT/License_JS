export function needsLicense(kind) {  
    return kind === 'car' || kind == 'truck';
      throw new Error('Please implement the needsLicense function');
  }
  
  export function chooseVehicle(option1, option2) {
    return (option1 > option2 ? option2 : option1) + " is clearly the better choice."
      throw new Error('Please implement the chooseVehicle function');
  }
  
  export function calculateResellPrice(originalPrice, age) {
    const discount = age < 3 ? 0.2 : age > 10 ? 0.5 : 0.3;
    return originalPrice * (1 - discount);
      throw new Error('Please implement the calculateResellPrice function');
  }