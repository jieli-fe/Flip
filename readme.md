## 1. 导入 index.js 文件

```js
import FlipAnimate from "./index.js";
```

## 2. 初始化卡片

```js
//把需要添加动画的卡片放插入到容器中
const animate = new FlipAnimate(document.querySelectorAll(".cardBox"));
```

## 3. 当卡片添加或者删除后执行

```js
animate.play();
```

## 预览地址:

https://jieli-fe.github.io/Flip/
