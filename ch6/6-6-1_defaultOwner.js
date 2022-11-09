let defaultOwnerData = { firstName: '마틴', lastName: '파울러' }

// export const defaultOwner = () => ({ ...defaultOwnerData })

// export const defaultOwner = () => {
//   return Object.assign({}, defaultOwnerData)
// }
export const defaultOwner = () => new Person(defaultOwnerData)

export const setDefaultOwner = arg => {
  defaultOwnerData = arg
}

class Person {
  constructor(data) {
    this._lastName = data.lastName
    this._firstName = data.firstName
  }

  get lastName(){return this._lastName}
  get firstName(){return this._firstName}
}