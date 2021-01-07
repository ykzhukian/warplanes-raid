import { defineComponent, h } from '@vue/runtime-core';
import { PAGE } from '../config/pages';

import map from '../assets/images/map.svg';
import startBtn from '../assets/images/start-btn.svg';

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

  render(ctx: any) {
    return h('Container', [
      h('Sprite', { texture: map, key: '1' }),
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
