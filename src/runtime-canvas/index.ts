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
      case 'texture':
        el.texture = Texture.from(nextVal);
        break;
      case 'onClick':
        el.on('pointertap', nextVal);
        break;
      default:
        el[key] = nextVal;
    }
  },
});

export default (rootComponent: any) => renderer.createApp(rootComponent);
