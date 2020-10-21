const calculateBill = (price, vat, tip) => {
  if (typeof price !== 'number' 
     || typeof vat !== 'number' 
     || typeof tip !== 'number') {
     return "error"
  } else {
    return `£${price + vat + tip}`
  }
}

module.exports =  calculateBill

