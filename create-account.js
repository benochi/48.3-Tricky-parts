function createAccount(pin, amount) {
  return {
    checkBalance(userPin){
      if (userPin !== pin) return "Invalid PIN.";
      return amount;
    },
    deposit(userPin, depositAmount){
      if(userPin !== pin) return "Invalid PIN.";
      amount += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
    },
    withdraw(userPin, withdrawAmount){
      if(userPin !== pin) return "Invalid PIN.";
      amount -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
    },
    changePin(currentPin, newPin){
      if (currentPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    }
  }
}

module.exports = { createAccount };
