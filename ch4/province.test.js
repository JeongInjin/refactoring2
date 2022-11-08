import Province from './province.js'
// import {beforeEach, describe, it} from 'mocha'
import {assert} from 'chai'
import {expect} from 'chai'

const sampleProvinceData = () => ({
  name: 'Asia',
  producers: [
    { name: 'Byzzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 10 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
})

describe('province', () => {
  // it('shortfall_assert', () => {
  //   const asia = new Province(sampleProvinceData())
  //   assert.equal(asia.shortfall, 5)
  // });

  // const asia = new Province(sampleProvinceData()) // 이렇게 하면 안 된다

  let asia
  beforeEach(() => {
    asia = new Province(sampleProvinceData())
  });

  it('shortfall_expect', () => {
    expect(asia.shortfall).equal(5)
  });

  it('profit', () => {
    expect(asia.profit).equal(230)
  });

  it('change production', () => {
    asia.producers[0].production = 20
    expect(asia.shortfall).equal(-6)
    expect(asia.profit).equal(292)
  });

  it('zero demand', () => {
    asia.demand = 0
    expect(asia.shortfall).equal(-25)
    expect(asia.profit).equal(0)
  });

  it('empty demand', () => {
    asia.demand = ""
    expect(asia.shortfall).NaN
    expect(asia.profit).NaN
  });

});

describe('no producers', () => { //생산자가 없다
  let noProducers
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    }
    noProducers = new Province(data)
  });

  it('shortfall', () => {
    expect(noProducers.shortfall).equal(30)
  });
  it('profit', () => {
    expect(noProducers.profit).equal(0)
  });
});

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    }
    const prov = new Province(data)
    expect(prov.shortfall).equal(0)
  });
});
