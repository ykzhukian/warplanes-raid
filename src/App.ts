import { Texture } from 'pixi.js';
import { defineComponent, h } from '@vue/runtime-core';
import monster from './assets/images/monster.png';

// .vue -> .js
// render -> template -> render
// 底层的写法

export default defineComponent({

  // template
  render() {
    // 虚拟 DOM
    // <react x={100} y={100}></react>
    const vnode = h('Container', [
      h('Sprite', { texture: monster, x: 120, y: 100 }),
    ]);

    console.log('vnode', vnode);
    return vnode;
  },
});
