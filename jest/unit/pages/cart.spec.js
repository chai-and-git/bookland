import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMeta from 'vue-meta';
import Vuex from 'vuex';
import cart from '@/pages/cart.vue';

const localVue = createLocalVue();
localVue.use(VueMeta);
localVue.use(Vuex);

const mockStore = new Vuex.Store({
  state: {
    'bookList': [
      {
        "name": "The Alchemist",
        "quantity": 1,
        "price": 12.00
      },
      {
        "name": "The Monk Who Sold His Ferrari",
        "quantity": 1,
        "price": 12.00
      }
    ]
  }
})

const cartWrapper = shallowMount(cart, {
  localVue,
  stubs: {
    NuxtLink: true
  },
  store: mockStore
});

describe('cart', () => {
  it('mounts properly', () => {
    const wrapper = cartWrapper;
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = cartWrapper;
    expect(wrapper.html()).toMatchSnapshot()
  })
});

describe('cart', () => {
  it('mounts properly', () => {
    const wrapper = cartWrapper;
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = cartWrapper;
    expect(wrapper.html()).toMatchSnapshot()
  })
});
