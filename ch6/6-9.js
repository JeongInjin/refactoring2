class Reading {
  constructor(data) {
    this._customer = data.customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }

  get customer() {
    return this._customer
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - (this.year - 2000) * 0.1)
  }

}

const taxableChargeFn = (aReading, taxThreshold, rawReading) => Math.max(0, aReading.baseCharge - taxThreshold(rawReading.year));

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
})

const baseRate = (month, year) => year - 2000 + month

const client1 = () => {
  const rawReading = acquireReading()
  const aReading = new Reading(rawReading)
  return aReading.baseCharge
}

const client2 = () => {
  const rawReading = acquireReading()
  const aReading = new Reading(rawReading)
  return aReading.taxableCharge
}

const client3 = () => {
  const rawReading = acquireReading()
  const aReading = new Reading(rawReading)
  return aReading.baseCharge
}

;[client1, client2, client3].forEach(c => console.log(c()))
