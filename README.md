## ts-axios
使用 TypeScript 实现 axios

## 安装
```bash
$ npm install ts-axios-jarvis
```

## 使用方法
```js
import axios from 'ts-axios-jarvis';

axios.get('https://yesno.wtf/api')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
API与axios相似，更多API请参考 https://github.com/axios/axios
