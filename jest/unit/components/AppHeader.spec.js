import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

const mobileHeader = () => {
  return shallowMount(AppHeader, {
    mocks: {
      $device: {
        isMobile: true
      }
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

const desktopHeader = () => {
  return shallowMount(AppHeader, {
    mocks: {
      $device: {
        isMobile: false
      }
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('Mobile AppHeader.vue', () => {
  it('is a Vue instance', () => {
      const wrapper = mobileHeader();
      expect(wrapper.vm).toBeTruthy();
  })

  it('is a Vue instance', () => {
    const wrapper = mobileHeader();
    expect(wrapper.html()).toMatchSnapshot();
  })
})

describe('Desktop AppHeader.vue', () => {
  it('is a Vue instance', () => {
      const wrapper = desktopHeader();
      expect(wrapper.vm).toBeTruthy();
  })

  it('is a Vue instance', () => {
    const wrapper = desktopHeader();
    expect(wrapper.html()).toMatchSnapshot();
  })
})