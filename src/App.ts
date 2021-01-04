import {
  defineComponent, h, ref, computed,
} from '@vue/runtime-core';
import StartPage from './views/Start';
import GamePage from './views/Game';

export default defineComponent({
  setup() {
    const currentPageName = ref('StartPage');
    const currentPage = computed(() => {
      if (currentPageName.value === 'StartPage') {
        return StartPage;
      }
      return GamePage;
    });

    return {
      currentPage,
      currentPageName,
    };
  },

  // template
  render(ctx: any) {
    // 虚拟 DOM
    const vnode = h('Container', [
      h(ctx.currentPage, {
        onChangePage(page: string) {
          ctx.currentPageName = page;
        },
      }),
    ]);

    console.log('vnode', vnode);
    return vnode;
  },
});
