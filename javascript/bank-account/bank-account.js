export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.accountOpen = false;
  }

  open() {
    if (!this.accountOpen) {
      this.accountOpen = true;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.accountOpen) {
      this.accountOpen = false;
      this.accountBalance = 0;
    } else {
      throw new ValueError();
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.accountOpen && amount <= this.accountBalance && amount > 0) {
      this.accountBalance -= amount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.accountOpen) {
      return this.accountBalance;
    } else {
      throw new ValueError();
    }
  }

  set balance(amount) {
    if (this.accountOpen) {
      this.accountBalance = amount;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
