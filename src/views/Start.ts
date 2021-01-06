import { defineComponent, h } from '@vue/runtime-core';
import map from '../assets/images/map.svg';
import startBtn from '../assets/images/start-btn.svg';
import { PAGE } from '../config/pages';

// .vue -> .js
// render -> template -> render
// 底层的写法
export default defineComponent({
  props: ['onNextPage'],
  setup(props) {
    const handleGoToGame = () => {
      props.onNextPage(PAGE.game);
    };

    return {
      handleGoToGame,
    };
  },

  // template
  render(ctx: any) {
    return h('Container', [
      h('Sprite', { texture: map }),
      h('Sprite', {
        x: 120,
        y: 100,
        texture: startBtn,
        interactive: true,
        key: 'start-btn',
        buttonMode: true,
        on: {
          pointertap: ctx.handleGoToGame,
        },
      }),
    ]);
  },
});
