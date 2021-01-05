import { defineComponent, h } from '@vue/runtime-core';
import map from '../assets/images/map.svg';

export default defineComponent({

  setup(props, { emit }) {
    const onClick = () => {
      emit('changePage', 'GamePage');
    };

    return {
      onClick,
    };
  },

  render() {
    const vnode = h('Container', [
      h('Sprite', { texture: map }),
    ]);
    return vnode;
  },
});
