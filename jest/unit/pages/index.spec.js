import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMeta from 'vue-meta';
import index from '@/pages/index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });

const indexWrapper = shallowMount(index, {
  localVue,
  stubs: {
    NuxtLink: true
  },
});

describe('index.vue', () => {
  it('is a Vue instance', () => {
      const wrapper = indexWrapper;
      expect(wrapper.vm).toBeTruthy();
  })

  it('is a Vue instance', () => {
    const wrapper = indexWrapper;
    expect(wrapper.html()).toMatchSnapshot();
  })
})