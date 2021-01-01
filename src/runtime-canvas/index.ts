import { createRenderer } from '@vue/runtime-core';
import {
  Container,
  Graphics,
  Sprite,
  Texture,
} from 'pixi.js';

// 自定义渲染器
// Custom Render API
const renderer = createRenderer({
  // @ts-ignore
  createElement(type) { // type：虚拟节点的类型
    // 创建一个 矩形
    // pixijs
    // api -> 文档
    let element;
    switch (type) {
      case 'Container':
        element = new Container();
        break;
      case 'Sprite':
        element = new Sprite();
        break;
      default:
        break;
    }

    if (type === 'rect') {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 500, 500);
      element.endFill();
    } else if (type === 'circle') {
      element = new Graphics();
      element.beginFill(0xfff000, 0.7);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }

    console.log('element', element);
    return element;
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  patchProp(el, key, preVal, nextVal) {
    switch (key) {
      case 'texture':
        console.log('nextVal', nextVal);
        el.texture = Texture.from(nextVal);
        break;
      default:
        el[key] = nextVal;
    }
  },
});

export default (rootComponent: any) => renderer.createApp(rootComponent);
