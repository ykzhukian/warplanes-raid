import { defineComponent, h } from '@vue/runtime-core';
import map from '../assets/images/map.svg';

export default defineComponent({

  render() {
    return h('Container', [
      h('Sprite', { texture: map }),
    ]);
  },
});
