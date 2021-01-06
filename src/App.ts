import {
  h,
  ref,
  computed,
  defineComponent,
} from '@vue/runtime-core';
import { getPageComponent } from './views';
import { PAGE } from './config/pages';

export default defineComponent({
  setup() {
    const currentPageName = ref(PAGE.start);
    const currentPage = computed(() => getPageComponent(currentPageName.value));

    const handleNextPage = (nextPage: string) => {
      currentPageName.value = nextPage;
    };

    return {
      currentPage,
      handleNextPage,
    };
  },

  render(ctx: any) {
    return h('Container', [
      h(ctx.currentPage, {
        onNextPage: ctx.handleNextPage,
      }),
    ]);
  },
});
