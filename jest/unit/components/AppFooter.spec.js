import { shallowMount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  it('is a Vue instance', () => {
      const wrapper = shallowMount(AppFooter);
      expect(wrapper.vm).toBeTruthy();
  })

  it('is a Vue instance', () => {
    const wrapper = shallowMount(AppFooter);
    expect(wrapper.html()).toMatchSnapshot();
  })
})