import { defineComponent, h } from '@vue/runtime-core';
import map from '../assets/images/map.svg';
import startBtn from '../assets/images/start-btn.svg';

// .vue -> .js
// render -> template -> render
// 底层的写法
export default defineComponent({

  setup(props, { emit }) {
    const onClick = () => {
      emit('changePage', 'GamePage');
    };

    return {
      onClick,
    };
  },

  // template
  render(ctx: any) {
    // 虚拟 DOM
    // <react x={100} y={100}></react>
    const vnode = h('Container', [
      h('Sprite', { texture: map }),
      h('Sprite', {
        texture: startBtn,
        x: 120,
        y: 100,
        interactive: true,
        onClick: ctx.onClick,
      }),
    ]);

    console.log('vnode', vnode);
    return vnode;
  },
});
