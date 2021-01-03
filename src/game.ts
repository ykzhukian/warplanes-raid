import { Application } from 'pixi.js';

// 根组件 App
// 根容器 canvas
// canvas -> canvas api 难用 太底层 -> pixijs 引擎库 (egret)

// 初始化一个canvas
const game = new Application({
  width: 600,
  height: 800,
  backgroundColor: 0xffffff,
});

document.body.append(game.view);

// game.stage 是一个容器
export default () => game.stage;
