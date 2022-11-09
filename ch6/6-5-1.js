//page: 184
import {assert} from "chai";
class Book {
  _reservations = []

  get reservation() {
    return this._reservations
  }

  addReservation(customer, isPriority) {
    // this.zz_addReservation(customer, false)
    assert(isPriority === true || isPriority === false)
    this._reservations.push(customer)
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false)
    this._reservations.push(customer)
  }
}

const bookcafe = new Book()
bookcafe.addReservation({ name: 'roy' }, false)
bookcafe.addReservation({ name: 'jay' }, true)
console.log(bookcafe.reservation)
