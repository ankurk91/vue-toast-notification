import {mount} from '@vue/test-utils';
import ToastContainer from '../src/js/ToastContainer.vue';
import ToastDefault from '../src/js/ToastDefault.vue';
import { h } from 'vue';

describe('ToastContainer component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ToastContainer, {
      propsData: {
        duration: 5000
      },
      global: {
        stubs: {
          transition: false
        },
      },
      slots: {
        default: h(ToastDefault, {
          type: 'success',
          message: 'Hello world'
        })
      }
    });
  });

  test('renders when active', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el).toMatchSnapshot()
  });

  test('renders passed component', async () => {
    expect(wrapper.html()).toContain('v-toast__item')
  })

});
