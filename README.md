#세팅

- npm init
- npm install --global yarn
- nodemon 설치
  - yarn add nodemon
  - yarn run start ch1/main.js
- test 
  - yarn run start --exec "mocha ch4/province.test.js"
  - package.json 에 추가 할경우 "test": "nodemon --exec 'mocha ${0}'"
    - yarn test ch7/7-1-2.test.js
```
//package.json 에서 nodemon 추가
  "scripts": {
    "start": "nodemon",
  }
```
  - 경로가 맞지 않아 에러 ->
```js
//ch1 추가
const invoices = readJSON('ch1/invoices.json')
const plays = readJSON('ch1/plays.json')
```

---
- 테스트 추가 모카 + 카이
  - yarn add mocha chai
```js
//import {describe, it} from 'mocha' //import 안해도되는듯
//assert 나 expect 입맛대로..
import {assert} from 'chai'
import {expect} from 'chai'
```

---
- yarn add lodash 
