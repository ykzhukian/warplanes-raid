import { createRenderer } from '@vue/runtime-core';
import {
  Container,
  Sprite,
  Texture,
} from 'pixi.js';

// 自定义渲染器
// Custom Render API
const renderer = createRenderer({
  // @ts-ignore
  createElement(type) { // type：虚拟节点的类型
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
    return element;
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  patchProp(el, key, preVal, nextVal) {
    switch (key) {
      case 'on':
        Object.keys(nextVal).forEach((eventName) => {
          const callback = nextVal[eventName];
          el.on(eventName, callback);
        });
        break;
      case 'texture':
        el.texture = Texture.from(nextVal);
        break;
      default:
        el[key] = nextVal;
    }
  },
});

export default (rootComponent: any) => renderer.createApp(rootComponent);
