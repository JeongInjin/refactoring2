import {assert} from 'chai'
import { defaultOwner, setDefaultOwner} from "./6-6-1_defaultOwner.js";
/*
let defaultOwner = { firstName: '마틴', lastName: '파울러' }

defaultOwner = { firstName: '레베카', lastName: '파슨스' }

const getDefaultOwner = () => defaultOwner

const sertDefaultOwner = arg => {
  defaultOwner = arg
}
const spaceship = {
  owner: getDefaultOwner(),
}

console.log(spaceship)*/

// let defaultOwnerData = { firstName: '마틴', lastName: '파울러' }
// const defaultOwner = () => defaultOwnerData
const owner1 = defaultOwner()
assert.equal("파울러", owner1.lastName, "처음값 확인")

const owner2 = defaultOwner()
owner2.lastName = "파슨스" //person 객체로 받아오면 => Cannot set property lastName of #<Person> which has only a getter
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후")