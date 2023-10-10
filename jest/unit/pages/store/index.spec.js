import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMeta from 'vue-meta';
import index from '@/pages/store/index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{
    "books": [
      {
        "book_id": "1",
        "name": "The Alchemist",
        "author": "Paulo Coelho",
        "description": "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself",
        "price": 210,
        "imagePath_small": "require('@/assets/book-alchemist.jpg')",
        "quantity": 1
      }
    ]
  }]})
}));

const indexWrapper = shallowMount(index, { localVue });

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

describe("index.vue", () => {
  it("mocking the axios call to get books from axios", () => {
    var wrapper = indexWrapper;
    expect(wrapper.vm.books.length).toBe(1);
  });
});