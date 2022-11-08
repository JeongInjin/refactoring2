#세팅

- npm init
- npm install --global yarn
- nodemon 설치
  - yarn add nodemon
  - yarn run start ch1/main.js
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

